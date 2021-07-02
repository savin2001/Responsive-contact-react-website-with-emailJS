import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Vision from "./pages/Vision";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="app">
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/story" exact component={Story} />
                        <Route path="/vision" exact component={Vision} />
                        <Route path="/news" exact component={News} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/donate" exact component={Donate} />
                    </Switch>
                </Router>
            </div>
            <Footer/>
        </>
    );
}

export default App;
