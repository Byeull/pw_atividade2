import React from 'react';

const ActList = ({ acts }) => {
  const totalActs = acts.length;

  return (
    <div className="act-list-container">
      <h2>Atos de Gentileza Registrados</h2>
      <p>Total de atos registrados: <strong>{totalActs}</strong></p>
      <ul>
        {acts.map((act, index) => (
          <li key={index} className="act-list-item">
            <div><strong>Nome:</strong> {act.name}</div>
            <div><strong>Descrição:</strong> {act.description}</div>
            <div><strong>Local:</strong> {act.location}</div>
            <div><strong>Data:</strong> {act.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActList;