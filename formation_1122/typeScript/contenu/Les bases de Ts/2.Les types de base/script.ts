// je declare ma variable. soit un string ou un nombre ou un tableau etc..
let str = "str"
let num = 5
let array = []
let obj = {}
let toggle = true

//je veux attribuer à ma variable ce que je veux, un chiffre ou un string etcc
let anything;

//je declare une variable en voulant que des nombres et non des string
let randomNumber : number;
randomNumber = 90
// si je fais cela, il sera en erreur  =  randomNumber = "90"

//1er exo convertir les degrés celsus en fahrenheit
const conversion = (celsius : number) =>{        
    return (celsius * 9/5) + 32;
}
console.log(conversion(15));
 // je dois ajouter number pour dire que je veux un nombre en resultat 

   