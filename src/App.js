import React, { Component } from 'react';
import './App.css';
import bacteriasForTraits from './bacterias';
import Footer from './components/Footer';
import PopUp from './components/PopUp';
//COMPONENTS
import Quiz from './components/Quiz';
import Toggle from './components/toggle';
import { getAllSections } from "./helpers";
import dailyDietLogo from './images/Food.png';
import generalInformationLogo from './images/Information.png';
import instructionsLogo from './images/Instructions.png';
import titleImage from './images/New Title.png';
import noSmokingImg from './images/nonsmoker.jpeg';
import noPolyphenolsImg from './images/nopolyphenols.jpeg';
import noProbioticsImg from './images/noprobiotics.jpeg';
import hasPolyphenolsImg from './images/polyphenols.jpeg';
//IMAGES
import hasProbioticsImg from './images/probiotics.jpeg';
import resultsTitleImg from './images/results.png';
import smokingImg from './images/smoker.jpeg';
import quizs from './quizs';
const initialState = {
    quizs: quizs,
    isMale: true,
    smoke: false,
    submittedIngredients: [],
    submitted: false
}
class App extends Component {

    constructor(props) {
        super(props)
        this.state = initialState
    }

    handleClicks = (e) => {
        let answerId = e.currentTarget.id
        let quizId = e.currentTarget.parentElement.className
        let newQuizs = this.state.quizs
        let quiz = newQuizs[Number(quizId)]
        //go over all checkboxes and get info
        if (e.currentTarget.type === 'checkbox') {
            for (let i = 0; i < quiz.length; i++) {
                if (quiz[i].name === answerId) {
                    quiz[i].checked = !quiz[i].checked
                    quiz[i].quantity = 0;
                }
            }
            this.setState({ quizs: newQuizs })
        } else if (e.currentTarget.type === 'number') {
            let answerId = e.currentTarget.id
            let quizId = e.currentTarget.parentElement.parentElement.className
            let newQuizs = this.state.quizs
            let quiz = newQuizs[Number(quizId)]
            for (let i = 0; i < quiz.length; i++) {
                if ((quiz[i].name + 1) === answerId) {
                    quiz[i].quantity = Number(e.currentTarget.value)
                }
            }
        }

    }
    handleSubmit = () => {
        let quizs = JSON.parse(JSON.stringify(this.state.quizs))
        let ingredients = []
        let negativeQuantity = false
        let filterFunc = (value) => {
            if (value.quantity < 0) { negativeQuantity = true; }
            return value.checked && (value.quantity > 0)
        }
        for (let i = 0; i < quizs.length; i++) {
            quizs[i] = quizs[i].filter(filterFunc)
            for (let j = 0; j < quizs[i].length; j++) {
                let ingredient = quizs[i][j]

                ingredients.push({ name: ingredient.name, quantity: ingredient.quantity, nutrition: ingredient.nutrition, family: ingredient.family })
            }
        }
        console.table(ingredients)
        console.log(this.state)
        let errorMessages = [];
        if (negativeQuantity) {
            errorMessages.push("Don't eat negative portions")
        }
        if (ingredients.length === 0) {
            errorMessages.push(`Make sure to fill "Your daily diet"`)
        }
        if (!this.state.weight || this.state.weight <= 0) {
            errorMessages.push("Enter your weight correctly")
        }
        if (errorMessages.length > 0) {

            this.setState({ idiotUser: true, submitted: false, errorMessages: errorMessages })
        } else {
            this.setState({ submittedIngredients: ingredients, submitted: true, idiotUser: false })
        }
        console.log(this.state)
    }
    searchFor = (bacterias) => {
        let foundBacterias = []
        const { submittedIngredients } = this.state
        for (let i = 0; i < submittedIngredients.length; i++) {
            for (let j = 0; j < bacterias.length; j++) {
                const searched = bacterias[j]
                //if in the nutrition, it contains the searched bacteria, push it
                if (submittedIngredients[i].nutrition[searched] !== undefined) {
                    foundBacterias.push(bacterias[j])
                    bacterias.splice(j, 1)
                }
            }
        }

        return foundBacterias
    }
    reset = () => {
        this.setState(initialState)
    }
    handleWeight = (e) => {
        let value = e.currentTarget.value
        let newState = this.state
        newState.weight = Number(value)
        this.setState(newState)
    }
    // handleSex = (e) => {

    //     let value = e.target.id ===
    //     let newState = this.state
    //     newState.isMale = value === 'man'
    //     this.setState(newState)

