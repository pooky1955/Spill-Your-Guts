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
        const {yesLabel,noLabel,dataLabel} = this.props
        return (<div>
            {this.props.label}
            <button data-name = {dataLabel} className = {yesClassName} id= "yes" onClick = {this.props.handleClick}>{yesLabel || "Yes"}</button>
            <button data-name = {dataLabel} className={noClassName} id = "no" onClick = {this.props.handleClick}>{noLabel || "No"} </button>
        </div>
            )
    }
}
export default Toggle