import React, {Component} from 'react';
import firebase from 'firebase';
export default class New extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.depto.id ,
      name:this.props.depto.name
    }
    this.handleId = this.handleId.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
handleId(e) {
  let txt = e.target.value;
  console.log(txt);
  this.setState({id: txt});
}
handleName(e) {
  let txt = e.target.value;
  console.log(txt);
  this.setState({name: txt});
}
handleSubmit(e) {
  e.preventDefault();
  let depto = this.state;
  firebase.database().ref('DEPTOS/' + depto.id).set(depto);
}

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleId}
          type="numeric"/>
        <input
          onChange={this.handleName}
          type="text"/>
        <input type="submit"/>
      </form>
    )
  }
}
