import {Component} from 'react';
class Group extends Component{
    constructor(props) {
        super(props);
        this.state = {name: '', descr:''};
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        if(event.target.name=='group name')
        this.setState({name: event.target.value});
        else
        this.setState({descr: event.target.value});
      }
    
    render(){
        return(
            <div>
            <center><h3>Create Group</h3>
            <br/>
            <br/>
            <form onSubmit={this.handleSubmit}>
            <label>
              Name    
              <input type="text" name="group name" style={{ marginLeft : "50px",borderRadius: "10px" }} placeholder="group name" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br/>
            <label>
              Description    
              <input type="text" name="group descr" style={{ marginLeft : "17px",borderRadius: "10px" }} placeholder="group description" value={this.state.value} onChange={this.handleChange} />
            </label>
          </form>
          </center>
          </div>
        );
    }
}
export default Group;