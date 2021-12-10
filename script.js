console.log("bonjour"); /* "" pour le text*/

// utilise var pour délarer un valeur.

var premierChiffe = 5; /* 5 est la valeur pour le chiffe pour calculer*/
/* "5" c'est le 5 de text, pas un chiffe -> ça devient 55 dans la page/
console.log(premierChiffe + 10); /*ne pas mettre la variable on a déjà crée en "" */

var premierText = "mon text prefere c'est: "
console.log(premierText + 5) 

var maParagraphe = "L'automne commence au moi "
console.log(maParagraphe + 10)

var mesChiffre = 10;
var mesDeuxChiffe = 20;
var result = (mesChiffre + mesDeuxChiffe);
console.log(result)


//crée une fonction
function chercherClassroom(){
    console.log("cherche classroom")
}
//appeller une fonction
chercherClassroom();


var premierNombre = prompt("donnez un premier nombre");
var deuxiemNombre = prompt("donnez un deuxième nombre");

function addition( premierNombreDone, deuxiemeNombreDone){ //(ce que on va recevoire autant on veut, ou on peut inventé)
    alert(premierNombre + deuxiemNombre);
}
addition(premierNombre, deuxiemNombre);



var dateDepart = prompt("donnez une date");
var dateRetour = prompt("donnez une date");

function afficherDate(dateRecevrai, date){
    console.log("Date de depart et de retour sont :" + dateRecevrai + date)
  
}
afficherDate(dateDepart, dateRetour);

function comparer(variable,variable){
    if(variable==variable){ //si variable est pareil que variable
        
        alert("c'est la meme"); //alors on execute ce code
    }
    else{ //sinon
       
        alert("c'est different"); //on execute ce code
    }
}

var motA = prompt("premier mot");
var motB = prompt("deuxieme mot");
comparer(motA, motB);




//exercise 1: demander deux chiffres et un opérateur. Faire calculer.


//1. variable DemanderUnchiffre = demander un chiffre
var demanderUnChiffre = prompt("rentrez un chiffre");

//2. variable DemanderOperateur = demander un operateur
var demanderOperateur = prompt("donnez l'operateur");

//3. variable demanderUneDeuxiemeChiffre = demander un deuxieme chiffre
var demanderUneDeuxiemeChiffre = prompt("donnez une deuxieme chiffre");

//4. Créer une fonction calculette

function calculette(variableA, variableB, variableC){

    //si la variable B =="+"
    if(variableB=="+"){
        alert(variableA + variableC);
        //alors aifficher variable A + variable C
    }else if(variableB =="-"){
        alert(variableA - variableC);
    }else if(variableB =="/"){
        alert(variableA/variableC);
    }else if(variableB =="*"){
        alert(variableA * variableC);
    }

}
calculette(demanderUnChiffre, demanderOperateur,demanderUneDeuxiemeChiffre);




//exercise 2: demander l'année de naissance, l'année actuele. >18 ans est majeur, <18 ans est mineur et l'autre case est négative.

//Etap 1: Créer deux variables: anneeActuelle, anneeNaisance = Année actuelle et année de la naissance, demander avec prompt.
var anneActuelle = prompt("Donnez annee actuelle");
var anneNaissance = prompt("Donnez votre anne de naissance");

//Etap 2: Créer une fonction "Age" qui prend en paramètre 2 variables (variableA, variableB)
function Age(variableA, variableB){
    var result= variableA - variableB; //Etap 4: Dans ma fonction, je crée une variable "Result = variableA - variableB".
    
    if(result>=18){
        alert("vous ete majeur"); //si Result >18 alors alert "majeur"
    }else if(result< 18 && result>=0){
        alert("vous ete mineur"); //sinon si Resultat <18 et Result >=0, alors alert "mineur".
    }else if(result <0){
        alert("Erreur"); //sinon si Resultat <0 alors alert "Erreur"
    }
}

