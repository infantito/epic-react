// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({bgColor, size, ...rest}) {
  const sizeClassName = size ? `box--${size}` : ''

  return (
    <div
      className={`box ${sizeClassName}`}
      style={{fontStyle: 'italic', backgroundColor: bgColor}}
      {...rest}
    >
      {size} {bgColor} box
    </div>
  )
}

const smallBox = <Box size="small" bgColor="lightblue" />

const mediumBox = <Box size="medium" bgColor="pink" />

const largeBox = <Box size="large" bgColor="orange" />

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
