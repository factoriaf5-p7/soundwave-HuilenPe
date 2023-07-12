import { Button, Form, Input } from 'antd';
import './Form.css';

const { Item } = Form;
const { Password } = Input;

export function Formulario() {
    return (
        <div className="container">
            <div className="secondContainer">
                <Form name="formulario" layout="vertical">
                    <Item label="Name:"
                        name="username"
                        rules={[{
                            required: true,
                            message: "Ingrese su nombre"
                        }
                        ]}>
                        <Input />
                    </Item>

                    <Item label="Email:"
                        name="email"
                        rules={[{
                            required: true,
                            message: "Ingrese su email"
                        }
                        ]}>
                        <Input type="email" />
                    </Item>

                    <Item label="Password:"
                        name="password"
                        rules={[{
                            required: true,
                            message: "Ingrese su password"
                        }
                        ]}>
                        <Password />
                    </Item>
                    <Item >
                        <Button className="btn" type='primary' htmlType='submit'>Join Now</Button>
                    </Item>
                </Form>
            </div>
        </div>
    );
}
