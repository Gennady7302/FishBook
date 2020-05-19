import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
      <div className={s.item}>
        <img src='https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg'></img>
        {props.message}
        <div>
        <span>like {props.numlike} </span>
        </div>
      </div>
      )
}

export default Post;