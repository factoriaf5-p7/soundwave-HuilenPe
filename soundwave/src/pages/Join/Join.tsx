import { NavBar } from "../../components/NavBar/NavBar";
import { Formulario } from "../../components/Form/Form";
import { Footer } from "../../components/Footer/Footer";
import "./join.css"
export function Join() {
    return (
        <>
            <NavBar />
            <h1 className="titleJoin">Join the <span className="color">fun.</span></h1>
            <Formulario />
            <Footer />
        </>
    ) 
}

