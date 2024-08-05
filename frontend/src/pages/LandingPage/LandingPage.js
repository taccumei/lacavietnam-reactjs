import React from 'react'
import classes from './landingPage.module.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
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