import React, {useEffect} from 'react'
import './styles.css'
import starsImage from '../../assets/images/stars.png'
import moonImage from '../../assets/images/moon.png'
import mountainsBehindImage from '../../assets/images/mountains_behind.png'
import mountainsFrontImage from '../../assets/images/mountains_front.png'

export default function BackgroundParallax() {

    useEffect(() => {
        let stars = document.getElementById('stars');
        let moon = document.getElementById('moon');
        let mountains_behind = document.getElementById('mountains-behind');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');
        let mountains_front = document.getElementById('mountains-front');

        window.addEventListener('scroll', function(){
            let value = window.scrollY;

            stars.style.left = value * 0.25 + 'px';
            moon.style.top = value * 1.05 + 'px';
            mountains_behind.style.top = value * 0.5 + 'px';
            mountains_front.style.top = value * 0 + 'px';
            text.style.marginRight = value * 4 + 'px';
            text.style.marginTop = value * 1.5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
        })
        
    }, [])


    return (
        <section id="home">
            <img alt="" src={starsImage} id="stars" />
            <img alt="" src={moonImage} id="moon" />
            <img alt="" src={mountainsBehindImage} id="mountains-behind" />
            <h2 id="text">Jorge Henrique</h2>
            <a href="/" id="btn">Explore</a>
            <img alt="" src={mountainsFrontImage} id="mountains-front" />
        </section>
    )
}
