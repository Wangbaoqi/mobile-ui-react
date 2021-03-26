import React, { useState, useEffect, useReducer } from 'react'

import { useSelector, useDispatch } from "react-redux"






const Home = () => {

  useEffect(() => {
    console.log('home');
  })

  return (
    <div>this is a home page</div>
  )
}


export default Home