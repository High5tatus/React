import axios from 'axios';
import React,{Component} from 'react';
import './Home.css'
import Movie from '../components/Movie';

class Home extends Component{
    state ={
        isLoading : true,
        movies : [],
    };
    // getMovies = async() =>{
    //     const {
    //         data : {
    //             data : {movies},
    //         },
    //     } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //     this.setState({movies, isLoading:false});
    // };

    getMovies = () =>{
        fetch('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
        .then((res)=>res.json())
        .catch(err=>console.log(err))
        .then((res)=>{
            console.log(res.data.movies);
            this.setState({movies:res.data.movies, isLoading:false});
        })
    }

    componentDidMount(){
        this.getMovies();
    }

    render(){
        const {isLoading, movies} = this.state;
        return(
            <section className="container">
                {isLoading ?(
                        <div className="loader">
                            <span className="loader__text">isLoading</span>
                        </div>
                    ):(
                        <div className="movies">
                            {movies.map(movie => (
                                <Movie key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}                                        
                                />
                                ))}
                        </div>
                    )}
            </section>
        );
    }
}
export default Home;