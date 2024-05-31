import React, { useState } from 'react';

const ActForm = ({ onAddAct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim() || !location.trim() || !date.trim()) return;
    onAddAct({ name, description, location, date });
    setName('');
    setDescription('');
    setLocation('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Descreva o ato de gentileza..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Local do ato de gentileza..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="form-input"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="form-input"
      />
      <button type="submit" className="form-button">Registrar Ato</button>
    </form>
  );
};

export default ActForm;