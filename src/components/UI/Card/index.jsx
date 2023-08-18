import React from "react";
import './style.scss'
import { Link,useParams } from "react-router-dom";
import '../../../db'

import { Breadcrumb } from 'antd'


import { useState } from 'react'

const CardComponent=({state:{id, img, title, text, path}})=>{
  const [count, setCount] = useState(0)
    const { id } = useParams()
    let arr = [...flowers,...plants]
    const plant = arr.filter(item => item.id == id)
  return (
    <div>
      <Link to={`/${path}/${id}`} key={item.id} className="hover:shadow-xl pb-[38px]">
        
        <img src={item.img} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </Link>
    </div>
  );
};

export default CardComponent;