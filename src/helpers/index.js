import React from "react"
import nutrientsLevelBateriasDictionnary from "../imgSrc"
import PopUp from "../components/PopUp"
import meatProteinsImg from "../images/meat.jpeg"
import plantProteinsImg from "../images/plant.JPEG"
import unsaturatedFatImg from "../images/unsaturatedFat.jpeg"
import saturatedFatImg from "../images/saturatedFat.jpeg"
export function generateSection(nutriment, quantity, level, label, additionalComponents, bacterias) {
    let bacteriaNames;

    if (bacterias === undefined) {
        bacteriaNames = nutrientsLevelBateriasDictionnary[nutriment][level]['bacterias']
    } else {
        bacteriaNames = bacterias
    }


    const bacteriasPopUp = bacteriaNames.map((bacteriaName) => {
        return <PopUp src={bacteriaName} label={bacteriaName} />
    })
    const nutrientImg = nutrientsLevelBateriasDictionnary[nutriment][level]['src']
    return (
        <div className="Section">
            <span className="title" >
                <span className="Label">
                    {label}
                </span>
                <br />
                <p className="Quantity">{quantity}g </p>
            </span>
            <img alt='some info ' src={nutrientImg} className="ResultImage" />
            {additionalComponents}
            {bacteriaNames.length > 0 && <LearnMoreComponent popUpcomponents={bacteriasPopUp} />}
        </div >
    )
}
const LearnMoreComponent = (props) => {
    const { popUpcomponents } = props
    return (
        <div className="BacteriasPopUp" >Learn more about {popUpcomponents}</div>
    )
}
/**
 * 
 * @param {String} nutriment
 * @param {any[]} submittedIngredients 
 */
const getNutrimentTotal = (nutriment, submittedIngredients) => {
    let arr = submittedIngredients.map((value) => {
        return value.quantity * value.nutrition[nutriment]
    })
    return arr.reduce((acc, el) => {
        return acc + el
    })

}
/**
 * 
 * @param {Number} separator 
 * @param {Number} nutrimentGrams Amount in grams of the nutriment
 * @param {Number} divider 
 * @param {Number} threshold 
 * @param {Number} maxM maximum for a male
 * @param {Number} maxF maximum for a female
 * @param {boolean} isMale 
 */
