import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num);
    if (n < 0) return -1;
    if (n === 0) return 1;

    return calcFatorial(n - 1) * n;
}

function verificarNumero(num) {
    return ;
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(0);
    const [fatorial, setFatorial] = useState(1);
    const [status, setStatus] = useState('Par');

    useEffect(() => {
        setFatorial(calcFatorial(number))
        setStatus(number % 2 === 0 ? 'Par' : 'Ímpar');
    }, [number])

    useEffect(() => {
        if (fatorial > 1000000) {
            document.title = 'Eita!!!!';
        }
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.value)} />
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial === -1 ? "Não existe" : fatorial} </span>
                </div>
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <span className="text red"> {status}</span>
            </div>
        </div>
    )
}

export default UseEffect
