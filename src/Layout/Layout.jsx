import React from "react";
import Characters from "../components/Characters";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Planets from "../components/Planets";
import Vehicles from "../components/Vehicles";
import NavBar from "./NavBar";
import LearnMore from "../components/Description";
import MainDropDown from "../components/Accordion";
import injectContext from "../Store/AppContext";





function Layout() {
    return (
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/home" element={<MainDropDown/>} /> 
                    <Route path="/Characters" element={<Characters/>} />
                    <Route path="/planets" element={<Planets/>} />
                    <Route path="/Vehicles" element={<Vehicles/>} />
                    <Route path="/learnmore/*" element={<LearnMore/>} />                  
                </Routes>  
        
        </BrowserRouter>
    );
}


export default injectContext(Layout);