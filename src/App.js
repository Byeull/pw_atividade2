import React, { useState, useEffect } from 'react';
import './styles.css';
import ActForm from './components/ActForm';
import ActList from './components/ActList';

function App() {
  const [acts, setActs] = useState([]);

  useEffect(() => {
    const storedActs = JSON.parse(localStorage.getItem('acts'));
    if (storedActs) {
      setActs(storedActs);
    }
  }, []);

  const handleAddAct = (newAct) => {
    const updatedActs = [...acts, newAct];
    setActs(updatedActs);
    localStorage.setItem('acts', JSON.stringify(updatedActs));
  };

  return (
    <div className="App">
      <h1>🟨 Comunidade Gentil do Brasil 🟩</h1>
      <p>Registre aqui seu ato de gentileza!</p>
      <ActForm onAddAct={handleAddAct} />
      <ActList acts={acts} />
    </div>
  );
}

export default App;