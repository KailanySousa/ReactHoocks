import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    const [count, setCount] = useState(0);

    const [name, setName] = useState('');

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01"></SectionTitle>

            <div className="center">
                <span className="text">
                    {count}
                </span>
                <div>
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                    <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn" onClick={() => setCount(currect => currect + 2)}>+2</button>
                    <button className="btn" onClick={() => setCount(0)}>Limpar</button>
                </div>
            </div>

            <SectionTitle title="Exercicio #02"></SectionTitle>
            <div className="center">
                <input type="text" className="input" value={name} placeholder="Digite um nome" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="center">
                <span>
                    {name != '' ? name : 'Nenhum nome digitado'}
                </span>
            </div>

        </div>
    )
}

export default UseState
