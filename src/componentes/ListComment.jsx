import React from 'react'

export default function ListComment({comentariosGuardados}) {
  return (
  <ul className='list-group list-group-flush'>
    {
      comentariosGuardados.map((list) => (
        <li key={list.id} className='list-group-item'>{list.text}</li>

      ))
    }
    

  </ul>
  )
}
