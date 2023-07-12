import { NavBar } from "../../components/NavBar/NavBar";
import covers from "../../assets/covers.jpg";
import { Footer } from "../../components/Footer/Footer";
import "./Discover.css"
import { Cards } from "../../components/Cards/Cards";

export function Discover() {
    return (
        <>
            <NavBar />
            <div className="dicoverFull">
                <h1 className="newMusic" >Discover new music</h1>
                <div className="cards">
                    <Cards />
                </div>
                <h2 className="byJoining">By joining you can benefit by    listening to the latest albums released.</h2>
                <img className="plantilla" src={covers} />
            </div> 
            <Footer />
        </>
    )
}