import React from 'react';
import PropTypes from 'prop-types';
import Table from './table';
import styles from '../styles/app';

function App(props) {
  return (
    <div className={styles.layout}>
      <Table />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
