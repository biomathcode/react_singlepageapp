import React from 'react'
import {CSSTransitionGroup} from 'react-transition-group'
import '../styles/homeSytle.css'


const Home =() =>{
    return (
    <CSSTransitionGroup
    transitionName ="homeTransition"
    transitionAppear = {true}
    transitionAppearTimeout ={500}
    transitionEnter = {false}
    transitonLeave={false}>
    <div>
        Home
    </div>
    </CSSTransitionGroup>
    )
}

export default Home