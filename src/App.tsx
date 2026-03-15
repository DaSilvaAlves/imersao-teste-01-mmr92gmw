import React, { useState, useEffect } from 'react';
import Feature1 from './features/feature-1';
import { Estado } from './types';

const App = () => {
  const [estado, setEstado] useState<Estado>({
    encomendas: [],
    carregando: false,
    erro: null,
  });

  useEffect(() => {
    const carregarEncomendas = async () => {
      try {
        const encomendas = JSON.parse(localStorage.getItem('comendas') || '[]');
        setEstado({ ...estado, encomendas, carregando: false });
      } catch (erro) {
        setEstado({ ...estado, erro: erro.message, carregando: false });
      }
    };
    carregarEncomendas();
  }, []);

  const adicionarEncomenda = (encomenda: any) => {
    setEstado({ ...estado, encomendas: [...estado.encomendas, encomenda] });
    localStorage.setItem('encomendas', JSON.stringify([...estado.encomendas encomenda]));
  };

  return (
    <div className="app">
      <h1>Gestor de Encomendas</h1>
      <Feature1 onAdicionarEncomenda={adicionarEnenda} />
      {estado.carregando ? (
 <p>Carregando...</p>
      ) : estado.erro ? (
        <p>Erro: {estado.erro}</p>
      ) : (
        <ul>
          {.encomendas.map((encomenda) (
            <li key={encomenda.id}>
              {encomenda.nome} - {encomenda.descricao} - {encomenda.preco}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;