import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Filter from './components/Filter';
import Restaurents from './components/Restaurents';
import userinfo from "./data/userinfo.json";
import offers from "./data/offers.json";
import restaurent from "./data/restaurent.json"
import { useState } from 'react';


const filter=[
"cost high to low",
"cost low to high",
"rating",
"delivery time",
"relvnce"

]

function App() {
  const [filterby,setfilterby]=useState("");
  const [data,setdata]=useState(restaurent.restaurents);

  const updatedfilter=(value)=>{
    switch(value){
      case "cost high to low" : {
        setfilterby(0)
        console.log("data",value);
        data.sort((a,b)=> (b.costfortwo-a.costfortwo));
        setdata([...data]); 

        break;
      }
      case "cost low to high" : {
        setfilterby(1)
        console.log("data",data);
        data.sort((a,b)=> (a.costfortwo-b.costfortwo));
        setdata([...data]);
        break;
      }

      default: {
        setdata(restaurent.restaurents);
        break;
      }
    }
  }
  return (
    <div className="App">
        <Navbar {...userinfo} />
        <Offers offers={offers} />


        <section className="near-you">
        <Filter updatedfilter={updatedfilter} filterby={filterby} filter={filter} />
        <Restaurents res={data} />
        </section>
       
    </div>
  );
}

export default App;
