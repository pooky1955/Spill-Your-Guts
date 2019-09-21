import sortQuiz from './sortQuizes'
let fruitsQuiz = [
    {
        name: 'Apple',
        checked: false,
        portion: '1 large',
        nutrition: {
            carbs: 34,
            polyphenols: true,
            fiber: 5,
            protein: 1,
            fat: 0,
            calories: 120
        }

    },
    {
        name: 'Pear',
        rating: 'good',

        checked: false,
        portion: '1 medium',
        nutrition: {
            carbs: 26,
            fiber: 6,
            protein: 1,
            fat: 0,
            calories: 100
        }


    },

    {

        name: 'Orange',
        checked: false,
        portion: '1 medium',
        nutrition: {
            carbs: 19,
            fiber: 6,
            protein: 1,
            fat: 0,
            calories: 80
        }
    },
    {
        name: 'Grapefruit',
        portion: '1/2 medium',
        checked: false,
        nutrition: {
            carbs: 15,
            fiber: 2,
            protein: 1,
            fat: 0,
            calories: 60
        }
    },
    {
        name: 'Lemon',

        checked: false,
        family: 'Pome',
        portion: '1 medium',
        nutrition: {
            carbs: 5,
            fiber: 2,
            protein: 0,
            fat: 0,
            calories: 15
        }


    },
    {
        name: 'Mandarin',
        checked: false,
        portion: '1 medium',
        nutrition: {
            carbs: 9,
            fiber: 1,
            protein: 1,
            fat: 0,
            calories: 50
        }
    },
    {
        name: 'Pomelo',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 18,
            fiber: 1.9,
            protein: 1.4,
            fat: 0.1,
            calories: 72
        }


    },
    {
        name: 'Lime',
        portion: '1 medium',
        checked: false,
        nutrition: {
            carbs: 7,
            fiber: 2,
            protein: 0,
            fat: 0,
            calories: 20
        }

    },
    {
        name: 'Tangerine',

        checked: false,
        portion: '1 medium',
        nutrition: {
            carbs: 13,
            fiber: 2,
            protein: 1,
            fat: 0,
            calories: 50
        }


    },
    {
        name: 'Nectarine',
        checked: false,
        portion: '1 medium',
        nutrition: {
            carbs: 14.4,
            polyphenols: true,
            fiber: 2.3,
            protein: 1.4,
            fat: 0.4,
            calories: 60
        }
    },
    {
        name: 'Apricot',

        checked: false,
        portion: '1 small',
        nutrition: {
            carbs: 3.8,
            polyphenols: true,
            fiber: 0.3,
            protein: 0,
            fat: 0.3,
            calories: 20
        }

    },
    {
        name: 'Peach',
        checked: false,
        portion: '1 medium',
        nutrition: {
            carbs: 15,
            polyphenols: true,
            fiber: 2,
            protein: 1,
            fat: 0.5,
            calories: 60
        }

    },
    {
        name: 'Plum',
        checked: false,
        portion: '2 medium',
        nutrition: {
            carbs: 19,
            polyphenols: true,
            fiber: 2,
            protein: 1,
            fat: 0,
            calories: 70
        }

    },
    {
        name: 'Cherry',

        checked: false,
        family: 'Pome',
        portion: '1 cup with pits',
        nutrition: {
            carbs: 18.7,
            polyphenols: true,
            fiber: 2.5,
            protein: 1.2,
            fat: 0.2,
            calories: 50
        }


    },
    {
        name: 'Pineapple',

        checked: false,
        family: 'Tropical',
        portion: '2 slices',
        nutrition: {
            carbs: 13,
            fiber: 1,
            protein: 1,
            fat: 0,
            calories: 50
        }


    },
    {
        name: 'Banana',
        checked: false,
        portion: '1 medium',
        nutrition: {
            carbs: 30,
            fiber: 3,
            prebiotics: true,
            protein: 1,
            fat: 0,
            calories: 110
        }

    },
    {
        name: 'Mango',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 25,
            fiber: 3,
            protein: 1,
            fat: 1,
            calories: 100
        }

    },
    {
        name: 'Strawberry',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 11.7,
            polyphenols: true,
            fiber: 3,
            protein: 1,
            prebiotics: true,
            fat: 0.5,
            calories: 50
        }

    },
    {
        name: 'Rasberry',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 14.7,
            polyphenols: true,
            fiber: 8,
            protein: 1.5,
            fat: 0.8,
            calories: 60
        }

    },
    {
        name: 'Blackberry',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 14,
            polyphenols: true,
            fiber: 8,
            protein: 2,
            fat: 1,
            calories: 60
        }

    },
    {
        name: 'Blueberry',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 21,
            polyphenols: true,
            fiber: 3.5,
            protein: 1.1,
            fat: 0.5,
            calories: 40
        }

    },
    {
        name: 'Kiwi',
        checked: false,
        portion: '2 medium',
        nutrition: {
            carbs: 20,
            fiber: 4,
            protein: 1,
            fat: 1,
            calories: 90
        }

    },
    {
        name: 'Grapes',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 23,
            polyphenols: true,
            fiber: 1,
            protein: 0,
            fat: 0,
            calories: 90
        }

    },
    {
        name: 'Watermelon',
        checked: false,
        portion: '2 cups diced pieces',
        nutrition: {
            carbs: 21,
            fiber: 1,
            protein: 1,
            fat: 0,
            calories: 80
        }

    },
    {
        name: 'Cantaloupe',
        checked: false,
        portion: '1/4 medium',
        nutrition: {
            carbs: 12,
            fiber: 1,
            protein: 1,
            fat: 0,
            calories: 50
        }

    },
    {
        name: 'Honeydew melon',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 15.4,
            fiber: 1.4,
            protein: 0.9,
            fat: 0.2,
            calories: 50
        }

    },
    {
        name: 'Winter melon',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 4,
            fiber: 4,
            protein: 1,
            fat: 0,
            calories: 20
        }

    },

    {
        name: 'Dragonfruit',

        checked: false,
        portion: '1 small',
        nutrition: {
            carbs: 14,
            fiber: 1,
            protein: 2,
            fat: 0.5,
            calories: 60
        }


    },
    {
        name: 'Persimmon',

        checked: false,
        portion: '1 medium',
        nutrition: {
            carbs: 31,
            fiber: 6,
            protein: 1,
            fat: 0,
            calories: 120
        }


    },
    {
        name: 'Pomegranate',

        checked: false,
        family: 'Pome',
        portion: '1 medium',
        nutrition: {
            carbs: 26,
            fiber: 1,
            protein: 1.5,
            fat: 0.5,
            calories: 104
        }


    },
    {
        name: 'Cranberry',
        checked: false,
        portion: '1/4 cup dried',
        nutrition: {
            carbs: 33,
            fiber: 3,
            protein: 0,
            fat: 0,
            calories: 130
        }

    },
    {
        name: 'Avocado',
        checked: false,
        portion: '1/5 medium',
        nutrition: {
            carbs: 3,
            highMonounsaturatedFat: true,
            fiber: 1,
            protein: 1,
            fat: 4.5,
            calories: 50

        }

    },
    {
        name: 'Papaya',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 16,
            fiber: 3,
            protein: 1,
            fat: 0,
            calories: 60
        }

    },
    {
        name: 'Passion fruit',
        checked: false,
        portion: '1 fruit',
        nutrition: {
            carbs: 4,
            fiber: 2,
            protein: 0.5,
            fat: 0,
            calories: 17
        }

    },
    {
        name: 'Lychee',
        checked: false,
        portion: '1 cup',
        nutrition: {
            carbs: 31,
            fiber: 3,
            protein: 2,
            fat: 1,
            calories: 125
        }

    },
    {
        name: 'Goji berries',
        checked: false,
        portion: '5 tbsp dried',
        nutrition: {
            carbs: 22,
            fiber: 4,
            protein: 4,
            fat: 0,
            calories: 100
        }

    }]

let arr = sortQuiz(fruitsQuiz, 'Fruits')
export default arr