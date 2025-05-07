const calculadora = {
    type : "casio",
    modelo : "2010",
    color : "blue",
    digitos : 8,
    pantallaInteractiva : true,
    
     sumar:function (a, b) {
      return(a + b);
    },
     restar:function (a, b) {
      return(a - b); 
    },
     multiplicar:function (a, b) {
      return(a * b);  
    },
     dividir:function (a, b) {
      return(a / b);  
    },
    addNumber:function (number){
    document.getElementById("display").value = number;
    },  
}