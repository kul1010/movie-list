import React,{Component} from 'react'
import StarRatings from 'react-star-ratings';
export default (props)=>{
    return (
        <StarRatings
        rating={props.rating}
        starRatedColor="rgb(255, 180, 0)"
        // changeRating={this.changeRating}
        numberOfStars={5}
        starDimension="25px"
        starSpacing="0px"
        name='rating'
      />
    )
}