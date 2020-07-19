import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavLink(props) {

    let params = props.params;
    let location = '/'+useLocation().pathname.split('/')[1]
    let activeNav = `font-bold`

    return <Link to={params.link} 
        className={`${props.className} ${params.link==location?activeNav:""}`}
        onClick={props.closeMenu}
    >{params.title}</Link>
}