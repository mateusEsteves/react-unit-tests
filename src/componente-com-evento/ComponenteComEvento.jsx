import React, { useState } from 'react';

export default function ComponenteComEvento() {
  const [ativo, setAtivo] = useState(false);

  return (
    <>
      <button onClick={() => setAtivo(!ativo)}>Toggle</button>
      {ativo ?
        <span>Ativo</span> :
        <span>Inativo</span>
      }
    </>
  )
}