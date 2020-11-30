import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles';
import { firebase } from './libs/firebase.prod';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{firebase}}>
      <GlobalStyles/>
      <App />
    </FirebaseContext.Provider>
  </>, document.getElementById('root')
);