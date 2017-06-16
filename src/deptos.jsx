import React from 'react';
import New from './new';

export default class Deptos extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      deptos: [
        {
          id: 1, name: "DEPTO1"
        },
        {
          id:2, name: "DEPTO2"
        }
      ]
    }
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(depto) {
    var arr = this.state.deptos;
    arr.push(depto);
    this.setState({deptos: arr});
  }
  render() {
    return(
      <div>
        <h1>Listado de Departamentos</h1>
        <New wtf={this.handleAdd}/>
        <hr/>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Nombre</td>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
      </div>
    )
  }
  renderTable() {
    return this.state.deptos.map((depto) =>{
      return(
        <tr key={depto.id}>
          <td>{depto.id}</td>
          <td>{depto.name}</td>
        </tr>
      )
    })
  }
}
