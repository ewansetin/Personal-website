import './Navigation.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export function Navigation(){
    return(
        <>
        <Header />
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}