    // }
    handleToggle = (e) => {
        let isYes = e.target.id === 'yes'
        let toggleName = e.target.dataset.name
        let state = this.state
        state[toggleName] = isYes
        this.setState(state)
    }
    // handleSmokingClick = (e) => {
    //     let isYes = e.target.id === 'yes' ? true : false
    //     let state = this.state
    //     state.smoke = isYes
    //     this.setState(state)
    // }
    render() {
        if (this.state.submitted) {
            window.scroll(0, 0)
            const sections = getAllSections(this.state.submittedIngredients, this.state.isMale, this.state.weight)
            const style = {
                "textAlign": 'center'
            }
            let searchedBacterias = ['probiotics', 'polyphenols']
            let searchResults = this.searchFor(searchedBacterias)
            let hasProbiotics = false;
            let hasPolyphenols = false;
            for (let i = 0; i < searchResults.length; i++) {//searching for probiotics
                if (searchResults[i] === 'probiotics') {
                    hasProbiotics = true;
                }
                if (searchResults[i] === 'polyphenols') {
                    hasPolyphenols = true
                }
            }
            let polyphenolsSrc = hasPolyphenols ? hasPolyphenolsImg : noPolyphenolsImg
            let probioSrc = hasProbiotics ? hasProbioticsImg : noProbioticsImg

            let details = ['probiotics', 'polyphenols', 'smoking']
            details = details.map((trait) => {

                return (
                    <div className="BacteriasPopUp"> Learn more about {bacteriasForTraits[trait].map((el,idx) => { return <PopUp key = {idx} src={el} label={el} /> })}</div>
                )
            })

            return (
                <div style={style}>
                    <div className="Result">
                        <h1> <img src={resultsTitleImg} width='90%' alt="results" /> </h1>

                    </div>
                    <div className="Title">YOUR MACRONUTRIENTS</div>
                    {sections}
                    <div className="Title">PROBIOTICS AND POLYPHENOLS  </div>
                    <div className="Section">

                        <img className="ResultImage" alt='probiotics' src={probioSrc} />
                        {details[0]}
                    </div>

                    <div className="Section">
                        <img className="ResultImage" alt='polyphenols' src={polyphenolsSrc} />
                        {details[1]}
                    </div>
                    <div className="Title">YOUR HABITS</div>
                    <div className="Section">
                        <img className="ResultImage" alt='smoking' src={this.state.smoke ? smokingImg : noSmokingImg} />
                        {details[2]}
                    </div>

                    <button onClick={this.reset} className="Submit">Try Again</button>
                    <Footer />
                </div>


            )
        } else {
            let quizsComponents = this.state.quizs.map((element, index) => {

                return <Quiz
                    answers={element}
                    key={index}
                    handleClicks={this.handleClicks}
                    identifier={index} />
            })
            const myStyle = {
                "marginRight": 4
            }

            return (
                <div className="App">
                    <div>

                        <img src={titleImage} width='90%' alt="title" /> <br></br>
                        <br></br>
                        <div className="Intro">
                            <div id='instructions'>
                                <img src={instructionsLogo} alt="a logo" className='Logo' />INSTRUCTIONS
                            </div><br /><br />
                            Please input the foods that you eat in a typical day. Do you have the guts to do it? <br /><br />
                            < label htmlFor="weight">
                                <div id='instructions'>
                                    <img src={generalInformationLogo} alt='' className='Logo' />GENERAL INFORMATION
                                </div>
                                <br /><br />
                                Your Weight :
                            </label> <br />
                            <input type='number' id='weight' min='0' style={myStyle} onChange={this.handleWeight}></input>
                            <label htmlFor="weight">kg</label>
                            <br /><br></br>
                            <Toggle onYes={this.state.smoke} dataLabel="smoke" handleClick={this.handleToggle} label='Do you smoke?    ' /><br></br>
                            <Toggle onYes={this.state.isMale} dataLabel="isMale" handleClick={this.handleToggle} label="Select your biological sex    " />
                        </div>
                    </div>

                    <div id='instructions'> <img src={dailyDietLogo} className='Logo' alt=''></img>YOUR DAILY DIET</div> <br /><br />
                    <div className="Wrapper">
                        <div className="Quizs">
                            {quizsComponents}

                        </div>

                    </div>
                    <span>
                        <button className="Submit" type="submit" onClick={this.handleSubmit}>DONE</button> {this.state.idiotUser && <InvalidComponent errorMessages={this.state.errorMessages} />}
                    </span>

                    <Footer />

                </div>

            );
        }
    }
}
const InvalidComponent = (props) => {
    const { errorMessages } = props
    return (
        <div>
            {
                errorMessages.map((errorMessage) => <React.Fragment><p className="InvalidSubmit">{errorMessage}</p></React.Fragment>)
            }
        </div>
    )
}
export default App;
