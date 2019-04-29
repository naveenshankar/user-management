import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/app';

function App(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.topLayout}>
        <div className={styles.main}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
