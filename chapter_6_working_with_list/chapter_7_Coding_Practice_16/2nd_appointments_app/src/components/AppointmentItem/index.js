import React from 'react'

function AppointmentItem({key,name,date,isLiked}) {

    const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

    
  return (
    <div>
        <h1 className='heading'>
            {name}
        </h1>
        <img src={likeImageUrl} alt="like" className="like-image" />
        <p className='paragraph'>
            {date}
        </p>
    </div>
  )
}

export default AppointmentItem