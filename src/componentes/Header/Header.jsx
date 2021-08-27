import React from 'react'
import './Header.css'
import Itens from '../Itens/Itens'

export default function Header() {
    return (
        <header className="header__group">
            <div className="header__main">
                <Itens/>
            </div>
        </header>
    )
}
