import React from 'react'

 function CardItem({title,id,userId, isHidden}) {
    return !isHidden ?
        <div className='block'>
            <div className='title'>{title}</div>
            <div className='id'>{id}</div>
            <div className='userId'>{userId}</div>
        </div> : null
    
}

export default CardItem;