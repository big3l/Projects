import React, { Component } from 'react'
import Sky1 from '../img/sky1.jpg'
import Sky2 from '../img/sky2.jpg'
import Sky3 from '../img/sky3.jpg'
import Sky4 from '../img/sky4.jpg'
import Bike1 from '../img/bike1.jpg'
import Bike2 from '../img/bike2.jpg'
import Bike3 from '../img/bike3.jpg'
import Bike4 from '../img/bike4.jpg'

export default class Hobbies extends Component {
    render() {
        return (
            <div className='Hobbies'>
                <h1>Cycling</h1>
                <img alt='' src={Bike1} />
                <img alt='' src={Bike2} />
                <img alt='' src={Bike3} />
                <img alt='' src={Bike4} />
                <h1>Parachuting</h1>
                <img alt='' src={Sky4} />
                <img alt='' src={Sky1} />
                <img alt='' src={Sky3} />
                <img alt='' src={Sky2} />
            </div>
        )
    }
}
