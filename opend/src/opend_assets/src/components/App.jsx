import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// import Item from "../components/Item"
import Minter from "../components/Minter";

function App() {

  // const NFTID = "rrkah-fqaaa-aaaaa-aaaaq-cai";
  return (
    <div className="App">
      <Header />
      {/* <Minter /> */}
      {/* <Item id={nftId} /> */}
      
      <Footer />
    </div>
  );
}

export default App;
