import React, { Fragment, useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row, Col, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from "./redux/Login-Reducer";
import { toast } from 'react-toastify';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const { user_data } = useSelector((state: any) => state.user);

    useEffect(() => {
        dispatch(getUser())
    }, [])

    const onFinish = (values: { username: string, password: string }) => {
        const log = user_data.users.find((i: any) => i.username === values.username);
        if (log) {
            if (log.password === values.password) {
                toast("Login")
                localStorage.setItem("Login", JSON.stringify(log))
                navigate("/home");
            } else {
                toast("Incorrect Password...")
            }
        } else {
            toast("Invalid User...")
        }
    };
    return (
        <Fragment>
            <Row
                style={{ width: "100%", marginTop: "5rem", justifyContent: "center" }}
            >
                <Col span={6}>
                    <Card
                        hoverable
                        title="Login Form"
                        bordered={true}
                        style={{ backgroundColor: "#F8F6F1" }}
                    >
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            style={{ width: "100%", textAlign: "center" }}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    { required: true, message: "Please input your Username!" },
                                ]}
                            >
                                <Input
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder="Username"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    { required: true, message: "Please input your Password!" },
                                ]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    htmlType="submit"
                                    className="login-form-button"
                                >
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Login;
