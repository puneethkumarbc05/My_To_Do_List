import React from 'react'

const My_Todo_List = ({ list, setList }) => {

    const handleClickDelete = (id) => {
        const tempArr = { ...list }
        delete tempArr[id]
        setList(tempArr)
    }
    return (
        <div className='list_container'>
            <div>List</div>
            {Object.values(list).map(item => {
                return <li>
                    {item.name}
                    <button onClick={() => { handleClickDelete(item.id) }}>Delete</button>
                </li>
            })}
        </div>
    )
}

export default My_Todo_List