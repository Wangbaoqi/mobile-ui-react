import React, { Component } from 'react'

// tic tac toe

import './index.styl'

function Square(props) {
  return (
    <div className='square' onClick={props.onClick}>
      {props.value}
    </div>
  )
}



class Board extends Component {

  constructor(props) {
    super(props)
    this.state = {
      xIsNext: true,
      boards:  Array(9).fill(null)
    }
    
  }


  handleBoard = (i) => {
    const { boards = [], xIsNext  } = this.state; 

    const squares = boards.slice();

    squares[i] = xIsNext ? "X" : "O";
    
    this.setState({
      boards: squares,
      xIsNext: !this.state.xIsNext
    })
  }


  renderSquare() {

    const { boards = [] } = this.state; 
    
    const squareList = boards.map((item, idx) => (
      <Square key={`s_${idx}`} value={item} onClick={() => this.handleBoard(idx)}/>
    ))
    return squareList;
  }

  render() {
    const winner = calculateWinner(this.state.boards)
    const win = winner ? winner + 'is ok' : `next is ${this.state.xIsNext ? 'x' : 'o'}`
    
    return (
      <div className="board-container">
        <div>{win}</div>
        <div className='content'>
            {this.renderSquare()}
        </div>
      </div>
    )
  }
}



export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  navigateToReact02 = () => {
    console.log('navigate');
    
    const { history } = this.props
    history.push('/react_02')
  }
  render() {
    console.log(this.props, 'react_01');
    
    return (
      <div className="tic_container">
        <Board />
      </div>
    )
  }
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}