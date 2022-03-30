import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import getFirestoreApp from './Firebase/config';

getFirestoreApp()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// // asdsad
//    const db = getFirestoreApp()
//    const queryDb = docs(db, 'items', ACA EL ID DEL ITEM)
//    getDoc(queryDb).then(resp => setProducto({  id: resp.id, ...resp.data()  }))

// // asdasdas

//   PARA VARIOS

//const db = getFirestore()
// const queryCollection = collection(db, 'items')
// getDocs(queryCollection).then(resp => setProductos(resp.docs.map(item =>   ( { id: item.id, ...item.data() }) )))
// .catch(err => )



