"use strict"


// PIRMA UŽDUOTIS
// Parašykite scriptą, kuris paprašytų įvesti: prekės kainą, paklaustų ar reikalingas pristatymas, jei reikalingas - paklaustų miesto į kurį reiks pristatyti. Naudokit do while loop, kol kažką įrašys arba įrašys teisingai ir if bei else kad patikrintų ką įrašys.

// "Įveskite prekės kainą";
// "Ar reikalingas pristatymas į namus? (taip/ne)";
// "Į kurį miestą reiks pristatyti?"

// Galiausiai atspausdintų tokią informaciją:

// ---
// 1 variantas (be pristatymo)

// Prekės kaina: xx.xx €
// Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a


// ---
// 2 variantas (su pristatymu)

// Prekės kaina : xx.xx €
// Pristatymas: xx.xx €
// Iš viso: xx.xx €
// Prekę pristatysime į "įvestas miestas" per 1-3 dienas.


// do {    
// var kaina = prompt("Įveskite prekės kainą")
//     kaina = Number(kaina)
// }   while(isNaN(kaina))

    
//     var pristatymas = confirm("Ar reikalingas pristatymas")
//     var pristatymoKaina = 2.5 
//     pristatymoKaina = Number(pristatymoKaina)

//     if (pristatymas==true){
//       do{  
//         var miestas = prompt("Į kokį miestą reikės pristatyti?")
//     } while(miestas=="")
//         console.log("Prekės kaina : " + kaina + " €")
//         console.log("Pristatymas : " + pristatymoKaina + " €")
//         console.log("Iš viso : " + (kaina+pristatymoKaina) + " €")
//         console.log("Prekę pristatysime į  : " + miestas + " per 1-3 dienas")
//     }
//    else {
//     console.log("Prekės kaina :" + kaina + " €")
//     console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")}

// 1 uzduoties geresnis variantas

do {
    var kaina = prompt("Įveskite prekės kainą")
}   while(isNaN(kaina))
	
    kaina = Number(kaina)
    var pristatymas = confirm("Ar reikalingas pristatymas")
    var pristatymoKaina = 2.5 
    pristatymoKaina = Number(pristatymoKaina)


    if (pristatymas==true){
      do{  var miestas = prompt("Į kokį miestą reikės pristatyti?")
		} while(miestas==="" || !miestas)
	console.log("Prekės kaina: " + kaina + " €")
	console.log("Pristatymas: " + pristatymoKaina + " €")
	console.log("Iš viso: " + (kaina+pristatymoKaina) + " €")
	console.log("Prekę pristatysime į:  " + miestas + " per 1-3 dienas")
    }
   else {
    console.log("Prekės kaina : " + kaina + " €")
    console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
}
