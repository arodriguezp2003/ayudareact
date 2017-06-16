import React, {Component} from 'react';

export default class New extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0 ,
      name: ""
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

  this.props.wtf(depto);
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
