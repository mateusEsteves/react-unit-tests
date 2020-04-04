import React from 'react';
import PropTypes from 'prop-types';

export default function ComponenteSimplesComProp({ nome }) {
  return <span>Olá {nome}</span>;
}

ComponenteSimplesComProp.propTypes = {
  nome: PropTypes.string.isRequired
}