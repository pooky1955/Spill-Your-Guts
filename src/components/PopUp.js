import React from 'react';
import Akkermansia from '../images/Akkermansia.JPG';
import Alistipes from '../images/Alistipes.JPG';
import Bacteroides from '../images/Bacteroides.JPG';
import Bifidobacteria from '../images/Bifidobacteria.JPG';
import Bilophila from '../images/Bilophila.JPG';
import Clostridia from '../images/Clostridia.JPG';
import Eubacteria from '../images/Eubacteria.JPG';
import Faecalibacteria from '../images/Faecalibacteria.JPG';
import Lactobacilli from '../images/Lactobacilli.JPG';
import Prevotella from '../images/Prevotella.JPG';
import Proteobacteria from '../images/Proteobacteria.JPG';
import Roseburia from '../images/Roseburia.JPG';
import Ruminococcus from '../images/Ruminococcus.jpeg';
import Streptococcus from '../images/Streptococcus.JPG';
import './PopUp.css';
const imgSrcs = {
    Alistipes,
    Bilophila,
    Akkermansia,
    Bacteroides,
    Bifidobacteria,
    Clostridia,
    Eubacteria,
    Faecalibacteria,
    Lactobacilli,
    Prevotella,
    Proteobacteria,
    Roseburia,
    Ruminococcus,
    Streptococcus,
}
const Opener = (props) => {
    const { label, handleClicks } = props
    return (<button className="Opener" onClick={handleClicks}>{label} </button>)
}
const Modal = (props) => {
    const { handleClicks, src } = props
    return (
        <div className="modal"> <div style = {{width: "90%"}}><span onClick={handleClicks} className="close">&times; </span><img alt=' bacteria' className="imgStyle" src={imgSrcs[src]} /></div></div>
    )
}
class PopUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { clicked: false }
        this.handleClicks = this.handleClicks.bind(this)

    }
    handleClicks() {
        this.setState((state) => { return { clicked: !state.clicked } })
    }
    setUpPopUp() {
        document.body.style.position = 'static'
        document.body.style.opacity = "1"
    }
    render() {
        const { clicked } = this.state
        const {label} = this.props
        if (clicked) {
            return (

                <React.Fragment>
                    <Opener handleClicks={this.handleClicks} label={label} />
                    <Modal src={this.props.src} handleClicks={this.handleClicks} />
                </React.Fragment>
            )
        }
        else {
            this.setUpPopUp()
            return (
                <Opener handleClicks={this.handleClicks} label={label} />
            )
        }
    }
}
export default PopUp