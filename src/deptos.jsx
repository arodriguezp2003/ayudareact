import React from 'react';

export default class Deptos extends React.Component {
  constructor(){
    super();

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
  }
  render() {
    return(
      <div>
        <h1>Listado de Departamentos</h1>
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
