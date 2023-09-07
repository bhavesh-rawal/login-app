import {  Row, Card } from "antd"
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from "react-bootstrap";

const { Meta } = Card;

const Profile_Card = (props:any) => {


    return (


        <>

            <Container>
                <Row
                    style={{ justifyContent: "center" }}
                >
                   
                        <Card
                            hoverable
                            title="Profile View"
                            bordered={true}
                            style={{ backgroundColor: "#F8F6F1" }}

                            cover={
                                <img
                                    style={{  height: '15rem', width: '15rem' }}
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
                   
                </Row>
            </Container>
        </>
    )
}

export default Profile_Card
