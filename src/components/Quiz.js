
import React, { Fragment } from 'react'
import Answer from './Answer'

import './Quiz.css'

class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            collapsed: true,
            searchedWord: ''
        }
    }

    onChangeView = ()=> {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    handleSearchChange = (e)=> {
        let searchedWord = e.target.value
        searchedWord = searchedWord.toLowerCase()
        this.setState({ searchedWord })
    }
    getList = ()=> {
        const { answers } = this.props
        if (this.state.searchedWord === '') {
            return answers
        } else {

            let filteredAnswers = answers.filter((answer) => {
                let name = answer.name.toLowerCase()
                return name.includes(this.state.searchedWord)
            })
            return filteredAnswers
        }
    }
    render() {
        const { collapsed } = this.state
        let message = collapsed ? 'more' : 'less'
        const family = this.props.answers[0].family
        return (
            <div>
                <h1 className="FoodCategory">Food category : {family}     <button className="ChangeView" onClick={this.onChangeView}> View {message}</button></h1>

                {!collapsed && <Fragment>
                    <SearchBar handleSearchChange={this.handleSearchChange} />
                    <Answers answerArr={this.getList()} handleClicks = {this.props.handleClicks} identifier = {this.props.identifier} />
                </Fragment>}
            </div>)
    }
}
//Search bar for finding food in section
const SearchBar = (props) => {
    const { handleSearchChange } = props
    return (<input onChange={handleSearchChange} placeholder="Search..." type="text" className="SearchBar"></input>)
}
//mapping choices to components
const Answers = (props) => {
    const { answerArr, handleClicks, identifier  } = props
    let answersComponents = answerArr.map((answer) => {
        return <Answer portion={answer.portion} quantity={answer.quantity} name={answer.name} identifier={identifier} className="Answer" checked={answer.checked} key={answer.name} onChange={handleClicks} />
    })
    return (
        <div text-align="left">
            {answersComponents}
        </div>
    )
}
export default Quiz