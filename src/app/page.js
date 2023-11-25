import React from "react";
import Hero from "./../components/hero/page";
import Recommendation1 from './../components/recommendation1/page';
import Subscribe from './../components/subscribe/page';
import "next";

const App = () => {
  return (
    <div className="w-full mx-auto min-h-[100vh]">
      <Hero />
      <Recommendation1/>
      <Subscribe/>
    </div>
  );
};

export default App;
