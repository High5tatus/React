import {Card, Button} from 'react-bootstrap';

const Movie = ({year, title, summary, poster, genres}) =>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={poster} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title>{year}</Card.Title>
                <ul>
                    {
                        genres.map((genre, index)=>{
                            return(
                                <li key={index}>{genre}</li>
                            )
                        })
                    }
                </ul>
                <Card.Text>{/*slice 처음부터 180자 까지만 표시 */}
                    {summary.slice(0,180)}... 
                </Card.Text>
                <Button variant="primary">Detail</Button>
            </Card.Body>
        </Card>
    )
}
export default Movie;