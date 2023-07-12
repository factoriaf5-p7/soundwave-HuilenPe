import CardClick from "../../components/Card/Card";
import { NavBar } from "../../components/NavBar/NavBar";
import covers from "../../assets/covers.jpg";
export function Discover() {
    return (
        <>
            <NavBar />
            <h1>Discover new music</h1>
            <CardClick />
            <h2>By joining you can benefit by listening to the latest albums released</h2>
            <img src={covers} />
          
        </>
    )
}