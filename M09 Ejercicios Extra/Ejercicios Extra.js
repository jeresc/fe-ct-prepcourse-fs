/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const entries = Object.entries(objeto);
   return entries
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let result={};

   for(let i=0; i < string.length; i++){
      if (result[string[i]]){
         result[string[i]]++;
      }
      else{
         result[string[i]]=1;
      }
   }

   // VERSION MEJORADA
   // for (char of string)
   // result[char] = (result[char] ?? 0) + 1

   return result
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let arr = [];
   for (let i in string) {
      if (string[i] === string[i].toUpperCase()) {
         arr.push(string[i]);
      }
   }
   for (let i in string) {
      if (string[i] !== string[i].toUpperCase()) {
         arr.push(string[i]);
      }
   }
   return arr.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   fraseDividida = frase.split(' ')
   fraseDivididaInvertida = []
   for (let i = 0; i < fraseDividida.length; i++) {
      newString = ""
      for (var j = fraseDividida[i].length - 1; j >= 0; j--) { 
         newString += fraseDividida[i][j];
      }
      fraseDivididaInvertida.push(newString)
   }
   return fraseDivididaInvertida.join(' ')
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   numeroString = numero.toString()
   newString = "";
      for (var i = numeroString.length - 1; i >= 0; i--) { 
         newString += numeroString[i];
      }
   if (numeroString == newString) {
      return "Es capicua"
   } else return "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var newString = string.replace('a','').replace('b','').replace('c','')
   return newString
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a,b) => {
      return  a.length - b.length;
   })
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   unionArray = []
   for (let i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) { 
         if (array1[i] == array2[j]){
            unionArray.push(array1[i]);
         }
      }
   }
   return unionArray
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
