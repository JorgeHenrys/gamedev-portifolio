import React, {useEffect} from 'react'
import logoImage from '../../assets/images/logo-notbg.png'
import './styles.css'

export default function Header() {

    useEffect(() => {
        let header = document.querySelector('header');

        window.addEventListener('scroll', function(){
            let value = window.scrollY;

            header.style.top = value * 0.5 + 'px';
        })
        
    }, [])

    return (
        <header>
            <a href="/" className="logo"><img alt="" src={logoImage} height="60" /></a>
            <ul>
                <li><a href="#home" className="active">Home</a></li>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#games">Games</a></li>
                <li><a href="#arts">Arts</a></li>
            </ul>
        </header>
    )
}
