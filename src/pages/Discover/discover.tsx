import { NavBar } from "../../components/NavBar/NavBar";
import covers from "../../assets/covers.jpg";
import { Footer } from "../../components/Footer/Footer";
import "./Discover.css"
import { Cards } from "../../components/Cards/Cards";
import { Content, Header } from "antd/es/layout/layout";

export function Discover() {
    return (
        <>
            <Header>
                <NavBar />
            </Header>
            <Content>
                <div className="dicoverFull">
                <h1 className="newMusic" >Discover new music</h1>
                <div className="cards">
                <Cards />
                        <h2 className="byJoining">By joining you can benefit by listening to the latest albums released.</h2>
                    </div>
                </div>    
                <img className="plantilla" src={covers} />
            </Content >   
            <Footer />
        </>
    )
}