import React from 'react'

const Button = ({children, primaryColor, bodercolor, backgroundcolor}) => {
    const buttonStyle = {
        color : primaryColor,
        backgroundcolor,
        border : '1px solid ${borderColor}'
    }
  return (
    <button style={buttonStyle}>{children}</button>
)
}

export default Button