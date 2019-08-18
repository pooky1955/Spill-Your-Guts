
import React from 'react'
import Answer from './Answer'

import './Quiz.css'
/*
Ze plan :
make props : isShortened
if (isShortened){
    return (<h1>{this.props.sectionnnAME}</h1>)
}ELSE {
    RETURN (<H1> {THIS.PROPS.SECTION}</H1>
    +ALL INPUTS OPTIONS    
        )
}
*/ 

class Quiz extends React.Component {
    constructor(props){
             
        super(props)
        this.props = props
        
        this.state = {
            short : true,
            searchedWord : ''    
        }
        this.onChangeView = this.onChangeView.bind(this)
        this.handleSearchChange = this.handleSearchChange.bind(this)
        this.getList = this.getList.bind(this)
    }
    
    onChangeView(){
        //console.log('hey im changing view')
        let newState = !this.state.short
        this.setState({
            short : newState
        })
    }
    /**
     * <a href = "your link"> placeholder </a>
     */
    handleSearchChange(e){
        let filter = e.target.value
        filter = filter.toLowerCase()
        this.setState({searchedWord : filter})
    }
    getList(){
        if (this.state.searchedWord === ''){
            return this.props.answers
        } else {
            
            let filtered = this.props.answers.filter((answer)=>{
                let name = answer.name.toLowerCase()
                return name.includes(this.state.searchedWord)
            })
            return filtered
        }
    }
    render(){
    
       
        //console.table(this.props.answers)
        let answerArr = this.getList()
        let components = this.state.short? <span></span>:answerArr.map((answer) => {
            return <Answer portion = {answer.portion} quantity = {answer.quantity} name = {answer.name} identifier = {this.props.identifier} className = "Answer" checked = {answer.checked} key = {answer.name} onChange = {this.props.handleClicks}/>
        })
        let message = this.state.short? 'more' : 'less'
        let searchBar = this.state.short? <span></span>:<input onChange = {this.handleSearchChange} placeholder = "Search..." type = "text" className = "SearchBar"></input>
        return (
         
            <div>
              
                    
                    <span><h1 className = "FoodCategory">Food category : {this.props.answers[0].family}     <button className = "ChangeView" onClick = {this.onChangeView}> View {message}</button></h1></span>
                        {searchBar}
                        <div text-align = 'left'>
                        {components}
                        </div>
               
            </div>)
    }
}
export default Quiz