import React from 'react';
import '../Styles/table.css';

const Table = () => {
    return (
        <div>
            <h1 className="title">Tabela de preços</h1>
            <div className="titles">
                <h3 className="table-title">Origem</h3>
                <h3 className="table-title">Destino</h3>
                <h3 className="table-title">R$ por minuto</h3>
            </div>
            <section className="container-table">
                <div>
                    <ul className="table table-border">
                        <li className="table-item">011</li>
                        <li className="table-item">011</li>
                        <li className="table-item">011</li>
                        <li className="table-item">016</li>
                        <li className="table-item">017</li>
                        <li className="table-item">018</li>
                    </ul>
                </div>
                <div>
                    <ul className="table table-border">
                        <li className="table-item">016</li>
                        <li className="table-item">017</li>
                        <li className="table-item">018</li>
                        <li className="table-item">011</li>
                        <li className="table-item">011</li>
                        <li className="table-item">011</li>
                    </ul>
                </div>
                <div>
                    <ul className="table">
                        <li className="table-item">1.90</li>
                        <li className="table-item">1.70</li>
                        <li className="table-item">0.90</li>
                        <li className="table-item">2.90</li>
                        <li className="table-item">2.70</li>
                        <li className="table-item">1.90</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Table;