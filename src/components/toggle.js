import React from'react'
import './toggle.css'
class Toggle extends React.Component {
    constructor(props){
        super(props)
        this.props = props
    }
    render(){
        let yesClassName,noClassName
        let onYes = this.props.onYes
        if (onYes){
            yesClassName = 'selected'
            noClassName = 'normal'
        }else {
            noClassName = 'selected'
            yesClassName = 'normal'
        }
    
        return (<div>
            {this.props.label}
            <button className = {yesClassName} id= "yes" onClick = {this.props.handleClick}>Yes</button>
            <button className={noClassName} id = "no" onClick = {this.props.handleClick}>No </button>
        </div>
            )
    }
}
export default Toggle