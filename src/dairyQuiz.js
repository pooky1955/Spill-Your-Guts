import sortQuizs from './sortQuizes'
let dairyQuiz = [{
        name: 'Non-fat milk',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 12,
            fiber: 0,
            protein: 8,
            fat: 0.2,
            calories: 83
        }
    },
    {
        name: '1% milk',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 12,
            fiber: 0,
            protein: 8,
            fat: 2.4,
            calories: 103
        }
    },
    {
        name: '2% milk',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 12,
            fiber: 0,
            protein: 8,
            fat: 4.9,
            highSaturatedFat: true,
            calories: 124

        }
    },
    {
        name: 'Whole milk',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 12,
            fiber: 0,
            protein: 8,
            fat: 8,
            highSaturatedFat: true,
            calories: 148
        }
    },
    {
        name: 'Plain nonfat greek yogurt',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 9,
            fiber: 0,
            probiotics: true,
            protein: 22,
            fat: 0,
            calories: 120
        }
    },
    {
        name: 'Whole yogurt',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 9,
            fiber: 0,
            probiotics: true,
            protein: 20,
            fat: 9,
            calories: 190
        }
    },
    {
        name: 'Butter',
        checked: false,
        portion: '1 tablespoon',
        nutrition: {
            carbs: 0,
            fiber: 0,
            highMonounsaturatedFat: true,
            protein: 0,
            fat: 11.5,
            highSaturatedFat: true,
            calories: 100
        }
    },
    {
        name: 'Almond milk',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 8,
            fiber: 1,
            protein: 1,
            fat: 2.5,
            calories: 60
        }
    },
    {
        name: 'Soy milk',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 9,
            fiber: 2,
            protein: 8,
            fat: 4.5,
            calories: 110
        }
    },
    {
        name: 'Oat milk',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 16,
            fiber: 2,
            protein: 3,
            fat: 5,
            calories: 120
        }
    },
    {
        name: 'Cashew milk',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 9,
            fiber: 0,
            protein: 0.5,
            fat: 2.5,
            calories: 60
        }
    },
    {
        name: 'Coconut milk',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 8,
            fiber: 1,
            protein: 0.5,
            fat: 4.5,
            highSaturatedFat: true,
            calories: 70
        }
    },
    {
        name: 'Vegan butter',
        checked: false,
        portion: '1 tablespoon',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 0,
            fat: 9,
            highSaturatedFat: true,
            calories: 80
        }
    },
    {
        name: 'Cream cheese',
        checked: false,
        portion: '1 tablespoon',
        nutrition: {
            carbs: 0.5,
            fiber: 0,
            protein: 1,
            fat: 5,
            highSaturatedFat: true,
            calories: 50
        }
    },
    {
        name: 'Cheddar',
        checked: false,
        portion: '1 cup shredded',
        nutrition: {
            carbs: 1.4,
            fiber: 0,
            protein: 28,
            fat: 37,
            highSaturatedFat: true,
            calories: 455
        }
    },
    {
        name: 'Mozzarella',
        checked: false,
        portion: '1 cup shredded',
        nutrition: {
            carbs: 3.5,
            fiber: 0,
            protein: 31,
            fat: 19,
            highSaturatedFat: true,
            calories: 316
        }
    },
    {
        name: 'American cheese',
        checked: false,
        portion: '1 cup shredded',
        nutrition: {
            carbs: 3.5,
            fiber: 0,
            protein: 31,
            fat: 19,
            highSaturatedFat: true,
            calories: 419
        }
    },
    {
        name: 'Brie',
        checked: false,
        portion: '1 cup shredded',
        nutrition: {
            carbs: 0.6,
            fiber: 0,
            protein: 30,
            fat: 40,
            highSaturatedFat: true,
            calories: 480
        }
    },
    {
        name: 'Provolone',
        checked: false,
        portion: '1 cup diced',
        nutrition: {
            carbs: 2.8,
            fiber: 0,
            protein: 34,
            fat: 35,
            highSaturatedFat: true,
            calories: 464
        }
    },
    {
        name: 'Feta',
        checked: false,
        portion: '1 cup crumbled',
        nutrition: {
            carbs: 6,
            fiber: 0,
            protein: 21,
            fat: 32,
            highSaturatedFat: true,
            calories: 396
        }
    },
    {
        name: 'Gouda',
        checked: false,
        portion: '100g',
        nutrition: {
            carbs: 2.2,
            fiber: 0,
            protein: 25,
            fat: 27,
            highSaturatedFat: true,
            calories: 356
        }
    },
    {
        name: 'Ricotta',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 7,
            fiber: 0,
            protein: 28,
            fat: 32,
            highSaturatedFat: true,
            calories: 428
        }
    },
    {
        name: 'Parmesan',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 4.1,
            fiber: 0,
            protein: 38,
            fat: 29,
            highSaturatedFat: true,
            calories: 431
        }
    },
    {
        name: 'Margarine',
        checked: false,
        portion: '1 tablespoon',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 0,
            fat: 12,
            highSaturatedFat: true,
            calories: 105
        }
    },
    {
        name : 'Ice cream',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked : false,
        portion : '1/2 cup',
        nutrition : {
            carbs : 16, 
            fiber : 0.5,
            protein : 2.3,
            fat : 7.3,
            highSaturatedFat: true,
            calories : 140
        }
     
    }
]
let quiz = sortQuizs(dairyQuiz, 'Dairy')
export default quiz