const calculateLevel = (separator, nutrimentGrams, divider, threshold, maxM, maxF, isMale) => {
    let max = isMale ? maxM : maxF
    const percentageOfTotal = nutrimentGrams / divider
    if (nutrimentGrams > max) {
        return 'high'
    }
    else if (percentageOfTotal < separator - threshold) {
        return 'low'
    } else if (percentageOfTotal >= separator + threshold) {
        return 'high'
    } else {
        return 'normal'
    }

}
function getAllLevels(nutrimentAmount, isMale, weight) {
    const total = nutrimentAmount.carbs + nutrimentAmount.fat + nutrimentAmount.protein
    const fatLevel = calculateLevel(0.35, nutrimentAmount.fat, total, 0, 97, 78, isMale)
    const carbsLevel = calculateLevel(0.55, nutrimentAmount.carbs, total, 0, 406.25, 325, isMale)

    const fiberLevel = calculateLevel(25, nutrimentAmount.fiber, 1, 0, Infinity, Infinity, isMale)
    const proteinLevel = calculateLevel(1.15, nutrimentAmount.protein, weight, 0.35, Infinity, Infinity, isMale)
    const nutrimentLevel = {
        fat: fatLevel,
        carbs: carbsLevel,
        fiber: fiberLevel,
        protein: proteinLevel,
    }
    return nutrimentLevel
}
function getAllNutrimentTotals(submittedIngredients) {

    const nutriments = ['fat', 'carbs', 'fiber', 'protein', 'calories']
    const nutrimentTotals = {}
    for (let nutrimentName of nutriments) {
        nutrimentTotals[nutrimentName] = Math.round(getNutrimentTotal(nutrimentName, submittedIngredients))
    }
    return nutrimentTotals
}
function getFatType(submittedIngredients) {
    // by the way... monosaturated fat is the same as unsaturated in this code.. yea sorry
    let saturated = 0
    let monosaturated = 0
    for (const ingredient of submittedIngredients) {
        if (ingredient.nutrition.highSaturatedFat !== undefined) {
            saturated += ingredient.quantity
        }
        if (ingredient.nutrition.highMonounsaturatedFat !== undefined) {
            monosaturated += ingredient.quantity
        }
    }
    if (saturated === 0 && monosaturated === 0) {
        return [undefined,"none"]
    }
    if (saturated >= monosaturated) {
        return [saturatedFatImg, "saturated"]
    } else {
        return [unsaturatedFatImg, "monosaturated"]
    }

}
function getFatRelatedBacterias(nutrimentLevelsBacteriasDictionnary, fatType,fatLevel) {

    const extraBacterias4FatType = nutrimentLevelsBacteriasDictionnary['fat'][fatLevel].bacterias
    let bacterias4Fat = []
    if (fatType !== "none") {
        bacterias4Fat =  bacterias4Fat.concat(nutrimentLevelsBacteriasDictionnary['fat'][fatType])
    }
    let AllBacterias4Fat = extraBacterias4FatType.concat(bacterias4Fat)
    AllBacterias4Fat = removeDuplicates(AllBacterias4Fat)
    return AllBacterias4Fat
}
function removeDuplicates(arr) {
    return arr.filter((value, index, arr) => arr.indexOf(value) === index)
}
function getHasMeats(submittedIngredients){
    let hasMeats = false;
    for (const ingredient of submittedIngredients) {
        if (ingredient.family === 'Meats') {
            hasMeats = true
        }
    }
    return hasMeats
}
function generateAddOnProteinSection(proteinLevel,hasMeats) {
    
    let  meatSrc;
    if (hasMeats) {
        meatSrc = meatProteinsImg
    } else {
        meatSrc = plantProteinsImg
    }

    let meatImage = proteinLevel === 'low' ? <span></span> : <img src={meatSrc} alt="meat" className="ResultImage" />
    return meatImage
}
function getProteinRelatedBacterias(nutrientsLevelBateriasDictionnary,proteinLevel,hasMeats){
    let proteinType = hasMeats? "meatBacterias" : "plantBacterias"
    return nutrientsLevelBateriasDictionnary['protein'][proteinLevel][proteinType]
}
export function getAllSections(submittedIngredients, isMale, weight) {
    const nutrimentTotals = getAllNutrimentTotals(submittedIngredients)
    const nutrimentLevels = getAllLevels(nutrimentTotals, isMale, weight)
    const [fatImgSrc, fatType] = getFatType(submittedIngredients)
    const fatBacterias = getFatRelatedBacterias(nutrientsLevelBateriasDictionnary,fatType,nutrimentLevels.fat)
    const fatImg = fatType !== "none" ? <img alt = "Fat type" src={fatImgSrc} className="ResultImage" /> : undefined
    const fatSection = generateSection('fat', nutrimentTotals.fat, nutrimentLevels.fat, 'FAT', fatImg, fatBacterias)
    const carbsSection = generateSection('carbs', nutrimentTotals.carbs, nutrimentLevels.carbs, 'CARBS')
    
    const hasMeats = getHasMeats(submittedIngredients)
    const proteinAddOns = generateAddOnProteinSection(nutrimentLevels.protein,hasMeats)
    const proteinBacterias = getProteinRelatedBacterias(nutrientsLevelBateriasDictionnary,nutrimentLevels.protein,hasMeats)
    const proteinSection = generateSection('protein', nutrimentTotals.protein, nutrimentLevels.protein, 'PROTEINS',proteinAddOns,proteinBacterias) 

    const fiberSection = generateSection('fiber', nutrimentTotals.fiber, nutrimentLevels.fiber, 'FIBERS')

    const sections = [fatSection, carbsSection, fiberSection, proteinSection]
    return sections
}