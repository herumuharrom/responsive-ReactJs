import { Card, Container, Col, Row, Image } from "react-bootstrap"
import ayatayatImage from "../assets/images/indonesia/ayat ayat cinta.jpg"
import aadc2Image from "../assets/images/indonesia/aadc2.jpg"
import gariswaktuImage from "../assets/images/indonesia/gariswaktu.jpg"

const Indonesia = () => {
    return (
        <div>
        <Container>
            <Row>
                <Col className="movieImage" id="Indonesia">
                <Card className="bg-white text-black movieImage">
             <Image
             src={ayatayatImage} alt="AYAT AYAT CINTA"/>
            <Card.Title className="text-center">AYAT AYAT CINTA2</Card.Title>
            <Card.Text className="text-center">
            frame Per Second
        </Card.Text>
        <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
    </Card>                   
                </Col>
                <Col className="movieImage">
                <Card className="bg-white text-black movieImage">
             <Image
             src={aadc2Image} alt="ADA APA DENGAN CINTA"/>
            <Card.Title className="text-center">ADA APA DENGAN CINTA 2</Card.Title>
            <Card.Text className="text-center">
            frame Per Second
        </Card.Text>
        <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
    </Card>                   
                </Col>
                <Col className="movieImage">
                <Card className="bg-white text-black movieImage">
             <Image
             src={gariswaktuImage} alt="GARIS WAKTU"/>
            <Card.Title className="text-center">GARIS WAKTU</Card.Title>
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
export default Indonesia