Age(anneActuelle, anneNaissance) //Etap 3: Appelle fonction Age(anneActuelle, anneeNaissance).


//Exercise 3: -Demander 5 noms et 5 prénoms; - Demander 'utilisateur un chiffre entre 1 et 5; en fonction du nombre choisir afficher le nom et prénom qui correspond.

var nomUn = prompt("Donnez votre nom");
var prenomUn = prompt("Donnez votre prénom");


var nomDeux = prompt("Donnez votre nom");
var prenomDeux = prompt("Donnez votre prénom");


var nomTrois = prompt("Donnez votre nom");
var prenomTrois = prompt("Donnez votre prénom");


var nomQuatre = prompt("Donnez votre nom");
var prenomQuatre = prompt("Donnez votre prénom");


var nomCinq = prompt("Donnez votre nom");
var prenomCinq = prompt("Donnez votre prénom");

var demanderChiffre = prompt("Donnez un chiffre");

function Information (variableA, variableB, variableC){ 

if (variableC = 1){
    alert("Vous ete numero 1 :" + variableA + variableB);

}else if (variableC = 2){
    alert("Vous ete numero 2 :" + variableA + variableB);

}else if (variableC = 3){
    alert("Vous ete numero 3 :" + variableA + variableB);

}else if (variableC = 4){
    alert("Vous ete numero 4 :" + variableA + variableB);

}else if (variableC = 5){
    alert("Vous êtes numero 5 : " + variableA + variableB);

}else if (variableC > 5){
    alert("Erreur")
}

}
Information(nomUn, prenomUn, demanderChiffre)
Information(nomDeux, prenomDeux, demanderChiffre)
Information(nomTrois, prenomTrois, demanderChiffre)
Information(nomQuatre, prenomQuatre, demanderChiffre)
Information(nomCinq, prenomCinq, demanderChiffre)

//Corrigé:

var nomUn = prompt("Donnez votre nom");
var prenomUn = prompt("Donnez votre prénom");


var nomDeux = prompt("Donnez votre nom");
var prenomDeux = prompt("Donnez votre prénom");


var nomTrois = prompt("Donnez votre nom");
var prenomTrois = prompt("Donnez votre prénom");


var nomQuatre = prompt("Donnez votre nom");
var prenomQuatre = prompt("Donnez votre prénom");


var nomCinq = prompt("Donnez votre nom");
var prenomCinq = prompt("Donnez votre prénom");

var demanderChiffre = prompt("Donnez un chiffre entre 1 et 5");

if (demanderChiffre == 1){
    alert(nomUn + prenomUn);
}else if(demanderChiffre==2){
    alert(nomDeux+prenomDeux);
}else if(demanderChiffre==3){
    alert(nomTrois+prenomTrois);
}else if(demanderChiffre==4){
    alert(nomQuatre+prenomQuatre);
}else if(demanderChiffre==5){
    alert(nomCinq+prenomCinq);
}else{
    alert("erreur");
}


//Faire avec la boucle:

 //              0         1        2        3        4
var tableau =["pista", "noisette", "riz", "poule", "porc"];
console.log(tableau[2])
  //  (i=0 ->tableau et ce tableau <5 car on a 4 position)  (i++ -> compter un chque fois)              
for (var i=0; i<5; i++){
    //                                             potision
    console.log(tableau[i] + "c'est à la position" +i);
}

//pour consolole.log
console.log(tableau[0])+"c'est à la potision" +i);


/*var tab = [];

for( i = 0; i<5; i++){

    var prenom1 = prompt("entre votre prenom");
    var nom1 = prompt("entre votre nom");
   // push pour afficher les uns après les autres; "   " pour avoir une espace entre nom et prénom 
    tab.push(prenom1 + "  " nom1);
    console.log(tab);
}
*/




//exercise 4: Faire une boucle qui afficher son comteur 5 fois; fait un tableau qui qfficher 5 fruits.

