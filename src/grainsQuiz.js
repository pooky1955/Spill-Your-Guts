import sortQuizs from './sortQuizes'
let grainsQuiz = [{
        name: 'White rice',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '1 cup cooked',
        nutrition: {
            carbs: 36.7,
            fiber: 1.7,
            protein: 3.5,
            fat: 0.3,
            calories: 168
        }
    },
    {
        name: 'Brown rice',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '1 cup cooked',
        nutrition: {
            carbs: 45.8,
            fiber: 3.5,
            protein: 4.5,
            bifidobacteria: true,
            fat: 1.6,
            calories: 218
        }
    },
    {
        name: 'Black rice',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '1/3 cup dry',
        nutrition: {
            carbs: 43,
            fiber: 3,
            protein: 6,
            fat: 2,
            calories: 200
        }

    },
    {
        name: 'Quinoa',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '1 cup cooked',
        nutrition: {
            carbs: 39,
            fiber: 5,
            protein: 8,
            bifidobacteria: true,
            fat: 3.6,
            calories: 223
        }

    },
    {
        name: 'Oats',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '1/2 cup dry',
        nutrition: {
            carbs: 27,
            fiber: 4,
            protein: 5,
            bifidobacteria: true,
            fat: 3,
            calories: 150
        }

    },
    {
        name: 'White Flour',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 95.4,
            fiber: 3.4,
            protein: 12.9,
            fat: 1.2,
            calories: 455
        }

    },
    {
        name: 'Whole-wheat flour',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 108,
            bifidobacteria: true,
            fiber: 20,
            protein: 24,
            fat: 2,
            calories: 560
        }

    },
    {
        name: 'White bread',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '1 slice',
        nutrition: {
            carbs: 12.5,
            fiber: 0.8,
            protein: 2.1,
            fat: 0.9,
            calories: 67
        }

    },
    {
        name: 'Whole-wheat bread',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '1 slice',
        nutrition: {
            carbs: 12.9,
            fiber: 1.9,
            protein: 2.7,
            fat: 1.2,
            calories: 68
        }

    },
    {
        name: 'White pasta/noodle',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '1 cup dry',
        nutrition: {
            carbs: 78,
            fiber: 3.4,
            protein: 14,
            fat: 1.6,
            calories: 390
        }

    },
    {
        name: 'Whole-wheat pasta/noodle',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '1 cup dry',
        nutrition: {
            carbs: 54.7,
            fiber: 6.7,
            protein: 10.7,
            fat: 2,
            calories: 280
        }

    },
    {
        name: 'Barley',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '1 cup cooked',
        nutrition: {
            carbs: 44.3,
            fiber: 6,
            bifidobacteria: true,
            protein: 3.5,
            fat: 0.7,
            calories: 193
        }
    },
    {
        name: 'Buckwheat groats',
        checked: false,
        portion: '1 cup cooked',
        nutrition: {
            carbs: 33.5,
            bifidobacteria: true,
            fiber: 4.5,
            protein: 5.5,
            fat: 1,
            calories: 150
        }
    },
    {
        name: 'Popcorn (air-popped)',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 6,
            fiber: 1,
            protein: 1,
            bifidobacteria: true,
            fat: 0.5,
            calories: 30
        }
    },
    {
        name: 'Popcorn (oil-popped)',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 4.5,
            fiber: 1,
            bifidobacteria: true,
            protein: 0.5,
            fat: 2,
            calories: 40
        }
    },
    {
        name: 'Popcorn (microwave)',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 5,
            fiber: 1,
            bifidobacteria: true,
            protein: 1,
            fat: 5,
            calories: 65
        }
    },
    {
        name: 'Rye bread ',
        checked: false,
        portion: '1 slice',
        nutrition: {
            carbs: 12,
            fiber: 1.5,
            protein: 2,
            fat: 1,
            calories: 65
        }
    },
    {
        name: 'Millet',
        checked: false,
        portion: '1 cup cooked',
        nutrition: {
            carbs: 41,
            bifidobacteria: true,
            fiber: 2.5,
            protein: 6,
            fat: 1.5,
            calories: 205
        }
    },
    {
        name: 'Sorghum',
        checked: false,
        portion: '1/4 cup cooked',
        nutrition: {
            carbs: 36,
            fiber: 3,
            protein: 5,
            fat: 1.5,
            calories: 165
        }
    },
    {
        name: 'Amaranth',
        checked: false,
        portion: '1 cup cooked',
        nutrition: {
            carbs: 46,
            fiber: 5,
            protein: 9,
            bifidobacteria: true,
            fat: 4,
            calories: 250
        }
    },
    {
        name: 'Bulgur',
        checked: false,
        portion: '1 cup cooked',
        nutrition: {
            carbs: 34,
            fiber: 8,
            protein: 6,
            fat: 0.5,
            bifidobacteria: true,
            calories: 150
        }
    },
    {
        name: 'Corn',
        checked: false,
        portion: '3 cup cooked',
        nutrition: {
            carbs: 39,
            fiber: 7,
            bifidobacteria: true,
            protein: 3.5,
            fat: 1,
            calories: 175
        }
    }

]
let quiz = sortQuizs(grainsQuiz, 'Grains')
export default quiz