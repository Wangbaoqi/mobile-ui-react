import React, { Component } from 'react'
import { Button } from 'antd-mobile';

import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'


export default class Index extends Component {


  navigateTo = () => {
    this.props.history.push('/react_02')
  }
  render() {
    return (
      <div className='layout'>
        this is home page
        <Button>Start</Button>
        <Link to='/react_01'>navigete</Link>
        <button onClick={this.navigateTo}>navigate-to</button>
      </div>
    )
  }
}
