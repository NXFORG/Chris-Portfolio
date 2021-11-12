import React from 'react';
import './style.css';

export const Header = () => {
    return (
        <nav>
            <span className="hamburger">☰</span>
            <ul>
                <li className="navLink"><a href="index.html">HOME</a></li>
                <li className="navLink"><a href="#stackArticle">STACK</a></li>
                <li className="navLink"><a href="#projectsArticle">PROJECTS</a></li>
            </ul>
        </nav>
    )
}