//Etap 1: Crée un variable tableau
var tab =[i];
for (var i = 0; i<6; i++){
    console.log(i);
}
//Etap 1: Crée un variable fruit
var fruits = ["pomme", "poire", "fraise", "banana", "kiwi" ];
for (var i=0; i<6; i++){
    console.log(fruits[i]);
}

//exercice 5: Faire un tableau de 10 fruits; Faire une boucle pour les afficher.
var tableau =["Pomme", "Poire", "Banana", "Ananas", "Kiwi", "Kaki", "Fraise", "Framboise", "Melon", "Mangue"];

//                   i++ pour faire une fois chque boucle, pour faire plus, il faut faire: i=i+2,3,4
for (var i = 0; i<10; i++){
    console.log(tableau[i] + "C'est le tableau " +i);
} 

//Rappelle le 8/12/2021:
//1.
function afficheBonjourPrenom(variablePrenom){
    alert("bonjour" + variablePrenom);

}
var prenom = prompt("donnez votre prenom");
afficheBonjourPrenom(prenom);

//2.

var prenom = prompt("donnez votre prenom");
if(prenom = "jean"){
    alert("bonjour jean");
}else if(prenom="pierre"){
    alert("bonjour pierre");
}else{
    alert("change de prenom");
}

//3. La Boucle
for(var i=0; i<10; i++){
    console.log("mon comteur i est égale à "+i)
}
//4. Table et boucle
var animaux = ["chat", "chien", "lion",];

alert (animaux[1]);//pour précise animal dans la position 1: chien.

for(var i = 0; i <4; i++){
    console.log(animaux[i]);
}
var animaux = ["chat", "chien", "lion","chat", "chien", "lion","chat", "chien", "lion"];

//             length c'est pour nombre d'animaux on ne connais pas.
alert (animaux.length);//quand on connait pas exactement le nombre d'animaux.

for(var i = 0; i < animaux.length; i++){
    console.log(animaux[i]);
}

//TP le 8/12

/*Ex 1:
    - Faire un tableau de poissons
    - Afficher tous les boissons dans le console.log
    - Demander l'utilisateur entre un chiffre:
      + si le chiffre est correspond, sorti un boisson qui va avec.
      + si non, demander l'utilisateur entre l'autre chiffre.
*/
var poissons = ["Saumon", "Maquereau", "Bar", "Chardin", "Brochet"];

    alert(poissons);

for(var i = 0; i <5; i++){
        
    console.log(poissons[i]);
}

var demandeChiffre = prompt("Donnez un chiffre");


function Choisir(variableA, variableB){

    if (variableB <5){
        //                                          [tableau]
    alert("Votre poisson choisiez est: " + variableA[variableB]);
    }else{
    alert("Donnez autre chiffre correspond à votre produit");
}
}
Choisir(poissons, demandeChiffre);

//Corrigé:

var boissons = ["beer", "orangina", "the"];
 for (var i=0; i < boissons.length; i++){
    //            i est le tableau. 
    alert(boissons[i]);

 }
 var chiffre = prompt("entrez un chiffre");

 function afficheboisson(variableChiffre, variableBoisson){

 variableChiffre = parseInt(variableChiffre);
 
            //ne pas un chiffre (NaN: not a number)
 if (variableChiffre !=NaN && variableChiffre >= 0 && variableChiffre <= 2){

    //                     [est le tableau].
    alert(variableBoisson[variableChiffre]);

 }else{
     alert("erreur")
 }
}
afficheboisson(chiffre, boissons);




