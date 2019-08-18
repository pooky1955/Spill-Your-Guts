import sortQuizs from './sortQuizes'
let meatsQuiz = [{
        name: 'Beef',
        //rating : 'bad',
        //info : 'not enough microbes',
        portion: '100 g',
        checked: false,

        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 17.2,
            fat: 20,
            highSaturatedFat: true,
            calories: 254
        }

    },
    {
        name: 'Chicken',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '100g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 17.4,
            fat: 8.1,
            calories: 143
        }

    },
    {
        name: 'Egg',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '1 large',
        nutrition: {
            carbs: 0.6,
            fiber: 0,
            protein: 6,
            highUnsaturatedFat: true,
            fat: 6,
            calories: 78
        }

    },

    {
        name: 'Duck',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '100g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 18.3,
            fat: 5.9,
            calories: 132
        }

    },
    {
        name: 'Rabbit',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '100g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 20,
            fat: 5.5,
            calories: 136
        }

    },
    {
        name: 'Foie gras',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '100g',
        nutrition: {
            carbs: 4.7,
            fiber: 0,
            protein: 3.23,
            fat: 12.43,
            calories: 462
        }

    },
    {
        name: 'Lamb',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '100 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 16.6,
            fat: 23.4,
            highSaturatedFat: true,
            calories: 282

        }

    },
    {
        name: 'Pork (bacon, ham prosciutto, salami, sausage)',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '100 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 16.9,
            fat: 21,
            highSaturatedFat: true,
            calories: 263

        }

    },
    {
        name: 'Turkey',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '100g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 17.5,
            fat: 8.3,
            calories: 149
        }

    },
    {
        name: 'Veal',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '100g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 24,
            fat: 8,
            calories: 172
        }

    },
    {
        name: 'Venison',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '100g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 21.8,
            fat: 7.1,
            calories: 157
        }

    },
    {
        name: 'Bison',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '100g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 20.2,
            fat: 7.2,
            calories: 146
        }

    },
    {
        name: 'Goose',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '100g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 22.8,
            fat: 7.1,
            calories: 161
        }

    },
    {
        name: 'Pheasant',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '100g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 22.7,
            fat: 9.3,
            calories: 181
        }

    },
    {
        name: 'Wild boar',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked: false,
        portion: '100g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 28.3,
            fat: 4.4,
            calories: 160
        }


    },
    {
        name: 'Blue Crab',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 20,
            fat: 1,
            calories: 100
        }


    },
    {
        name: 'Catfish',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 17,
            fat: 6,
            calories: 130
        }


    },
    {
        name: 'Clams',
        checked: false,
        portion: '12 small',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 17,
            fat: 1.5,
            calories: 110
        }


    },
    {
        name: 'Cod',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 20,
            fat: 1,
            calories: 90
        }


    },
    {
        name: 'Flounder / Sole',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 19,
            fat: 1.5,
            calories: 100
        }


    },
    {
        name: 'Haddock',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 21,
            fat: 1,
            calories: 100
        }


    },
    {
        name: 'Halibut',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 23,
            fat: 2,
            calories: 120
        }


    },
    {
        name: 'Lobster',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 17,
            fat: 0.5,
            calories: 80
        }


    },
    {
        name: 'Ocean Perch',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 21,
            fat: 2,
            calories: 110
        }


    },
    {
        name: 'Orange Roughy',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 16,
            fat: 1,
            calories: 80
        }


    },
    {
        name: 'Oysters',
        checked: false,
        portion: '12 medium',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 10,
            fat: 4,
            calories: 100
        }


    },
    {
        name: 'Pollock',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 20,
            fat: 1,
            calories: 90
        }


    },
    {
        name: 'Rainbow Trout',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 20,
            fat: 6,
            calories: 140
        }


    },
    {
        name: 'Rockfish',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 21,
            fat: 2,
            calories: 110
        }


    },
    {
        name: 'Salmon (Atlantic/ Coho/ Sockeye/ Chinook)',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 24,
            highUnsaturatedFat: true,
            fat: 10,
            calories: 200
        }


    },
    {
        name: 'Salmon (chum/ pink)',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 22,
            highUnsaturatedFat: true,
            fat: 4,
            calories: 130
        }


    },
    {
        name: 'Scallops',
        checked: false,
        portion: '6 large or 14 small',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 27,
            fat: 1,
            calories: 140
        }


    },
    {
        name: 'Shrimp',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 21,
            fat: 1.5,
            calories: 100
        }


    },
    {
        name: 'Swordfish',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 16,
            fat: 6,
            calories: 120
        }


    },
    {
        name: 'Tilapia',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 22,
            fat: 2.5,
            calories: 110
        }


    },
    {
        name: 'Tuna',
        checked: false,
        portion: '84 g',
        nutrition: {
            carbs: 0,
            fiber: 0,
            protein: 26,
            highUnsaturatedFat: true,
            fat: 1.5,
            calories: 130

        }


    },
]
let quiz = sortQuizs(meatsQuiz, 'Meats')
export default quiz