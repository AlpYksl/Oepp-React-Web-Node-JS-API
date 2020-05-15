import React, { Component } from 'react'

export default class SpecialCase extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <p>{this.props.obj.idGames}</p>
            </div>
        )
    }
}
