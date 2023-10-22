import React from 'react';

function TambahCatatan({ tambahCatatan, inputJudul, setInputJudul, inputIsi, setInputIsi }) {
  return (
    <div>
      <h2>Tambah Catatan Baru</h2>
      <form>
        <div>
          <label>Judul:</label>
          <input
            type="text"
            value={inputJudul}
            onChange={(e) => setInputJudul(e.target.value)}
          />
        </div>
        <div>
          <label>Isi:</label>
          <textarea
            value={inputIsi}
            onChange={(e) => setInputIsi(e.target.value)} 
          ></textarea>
        </div>
        <button type="button" onClick={tambahCatatan}>
          Tambah Catatan
        </button>
      </form>
    </div>
  );
}

export default TambahCatatan;
