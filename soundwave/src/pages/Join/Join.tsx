import { NavBar } from "../../components/NavBar/NavBar";
import { Formulario } from "../../components/Form/Form";
import { Footer } from "../../components/Footer/Footer";
import "./join.css"
import { Content, Header } from "antd/es/layout/layout";
export function Join() {
    return (
        <>
            <Header>
                <NavBar />
            </Header>
            <Content>
                <h1 className="titleJoin">Join the <span className="color">fun.</span></h1>
                <Formulario />
            </Content>    
            <Footer />
        </>
    ) 
}

