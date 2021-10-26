function pisteet(){
  var luku=0;
  var sana=document.getElementById('scsana').value;
  for (var y=0;y<=sana.length;y++){
    switch (sana[y]) {
      case "A":
      case "E":
      case "I":
      case "N":
      case "S":
      case "T":
        luku =luku + 1;
        break;
      case "O":
      case "A":
      case "K":
      case "L":
        luku=luku+ 2;
        break;
      case "U":
      case "M":
        luku=luku+3;
        break;
      case "Y":
      case "H":
      case "J":
      case "P":
      case "R":
      case "V":
        luku=luku+4;
        break;
      case "Ö":
      case "D":
        luku=luku+7;
        break;
      case "B":
      case "F":
      case "G":
        luku=luku+8;
        break;
      case "C":
        luku=luku+10;
        break;
      default:
        luku=luku+12;
    }
  }
  document.write("sanan "+sana+" pisteet ovat: "+luku);
}

function arvonumerot(){
  var luku1=Math.floor(Math.random() * 40+1);
  var luku2=Math.floor(Math.random() * 40+1);
  var luku3=Math.floor(Math.random() * 40+1);
  var luku4=Math.floor(Math.random() * 40+1);
  var luku5=Math.floor(Math.random() * 40+1);
  var luku6=Math.floor(Math.random() * 40+1);
  var luku7=Math.floor(Math.random() * 40+1);
    document.write(luku1+","+luku2+","+luku3+","+luku4+","+luku5+","+luku6+","+luku7);
}

function taulokkomuotoon(){
  var tolusta="";
  var luku1=[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  tolusta="<table style='width:100%'><br>";
  for (var y=0;y<=4;y++){
    tolusta+="<tr>";
    for (var x=0;x<=3;x++){
      tolusta+="<td>" + luku1[y][x] + "</td><br>";
    }
    tolusta+="</tr>";
  }
  tolusta+="</table>";
  document.write(tolusta);
}

function arvoKortit()
{
var pakka=[];
var maat =["&#9828;","&#9827;","&#9826;","&#9825;"];
//var maat =["pa,"ri,ru,he"]
var numerot = ["A","2","3","4","5","6","7","8","10","J","Q","K"];
laskuri=0;
for (m=0;m<maat.length;m++)
{
  for (n=0;n<numerot.length;n++)
  {
      if(m==maat.length-1 && n==numerot.length-1)
      {
        pakka[laskuri]=maat[m]+numerot[n];
      }
      else{
       pakka[laskuri]=maat[m]+numerot[n];
       laskuri++;
       }
    }
  }
  var kortit=[];
  var tulosta = "<p>";
  for(l=0;l<5;l++)
  {
    temp=pakka[Math.floor(Math.random()*52)];
    kortit[l]=temp;
  }
  for(x = 0; x < 5; x++ ) {
    tulosta += kortit[x];
    if(x < 4) tulosta += ", ";
  }
  tulosta += "</p>";
  document.getElementById("pakka").innerHTML=tulosta;
}
