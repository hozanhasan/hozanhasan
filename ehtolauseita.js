function jarjesta() {
var luku = [];
luku[0] = document.getElementById('eka').value;
luku[1] = document.getElementById('toka').value;
luku[2] = document.getElementById('kolmas').value;
 luku.sort();
 var tulosta = '';
 for(x=0;x<=2;x++){
      tulosta += luku[x] + '  ';
    }
 document.write(tulosta);
}

function etsiSuurin() {
  var luku = [];
  luku[0] = document.getElementById('luku1').value;
  luku[1] = document.getElementById('luku2').value;
  luku[2] = document.getElementById('luku3').value;
  luku[3] = document.getElementById('luku4').value;
  luku[4] = document.getElementById('luku5').value;

   var tulosta2 = 0;
   for(x=0;x<=4;x++){
     if (luku[x] > tulosta2) {
       tulosta2 = luku[x];
      }
    }
   document.write(tulosta2);
}

function paritonParillinen(){
  var x;
  x = document.getElementById('luku').value;
  x = x/2;
  if(Number.isInteger(x)) {
    document.write('parillinen');
  } else {
    document.write('ei parillinen');
  }
}

function ajoneuvo(){
  var x;
  x = document.getElementById('ika').value;
  if(x<16) {
   document.write('polkupyörää');
   } else if(x >= 16 && x < 18) {
    document.write('mopoa');
  } else {
    document.write('autoa');
  }
}

function kaanna(){
  var x;
  x = document.getElementById('kieli').value;
  switch (x) {
    case 'eng':
      document.write('Hello world');
      break;
    case 'swe':
      document.write('Hej Världen');
      break;
    case 'esp':
      document.write('Hola Mundo');
      break;
    default:
      document.write('Valitse jotakin');
      break;
  }
}
