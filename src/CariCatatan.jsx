import React from 'react';

function CariCatatan({ kataKunci, ubahKataKunci }) {
  return (
    <div>
      <h2>Cari Catatan</h2>
      <input
        type="text"
        placeholder="Cari catatan berdasarkan judul..."
        value={kataKunci}
        onChange={(e) => ubahKataKunci(e.target.value)}
      />
    </div>
  );
}

export default CariCatatan;
