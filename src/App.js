import React, {Component} from 'react';
import bacterias from './bacterias'
import './App.css';
import probiotics from './images/probiotics.jpeg'
import noprobiotics from './images/noprobiotics.jpeg'
import titleimage from './images/New Title.png'
import Quiz from './components/Quiz'
import PopUp from './components/PopUp'
import Toggle from './components/toggle'
import dictionnary from './imgSrc'
import meat from './images/meat.jpeg'
import plant from './images/plant.JPEG'
import smoking from './images/smoker.jpeg'
import noSmoking from './images/nonsmoker.jpeg'
import polyphenols from './images/polyphenols.jpeg'
import nopolyphenols from './images/nopolyphenols.jpeg'
import saturatedFat from './images/saturatedFat.jpeg'
import results from './images/results.png'
import unsaturatedFat from './images/unsaturatedFat.jpeg'
import instructions from './images/Instructions.png'
import information from './images/Information.png'
import Food from './images/Food.png'
import Footer from './components/Footer'
/*
import fruitsQuiz from './fruitsQuiz.js'
import ve from './vegetablesQuiz.js'
*/
import quizs from './quizs.js'
class App extends Component {

    constructor(props) {
        super(props)
        //console.log('handleClicks')
        //console.log(this.handleClicks)
        this.handleSmokingClick = this.handleSmokingClick.bind(this)
        this.handleClicks = this
            .handleClicks
            .bind(this)
        ////console.table(quizs[0])
        this.handleWeight = this
            .handleWeight
            .bind(this)
        this.handleSex = this.handleSex.bind(this)
        this.handleSubmit = this
            .handleSubmit
            .bind(this)
        //console.log(quizs)
        this.displayOnSubmit = this
            .displayOnSubmit
            .bind(this)
        this.state = {
            quizs: quizs,
            isMale : true,
            smoke : false
        }
        this.searchFor = this
            .searchFor
            .bind(this)
    }

