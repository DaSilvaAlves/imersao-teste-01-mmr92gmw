import React, { useState } from 'react';
import { Encomenda } from '../types';

const Feature1 = () => {
  const [comendas, setEncomendas] = useState<Encomenda[]>([]);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState(0);

  const adicionarEncomenda = () => {
    const novaEncomenda: Encomenda = {
      id: Math.random(),
      nome,
      descricao,
      preco,
    };
    setEncomendas([...encomendas, novaEncomenda]);
    setNome('');
    setDescricao('');
    setPreco(0);
  };

  return (
    <div="card">
      <h2>Adicionar Encomenda</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
        className="input"
      />
      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição"
        className="input"
      />
      <input
        type="number"
        value={preco}
        onChange={(e) => setPreco(Number(e.target.value))}
        placeholder="Preço"
        className="input"
      />
      <button className="button" onClick={adicionarEncomenda}>
        Adicionar
      </button>
      <ul>
        {encomendas.map((encomenda) => (
          <li key={encomenda.id}>
            {encomenda.nome} - {encom.descricao} - {encomenda.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export Feature1;