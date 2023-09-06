import {  Row, Col, Card } from "antd"
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from "react-bootstrap";

const { Meta } = Card;

const Profile_Card = (props:any) => {


    return (


        <>

            <Container>
                <Row
                    style={{ justifyContent: "center" }}
                >
                    <Col >
                        <Card
                            hoverable
                            title="Profile View"
                            bordered={true}
                            style={{ backgroundColor: "#F8F6F1" }}

                            cover={
                                <img
                                    alt="Profile Image"
                                    src="https://www.authorityhunter.com/wp-content/uploads/2022/05/Remove-Facebook-Profile-step6.jpg"
                                />
                            }
                            actions={[
                                <Link to="resetPassword">Reset Password</Link>
                            ]}
                        >
                            <Meta
                                title={`${props.data.Fname} ${props.data.Lname}`}
                                description={`Email: ${props.data.email}`}
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Profile_Card
