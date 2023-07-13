import logo from '../../assets/logo.png';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './NavBar.css'

export const NavBar = () => {
    return (
        <div className='NavBar'>
            <Menu className='items-menu' style={{ backgroundColor:"#2F303A"}} items={[{
                label: (
                    <Link to="/" className="home-link">
                        <div style={{ display: 'flex' }}>
                            <img src={logo} height="40px" alt="logo" />
                            <span style={{ marginLeft: '12px' }}>Soundwave</span>
                        </div>
                    </Link>
                ),
                key: 'soundwave',
            }]

            } />
            <Menu className='items-menu link' mode='horizontal' items={[{
                label: (
                    <Link to="/discover" rel="Discover Hero Page">
                        Discover
                    </Link>
                ),
                key: 'discover',
            },
            {
                label: (
                    <Link to="/join " rel="Registering Page">
                        Join
                    </Link>
                ),
                key: 'join',
            },]}
            />
        </div>
    )
};