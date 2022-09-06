import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider ,extendTheme} from '@chakra-ui/react'

const colors={
  primary:{
    c1:"#7E6551",
    c2:"#938581",
    c3:"#466362"
  },
  primary1:{
    c1:"green",
    c2:"#938581",
    c3:"#466362"
  }
}




const theme=extendTheme({colors})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
       <App />
  </ChakraProvider>
 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
