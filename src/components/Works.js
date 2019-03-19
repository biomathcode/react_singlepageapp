import React from 'react'
import {CSSTransitionGroup} from 'react-transition-group'
import '../styles/homeSytle.css'


const Works =() =>{
    return (
    <CSSTransitionGroup
    transitionName ="homeTransition"
    transitionAppear = {true}
    transitionAppearTimeout ={500}
    transitionEnter = {false}
    transitonLeave={false}>
    <div>
        Works
    </div>
    </CSSTransitionGroup>
    )
}

export default Works