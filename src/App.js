import React from 'react';
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./pages/AppRouter";

function App() {
    return (
        <div>
            <div className="navbar">
                <Navbar/>
            </div>
            <div style={{display: 'flex', justifyContent: "center"}}>
                <AppRouter/>
            </div>
        </div>
    )
}

export default App;