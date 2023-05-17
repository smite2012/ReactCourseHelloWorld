import React, {Component} from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    /*Short circuit operator*/
    return this.state.isLoggedIn && <div>Welcome UserName!</div>

    /*Conditional operators*/
   /* return (
      this.state.isLoggedIn ? (
        <div>Welcome UserName!</div>
      ) : (
        <div>Welcome Guest!</div>)
    )*/
    /*Element variables*/
    /*let message
    if(this.state.isLoggedIn){
      message = <div>Welcome UserName!</div>
    }else{
      message = <div>Welcome Guest!</div>
    }

    return <div>{message}</div>*/
    /*if/else*/
    /* if (this.state.isLoggedIn) {
       return <div>Welcome UserName!</div>
     } else {
       return <div>Welcome Guest!</div>
     }*/
    /*return (
      <div>
        <div>Welcome UserName!</div>
        <div>Welcome Guest!</div>
      </div>
    )*/
  }
}

export default UserGreeting
