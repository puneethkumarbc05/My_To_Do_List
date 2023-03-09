import React, { useState } from 'react'
import My_Todo_input from '../components/My_Todo_input'
import My_Todo_List from '../components/My_Todo_List'

const My_Todo = () => {
    const [text, setText] = useState()
    const [list, setList] = useState({})

    const handleClickSubmit = () => {
        if (text) {
            const id = Math.round(Math.random() * 100000)
            const tempArra = { ...list, [id]: { name: text, id: id } }
            setList(tempArra)
            setText('')
        }
    }

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
            <My_Todo_input setText={setText} text={text} />
            <button className='btn' onClick={handleClickSubmit}>Submit</button>
            <My_Todo_List list={list} setList={setList} />
        </div>
    )
}

export default My_Todo