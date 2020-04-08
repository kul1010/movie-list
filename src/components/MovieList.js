import React,{Component,useState,useEffect} from 'react'
import Axios from 'axios'
import MovieCard from './MovieCard';
import Pagination from './Pagination';
export default ()=>{
  const [movieList,setMovieList] = useState([])
  const [loading,setLoading] = useState(false)
  const [currPage,setCurrPage] = useState(1)
  const [postPerPage] = useState(2)
  const ImageExist = (url)=>{
    let img = new Image();
    img.src = url;
    return img.height ;
  }
  useEffect(()=>{
    const fetchMovies = async ()=>{
      setLoading(true)
      const res = await Axios.get('https://fake-movie-database-api.herokuapp.com/api?s=batman')
      const res1 = res.data.Search.filter(data=>{if(ImageExist(data.Poster)) return data})
      
      setMovieList(res1);

      setLoading(false);
    }
    fetchMovies()
  },[])

  // Get current Post
  const indexOfLastMovie = currPage * postPerPage
  const indexOfFirstMovie = indexOfLastMovie - postPerPage
  const currentMovie = movieList.slice(indexOfFirstMovie,indexOfLastMovie)

  // set page
  const paginate = pageNumber=>setCurrPage(pageNumber)
    // console.log(movieList.length)
    return (
      <div>
       <div id="card-container" className="row" >
         <MovieCard movieList={currentMovie} loading={loading}/>
       </div>
         <Pagination 
            postPerPage={postPerPage} 
            totalMovies={movieList.length} 
            paginate={paginate}
         />
       </div>
    )
}