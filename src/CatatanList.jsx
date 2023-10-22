import React from 'react';

function CatatanList({ catatan, hapusCatatan, toggleArsip }) {
  return (
    <div>
      <h2>Daftar Catatan</h2>
      <ul>
        {catatan.map((cat) => (
          <li key={cat.id}>
            <strong>{cat.title}</strong>
            <p>{cat.body}</p>
            <button onClick={() => hapusCatatan(cat.id)}>Hapus</button>
            <button onClick={() => toggleArsip(cat.id)}>
              {cat.archived ? 'Kembalikan' : 'Arsipkan'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatatanList;
