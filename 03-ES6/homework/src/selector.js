var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  


};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  let res = "";
  if(selector[0] === "#") {res ="id"}
  else if(selector[0] === ".") {res = "class"}
  else {
      let input = selector.split(".")
      if(input.length === 1) res = "tag"
      else res = `tag.class`     
  }
  return res
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  let nombre = selector.slice(1)

  if (selectorType === "id") {
    
  matchFunction = function (elemento){
      return elemento.id == nombre  ? true: false
    }  
   
  } else if (selectorType === "class") {
   matchFunction = function (elemento){
      let clases = elemento.classList;
      let resultado = false;
      for(clase of clases){
        if(clase == nombre) resultado = true
      }
      return resultado
    }  
  } else if (selectorType === "tag.class") {
    matchFunction = function (elemento){

      //verificar selector
    let res1 = false;
    if(elemento.tagName == selector.split(".")[0].toUpperCase()){
    res1 = true
    }
    if(res1 == false) return res1
      //verificar Clases

    let nombreClass = selector.split(".")[1]
    let clases = elemento.classList;
    let resultado = false;
    for(let i = 0; i <clases.length; i++){
      if(clases[i] == nombreClass) {resultado = true}
    }
    if(resultado) {return true}
    else {return false}
    } 
    
  } else if (selectorType === "tag") {
    matchFunction = function (elemento){
    let res = false;
    if(selectorTypeMatcher(elemento.tagName) == "tag"){
    res = true
    }
    return res;
    } 
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
