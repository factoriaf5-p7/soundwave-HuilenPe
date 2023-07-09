import { Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './body.css';

const AppContent: React.FC = () => {
    return (
        <Content className="body">
            <img src="./src/assets/landing-page-girl.png" alt="Imagen" />
            <p>Feel The Music</p>
            <p>Stream over 20 thousand songs with one click</p>
            <Button type="primary" size="large" href="./pages/Join/Join.tsx" target="_blank" className="buttonAnt">Join Now</Button>
        </Content>
    );
};


export default AppContent;