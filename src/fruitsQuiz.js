import sortQuiz from './sortQuizes'
let fruitsQuiz =  [
        {
            name : 'Apple',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion : '1 large',
            nutrition : {
                carbs : 34,
                polyphenols: true, 
                fiber : 5,
                protein : 1,
                fat : 0,
                calories : 120 
            }
         
        },
        {
            name : 'Pear',
            //rating : 'good',
           
            //info : 'not enough microbes',
            checked : false,
            portion : '1 medium',
            nutrition : {
                carbs : 26,
                fiber : 6,
                protein : 1,
                fat : 0,
                calories : 100
            }
            
         
        },

        {

            name : 'Orange',
            //rating : 'good',
            //info : 'A lot of vitamins',
            checked : false,
            portion : '1 medium',
            nutrition : {
                carbs : 19,
                fiber : 6,
                protein : 1,
                fat : 0,
                calories : 80
            }
        },
        {
            name : 'Grapefruit',
            //rating : 'good',
            portion : '1/2 medium',
            //info : 'a lot of vitamins',
            checked : false,
            nutrition : {
                carbs : 15,
                fiber : 2,
                protein : 1,
                fat : 0,
                calories : 60
            }
        },
        {
            name : 'Lemon',
            //rating : 'good',

            //info : 'not enough microbes',
            checked : false,
            family : 'Pome',
            portion : '1 medium',
            nutrition : {
                carbs : 5,
                fiber : 2,
                protein : 0,
                fat : 0,
                calories : 15
            }
            
         
        },
        {
            name : 'Mandarin',
            //rating : 'good',
            //info : 'a lot of vitamins',
            checked : false,
            portion : '1 medium',
            nutrition : {
                carbs : 9,
                fiber : 1,
                protein : 1,
                fat : 0,
                calories : 50
            }
        },
        {
            name : 'Pomelo',
            //rating : 'good',
            //info : 'not enough microbes',
            checked : false,
            portion : '1 cup',
            nutrition : {
                carbs : 18,
                fiber : 1.9,
                protein : 1.4,
                fat : 0.1,
                calories : 72
            }
            
         
        },
        {
            name : 'Lime',
            //rating : 'good',
            //info : 'A lot of fibers',
            portion : '1 medium',
            checked : false,
            nutrition : {
                carbs : 7,
                fiber : 2,
                protein : 0,
                fat : 0,
                calories : 20
            }
            
        },
        {
            name : 'Tangerine',
            //rating : 'good',
    
            //info : 'not enough microbes',
            checked : false,
            portion : '1 medium',
            nutrition : {
                carbs : 13,
                fiber : 2,
                protein : 1,
                fat : 0,
                calories : 50
            }
            
         
        },
        {
            name : 'Nectarine',
            //rating : 'good',
            //info: 'Super good', 
            checked : false,
            portion : '1 medium',
            nutrition : {
                carbs : 14.4,
                polyphenols: true, 
                fiber : 2.3,
                protein : 1.4,
                fat : 0.4,
                calories : 60
            }
        },
        {
            name : 'Apricot',
            //rating : 'bad',
            
            //info : 'not enough microbes',
            checked : false,
            portion : '1 small',
            nutrition : {
                carbs : 3.8,
                polyphenols: true, 
                fiber : 0.3,
                protein : 0,
                fat : 0.3,
                calories : 20
            }
         
        },
        {
            name : 'Peach',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion : '1 medium',
            nutrition : {
                carbs : 15,
                polyphenols: true, 
                fiber : 2,
                protein : 1,
                fat : 0.5,
                calories : 60
            }
         
        },
        {
            name : 'Plum',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion : '2 medium',
            nutrition : {
                carbs : 19,
                polyphenols: true, 
                fiber : 2,
                protein : 1,
                fat : 0,  
                calories : 70         }
         
        },
        {
            name : 'Cherry',
            //rating : 'good',
    
            //info : 'not enough microbes',
            checked : false,
            family : 'Pome',
            portion : '1 cup with pits',
            nutrition : {
                carbs : 18.7,
                polyphenols: true, 
                fiber : 2.5,
                protein : 1.2,
                fat : 0.2,
                calories : 50
            }
            
         
        },
        {
            name : 'Pineapple',
            //rating : 'good',
    
            //info : 'not enough microbes',
            checked : false,
            family : 'Tropical',
            portion : '2 slices',
            nutrition : {
                carbs : 13,
                fiber : 1,
                protein : 1,
                fat : 0,
                calories : 50
            }
            
         
        },
        {
            name : 'Banana',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion : '1 medium',
            nutrition : {
                carbs : 30,
                fiber : 3,
                prebiotics: true,
                protein : 1,
                fat : 0,
                calories : 110
            }
         
        },
        {
            name : 'Mango',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion : '1 cup',
            nutrition : {
                carbs : 25,
                fiber : 3,
                protein : 1,
                fat : 1,
                calories : 100
            }
         
        },
        {
            name : 'Strawberry',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion : '1 cup',
            nutrition : {
                carbs : 11.7,
                polyphenols: true, 
                fiber : 3,
                protein : 1,
                prebiotics: true,
                fat : 0.5,
                calories : 50
            }
         
        },
        {
            name : 'Rasberry',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion : '1 cup',
            nutrition : {
                carbs : 14.7,
                polyphenols: true, 
                fiber : 8,
                protein : 1.5,
                fat : 0.8,
                calories : 60
            }
         
        },
        {
            name : 'Blackberry',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion: '1 cup',
            nutrition : {
                carbs : 14,
                polyphenols: true, 
                fiber : 8,
                protein : 2,
                fat : 1,
                calories : 60
            }
         
        },
        {
            name : 'Blueberry',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion: '1 cup',
            nutrition : {
                carbs : 21,
                polyphenols: true, 
                fiber : 3.5,
                protein : 1.1,
                fat : 0.5,
                calories : 40
            }
         
        },
        {
            name : 'Kiwi',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion : '2 medium',
            nutrition : {
                carbs : 20,
                fiber : 4,
                protein : 1,
                fat : 1,
                calories : 90
            }
         
        },
        {
            name : 'Grapes',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion: '1 cup',
            nutrition : {
                carbs : 23,
                polyphenols: true, 
                fiber : 1,
                protein : 0,
                fat : 0,
                calories : 90
            }
 
        },
        {
            name : 'Watermelon',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion : '2 cups diced pieces',
            nutrition : {
                carbs : 21,
                fiber : 1,
                protein : 1,
                fat : 0,
                calories : 80
            }
         
        },
        {
            name : 'Cantaloupe',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion : '1/4 medium',
            nutrition : {
                carbs : 12,
                fiber : 1,
                protein : 1,
                fat : 0,
                calories : 50
            }
         
        },
        {
            name : 'Honeydew melon',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion: '1 cup',
            nutrition : {
                carbs : 15.4,
                fiber : 1.4,
                protein : 0.9,
                fat : 0.2,
                calories : 50
            }

        },
        {
            name : 'Winter melon',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion: '1 cup',
            nutrition : {
                carbs : 4,
                fiber : 4,
                protein : 1,
                fat : 0,
                calories : 20
            }
         
        },
       
        {
            name : 'Dragonfruit',
            //rating : 'good',
    
            //info : 'not enough microbes',
            checked : false,
         //   family : 'Tropical',
            portion : '1 small',
            nutrition : {
                carbs : 14,
                fiber : 1,
                protein : 2,
                fat : 0.5,
                calories : 60
            }
            
         
        },
        {
            name : 'Persimmon',
            //rating : 'good',
    
            //info : 'not enough microbes',
            checked : false,
            //family : 'Tropical',
            portion : '1 medium',
            nutrition : {
                carbs : 31,
                fiber : 6,
                protein : 1,
                fat : 0,
                calories : 120
            }
            
         
        },
        {
            name : 'Pomegranate',
            //rating : 'good',
    
            //info : 'not enough microbes',
            checked : false,
            family : 'Pome',
            portion : '1 medium',
            nutrition : {
                carbs : 26,
                fiber : 1,
                protein : 1.5,
                fat : 0.5,
                calories : 104
            }
            
         
        },
        {
            name : 'Cranberry',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion: '1/4 cup dried',
            nutrition : {
                carbs : 33,
                fiber : 3,
                protein : 0,
                fat : 0,
                calories : 130
            }
         
        },
        {
            name : 'Avocado',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion : '1/5 medium',
            nutrition : {
                carbs : 3,
                highMonounsaturatedFat: true,
                fiber : 1,
                protein : 1,
                fat : 4.5,
                calories : 50
                
            }

        },
        {
            name : 'Papaya',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion: '1 cup',
            nutrition : {
                carbs : 16,
                fiber : 3,
                protein : 1,
                fat : 0,
                calories : 60
            }

        },
        {
            name : 'Passion fruit',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion: '1 fruit',
            nutrition : {
                carbs : 4,
                fiber : 2,
                protein : 0.5,
                fat : 0,
                calories : 17 
            }

        },
        {
            name : 'Lychee',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion: '1 cup',
            nutrition : {
                carbs : 31,
                fiber : 3,
                protein : 2,
                fat : 1,
                calories : 125 
            }

        },
        {
            name : 'Goji berries',
            //rating : 'bad',
            //info : 'not enough microbes',
            checked : false,
            portion: '5 tbsp dried',
            nutrition : {
                carbs : 22,
                fiber : 4,
                protein : 4,
                fat : 0,
                calories : 100 
            }
         
        }]
        //===========================================================================================================================================
      
//console.table(fruitsQuiz)
let arr = sortQuiz(fruitsQuiz,'Fruits')
//console.table(names)
//console.table(fruitsQuiz)
export default arr