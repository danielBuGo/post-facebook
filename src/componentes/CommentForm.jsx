import React from 'react'
import { useState } from 'react'

export default function CommentForm({ getData }) {
  const [comentario, setComentario] = useState('');
  let getComment = (e) => {
    setComentario(e.target.value);

  }


  return (
    <section className='comentarios'>
      <textarea className='form-control'
      placeholder='Comenta algo'
      value={comentario}
      onChange={getComment}>        

      </textarea>
      
      <br />
      <button className='btn btn-secondary'
      onClick={() => getData(comentario)}>Comentar</button>

    </section>
  )
}
