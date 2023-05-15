import React from "react";
/*function Greet(){
  return <h1>Hello User!</h1>
}*/
const Greet = props => {
  const {name, heroName} = props
  console.log(props)
  return (
    <div>
      <h1>
        Hello {name}! a.k.a {heroName}
      </h1>
    </div>
  )
  console.log(props.children)
}
export default Greet