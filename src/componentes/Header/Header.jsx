import React from 'react'
import './Header.css'
import Itens from '../Itens/Itens'
import Corpo from '../Corpo/Corpo'

export default function Header() {
    return (
        <>
        {/* HEADER */}
        <header className="header__group">
            <div className="header__main">
                <Itens/>
            </div>
        </header>
        {/* CORPO */}
        <div className="site__content">
            <Corpo/>
        </div>
        </>
    )
}
