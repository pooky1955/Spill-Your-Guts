import sortQuizs from './sortQuizes'
let legumesQuiz = [{
    name : 'Black beans',
    portion : '1/2 cup',
    checked : false,
   
    nutrition : {
        carbs : 20,
        polyphenols: true, 
        fiber : 8,
        protein : 8,
        fat : 0.5,
        calories : 114
    }
    },
    {
        name : 'Cranberry beans',
        portion : '1/2 cup',
        checked : false,
       
        nutrition : {
        carbs : 22,
        polyphenols: true, 
        fiber : 9,
        protein : 8,
        fat : 0.4,
        calories : 120
        }
    },
    {
         name : 'Great Northern beans',
            portion : '1/2 cup',
            checked : false,
           
        nutrition : {
        carbs : 19,
        polyphenols: true, 
        fiber : 6,
        protein : 7,
        fat : 0.4,
        calories : 104
    }
    },
    {
         name : 'Navy beans',
        portion : '1/2 cup',
        checked : false,
               
        nutrition : {
         carbs : 24,
         polyphenols: true, 
         fiber : 10,
        protein : 8,
         fat : 0.6,
        calories : 127
 }
 },
 {
     name : 'Pink beans',
    portion : '1/2 cup',
    checked : false,
                   
     nutrition : {
     carbs : 24,
     polyphenols: true, 
    fiber : 5,
     protein : 8,
    fat : 0.4,
     calories : 126
 }
 },
 {
    name : 'Pinto beans',
    portion : '1/2 cup',
    checked : false,
   
    nutrition : {
        carbs : 22,
        polyphenols: true, 
        fiber : 8,
        protein : 8,
        fat : 0.6,
        calories : 122
    }
    },
    {
        name : 'Light Red Kidney beans',
        portion : '1/2 cup',
        checked : false,
       
        nutrition : {
            carbs : 20,
            polyphenols: true, 
            fiber : 7,
            protein : 8,
            fat : 0.4,
            calories : 112
        }
        },
        {
            name : 'Dark Red Kidney beans',
            portion : '1/2 cup',
            checked : false,
           
            nutrition : {
                carbs : 19,
                polyphenols: true, 
                fiber : 8,
                protein : 8,
                fat : 0.2,
                calories : 109
            }
            },
            {
                name : 'White Kidney beans',
                portion : '1/2 cup',
                checked : false,
               
                nutrition : {
                    carbs : 22,
                    polyphenols: true, 
                    fiber : 6,
                    protein : 9,
                    fat : 0.3,
                    calories : 124
             }
            },
            {
                name : 'Small Red beans',
                portion : '1/2 cup',
                checked : false,
               
                nutrition : {
                    carbs : 19,
                    polyphenols: true, 
                    fiber : 6,
                    protein : 6,
                    fat : 0.5,
                    calories : 100
                }
                },

                {
                    name : 'Lima beans',
                    portion : '1/2 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 20,
                        polyphenols: true, 
                        fiber : 4.5,
                        protein : 6,
                        fat : 0.3,
                        calories : 105
                 }
                }, 
                {
                    name : 'Chickpeas',
                    portion : '1/2 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 23,
                        polyphenols: true, 
                        fiber : 6,
                        protein : 7,
                        fat : 2,
                        calories : 134
                 }
                }, 
                {
                    name : 'Adzuki beans',
                    portion : '1/2 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 29,
                        polyphenols: true, 
                        fiber : 8.4,
                        protein : 8.6,
                        fat : 0.1,
                        calories : 147
                 }
                },  
                {
                    name : 'Soy beans',
                    portion : '1/2 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 10,
                        polyphenols: true, 
                        fiber : 4,
                        protein : 11,
                        fat : 6,
                        calories : 127
                 }
                },   
                {
                    name : 'Anasazi beans',
                    portion : '1/2 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 52,
                        polyphenols: true, 
                        fiber : 12,
                        protein : 14,
                        fat : 2,
                        calories : 280
                 }
                },      
                {
                    name : 'Fava beans',
                    portion : '1/2 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 17,
                        polyphenols: true, 
                        fiber : 5,
                        protein : 6.4,
                        fat : 0.3,
                        calories : 94
                 }
                },
                {
                    name : 'Green peas',
                    portion : '1/2 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 13,
                        polyphenols: true, 
                        fiber : 4.4,
                        protein : 4.3,
                        fat : 0.2,
                        calories : 67
                 }
                }, 
                {
                    name : 'Snow peas',
                    portion : '1/2 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 3,
                        polyphenols: true, 
                        fiber : 1,
                        protein : 1,
                        fat : 0,
                        calories : 18
                 }
                },   
                {
                    name : 'Snap peas',
                    portion : '1/2 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 5.5,
                        polyphenols: true, 
                        fiber : 1.5,
                        protein : 1.5,
                        fat : 0,
                        calories : 30
                                     }
                },
                {
                    name : 'Split peas',
                    portion : '1/2 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 21,
                        polyphenols: true, 
                        fiber : 8,
                        protein : 8,
                        fat : 0,
                        calories : 116
                 }
                },  
                {
                    name : 'Black-eyed peas',
                    portion : '1/2 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 15,
                        polyphenols: true, 
                        fiber : 3,
                        protein : 5,
                        fat : 0,
                        calories : 80
                 }
                }, 
                {
                    name : 'Lentils (Mature seeds)',
                    portion : '1/2 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 20,
                        polyphenols: true, 
                        fiber : 8,
                        protein :9,
                        prebiotics: true,
                        fat : 0,
                        calories : 115
                 }
                }, 
                {
                    name : 'Tofu',
                    portion : '1/2 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 2.3,
                        polyphenols: true, 
                        fiber : 0.4,
                        protein :10,
                        fat : 6,
                        highUnsaturatedFat: true,
                        calories : 124
                 }
                }, 
                {
                    name : 'Almond',
                    portion : '1/4 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 6,
                        polyphenols: true, 
                        fiber : 3.5,
                        protein :6,
                        fat : 15,
                        highUnsaturatedFat: true,
                        highMonounsaturatedFat: true,
                        calories : 170
                 }
                }, 
                {
                    name : 'Cashew',
                    portion : '1/4 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 8,
                        fiber : 3,
                        protein :5,
                        fat : 14,
                        highUnsaturatedFat: true,
                        calories : 180
                 }
                }, 
                {
                    name : 'Coconut shreds',
                    portion : '1/4 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 3,
                        fiber : 2,
                        protein :0.5,
                        fat : 6.5,
                        calories : 70
                 }
                }, 
                {
                    name : 'Pecan',
                    portion : '1/4 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 4,
                        polyphenols: true, 
                        fiber : 1.5,
                        protein :1.5,
                        highUnsaturatedFat: true,
                        fat : 14.5,
                        calories : 145
                 }
                }, 
                {
                    name : 'Walnut',
                    portion : '1/4 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 4,
                        polyphenols: true, 
                        fiber : 2,
                        protein :5,
                        highUnsaturatedFat: true,
                        fat : 20,
                        calories : 210
                 }
                }, 
                {
                    name : 'Pistachio',
                    portion : '1/4 cup',
                    checked : false,
                    nutrition : {
                        carbs : 8.5,
                        fiber : 3,
                        protein :6.5,
                        highUnsaturatedFat: true,
                        fat : 14,
                        calories : 175
                 }
                }, 
                {
                    name : 'Macadamia',
                    portion : '1/4 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 4.5,
                        fiber : 2.5,
                        protein :2.5,
                        highUnsaturatedFat: true,
                        fat : 25.5,
                        calories : 240
                 }
                }, 
                {
                    name : 'Brazil nut',
                    portion : '1/4 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 4.5,
                        fiber : 2.5,
                        protein :5,
                        highUnsaturatedFat: true,
                        fat : 23.5,
                        highMonounsaturatedFat: true,
                        calories : 230
                 }
                }, 
                {
                    name : 'Hazelnut',
                    portion : '1/4 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 6,
                        polyphenols: true, 
                        fiber : 3,
                        protein :5,
                        highUnsaturatedFat: true,
                        fat : 20,
                        calories : 210
                 }
                }, 
                {
                    name : 'Chestnut',
                    portion : '1/4 cup',
                    checked : false,
                   
                    nutrition : {
                        carbs : 20,
                        polyphenols: true, 
                        fiber : 2,
                        highUnsaturatedFat: true,
                        protein :1,
                        fat : 1,
                        calories : 90
                 }
                }, 
                {
                    name : 'Chia seeds',
                    portion : '1 tablespoon',
                    checked : false,
                   
                    nutrition : {
                        carbs : 5,
                        fiber : 3.8,
                        protein :1.6,
                        highUnsaturatedFat: true,
                        prebiotics: true,
                        fat : 3.4,
                        calories : 49
                 }
                }, 
                {
                    name : 'Flax seeds',
                    portion : '1 tablespoon',
                    checked : false,
                   
                    nutrition : {
                        carbs : 4.1,
                        polyphenols: true, 
                        fiber : 1.9,
                        prebiotics: true,
                        protein :1.3,
                        fat : 3,
                        highUnsaturatedFat: true,
                        calories : 37
                 }
                }, 
                {
                    name : 'Sunflower seeds',
                    portion : '1 tablespoon',
                    checked : false,
                   
                    nutrition : {
                        carbs : 1.5,
                        fiber : 0.78,
                        protein :1,
                        prebiotics: true,
                        highUnsaturatedFat: true,
                        fat : 4.6,
                        calories : 53
                 }
                }, 
                {
                    name : 'Hemp seeds',
                    portion : '1 tablespoon',
                    checked : false,
                   
                    nutrition : {
                        carbs : 1.3,
                        fiber : 0.5,
                        protein :5.5,
                        prebiotics: true,
                        fat : 4.9,
                        calories : 80
                 }
                }, 
                {
                    name : 'Pumpkin seeds',
                    portion : '1 tablespoon',
                    checked : false,
                   
                    nutrition : {
                        carbs : 1.3,
                        fiber : 0.31,
                        prebiotics: true,
                        protein :2,
                        fat : 3.7,
                        calories : 43
                 }
                }, 
                {
                    name : 'Sesame seeds',
                    portion : '1 tablespoon',
                    checked : false,
                   
                    nutrition : {
                        carbs : 2.1,
                        prebiotics: true,
                        fiber :1.1,
                        protein :1.6,
                        fat : 4.5,
                        calories : 52
                 }
                } 
                
                
                
                
                
                
                
                
                
                

            
                    
    
]
let quiz = sortQuizs(legumesQuiz,'Legumes')
export default quiz