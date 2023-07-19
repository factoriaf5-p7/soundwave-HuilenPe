import { NavBar } from "../../components/NavBar/NavBar";
import { Hero } from "../../components/Hero/Hero";
import "./Home.css";
import girl from "../../assets/girl.png";
import { Content, Header } from "antd/es/layout/layout";
export function Home() {
    return (
        <>
            <Header>
                <NavBar />
            </Header>

            <Content>
                <Hero
                    image={girl}
                    title="Feel The Music"
                    subtitle="Stream over 20 thousand songs with one click"
                    linkText="Join Now"
                    link="/join"
                ></Hero>
            </Content>
        </>
    );
}
