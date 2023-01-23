import React, { useState } from 'react';

export const SearchBarResult = ({onClick, text}) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick} 
        style={{backgroundColor: isHovered ? "#cecfca" : "#E8E9E4", cursor: "pointer"}}>{text}</div>  
    )
}

