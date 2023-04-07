import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#121b55] to-[#2a3373]">
        <Header />
        <Main />
      </div>
      <CardContainer />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
