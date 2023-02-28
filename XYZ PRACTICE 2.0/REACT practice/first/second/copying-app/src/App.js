import React from "react";
import Navbar  from "./Navbar";
import Herosection1 from "./Herosection1";
import Herosection2 from "./Herosection2";
import Card from "./Card";
import Footer from "./Footer";

const App = () =>{
return(
<>
<Navbar />
<Herosection1/>
<Herosection2/>
<Card title="Game is On" Btn="Dont click"/>
<Footer />
</>
)
}

export default App;