    handleClicks(e) {
        let answerId = e.currentTarget.id
        let quizId = e.currentTarget.parentElement.className
        let newQuizs = this.state.quizs
        let quiz = newQuizs[Number(quizId)]
        if (e.currentTarget.type === 'checkbox') {
                   

            for (let i = 0; i < quiz.length; i++) {
               
                if (quiz[i].name === answerId) {
                    quiz[i].checked = !quiz[i].checked
                   
                        quiz[i].quantity = 0;
                    
                }

            }

            this.setState({quizs: newQuizs})
        } else if (e.currentTarget.type === 'number') {
            //console.log(e.currentTarget.value, 'value')
            let answerId = e.currentTarget.id

            let quizId = e.currentTarget.parentElement.parentElement.className

            let newQuizs = this.state.quizs
            let quiz = newQuizs[Number(quizId)]

            for (let i = 0; i < quiz.length; i++) {
                // //console.log(quiz[i].name,answerId)
                if ((quiz[i].name + 1) === answerId) {
                    quiz[i].quantity = Number(e.currentTarget.value)
                    ////console.log('fotrololololund it')
                }

            }

        }
        //search for the one with the right id

    }
    handleSubmit() {
      

        //console.log(this.state.quizs)
        let data = JSON.parse(JSON.stringify(this.state.quizs))
        let result = []
        let acceptable = true
        let filterFunc = (value) => {
            if (value.quantity < 0){acceptable = false;}
            return value.checked && (value.quantity > 0)
        }
        for (let i = 0; i < data.length; i++) {
            data[i] = data[i].filter(filterFunc)
            //console.table(data[i])
            for (let j = 0; j < data[i].length; j++) {
                let value = data[i][j]

                result.push({name: value.name, quantity: value.quantity, nutrition: value.nutrition,family : value.family})
            }
        }
        console.table(result)
        console.log(this.state)

        if (result.length === 0 || !this.state.weight || !acceptable ) {
            this.setState({idiotUser: true,submitted:false})
        } else {

            this.setState({info: result, submitted: true, idiotUser: false})
        }
        console.log(this.state)
    }
    searchFor(bacterias) {
        let found = []
        for (let i = 0; i < this.state.info.length; i++) {
            for (let j = 0; j < bacterias.length; j++) {
                if (this.state.info[i].nutrition[bacterias[j]]) {
                    found.push(bacterias[j])
                    bacterias.splice(j, 1)
                }
            }
        }

        return found
    }
    displayOnSubmit() {
        let data = this.state.info
        console.log('hey',this.state)
        let getNutrimentTotal = (nutriment) => {
            let arr = data.map((value) => {
                return value.quantity * value.nutrition[nutriment]
            })
            /*console.log(arr, arr.reduce((acc, el) => {
                return acc + el
            }))*/
            return arr.reduce((acc, el) => {
                return acc + el
            })

        }/* addons = {
      high : 'some text'
      normal : 'another text'
      low : 'and some other text!'
    }*/
      

        let calculateProportions = (separator, nutriment, totals,threshold,maxM,maxF) => {
            console.log({separator,nutriment,totals,threshold,maxM,maxF})
            console.log(nutriment/totals,'<?',separator)
            let max = this.state.isMale? maxM : maxF
            
            console.log(`is male ${this.state.isMale} so the max is ${max} from ${maxM} and ${maxF} `)
            if (nutriment > max){
                console.log(`${nutriment} g > ${max}`)
                return 'high'
               
            }
            else if (nutriment / totals < separator-threshold) {
                return 'low'
            } else if (nutriment/ totals >= separator+threshold) {
                return 'high'
            }else {
                return 'normal'
            }

        }
       
        let totalFat = Math.round(getNutrimentTotal('fat'))
        let totalCarbs = Math.round(getNutrimentTotal('carbs'))
        let totalFibers = Math.round(getNutrimentTotal('fiber'))
        let totalProteins = Math.round(getNutrimentTotal('protein'))
        let totalCalories = Math.round(getNutrimentTotal('calories'))
        let total = totalCarbs + totalFat + totalProteins
        let fatLevel = calculateProportions(0.35, totalFat, total,0,97,78)
        let carbsLevel = calculateProportions(0.55, totalCarbs, total,0,406.25,325)
        
        if (total === 0){
            this.setState({idiotUser: true})
        }
        let fiberLevel = calculateProportions(25,totalFibers,1,0)
        let proteinLevel = calculateProportions(1.15,totalProteins,this.state.weight,0.35)
        const returnData = {
           
            fat: totalFat,
           
            carbs: totalCarbs,
       
            protein:  totalProteins,
            calories: totalCalories,
            fiber :  totalFibers, 
        
        
        }
        function generateMessage(nutriment,level,label,addons,bacterias){
           // let searchString = level+nutriment
          //  console.log(dictionnary[nutriment],level)
          let popUps,popUpcomponents;    
       
          if (!bacterias){
            popUps = dictionnary[nutriment][level]['bacterias']
            console.log(nutriment,'if')
        }else {
            popUps = bacterias
            console.log(bacterias)
            console.log(nutriment,'else')
        }   
       
      
        popUpcomponents = popUps.map((el)=>{
            return <PopUp src = {el} label = {el}/>
        })
        
            let bacteriasPopUp = popUps.length > 0? <div className = "BacteriasPopUp" >Learn more about {popUpcomponents}</div>:<span></span>
            return (<div className = "Section"><span className = "title" ><span className="Label">{label}</span> <br></br><span className = "Quantity">{ returnData[nutriment]}g </span></span><img alt = 'some info ' src = {dictionnary[nutriment][level]['src']} className = "ResultImage" />{addons}{bacteriasPopUp}</div>)
        }
        let hasMeats =false;
        for (let i =0 ; i < this.state.info.length; i++){
            console.log(this.state.info[i],'hey')
            if (this.state.info[i].family === 'Meats'){
                hasMeats = true
            }
        }
        let saturated = 0
        let monosaturated = 0
        for (let i = 0; i < this.state.info.length;i++){
            console.log(this.state.info[i],'current')
            if (this.state.info[i].nutrition.highSaturatedFat){

                saturated+= this.state.info[i].quantity
            }
            if (this.state.info[i].nutrition.highMonounsaturatedFat){
                monosaturated+= this.state.info[i].quantity
            }
        }
        let fatType = 'none',fatSrc;

       
        if (saturated >= monosaturated){
            fatType = 'saturated'
            fatSrc = saturatedFat
        }else {
            fatType = 'monosaturated'
            fatSrc = unsaturatedFat
        }
        let popUps = dictionnary['fat'][fatLevel].bacterias
        let addOns = dictionnary['fat'][fatType]
        for (let i = 0; i < addOns.length;i++){
            popUps.push(addOns[i])
        }
        popUps = popUps.filter((value,index,arr)=>{return arr.indexOf(value) === index})
        let popUpcomponents = popUps.map((value)=>{
            return <PopUp src = {value} label = {value}/>
        })
        let bacteriasPopUp = popUps.length > 0 && (fatType !== 'none')? <div className = "BacteriasPopUp" >Learn more about {popUpcomponents}</div>:<span>Nothing to learn on</span>
        let fatStuff = <div className = "Section"><span className = "title" ><span className="Label">FATS</span> <br></br><span className = "Quantity">{ returnData['fat']}g </span></span><img alt = 'some info ' src = {dictionnary['fat'][fatLevel]['src']} className = "ResultImage" /><img src = {fatSrc} alt = '' className = "ResultImage"/>{bacteriasPopUp}</div>
        let meatType,meatSrc;
        if (hasMeats){
            meatType = 'bacteriasalt'
            meatSrc = meat
        }else {
            meatType = 'bacterias'
            meatSrc = plant
        }
        
         meatType = proteinLevel === 'low'? undefined : meatType 
        let meatImage = proteinLevel==='low'?<span></span>:<img src = {meatSrc} alt = "meat" className = "ResultImage"/>
       
        let carbsMessage = generateMessage('carbs',carbsLevel,'CARBS')
        let proteinMessage = generateMessage('protein',proteinLevel,'PROTEINS',meatImage,dictionnary['protein'][proteinLevel][meatType])
        let fiberMessage = generateMessage('fiber',fiberLevel,'FIBERS')
        let messages = [fatStuff,carbsMessage,fiberMessage,proteinMessage]
       returnData.messages = messages
        return (returnData)
    }
    handleWeight(e) {
        let value = e.currentTarget.value
        let newState = this.state
        newState.weight = Number(value)
        this.setState(newState)
    }
    handleSex(e){
      
        let value = e.target.value
        let newState = this.state
        newState.isMale = value === 'man'
        this.setState(newState)
      
    }
    handleSmokingClick(e){
        let isYes = e.target.id === 'yes'? true : false
        let state = this.state
        state.smoke = isYes
        this.setState(state)
    }
    render() {
        if (this.state.submitted) {
            window.scroll(0,0)
            let total = this.displayOnSubmit()
            const style = {
                "textAlign": 'center'
            }
            let searchedBacterias = ['probiotics','polyphenols']
            let searchResults = this.searchFor(searchedBacterias)
            let hasProbiotics = false;
            let hasPolyphenols =false;
            for (let i = 0;i < searchResults.length; i++){//searching for probiotics
                if (searchResults[i] === 'probiotics'){
                    hasProbiotics = true;
                }
                if (searchResults[i] === 'polyphenols'){
                    hasPolyphenols = true
                }
            }
        let polyphenolsSrc = hasPolyphenols?polyphenols:nopolyphenols
        let probioSrc = hasProbiotics?probiotics:noprobiotics

            let details = ['probiotics','polyphenols','smoking']
            details =details.map((value) => {

                return (
                    <div className = "BacteriasPopUp"> Learn more about {bacterias[value].map((el)=>{return <PopUp src = {el} label = {el}/>}) }</div>
                )
            })
      
            return (
                <div style={style}>
                    <div className = "Result">
                        <h1> <img src = {results} width='90%' alt= "results"/> </h1>

                    </div>
                 <div className="Title">YOUR MACRONUTRIENTS</div>
                        {total.messages}
                       
                        <div className="Title">PROBIOTICS AND POLYPHENOLS  </div>
                        <div className = "Section">

                        <img className = "ResultImage" alt = 'probiotics'src = {probioSrc}/>
                        {details[0]}
                        </div>
                        
                        <div className="Section">
                        <img className = "ResultImage" alt = 'polyphenols'src = {polyphenolsSrc}/>
                        {details[1]}
                        </div>
                        <div className="Title">YOUR HABITS</div>
                        <div className = "Section"> 
                        <img className = "ResultImage"  alt = 'smoking' src = {this.state.smoke? smoking: noSmoking}/>
                        {details[2]}
                        </div>

                        <button onClick = {function lol(){document.location.reload(true)}}className = "Submit">Try Again</button>
                        <Footer/>
                    </div>

              
            )
        } else {
            let quizsComponents = this
                .state
                .quizs
                .map((element, index) => {
                    return <Quiz
                        answers={element}
                        key={index}
                        handleClicks={this.handleClicks}
                        identifier={index}/>
                })
            const myStyle = {
                "marginRight": 4

            }

            let invalid = this.state.idiotUser
                ? <span className="InvalidSubmit">Be sure to answer the form correctly</span>
                : <span></span>
            return (
                <div className="App">


                    <div>
                   
                    <img src ={titleimage} width ='90%' alt="title"/> <br></br>
                       
{/* <p></p> <div className="click"> <a href="" className= "links">The Gut Microbiome</a> <a href= "" className = "links" >Meet your Bacteria</a><a href=""className = "links" >Take the Quiz</a><a href=""className = "links" >About Us</a> <p></p></div><br></br> */}
                        <br></br><div className="Intro">
                            <div id = 'instructions'> <img src = {instructions} alt = "a logo" className = 'Logo'></img>INSTRUCTIONS</div><br/><br></br>

                           
                Please input the foods that you eat in a typical day. Do you have the guts to do it? <br></br><br></br>< label htmlFor = "weight">
                <div id = 'instructions'> <img src = {information} alt = ''className = 'Logo'></img>GENERAL INFORMATION </div> <br></br>
                <br/>Your Weight : </ label> <br></br>                         <input
                            type='number'
                            id='weight'
                            min='0'
                            style={myStyle}
                            onChange={this.handleWeight}></input>
                        <label htmlFor="weight">kg</label>
                        <br/><br></br>
                        <Toggle onYes = {this.state.smoke} handleClick = {this.handleSmokingClick} label = 'Do you smoke?    '/><br></br>
                   
                        <span>Select your biological sex</span>
                        <br/>
                        <select onChange = {this.handleSex}>
                            <option value="man"> Man</option>
                            <option value="woman"> Woman</option>
                        </select>
                        
                    </div>
                </div>
                <div id = 'instructions'> <img src = {Food} className = 'Logo' alt = ''></img>YOUR DAILY DIET</div> <br/><br/>
                <div className = "Wrapper">
                <div className="Quizs">
                    {quizsComponents}
              
                </div>
               
                </div>
               <p> <button className = "Submit" onClick={this.handleSubmit}>DONE</button> {invalid}</p>
               <Footer/>
               
                </div>
           
            );
        }
    }
}

export default App;
