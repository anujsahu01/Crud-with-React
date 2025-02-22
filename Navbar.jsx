
import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav  className="navbar my-nav   navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="z">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="v">CRUD</a>
                            <Link className="nav-link" to="Create">Create post</Link>
                            <Link className="nav-link" to="All">All Post</Link>
                        </div>
                    </div>
                </div>
            </nav>

           

        </>
    )
}
