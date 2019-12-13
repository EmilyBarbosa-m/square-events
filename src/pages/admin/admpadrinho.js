import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';




 

const BasicTable = () => {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Data</th>
          <th>Horário</th>
          <th>Descrição</th>
          <th>Funções</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td></td>
          <td><button type="button" class="btn btn-warning btn-rounded">Apadrinhar</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td></td>
          <td><button type="button" class="btn btn-warning btn-rounded">Apadrinhar</button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td></td>
          <td><button type="button" class="btn btn-warning btn-rounded">Apadrinhar</button></td>
          
        </tr>

      </MDBTableBody>
    </MDBTable>
  );
}

export default BasicTable;
