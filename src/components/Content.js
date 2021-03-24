import React, { Component } from 'react'

import Button from './button'

export default class Content extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleBtnEvent(target) {
    console.log(target.pageX, 'content');
    
  }


  render() {
    console.log('content render');
    
    return (
      <div className='content'> 
        <Button onClick={this.handleBtnEvent}/>
      </div>
    )
  }
}
