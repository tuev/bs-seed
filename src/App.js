import React from "react";
import Navigation from "./components/Navigation";
import Carousel from "./components/Carousel";
import BlogItem from "./components/BlogItem";
import CardList from "./components/CardlList";
import BreakLine from "./components/BreakLine";
import FormItem from "./components/FormItem";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Carousel />
      </header>
      <div className="container mt-5">
        <BlogItem />
        <BreakLine />
        <CardList />
        <BreakLine />
        <FormItem />
      </div>
      <Footer />
    </div>
  );
}

export default App;
