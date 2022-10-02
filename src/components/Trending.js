import { Card, Container, Col, Row, Image } from "react-bootstrap"
import endgameImage from "../assets/images/action/endgame.jpg"
import avengersImage from "../assets/images/action/avengers.jpeg"
import sniperthewhite from "../assets/images/action/sniper the white.jpg"
const trending = () => {
    return (
        <div>
        <Container>
            <Row>
                <Col className="movieImage" id="Trending">
                <Card className="bg-white text-black movieImage">
             <Image
             src={endgameImage} alt="AVENGERS MOVIES"/>
            <Card.Title className="text-center">AVENGERS ENDGAME</Card.Title>
            <Card.Text className="text-center">
            frame Per Second
        </Card.Text>
        <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
    </Card>                   
                </Col>
                <Col className="movieImage">
                <Card className="bg-white text-black movieImage">
             <Image
             src={avengersImage} alt="AVENGERS MOVIES"/>
            <Card.Title className="text-center">AVENGERS INFINITY WAR</Card.Title>
            <Card.Text className="text-center">
            frame Per Second
        </Card.Text>
        <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
    </Card>                   
                </Col>
                <Col className="movieImage">
                <Card className="bg-white text-black movieImage">
             <Image
             src={sniperthewhite} alt="SNIPER"/>
            <Card.Title className="text-center">SNIPER THE WHITE RAVEN</Card.Title>
            <Card.Text className="text-center">
            frame Per Second
        </Card.Text>
        <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
    </Card>    
    </Col>
            </Row>
        </Container>
           
        </div>
    )
}
export default trending