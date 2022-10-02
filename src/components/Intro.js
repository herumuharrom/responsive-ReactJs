import { Col, Container, Row, } from 'react-bootstrap';

const intro = () => {
    return(
        <div className ='intro'>
          <Container className='text-white text-center d-flex justify-content-center align-items-center'>
            <Row>
              <Col>
              <div className='title'>NONTON FILM GRATIS</div>
              <div className='introButton mt-4 text-center'>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}
export default intro