import React from "react";
import {Link, NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card } from 'react-bootstrap';
function Movie({title, year, summary, poster, genres}){
    return(
        <Card>            
            <NavLink to={{pathname:'/movie-detail', state:{year, title, summary, poster, genres}}}>
            <Card.Img variant="top" src={poster}/>
                {/* <img src={poster} alt={title} title={title}/> */}
            </NavLink>            
            <Card.Body>
                <Card.Title>{title}</Card.Title>                
                    <h5>{year}</h5>
                    <ul>
                        {
                            genres.map((genre, index)=>{
                                return(
                                    <li key={index} className="movie__genre">{genre}</li>
                                )
                            })
                        }
                    </ul>
                    <Card.Text>
                    <p className="movie__summary">{summary.slice(0,180)}</p>
                </Card.Text>            
            </Card.Body>
        </Card>
    //     <div className="movie">
    //     <NavLink to={{pathname:'/movie-detail', state:{year, title, summary, poster, genres}}}>
    //         <img src={poster} alt={title} title={title}/>
    //     </NavLink>
    //     <Link to={{pathname:'/movie-view', state:{year, title, summary, poster, genres}}}>
    //         <div className="movie__data">
    //             <h3 className="movie__title">{title}</h3>
    //             <h5 className="movie__year">{year}</h5>
    //             <ul className="movie__genres">
    //                 {
    //                     genres.map((genre, index)=>{
    //                         return(
    //                             <li key={index} className="movie__genre">{genre}</li>
    //                         )
    //                     })
    //                 }

    //             </ul>
    //             <p className="movie__summary">{summary.slice(0,180)}</p>

    //         </div>
    //     </Link>
    // </div>
    )
}
export default Movie;