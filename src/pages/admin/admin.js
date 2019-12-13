import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Header from '../../components/Header/Header';




<div className="Texto"></div>
 

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
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>React</td>
          <td>20/10/19</td>
          <td>21h</td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Desenvolvedor</td>
          <td>20/10/19</td>
          <td>20h</td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>C#</td>
          <td>20/10/19</td>
          <td>19h</td>
          <td></td>
        </tr>

      </MDBTableBody>
    </MDBTable>
  );
}

export default BasicTable;
