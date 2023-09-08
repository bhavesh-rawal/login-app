import React, { Fragment } from 'react'
import { Form, Row, Col, Card } from "antd";
import { Inputs_Confirm_Password, Inputs_Password } from '../Forms-Items/Inputs';
import { Button_Bootstrap } from '../Forms-Items/Buttons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from '../../Redux/Login-Reducer';
import Swal from 'sweetalert2';

const ResetPassword = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch<any>()
    const { user_data } = useSelector((state: any) => state.user);

    const onFinish = (values: { password: string, confirm_password: string, Currentpassword: string }) => {
        const log = user_data.find((i: any) => i.password === values.Currentpassword);
        if (log && (values.password === values.confirm_password) ) {
            const obj = { ...log, password: values.password }
            dispatch(updateUser(obj))
            localStorage.setItem("Login", JSON.stringify(obj))
            Swal.fire({
                icon: "success",
                title: "Changed Password",
                text: `Your Password Changed`,
            });
            form.resetFields()
        }
        else {
            toast.warning("Incorect Current Password")
        }
    }
    return (
        <Fragment>
            <Row
                style={{ width: "100%", marginTop: "5rem", justifyContent: "center" }}
            >
                <Col >
                    <Card
                        hoverable
                        title="Reset Password "
                        bordered={true}
                        style={{ backgroundColor: "#F8F6F1" }}
                    >
                        <Form
                            form={form}
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            style={{ width: "100%", textAlign: "center" }} >
                            <Inputs_Password holder="Current Password" nam="Currentpassword" typs="password" />
                            <Inputs_Password holder="New Password" nam="password" typs="password" />
                            <Inputs_Confirm_Password holder="Password" nam="confirm_password" />
                            <Form.Item >
                                <Button_Bootstrap variants="outline-success" typs="submit" title="Reset Password" />
                            </Form.Item>
                            <Form.Item>
                                <p>You Don't Remember Your Password? <Link className="text-decoration-none" to="forgetpassword">Forget It</Link></p>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default ResetPassword
