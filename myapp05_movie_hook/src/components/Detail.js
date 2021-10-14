import {Card} from 'react-bootstrap';

const Detail = (props) =>{
    const {location} = props
    return(
        <Card style={{ width: '30rem'}}>           
            <Card.Img variant="top" src={location.state.poster} />          
            <Card.Body>
                <Card.Title>{location.state.title}</Card.Title>
                <Card.Title>{location.state.year}</Card.Title>
                <ul>
                    {
                        location.state.genres.map((genre, index)=>{
                            return(
                                <li key={index}>{genre}</li>
                            )
                        })
                    }
                </ul>
                <Card.Text>{/*slice 처음부터 180자 까지만 표시 */}
                    {location.state.summary.slice(0,180)}... 
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Detail;