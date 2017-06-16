import React from 'react';
import New from './new';
import firebase from 'firebase';

export default class Deptos extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      depto: {},
      deptos: []
    }

    firebase.database().ref('DEPTOS/').on('value', snap => {
       let deptos = snap.val()
       console.log(deptos);
       this.setState({deptos:deptos});
    })
    this.renderTable = this.renderTable.bind(this);
  }

  render() {
    return(
      <div>
        <h1>Listado de Departamentos</h1>
        <New />
        <hr/>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Nombre</td>
              <td>seleccionar</td>
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
          <td>
            <button onClick={()=> {
              this.setState({depto: depto})
              console.log(depto)
            }}>seleccionar</button>
          </td>
        </tr>
      )
    })
  }
}
