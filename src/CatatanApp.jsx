import React, { Component } from 'react';
import CatatanList from './CatatanList';
import TambahCatatan from './TambahCatatan';
import CariCatatan from './CariCatatan';
import ArsipCatatan from './ArsipCatatan';
import { getInitialData } from './data'; // Impor fungsi getInitialData

class CatatanApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catatan: getInitialData(), // Inisialisasi catatan dengan data dari getInitialData
      inputJudul: '',
      inputIsi: '',
      kataKunci: '',
    };
  }


  tambahCatatan = () => {
    const { catatan, inputJudul, inputIsi } = this.state;
    const id = +new Date();

    const newCatatan = {
      id,
      title: inputJudul,
      body: inputIsi,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    this.setState({
      catatan: [...catatan, newCatatan],
      inputJudul: '',
      inputIsi: '',
    });
  };

  hapusCatatan = (id) => {
    const { catatan } = this.state;
    const newCatatan = catatan.filter((cat) => cat.id !== id);
    this.setState({ catatan: newCatatan });
  };

  ubahKataKunci = (kataKunci) => {
    this.setState({ kataKunci });
  };

  toggleArsip = (id) => {
    const { catatan } = this.state;
    const updatedCatatan = catatan.map((cat) => {
      if (cat.id === id) {
        return { ...cat, archived: !cat.archived };
      }
      return cat;
    });
    this.setState({ catatan: updatedCatatan });
  };

  render() {
    const { catatan, inputJudul, inputIsi, kataKunci } = this.state;

    const catatanTampil = kataKunci
      ? catatan.filter((cat) =>
          cat.title.toLowerCase().includes(kataKunci.toLowerCase())
        )
      : catatan;

    return (
      <div>
        <h1>Aplikasi Catatan Pribadi</h1>
        <TambahCatatan
          inputJudul={inputJudul}
          setInputJudul={(value) => this.setState({ inputJudul: value })}
          inputIsi={inputIsi}
          setInputIsi={(value) => this.setState({ inputIsi: value })}
          tambahCatatan={this.tambahCatatan}
        />

        <CariCatatan kataKunci={kataKunci} ubahKataKunci={this.ubahKataKunci} />
        {catatanTampil.length === 0 ? (
          <p className="no-notes">Tidak ada catatan</p>
        ) : (
          <CatatanList
            catatan={catatanTampil}
            hapusCatatan={this.hapusCatatan}
            toggleArsip={this.toggleArsip}
          />
        )}
        <ArsipCatatan
          catatanDiarsip={catatan.filter((cat) => cat.archived)}
          toggleArsip={this.toggleArsip}
        />
      </div>
    );
  }
}

export default CatatanApp;
