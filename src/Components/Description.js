import React from 'react';
import '../Styles/descriptions.css';

const Description = () => {
    return (
        <div className="description-container">
            <h1 className="title">O produto</h1>
            <div className="description">
                <li className="description-text">
                    Com o FaleMais, você adquire um plano e pode falar de graça até um
                    determinado tempo (em minutos) e só paga os minutos excedentes.
                </li>
                <li className="description-text">
                    Nossos planos são FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).
                    Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. 
                </li>
            </div>
        </div>
    )
}

export default Description;