import React from 'react'
import './Answer.css'
class Answer extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            quantity: this.props.quantity
        }
        this.handleNumberChange = this.handleNumberChange.bind(this)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ quantity: nextProps.quantity })
    }
    handleNumberChange(e) {
        this.props.onChange(e)
        let newValue = e.target.value
        this.setState({ quantity: newValue })
    }
    render() {
        let nameFruit = this.props.name
        let id = this.props.name
        // let src1 = "images/"+ nameFruit + '.png'
        // let src2 = "images/"+ nameFruit + '.jpg'


        const myStyle = {
            "fontSize": 20,
            "marginBottom": 7,
            "fontFamily": 'Calibri Light',
            "textAlign": 'left'
        }
        if (this.props.checked) {
            const inputStyle = {
                "width": "10%",
                "marginRight": 3

            }
            return (

                <div style={myStyle} className={this.props.identifier}>
                    <input className={this.props.identifier} checked={this.props.checked} onChange={this.props.onChange} type='checkbox' id={id} />
                    <span style={inputStyle} className="InputNumber">
                        <input onChange={this.handleNumberChange} value={this.state.quantity} type='number' id={id + 1} min='0' style={inputStyle} maxLength='2' />
                    </span>

                    <label htmlFor={id}><span className = "FoodName">{nameFruit}</span> <span className="Portion">for {this.props.portion} </span>   </label>


                </div>
            )
        } else {
            return (
                <div style={myStyle} className={this.props.identifier}>
                    <input checked={this.props.checked} onChange={this.props.onChange} type='checkbox' id={id} />
                    <label htmlFor={id}> <span className= "FoodName">{nameFruit}</span>  <span className="Portion">({this.props.portion}) </span> </label>
                </div>
            )
        }
    }
}
export default Answer