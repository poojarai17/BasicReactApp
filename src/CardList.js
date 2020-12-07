import CreateCard from './CreateCard.js';
import { Container, Row, Col } from 'reactstrap';
function CardList (props) {
   let userCards = props.users.map(user => {
        return (
          <Col sm="3">
            <CreateCard user={user} />
          </Col>
        )
      })
    return (
        <Row>
           {userCards} 
        </Row>
    )
  }

export default CardList;