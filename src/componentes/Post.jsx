import React from "react";
import irisImagen from "../img/Igris.jpeg";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import ListComment from "./ListComment";

export default function Post() {
    //Boton likes
    const [like, setLike] = useState(0);
    //Boton comentario
    const [comment, setComment] = useState(false);
    let handleComment = () => {
        setComment(!comment)

    }

    //Listado de comentarios

    //obtener datos de hijo
    const [textComment, setTextComment] = useState('');

    const getData = (comentario) => {
        setTextComment(comentario)
    }
    const comentariosGuardados = [
        { id: 1, text: 'El mejor' },
        { id: 2, text: 'Siempre es el mas fuerte' }
    ];

    let nextId = 3;
    let [id, setId] = useState(nextId);

    const [listData, setListdata] = useState(comentariosGuardados);
    //Comprobar si hay nuevos comentarios
    useEffect(() => {
        if (textComment) {
            setListdata([
                ...listData,
                { id: setId(id+1), text: textComment }
            ])
        }
    }, [textComment]);


    return (
        <div>
            <div className="card" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Iris Caballero Carmesí</h5>
                    <p className="card-text">El personaje mas increible de la serie Solo Leveling, el mas poderoso y epico de todos.</p>
                    <img src={irisImagen} className="card-img-top" alt="Igris perfil" />
                </div>
                <ul className="list-group list-group-flush" >
                    <li className="list-group-item d-flex justify-content-around">
                        <span>❤👍 {like}</span><span>{listData.length} 🗨</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-around">
                        <button className="btn btn-secundary"
                            onClick={() => setLike(like + 1)}
                        >👍 Like</button> <button className="btn btn-secundary" onClick={handleComment}> 🗨 Comment</button>
                    </li>
                </ul>
                <div className="card-footer">
                    {comment === true ? <CommentForm getData={getData} /> : ''}
                </div>
                <ListComment comentariosGuardados={comentariosGuardados} />
            </div>
        </div>
    )
}

