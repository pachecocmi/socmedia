import React from 'react'
import NavLink from './NavLink'

export default function Navigation() {

    const isLoggedIn = false;
    let navClass = `text-blue-500 py-1 block pl-3`

    const navItems = [
        { id:"home", title:"Home", link: "/", hasLogin:true },
        { id:"profile", title:"Profile", link: "/profile", hasLogin:true },
        { id:"login", title:"Login", link: "/login", hasLogin:false },
        { id:"register", title:"Register", link: "/register", hasLogin:false }
    ]

    const navList = navItems.map(each=>{
        if( isLoggedIn == each.hasLogin ) {
            return <li key={each.id}>
                <NavLink params={each} key={each.id} 
                    className={`${navClass}`} 
                />
            </li>
        }
    })


    return (
        <nav>
            <ul className="flex">{ navList }</ul>
        </nav>
    )
}
