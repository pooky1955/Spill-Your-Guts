import sortQuizs from './sortQuizes'
let fermentedQuiz = [{
        name : 'Kimchi',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked : false,
        portion : '1 cup',
        nutrition : {
            carbs : 3.5,
            fiber : 2.5,
            probiotics: true, 
            protein : 1.5,
            fat : 1,
            calories : 25 
        }
     
    },
    {
        name : 'Pickles',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked : false,
        portion : '1 cup',
        nutrition : {
            carbs : 3.5,
            fiber : 2,
            probiotics: true, 
            protein : 0.5,
            fat : 0.5,
            calories : 15 
        }
     
    },
    {
        name : 'Sauerkraut',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked : false,
        portion : '1 cup',
        nutrition : {
            carbs : 6,
            fiber : 4,
            protein : 1.5,
            fat : 0,
            probiotics: true, 
            calories : 25 
        }
     
    },
    {
        name : 'Miso',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked : false,
        portion : '1 tbsp',
        nutrition : {
            carbs : 4.5,
            fiber : 1,
            protein : 2,
            fat : 1,
            probiotics: true, 
            calories : 35 
        }
     
    },
    {
        name : 'Tempeh',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked : false,
        portion : '1 cup',
        nutrition : {
            carbs : 13,
            probiotics: true, 
            fiber : 0,
            protein : 34,
            fat : 18,
            calories : 320 
        }
     
    },
    {
        name : 'Kombucha',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked : false,
        portion : '1 cup',
        nutrition : {
            carbs : 7,
            fiber : 0,
            protein : 0,
            fat : 0,
            calories : 30 
        }
    },
    {
        name : 'Milk chocolate',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked : false,
        portion : '1 regular size candy bar',
        nutrition : {
            carbs : 26,
            polyphenols: true,
            fiber : 1.5,
            protein : 3.4,
            fat : 13,
            calories : 235 
        }
     
    },
    {
        name : 'Dark chocolate',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked : false,
        portion : '4 squares or 40g',
        nutrition : {
            carbs : 8, 
            polyphenols: true,
            fiber : 3,
            protein : 4,
            fat : 18,
            calories : 210
        }
     
    },
    {
        name : 'Coffee',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked : false,
        portion : '1 cup',
        nutrition : {
            carbs : 0.5,
            polyphenols: true, 
            fiber : 0,
            protein : 0,
            fat : 0,
            calories : 5
        }
     
    },
    {
        name : 'Tea',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked : false,
        portion : '1 cup',
        nutrition : {
            carbs : 0.7,
            polyphenols: true, 
            fiber : 0,
            protein : 0,
            fat : 0,
            calories : 2 
        }
     
    },
    {
        name : 'Red wine',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked : false,
        portion : '1/3 cup',
        nutrition : {
            carbs : 2.5,
            polyphenols: true, 
            fiber : 0,
            protein : 0.3,
            fat : 0,
            calories : 105
        }
     
    }, 
    {
        name : 'Beer',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked : false,
        portion : '1 1/2 cup or 12 fl oz',
        nutrition : {
            carbs : 13,
            fiber : 0.4,
            protein : 1.5,
            fat : 0.2,
            calories : 153 
        }
     
    },
    {
        name : 'Orange juice',
        //rating : 'bad',
        //info : 'not enough microbes',
        checked : false,
        portion : '1 cup',
        nutrition : {
            carbs : 26,
            polyphenols: true, 
            fiber : 0,
            protein : 2,
            fat : 0,
            calories : 110 
        }
     
    }
]
let quiz = sortQuizs(fermentedQuiz,'Others')
export default quiz
