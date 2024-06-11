import React from 'react'
import classes from './thumbnails.module.css'
import { Link } from 'react-router-dom'
import StarRating from '../StarRating/StarRating'
import Price from '../Price/Price'

export default function Thumbnails({foods}) {
  return (
    <ul className={classes.list}>
    {foods.map(food => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}>
            <img
              className={classes.image}
              src={`/foods/${food.imageUrl}`}
              alt='{food.name}'
            />
          <div className={classes.content}>
            <div className={classes.name}>{food.name}</div>
            {/* favorite */}
            <span className={`${classes.favorite} ${food.favorite ? '' : classes.not}`}>
              ❤
            </span>
            {/* star rating */}
            <div className={classes.stars}>
              <StarRating stars={food.stars}/>
            </div>
            <div className={classes.product_item_footer}>
              {/* origin */}
              <div className={classes.origins}>
                {
                  food.origins.map(origin =>(
                    <span key={origin}>{origin}</span>
                  ))}
              </div>
              {/* cook time */}
              <div className={classes.cook_time}>
                <span>🕒</span>
                {food.cookTime}
              </div>
              {/* price */}
              <div className={classes.price}>
                <Price price={food.price}/>
              </div>
            </div>
            </div>
            </Link>
        </li>
      ))}
  </ul>
  )
}
