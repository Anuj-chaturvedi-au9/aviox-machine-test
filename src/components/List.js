import React, { useState } from 'react';
import {  Table } from 'reactstrap'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Form from './Form'

const ALL_EXPENSES = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []


const List = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false, window.location.reload());
  
  return(
  <div>
    <Table>
      <thead>
        <tr>
          <th><b>Office Transactions</b></th>
          <th></th>
          <th></th>
          <th></th>
          <th><button onClick={onOpenModal}><b>+ Add Transaction</b></button></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Date </th>
          <td>Description </td>
          <td>Credit</td>
          <td>Debit</td>
          <td>Running Balance</td>
        </tr>

          {ALL_EXPENSES.map(item =>(
            <tr>
            <td>{item.date}</td>
            <td key="name">{item.name}</td>
            <td key="Credit">{item.lastClicked==="Credit"?item.amount:"-"}</td>
            <td key="Debit">{item.lastClicked==="Debit"?item.amount:"-"}</td>
            <td>{item.amount}</td>
            </tr>
        ))}
      </tbody>
    </Table>
    <Modal open={open} onClose={onCloseModal}  center>
      <Form />
    </Modal>
  </div>
  )
}

export default List