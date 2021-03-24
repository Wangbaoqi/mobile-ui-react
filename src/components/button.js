import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  componentDidMount() {
    this.timeId = setTimeout(() => {
      this.updateShow()
    }, 4000)
  }
  

  componentWillUnmount() {
    clearTimeout(this.timeId)
  }
  
  
  

  updateShow() {
    // this.setState({
    //   show: true
    // })
    this.setState((preState, preProps) => {
      console.log(preState, 'prestate');
      
      return {
        show: !preState.show
      }
    })
  }
  // class filed syntax
  // create-react-app default open this feature
  // or install babel-plugin-transform-class-properties 
  handleClick = (e) => {
    if(this.props.onClick) {
      this.props.onClick(e)
    }
  }


  handleClickBind() {
    if(this.props.onClick) {
      this.props.onClick(this)
    }
  }

  render() {
    const { show = false } = this.state;
    console.log('button render');
    
    return (
      <div >
        { show && 'this is show' }
        {/* <button onClick={() => this.handleClickBind()}>Click</button> */}
        <button onClick={this.handleClick}>Click Class Field</button>
      </div>
    )
  }
}

export default Button


