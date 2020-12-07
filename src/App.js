import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './CardList.js'
import { Container, Row, Col } from 'reactstrap';
import Group from './Group.js';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      users:[]
    }
  }
  componentDidMount() {
    const apiUrl = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => 
	  {
		  let tmpArray = []
          for (var i = 0; i < data.length; i++) {
                tmpArray.push(data[i])
            }
         
		 this.setState({users:tmpArray});
	  });
  }

  render(){
  return (
    <div>
    <Group></Group>
    <CardList users={this.state.users}></CardList>
    </div>
  )
};
}

export default App;
