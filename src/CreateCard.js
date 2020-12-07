import { Card, CardImg, CardTitle} from 'reactstrap';

function CreateCard (props) {
    return(
    <Card>
      <CardImg src={props.user.Image}></CardImg>
      <CardTitle>{props.user.name}</CardTitle>
    </Card>
  )
  }


export default CreateCard;