import React from 'react'

export default ({postPerPage,totalMovies,paginate})=>{
const pageNumbers = []
for(let i =1 ; i <= Math.ceil(totalMovies/postPerPage);i++){
    pageNumbers.push(i)
}
console.log('ddd',totalMovies);
    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map(number=>(
                    <li key={number} className="page-item">
                        <a onClick={(e)=>{e.preventDefault();paginate(number)}} href="" className="page-link">{number}</a>
                    </li>
                    ))
                }
            </ul>
        </nav>
    )
}