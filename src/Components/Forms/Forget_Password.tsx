import React, { Fragment } from 'react'
import { Form, Row, Col, Card } from "antd";
import { Inputs_Mail } from "../Forms-Items/Inputs";
import { Button_Bootstrap } from "../Forms-Items/Buttons";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Forget_Password = (props:any) => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values: { email: string }) => {
        const log = props.data.find((i: any) => i.email === values.email);
        if (log) {
            Swal.fire({
                icon: "success",
                title: "Send Link",
                text: `Go To Check E-mail Indox`,
            });
            navigate(`/`);
            form.resetFields()
        } else {
            toast("Invalid User...")
        }
    }
    return (
        <Fragment>
            <Row
                style={{ width: "100%", marginTop: "5rem", justifyContent: "center" }}
            >
                <Col span={6}>
                    <Card
                        hoverable
                        title="Forget Password Form"
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
                            <Inputs_Mail holder="E-mail" nam="email" />
                            <Form.Item >
                                <Button_Bootstrap variants="outline-success" typs="submit" title="Send Link" />
                            </Form.Item>
                            <Form.Item>
                        <p>Go to Login <Link className="text-decoration-none" to="/">Sign-In</Link></p>                       
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Forget_Password
