import {Container, Spinner, Row, Col} from 'react-bootstrap';
import'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
const Home =() =>{
    const [movies, setMovies] = useState([]); // movies를 배열로 선언
    const [isLoading, setLoading] = useState(true); // isLoading을 boolean으로 선언

    const getMovies = () =>{
        axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
        .then((res)=>{
            console.log(res.data.data.movies)
            setMovies(res.data.data.movies) //movies에 값 추가
            setLoading(false)  // 처음 실행시 true로 isLoading을 호출하여 Spinner가 동작 하는것을 getMovies함수로 자료를 받은후 7번 라인의 useState를 false로 변경하여 스피너 종료
        })
    }

    useEffect(()=>{ //componentDidmount, componentDidUpdate 라는 생명주기를 대신하는 역할
        getMovies()
    },[]) //[]의미 : 로딩시 호출(componentDidmount역할)
    return(
        <Container>
            {
                isLoading?(
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ):(
                    <Row>
                    {
                        movies.map((movie, index)=>{// {부분에 ( 사용시 리턴 생략 가능
                            return(
                                <Col md={4} key={index}>
                                    <Movie key={movie.id}
                                        id={movie.id}
                                        year={movie.year}
                                        title={movie.title}
                                        summary={movie.summary}
                                        poster={movie.medium_cover_image}
                                        genres={movie.genres}
                                    />
                                </Col>
                            )
                        })
                    }
                    </Row>
                )
            }
        </Container>
    )
}

export default Home;