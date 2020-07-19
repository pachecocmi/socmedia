import React from 'react'
import Navigation from './Navigation'

export default function Header() {
    return (
        <header className="
            fixed top-0 left-0 w-screen
            border-b py-3 px-6 bg-white
            flex justify-between items-center
        ">
            <span className="font-bold">Title</span>
            <Navigation />
        </header>
    )
}
