import "./cards.scss";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Cards(props) {

    console.log("testing props "+props.title)

    return (
        <div className="cards-container">
            <div className="cards">

                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="/assets/appartment.png" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Cards;