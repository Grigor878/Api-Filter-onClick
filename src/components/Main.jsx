import React, { useState, useEffect } from 'react'
import api from '../api/Api'
import './Main.scss'
import loader from '../assets/loader.gif'

const Main = () => {
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([])
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await api.get();
            setData(response.data.slice(0, 50));
            setFiltered(response.data.slice(0, 50))
            setLoading(false)
        } catch (error) {
            console.warn(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const filterItem = (categItem) => {
        const filteredItems = data.filter((el) => {
            return el.symbol.toLowerCase().includes(categItem);
        })
        setFiltered(filteredItems);
    }

    return (
        <main className='main'>
            <div className='main__btns'>
                <button className='main__btn' onClick={() => setFiltered(data)}>ALL</button>
                <button className='main__btn' onClick={() => filterItem('btc')}>BTC</button>
                <button className='main__btn' onClick={() => filterItem('eth')}>ETH</button>
            </div>

            {
                loading ?
                    <div className='main__loader'>
                        <img src={loader} alt="loader" />
                    </div>
                    :
                    <div className='main__display'>
                        {filtered.map((el) => {
                            return (
                                <h4 key={el.symbol}>{el.symbol}</h4>
                            )
                        })}
                    </div>
            }

        </main >
    )
}

export default Main