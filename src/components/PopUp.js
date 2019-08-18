import React from 'react'
import Akkermansia from '../images/Akkermansia.JPG'
import Bacteroides from '../images/Bacteroides.JPG'
import Bilophila from '../images/Bilophila.JPG'
import Alistipes from '../images/Alistipes.JPG'
import Bifidobacteria from '../images/Bifidobacteria.JPG'
import Clostridia from '../images/Clostridia.JPG'
import Eubacteria from '../images/Eubacteria.JPG'
import Faecalibacteria from '../images/Faecalibacteria.JPG'
import Lactobacilli from '../images/Lactobacilli.JPG'
import Prevotella from '../images/Prevotella.JPG'
import Proteobacteria from '../images/Proteobacteria.JPG'
import Roseburia from '../images/Roseburia.JPG'
import Ruminococcus from '../images/Ruminococcus.jpeg'
import Streptococcus from '../images/Streptococcus.JPG'
import './PopUp.css'
const imgSrcs = {
    Alistipes:Alistipes,
    Bilophila: Bilophila,
    Akkermansia:Akkermansia,
    Bacteroides:Bacteroides,
    Bifidobacteria:Bifidobacteria,
    Clostridia:Clostridia,
    Eubacteria:Eubacteria,
    Faecalibacteria:Faecalibacteria,
    Lactobacilli:Lactobacilli,
    Prevotella:Prevotella,
    Proteobacteria:Proteobacteria,
    Roseburia:Roseburia,
    Ruminococcus: Ruminococcus,
    Streptococcus:Streptococcus,
}
class PopUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {clicked : false}
        /* props = {
            label
        } */
        this.handleClicks = this.handleClicks.bind(this)
       
    }
    handleClicks(){
        this.setState((state)=>{return {clicked : !state.clicked}})
        //console.log('hey',this.state)
    }
    render(){
        //console.log('rendering ')

        
        if (this.state.clicked)  {
       
            return (
            
            <span>
               <button className = "Opener" onClick = {this.handleClicks}>{this.props.label} </button>      
               
                <div className = "modal"> <span onClick = {this.handleClicks} class="close">&times; </span><img alt = ' bacteria' className = "imgStyle" src = {imgSrcs[this.props.src]}/></div>
               
            </span>
        )}
        else {
            document.body.style.position = 'static'
            document.body.style.opacity = "1"
            return (
                <span> <button className = "Opener" onClick = {this.handleClicks}>{this.props.label} </button></span>
            )
        }
    }
}
export default PopUp