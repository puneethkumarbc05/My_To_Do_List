import React from 'react'

const My_Todo_input = ({ text, setText }) => {


    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className='input_container'>
            <input type='text' onChange={handleChange} value={text} placeholder='Your To Do' spellCheck={false} />
        </div>
    )
}

export default My_Todo_input