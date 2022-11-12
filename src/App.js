import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Index from "./pages/Index"
import ListProduct from "./pages/ListProduct"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />

        <div class="py-4 px-10">
          <Routes>
            <Route exact path='/' element={<Index />} />
            <Route path='/product/:uuid' element={<ListProduct />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
