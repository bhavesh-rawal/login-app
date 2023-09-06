import React from 'react';
import {
    Card,
    Form,
    Row,
} from 'antd';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { createUser } from '../../Redux/Login-Reducer';
import { Inputs, Inputs_Confirm_Password, Inputs_Mail, Inputs_Password } from '../Forms-Items/Inputs';
import { Button_Bootstrap } from '../Forms-Items/Buttons';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Registration: React.FC = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch<any>()
    const onFinish = (values: void) => {
        dispatch(createUser(values))
        toast.success("Added")
        form.resetFields()
    };

    return (<>
        <Container>
            <Card
                hoverable
                title="Registration Form"
                bordered={true}
                style={{ backgroundColor: "#FFFDF9", marginTop: "5rem" }}
            >
                <Form
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Row>

                        <Inputs class="col-6" holder="First Name" nam="Fname" typs="text" />
                        <Inputs class="col-6" holder="Last Name" nam="Lname" typs="text" />
                        <Inputs_Mail class="col-6" holder="E-mail" nam="email" />
                        <Inputs_Password class="col-6" holder="Password" nam="password" typs="password" />
                        <Inputs_Confirm_Password class="col-6" holder="Password" nam="confirm_password" />
                        <Form.Item className='d-block w-100'>
                            <Button_Bootstrap variants="outline-secondary" typs="submit" title="Register" />
                        </Form.Item>
                        <Form.Item>
                            <p>Already have an account? <Link className="text-decoration-none" to="/">Sign-In</Link></p>
                        </Form.Item>
                    </Row>
                </Form >
            </Card >
        </Container>
    </>
    );
};

export default Registration;