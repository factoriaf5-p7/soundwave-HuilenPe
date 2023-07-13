import { Button } from "antd";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import "./Home.css"
import girl from "../../assets/girl.png";
import { Content, Header } from "antd/es/layout/layout";
export function Home() {
    return (
        <>
            <Header>
                <NavBar />
            </Header>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-5"></div>
            <Content>
                <div className="hero">
                    <div className="girl-container">
                        <div className="girl-wrapper">
                            <img className="girl home-element" src={girl} />
                             <div className="text">
                                <h1 className="Title home-element" > Feel The Music </h1>
                                <h2 className="Subtitle home-element">Stream over 20 thousand songs with one click</h2>
                                <Button type="primary" size="large" href="./pages/Join/Join.tsx" style={{ textDecoration: "none" }} className="buttonAnt">
                                    <Link to="/join" target="_blank">
                                        Join Now
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </>
    )
}

