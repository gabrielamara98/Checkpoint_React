import React from 'react'
import './Corpo_2.css'
import Logo from '../img/logo.svg'


export default function Corpo_2() {
    return (
        <div className="parte2">
            <div className="riddle-target-initialised">
                <figure>
                    <img className="custom-logo-ng-scope"src={Logo}/>
                </figure>
            </div>
            <p>Por ser uma doença nova, a Covid-19 ainda não foi compreendida totalmente pela comunidade médica global. Os conhecimentos sobre a doença estão em constante atualização, incluindo os sintomas e os impactos para a saúde a curto e longo prazos.</p>
            <p>A variante Delta da Covid-19, originalmente conhecida como B.1.617.2, existe desde o final do ano passado, mas nos últimos meses tornou-se rapidamente dominante em muitos países. Ainda não está claro o quanto essa cepa é mais transmissível. Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa.</p>
        </div>
    )
}
