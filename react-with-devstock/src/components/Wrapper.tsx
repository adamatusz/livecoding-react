import React from 'react'

export default function Wrapper({ children }) {
  // Przekształca children na tablicę i loguje jej długość
  console.log(
    'Liczba dzieci w komponencie Wrapper:',
    React.Children.toArray(children).length
  )

  return <div className='wrapper'>{children}</div>
}
