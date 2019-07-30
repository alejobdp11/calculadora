function cero(){
  var valor=document.getElementById("display").innerText;
  var imp="0";
  var res= sessionStorage.getItem("reset");
  if (valor=="0") {
    imp="0";
  } else if (res==1) {
    mp="0";
    sessionStorage.setItem("reset",0);
  }
  else {
    imp=valor+"0";
  }
  document.getElementById("display").innerHTML=imp;
  }
function uno(){
    var valor=document.getElementById("display").innerText;
    var imp=0;
    var res= sessionStorage.getItem("reset");
    if (valor=="0") {
      imp=1;
    }else if (res==1) {
      imp="1";
      sessionStorage.setItem("reset",0);
    }
    else {
      imp=valor+""+1;
    }
    console.log(imp);
    document.getElementById("display").innerHTML=imp;
    }
function dos(){
      var valor=document.getElementById("display").innerText;
      var imp=0;
      var res= sessionStorage.getItem("reset");
      if (valor=="0") {
        imp=2;
      }else if (res==1) {
        imp="2";
        sessionStorage.setItem("reset",0);
      }
      else {
        imp=valor+""+2;
      }
      console.log(imp);
      document.getElementById("display").innerHTML=imp;
      }
function tres(){
        var valor=document.getElementById("display").innerText;
        var imp=0;
        var res= sessionStorage.getItem("reset");
        if (valor=="0") {
          imp=3;
        }else if (res==1) {
          imp="3";
          sessionStorage.setItem("reset",0);
        }
        else {
          imp=valor+""+3;
        }
        console.log(imp);
        document.getElementById("display").innerHTML=imp;
        }
function cuatro(){
          var valor=document.getElementById("display").innerText;
          var imp=0;
          var res= sessionStorage.getItem("reset");
          if (valor=="0") {
            imp=4;
          }else if (res==1) {
            imp="4";
            sessionStorage.setItem("reset",0);
          }
          else {
            imp=valor+""+4;
          }
          console.log(imp);
          document.getElementById("display").innerHTML=imp;
          }
function cinco(){
            var valor=document.getElementById("display").innerText;
            var imp=0;
            var res= sessionStorage.getItem("reset");
            if (valor=="0") {
              imp=5;
            }else if (res==1) {
              imp="5";
              sessionStorage.setItem("reset",0);
            }
            else {
              imp=valor+""+5;
            }
            console.log(imp);
            document.getElementById("display").innerHTML=imp;
            }
function ocho(){
              var valor=document.getElementById("display").innerText;
              var imp=0;
              var res= sessionStorage.getItem("reset");
              if (valor=="0") {
                imp=8;
              }else if (res==1) {
                imp="8";
                sessionStorage.setItem("reset",0);
              }
              else {
                imp=valor+""+8;
              }
              console.log(imp);
              document.getElementById("display").innerHTML=imp;
              }
function seis(){
                var valor=document.getElementById("display").innerText;
                var imp=0;
                var res= sessionStorage.getItem("reset");
                if (valor=="0") {
                  imp=6;
                }else if (res==1) {
                  imp="6";
                  sessionStorage.setItem("reset",0);
                }
                else {
                  imp=valor+""+6;
                }
                console.log(imp);
                document.getElementById("display").innerHTML=imp;
                }
function siete(){
                  var valor=document.getElementById("display").innerText;
                  var imp=0;
                  var res= sessionStorage.getItem("reset");
                  if (valor=="0") {
                    imp=7;
                  } else if (res==1) {
                    imp="7";
                    sessionStorage.setItem("reset",0);
                  }
                  else {
                    imp=valor+""+7;
                  }
                  console.log(imp);
                  document.getElementById("display").innerHTML=imp;
                  }
function nueve(){
  var valor=document.getElementById("display").innerText;
  var imp=0;
  var res= sessionStorage.getItem("reset");
  if (valor=="0") {
    imp=9;
  } else if (res==1) {
    imp="9";
    sessionStorage.setItem("reset",0);
  }
  else {
    imp=valor+""+9;
  }
  console.log(imp);
  document.getElementById("display").innerHTML=imp;
  }

  function punto(){
    var valor=document.getElementById("display").innerText;
    var imp=0;
    if (valor=="0") {
      imp=0+".";
    } else {
      imp=valor+".";
    }
    console.log(imp);
    document.getElementById("display").innerHTML=imp;
    }
function suma(){
  var valor1=document.getElementById("display").innerText;
  console.log(valor1);
  var opera="suma";
  sessionStorage.setItem("Valor1", valor1);
  sessionStorage.setItem("operacion",opera);
  var reset=1;
  sessionStorage.setItem("reset",reset);
}
function resta(){
  var valor1=document.getElementById("display").innerText;
  console.log(valor1);
  opera="resta";
  sessionStorage.setItem("Valor1", valor1);
  sessionStorage.setItem("operacion",opera);
  var reset=1;
  sessionStorage.setItem("reset",reset);
}
function multiplica(){
  var valor1=document.getElementById("display").innerText;
  console.log(valor1);
  opera="multiplica";
  sessionStorage.setItem("Valor1", valor1);
  sessionStorage.setItem("operacion",opera);
  var reset=1;
  sessionStorage.setItem("reset",reset);
}
function divide(){
  var valor1=document.getElementById("display").innerText;
  console.log(valor1);
  opera="divide";
  sessionStorage.setItem("Valor1", valor1);
  sessionStorage.setItem("operacion",opera);
  var reset=1;
  sessionStorage.setItem("reset",reset);
}
function igual(){
  var resultado=0;
  var valor1 = sessionStorage.getItem("Valor1");
  var valor2=document.getElementById("display").innerText;
  var operacion= sessionStorage.getItem("operacion");
  var v1=parseFloat(valor1);
  var v2=parseFloat(valor2);
  if (operacion=="suma") {
    resultado=v1+v2;
    document.getElementById("display").innerHTML=resultado;
  }else if (operacion=="resta") {
    resultado=v1-v2;
    document.getElementById("display").innerHTML=resultado;
  }else if (operacion=="multiplica") {
    resultado=v1*v2;
    document.getElementById("display").innerHTML=resultado;
  }else if (operacion=="divide") {
    resultado=v1/v2;
    document.getElementById("display").innerHTML=resultado;
  }

}
function on(){
  document.getElementById("display").innerHTML="0";

}
function signo(){
  var valor=document.getElementById("display").innerText;
  var v1=parseFloat(valor);
  var imp=v1*-1;
  console.log(imp);
  document.getElementById("display").innerHTML=imp;
  }
