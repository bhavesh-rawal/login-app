import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiOutlineLogout } from "react-icons/ai";

export const Button_Bootstrap = (props: any) => {
    return (
        <Button onClick={props.click} variant={props.variants} className={props.class} type={props.typs}>{props.title}</Button>
    )
}

export const Button_LogOut = (props: any) => {
    return (
  <Button onClick={props.click} variant={props.variants} className={props.class} type={props.typs}>
        <Link className='text-dark text-decoration-none' to={props.navigt}>
            <AiOutlineLogout  className='mx-1' />
            Log-Out
            </Link>
   </Button>
    )
}

