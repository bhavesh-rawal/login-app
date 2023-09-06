import React, { Fragment } from "react";
import { Form, Row, Col, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Inputs, Inputs_Password } from "../Forms-Items/Inputs";
import { Button_Bootstrap } from "../Forms-Items/Buttons";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
const Login = (props: any) => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = (values: { username: string, password: string }) => {
        const log = props.data.find((i: any) => i.email === values.username);
        if (log) {
            if (log.password === values.password) {
                toast.success("Login")
                localStorage.setItem("Login", JSON.stringify(log))
                navigate(`/${props.navigt}`);
            } else {
                toast("Incorrect Password...")
            }
        } else {
            toast("Invalid User...")
        }
    };
    return (
        <Fragment>
            <Container>
            <Row
                style={{ marginTop: "5rem", justifyContent: "center" }}
            >
                <Col >
                    <Card
                        hoverable
                        title="Login Form"
                        bordered={true}
                        style={{ backgroundColor: "#F8F6F1" }}
                    >
                        <Form
                            form={form}
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            style={{ width: "100%", textAlign: "center" }}
                        >
                            <Inputs holder="Username" nam="username" typs="text" />
                            <Inputs_Password holder="Password" nam="password" typs="password" />
                            <Form.Item>
                                <Button_Bootstrap variants="outline-secondary" typs="submit" title="Log-In" />
                            </Form.Item>
                            <Form.Item>
                                 <Link  to="forgetpassword">Forget Password</Link>
                            </Form.Item>
                           
                             <Form.Item>
                               <p> Don't have an account? <Link className="text-decoration-none" to="registration">Sign-Up</Link></p>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default Login;
