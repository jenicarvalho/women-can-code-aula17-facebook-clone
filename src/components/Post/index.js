import React from 'react'
import Comment from '../Comment'

function Post(props) {
  const { name, avatar } = props.conteudo.author
  const { comments } = props.conteudo
  return (
    <div className="post-item">
      <div className="meta">
        <div className="avatar">
          <img src={avatar} alt={name} />
        </div>
        <div className="dados">
          <h2>{name}</h2>
          <span>{props.conteudo.date}</span>
        </div>
      </div>
      <div className="post-content">
        {props.conteudo.content}
      </div>

      {comments.map(comment => (
        <Comment conteudo={comment} key={comment.id} />
      ))
      }
    </div>
  )
}

export default Post