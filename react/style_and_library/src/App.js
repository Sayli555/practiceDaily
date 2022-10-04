import logo from './logo.svg';

import styled from "styled-components"

const Appcss=styled.div`
text-align: center;
`
const Appheader=styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const Appimg=styled.img`
 height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
  
    animation: App-logo-spin infinite 20s linear;
 
}
`;
const appP=styled.p`

`;
const appA=styled.a`
 color: #61dafb;
`;

const Flexbox=styled.div`
flex-direction:((props)=>props.flexdirection)
`

function App() {
  const flexprop={
    "flexDirection":"row"
  }
  return (
    <Appcss>
      <Appheader>
        <Appimg src={logo}  alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <appA
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </appA>
        <Flexbox {...flexprop} >
          <div>A</div>
          <div>b</div>
        </Flexbox>
      </Appheader>
    </Appcss>
  );
}

export default App;
