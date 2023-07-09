import { Header } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import React from 'react';
import './Header.css';

const AppHeader: React.FC = () => {
    const linkStyles = {
        color: '#fff',
        transition: 'color 0.3s',
    };

    const linkActiveStyles = {
        color: '#adadad',
    };

    const linkHoverStyles = {
        color: '#adadad',
    };
    return (
        <>
            <Header className="header">
                <div className="logo">
                    <img src="./src/assets/logo.png" alt="Logo" />
                    <span>Soundwave</span>  
                </div>
                <div className="buttons">
                    <Link to="/ruta-botón-1" className="button-link" style={linkStyles}
                        activeStyle={linkActiveStyles}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = linkHoverStyles.color;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = linkStyles.color;
                        }}>
                        Discover
                    </Link>
                    <Link to="/ruta-botón-2" className="button-link" style={linkStyles}
                        activeStyle={linkActiveStyles}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = linkHoverStyles.color;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = linkStyles.color;
                        }}>
                        Join
                    </Link>
                </div>
            </Header>
        </>
    );
};

export default AppHeader;

