import React from 'react';

function ArsipCatatan({ catatanDiarsip, toggleArsip }) {
  return (
    <div>
      <h2>Catatan Diarsip</h2>
      <ul>
        {catatanDiarsip.map((catatan) => (
          <li key={catatan.id}>
            {catatan.title}{' '}
            <button onClick={() => toggleArsip(catatan.id)}>
              {catatan.archived ? 'Kembalikan' : 'Arsipkan'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArsipCatatan;
