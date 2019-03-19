import React from 'react'
import {CSSTransitionGroup} from 'react-transition-group'
import '../styles/homeSytle.css'


const About =() =>{
    return (
    <CSSTransitionGroup
    transitionName ="homeTransition"
    transitionAppear = {true}
    transitionAppearTimeout ={500}
    transitionEnter = {false}
    transitonLeave={false}>
    <div>
        About
    </div>
    </CSSTransitionGroup>
    )
}

export default About