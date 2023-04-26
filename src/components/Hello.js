import React from "react";

const Hello = () => {
  /*return (
    <div className='myClass'>
      <h1>Hello user!</h1>
    </div>
  )*/
  return React.createElement(
    'div',
    {id: 'hello', className: 'myClass'},
    React.createElement('h1', null, 'Hello user!')
  )
}
export default Hello