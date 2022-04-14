import React from 'react'

import { useState,useEffect } from 'react';

import Header from './Header';

import Posts from './Posts';







export default function Allcomponent() {

  const [items, setItems] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3004/user")

          .then(content => content.json())

          .then((result) => {

            setItems(result);

            }

          )

      }, [])

    console.log(items)

  return (<>

      <div className='header_m'>

        <Header/>

      </div>

      <section className='slides'>

        {items.map((detail)=>(

          <Posts details={detail}/>

        ))}

      </section>

</>

  )

}  