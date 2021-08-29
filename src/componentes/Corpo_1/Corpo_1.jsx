import React from 'react'
import './Corpo_1.css'
import author from '../img/author.png'

export default function Corpo_1() {
    return (
        <>
       <header className="parte1">
           <h1 className="post__title">Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimnetos</h1>
           <p className="post__excerpt">A infecção causada pela variante Delta pode provocar sintomas diferentes da doença causada pela linhagem original do novo coronavírus</p>
           <section className="author__content">
               <figure className="author__image">
                   <img  className ="author__image"src={author}/>
               </figure>
           </section>
           <div className="higher__share">
               <span className="post__data">24/08/2021 às 16:44 | Atualizado às 16:56 
               </span>
           </div>
       </header>
       </>
    )
}
