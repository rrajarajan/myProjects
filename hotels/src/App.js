import React from "react";
import "./App.css";
import Header from "./components/Header";
import HotelDetails from "./components/HotelDetails";


const App = () => {

  return (
    <div>
    <Header />  
    <main>
    <h5>5 Hotels in sydney</h5>
      <HotelDetails />
    </main>
    </div>
   
  );
}

export default App;