/*ex2: 
    - Faire une calculatrice: un chiffre, un operateur, un chiffre
    - Demander l'utilisateur autre chiffre -> faire caculer et afficher le sesultat.
    */

 //pareInt pour transformer une chaine de caractère au chiffre.
 var demandeChiffre = parseInt(prompt("Choissiez un chiffre"));

 var demandeOperateur = prompt("Donnez l'operateur");
                   
 var autreChiffre = parseInt(prompt("Choissiez un deuxiem chiffre"));
 
 /*autre façon pour transformer une chaine de caractère au chiffre
 demandeChiffre = parseInt(demandeChiffre);   */
                     
 
     console.log(demandeChiffre, demandeOperateur, autreChiffre);
                     
 function calculette(variableA, variableB, variableC){
                     
                     
      if (variableB =="+"){
              alert(variableA + variableC);
         }else if(variableB == "-"){
             alert(variableA - variableC);
         }else if(variableB == "*"){
             alert(variableB * variableC);
         }else if(variableB == "/"){
             alert(variableA / variableC);
         }
                     
     }
                     
     calculette(demandeChiffre, demandeOperateur, autreChiffre);
    


//Corrigé:

var premierChiffre = prompt("Choissiez un chiffre");

var operateur = prompt("Entrez un operateur");

var deuxiemeChiffre = prompt("Choissiez deuxieme chiffre");

function caculette(premierChiffe, operateur, deuxiemeChiffre){

    if(parseInt(premierChiffre) !=NaN && parseInt(deuxiemeChiffre) !=NaN){

        if(operateur =="+"){
            alert(premierChiffre + deuxiemeChiffre);

        }else if(operateur =="-"){
            alert(premierChiffre-deuxiemeChiffre);

        }else if(operateur =="*"){
            alert(premierChiffre * deuxiemeChiffre);

        }else if(operateur == "/"){
            alert(premierChiffre / deuxiemeChiffre);
        }else{
            alert("Vous avez entre un mauvais operateur")

        }

    }else{
        alert("Vous avez rentre une valeur numérique fausse");
    }
}

caculette(premierChiffre, operateur, deuxiemeChiffre);


//Rappelle: While:
//While permet d'un site, qui demande l'utilisateur faire qqchoses, tant qu'il fait pas, il ne peut pas passer l'étap suivant.

var chat ="";

while(chat != "chat"){

    chat = prompt("Tapez le mot chat");

}
alert = ("C'est bien");


//Utilise Switch:

var fruits = prompt("Choissiez parmis ces fruits: Pomme/Poire/Habricot/Prune/Cerises/Raisin/Orange");

switch(fruits){
    case "pomme":
        alert("4 saisons");
        break;
    case "raisin":
        alert("ete");
        break;
    default:
        alert("mauvais saissie");


}

/*Ex 3:
    - une perssone qui donne son nom, son prénom, l'age et son email. 
    - Afficher son ordoné dans un tableau et afficher le.
    - Faire une fonction pour comparer
        + majeur
        + mineur
        + erreur -> l'age pas réel . >50 ans
                                   . <0
*/

/*
var nom = prompt("Donnez votre nom");

var prenom = prompt("Donnez votre prenom");

var age = prompt("Donnez votre age");

var mail = prompt("Donnez votre e-mail");

var tab = [ ];


function information (variableA, variableB, variableC, variableD){

    var result =  variableC;

if (result >= 18){
    alert("vous ete majeur");
}


}
*/


//Corrigé:

var profil = [];

var nom = prompt("Donnez votre nom");
//     push pour ajourter les élements dans le tableau
profil.push(nom); 

var prenom = prompt("Donnez votre prenom");
profil.push(prenom);

//demande l'age une premier fois
var age = prompt("Donnez votre age");
//Converti ce que la personne à saissie en number
age = parseInt(age);

//Tant que l'age saissie n'est pas un nombre
while(isNaN (age)){
    //alors demande de saissir une valeur numérique
    age = prompt("Retrez un chiffre numerique");
    //on refait la convertion pour tester
    age = parseInt(age);

}
//une fois que l'age saisi est numérique on l'ajoute un tableau profile
profil.push(age);

var mail = prompt("Donnez votre e-mail");
profil.push(mail);

for (var i = 0; i<profil.length; i++){
    console.log(profil[i]);

}

