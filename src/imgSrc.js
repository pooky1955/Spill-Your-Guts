import highcarbs from './images/highcarbs.JPG'
import lowcarbs from './images/lowcarbs.JPG'
import lowfat from './images/lowfat.JPG'
import highfat from './images/highfat.JPG'
import highfiber from './images/highfiber.JPG'
import highprotein from './images/highprotein.JPG'
import lowprotein from './images/lowprotein.JPG'
import normalprotein from './images/normalprotein.JPG'
import lowfiber from './images/lowfiber.JPG'

const dictionnary = {
    carbs : {
        high : {src : highcarbs, bacterias : ['Bifidobacteria', 'Clostridia', 'Lactobacilli','Bacteroides']},
        normal : 'normalcarbs',
        low : {src : lowcarbs,bacterias : [ 'Bifidobacteria', 'Lactobacilli', 'Roseburia', 'Eubacteria', 'Ruminococcus']}
    },
    fat : {
        high : {src : highfat, bacterias : ['Bacteroides','Akkermansia','Lactobacilli','Streptococcus','Bilophila','Proteobacteria'],},
        low : {src : lowfat,bacterias : ['Bifidobacteria']},
        monosaturated : ['Bacteroides','Lactobacilli','Streptococcus'],
        saturated : ['Faecalibacteria','Bilophila','Lactobacilli','Streptococcus','Bacteroides'],
       

    },
    fiber : {
        high : {src : highfiber,bacterias : [ 'Bifidobacteria' , 'Lactobacilli','Roseburia', 'Eubacteria',  'Ruminococcus']},
        low : {src : lowfiber,bacterias : [ ]}
    },
    protein : {
        high : {src : highprotein,bacterias : ['Bifidobacteria','Lactobacilli','Prevotella'], bacteriasalt : ['Bacteroides','Alistipes','Bilophila','Clostridia','Bifidobacteria','Lactobacilli']},
        normal : {src : normalprotein,bacterias : []},
        low : {src : lowprotein,bacterias : []},
    }
}
export default dictionnary