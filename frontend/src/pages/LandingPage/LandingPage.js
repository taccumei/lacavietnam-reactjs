import React, { useEffect } from 'react'
import classes from './landingPage.module.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  // const [currentImage, setCurrentImage] = useState(null);

  // let images = ["./landing_page/landing-page.png", "./landing_page/landing-page-3.png"];
  // let i = 1;
  // let img = document.getElementById('img');
  // useEffect(() => {
    
  // })
//   setTimeout(function() {
//       img.style.backgroundImage = "url(" + images[i] + ")";
//       i = i + 1;
//       if (i == images.length) {
//         i =  0;
//       }
// }, 1000);

//idea ScrollReveal
//need to install scrollreveal
//step by step
//npm install scrollreveal
//const ScrollReveal = require('scrollreveal')
//import ScrollReveal from 'scrollreveal'

// const scrollRevealOption = {
//     distance: "50px",
//     origin: "bottom",
//     duration: 1000,
//   };
//   ScrollReveal().reveal(".content h1", {
//     ...scrollRevealOption,
//     delay: 1000,
//   });
//   ScrollReveal().reveal(".content p", {
//     ...scrollRevealOption,
//     delay: 1500,
//   });
//   ScrollReveal().reveal(".content button", {
//     ...scrollRevealOption,
//     delay: 2000,
//   });

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>Craving the vibrant flavors of Vietnam?</h1>
        <p>At LacaVietnam, we bring the best of Vietnamese cuisine right to your doorstep. Enjoy our delicious dishes from the comfort of your home with our easy and convenient online ordering system.</p>
        <Link to="/homepage"><button>See Our Menu</button></Link>
      </div>
    </div>
  )
}