function verifieLage(age){

    if(age < 0 || age > 150){
        alert("Vous evez saissir un mauvais age");
        
    }else if(age <18 && age >= 0){
        alert("Vous ete mineur");
    }else if (age >= 18){
        alert("Vous ete majeur");
    }

}

// l'age dans le profile et il est à la position 2 du tableau.
verifieLage(profil[2]);

/* Ex 4: 
1. Demander utilisateur rentre 5 acool.
    - Chaque fois, l'acool rentre dans le tableau.
    - Afficher le contenu du tableau à la fin.
2. Demander utilisateur un chiffre de 0 à 4
    - Selon le chiffre rentre, sorti un alcool.
    - Avec Switch, caterogie l'acool utilisateur choisi est fort ou pas.
    - Si le chiffre rentre pas dans le tableau. Alert -> mauvais chiffre.
    */


/*1. Demander utilisateur rentre 5 acool.
    - Chaque fois, l'acool rentre dans le tableau.
    - Afficher le contenu du tableau à la fin.*/

    

    
var listAcool = [];
/*while(alcools.length < 5){
    alcools.push(prompt("veuillez choisir l'un de ces alcools: whisky, vodka, vin, champagne, beer, cidre doux, sake, chinmay bleu, liqueur de licht"));
} */ //pour racoute faire 5 fois variable typeAlcool.

var typeAcool1 = prompt("Rentrez premier acool");
    listAcool.push(typeAcool1); 

var typeAcool2 = prompt("Rentrez deuxieme acool");
    listAcool.push(typeAcool2); 

var typeAcool3 = prompt("Rentrez troisieme acool");
    listAcool.push(typeAcool3); 

var typeAcool4 = prompt("Rentrez quatrieme acool");
    listAcool.push(typeAcool4); 

var typeAcool5 = prompt("Rentrez cinquieme acool");
    listAcool.push(typeAcool5); 

//2. Demander utilisateur un chiffre de 0 à 4
var demanderChiffre = prompt("Entrez un chiffre");
    demanderChiffre = parseInt(demanderChiffre);

for (var i = 0; i< 4; i++){
    console.log(listAcool[i]);

}
 //- Selon le chiffre rentre, sorti un alcool.
function afficheAcool(listAcool, demanderChiffre){
    demanderChiffre = parseInt(demanderChiffre);

    if (demanderChiffre !=NaN && demanderChiffre >= 0 && demanderChiffre <= 4){

        
        alert(listAcool[demanderChiffre]);
        
     }else{
         alert("erreur")
     }
    }
  

afficheAcool(listAcool, demanderChiffre);


//- Avec Switch, caterogie l'acool utilisateur choisi est fort ou leger.
var listAcool = prompt("Choissiez les alcools dans la liste: beer/wisky/sake/voka/vin");


switch(listAcool){

    case "beer":
        alert("L'acool leger");
        break;
    case "wisky":
        alert("L'acool fort");
        break;
    case "sake":
        alert("L'acool leger");
        break;
    case "voka":
        alert("L'acool fort");
        break;
    case "vin":
        alert("L'acool leger");
        break;
    default: //Si le chiffre rentre pas dans le tableau. Alert -> mauvais chiffre.
        alert("Erreur ");
}



//Corrigé:

var alcools = [];
while(alcools.length < 5){
    alcools.push(prompt("veuillez choisir l'un de ces alcools: whisky, vodka, vin, champagne, beer, cidre doux, sake, chinmay bleu, liqueur de licht"));
}

for(var i=0; i< alcools.length; i++){
    //                 [i], la potision de chaque element on entre dedans.
    console.log(alcools[i]);
}
console.log(alcools);

var chiffre = pareInt(prompt("entrez un chiffre"));

var alcoolChoisi = alcools [chiffre];

switch(alcoolChoisi){
    case "whisky":
    case "vodka":
    case "tequila":
        alert("Alcool fort");
        break;
    case "vin":
    case "champagne":
    case "beer":
        alert("Alcool leger");
        break;
    default:
        alert("erreur");
}








