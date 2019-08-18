import sortQuizs from './sortQuizes'
let oilQuiz = [{
        name: 'Olive oil',
        checked: false,
        portion: '1 tablespoon',
        nutrition: {
            carbs: 0,
            polyphenols: true, 
            fiber: 0,
            protein: 0,
            highMonounsaturatedFat: true,
            fat: 14,
            calories: 125
        }
    },
    {
        name: 'Avocado oil',
        checked: false,
        portion: '1 tablespoon',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 0,
            fat: 14,
            calories: 120
        }
    },
    {
        name: 'Canola oil',
        checked: false,
        portion: '1 tablespoon',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 0,
            fat: 14,
            highMonounsaturatedFat: true,
            calories: 120
        }
    },
    {
        name: 'Sunflower oil',
        checked: false,
        portion: '1 tablespoon',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 0,
            fat: 14,
            highMonounsaturatedFat: true,
            calories: 120
        }
    },
    {
        name: 'Coconut oil',
        checked: false,
        portion: '1 tablespoon',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 0,
            highSaturatedFat: true,
            fat: 14,
            calories: 120
        }
    },
    {
        name: 'Peanut butter',
        checked: false,
        portion: '1 tablespoon',
        nutrition: {
            carbs: 3.5,
            fiber: 1,
            protein: 4,
            fat: 8,
            highSaturatedFat: true,
            calories: 100
        }
    },
    {
        name: 'Almond butter',
        checked: false,
        portion: '1 tablespoon',
        nutrition: {
            carbs: 3.5,
            fiber: 0.5,
            protein: 2.5,
            fat: 9.5,
            calories: 100
        }
    },
    {
        name: 'Sesame oil',
        checked: false,
        portion: '1 tablespoon',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 0,
            fat: 14,
            calories: 120
        }
    }
]
let quiz = sortQuizs(oilQuiz, 'Oil')
export default quiz