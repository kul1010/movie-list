import React,{Component,useState,useEffect} from 'react'
import StarRatingComponent from './StarRatingComponent';

export default ({movieList,loading})=>{
  if(loading){
    return <h3>Loading...</h3>
  }
return (

  movieList.map((data,i)=>{
     if(data.Title !==null && data.Poster !==null ){
       return (
         <div className="col s12 m6 l3" key={i}>
         <div className="card"  style={{height: '45em'}}>
         <div  className="card-image waves-effect waves-block waves-light" >
           <img className="activator " src={data.Poster} />
         </div>
         <div className="card-content">
           <span className="card-title activator grey-text text-darken-4">{data.Title}<i className="material-icons right">more_vert</i></span>
           <p><a href="#">This is a link</a></p>
         </div>
         <div className="card-reveal">
           <span className="card-title grey-text text-darken-4">{data.Title}<i className="material-icons right">close</i></span>
           <p>{data.Year}</p>
         </div>
       <StarRatingComponent rating={3} />
       </div>
       </div>
       )
     }
   })
)
           
       
    
}