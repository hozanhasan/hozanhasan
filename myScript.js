function parilliset() {
  var luku;
  luku = parseInt(document.getElementById("lname").value,10);
  if (luku >= 2){
    if (luku%2==0) {
      var tulosta = "";
      for(var i=2;i<=luku;i+=2) {
        tulosta += i + "<br>";
      }
      document.write(tulosta);
    } else {
      alert("antamasi numero ei ole parillinen!");
    }
  } else {
    alert("antamasi numero on liian pieni!");
  }
}

function salasanaksi() {
  var rudelle="";
  var luku = document.getElementById("sala").value;
  var tolus = luku.length;
  for (var i =0 ; i< tolus ; i++) {
      rudelle += luku[i] + "Ö";
    }
  document.write(rudelle);
}

function star(){
  var rudelle="";
  for (var i=1 ; i <= 100 ; i++) {
      rudelle+=i + " ";
      if(i%3==0 && i%5==0){
        rudelle+="hip heijaa";
      }else if (i%3==0){
          rudelle+="hip";
      }else if (i%5==0) {
          rudelle+="heijaa";
      }
      rudelle+="</br>";
    }
  document.write(rudelle);
}

function ekat(){
  var rudelle="";
  for (var i=1 ; i <= 10 ; i++) {
      rudelle+=i + " ";
    }
  document.write(rudelle);
}

function yhteen(){
  var rudelle=0;
  for (var i=1 ; i <= 10 ; i++) {
      rudelle+=i;
    }
  document.write(rudelle);
}
function potenssiin() {
  var rudelle=0;
  var luku1=parseInt(document.getElementById("luku1").value,10);
  var luku2=parseInt(document.getElementById("luku2").value,10);
  rudelle=Math.pow(luku1, luku2);
  document.write(rudelle);
}

function supi() {
  var luku = [
  (parseInt(document.getElementById("muu1").value,10)),
  (parseInt(document.getElementById("muu2").value,10)),
  (parseInt(document.getElementById("muu3").value,10)),
  (parseInt(document.getElementById("muu4").value,10)),
  (parseInt(document.getElementById("muu5").value,10))
  ];
  var suurin=Math.min.apply(null,luku);
  var pienin=Math.max.apply(null,luku);
  document.write("suurin= " + suurin + ", pienin= "+ pienin);
}
function arpoo(){
  var rudelle ="";
  var kirjain ="";
  var luku = document.getElementById("sala2").value;
  var tolus = luku.length;
  for (var i =0 ; i< tolus ; i++) {
      // kirjain = toString(Math.floor(Math.random()*15)+1+75);
      kirjain = String.fromCharCode(Math.floor(Math.random()*15)+1+75);
      rudelle += luku[i] + kirjain;
    }
  document.write(rudelle);
}
// Tehtävä 11
function numerotSummat() {
  // ESITELLÄÄN MUUTTUJAT
  var luku1=0;            // pienemmät numerot
  var luku2=0;            // suuremmat numerot
  var parilliset="";       // luettelo parillisista
  var parittomat="";       // luettelo parittomista
  var summa_parilliset=0; // Parillisten numeroiden yhteenlaskettu summa
  var summa_parittomat=0; // Parittomien numeroiden yhteenlaskettu summa
  var t_parilliset="";     // parilliset tulostetan
  var t_parittomat="";     // parittomat tulostetan
  // HAETAAN HTML ARVOT
  luku1 = parseInt(document.getElementById("muu6").value,10);
  luku2 = parseInt(document.getElementById("muu7").value,10);

  for(var i=luku1;i<=luku2;i++){
    if (i%2==0){
        summa_parilliset+=i;
        parilliset+=i+" ";
    }else{
      summa_parittomat+=i;
      parittomat+=i+" ";
    }
  }
  t_parilliset="parilliset numerot: "+parilliset+"ja niiden summa "+summa_parilliset+"<br>";
  t_parittomat="parittomat numerot: "+parittomat+"ja niiden summa "+summa_parittomat;
  document.write(t_parilliset);
  document.write(t_parittomat);
}
