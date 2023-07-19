import { Button } from "antd";
import { Link } from "react-router-dom";

import "./Hero.css";

interface HeroProps {
    title: string;
    subtitle: string;
    link?: string;
    linkText?: string;
    image?: string;
}

export const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    link,
    linkText,
    image,
}) => {
    return (
        <div className="hero">
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-5"></div>
            <div className="girl-container">
                <div className="girl-wrapper">
                    <img className="girl home-element" src={image} />
                    <div className="text">
                        <h1 className="Title home-element"> {title} </h1>
                        <h2 className="Subtitle home-element"> {subtitle}</h2>
                        <Button
                            type="primary"
                            size="large"
                            href="./pages/Join/Join.tsx"
                            style={{ textDecoration: "none" }}
                            className="buttonAnt"
                        >
                            <Link to={link as string} target="_blank">
                                {linkText}
                                Join Now
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
