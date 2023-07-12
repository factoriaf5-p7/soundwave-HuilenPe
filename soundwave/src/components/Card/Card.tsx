import { Card, Col, Row } from 'antd';
import React from 'react';

const App: React.FC = () => (
    <Row gutter={16}>
        <Col span={4}>
            <Card title="Card title" bordered={false}>
                Card content
            </Card>
        </Col>
        <Col span={4}>
            <Card title="Card title" bordered={false}>
                Card content
            </Card>
        </Col>
        <Col span={4}>
            <Card title="Card title" bordered={false}>
                Card content
            </Card>
        </Col>
    </Row>
);

export default App;