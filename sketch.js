//TELAS
//Menu = 1
//Jogo = 2
//Informações = 3
//Resposta certa = 4
//Resposta certa (continuação) = 6
//Resposta errada = 5
var tela = 1
// script poema (COPIADO)
let poema = "miles may separate us \nbut our hearts beat as one \nand i know deep down inside \nthat you're the one i want"
let poema2 = "the distance between us may seem far \nbut our connection is strong and true \nand i can't help but feel \nthat being with you is all i want to do"
let poema3 = "i know it's not easy \nto love from so far away, \nbut i promise to do my best \nto make you feel loved every day"
let poema4 = "with my heart beating and hope \nasking you to be my girlfriend,  \nto take this chance on that feeling,  \nand see where our journey begins"
let poema5 = "will you take this chance with me, \nto build a future where we can live,  \nto explore the depths of our hearts, \nand try to not let distance tear us apart"

let index = 0, index2 = 0, index3 = 0, index4 = 0, index5 = 0
let lastMillis = 0, lastMillis2 = 0, lastMillis3 = 0, lastMillis4 = 0, lastMillis5 = 0

//Coordenadas FIXA das alternativa
X = 250 //Eixo Y
U = 320 //Eixo Y Final, usado no mouseIsPressed
Y = 160 //Comprimento
Z = 70 //Altura
A = 10 //Ângulo
function preload(){
  img_livro = loadImage("livro.png")
  img_coracao = loadImage("coracao.png")
  img_olha_a_faca = loadImage("olha_a_faca.png")
}

function setup() {
  createCanvas(660, 480);
  frameRate(30);
}
function draw() {
  background(102, 178, 255);
  fill(0, 25, 51); //224, 224, 224
  rect(0, -1, 661, 20);
  rect(0, 460, 661, 20);

//Botão voltar para o menu
if(tela!=1){  
  fill("White")
  rect(20, 40, 130, 30, 10)
  fill("Black")
  textAlign(CENTER)
  textSize(20)
  text("Return", 85, 65)   
    if(mouseX>=20&&mouseX<=150&&mouseY>=40&&mouseY<=70){
      if(mouseIsPressed){
        tela = 1}   
    }
}
//menu
if  (tela==1){
  fill("White")
  rect(235, 150, 170, 40, 10) //Jogar
  rect(235, 245, 170, 40, 10) //Informações
  fill("Black")
  textAlign(CENTER)
  textSize(25)
  text("10 Questions", 315, 100)
  text("Start", 320, 180)
  text("About", 320, 275)
  if(mouseX >= 235 && mouseX <= 385&& mouseY >= 150   && mouseY <=190){
    if(mouseIsPressed){
        tela = 2
      }
    }
  if(mouseX >= 235 && mouseX <= 385&& mouseY >= 245   && mouseY <=285){
    if(mouseIsPressed){
      tela = 3}
  }
 }
if  (tela==2){  
  textAlign(LEFT)
  textSize(30)
  text("Will you date me?", 210, 150)
  
  fill("White")
  rect(165, X, Y, Z, A)
  rect(340, X, Y, Z, A)
  fill("Black")
  textAlign(CENTER)
  textSize(20)
  text("Breathe \nif yes", 250, 280)
  text(" Recite the bible \nin japanese if no", 420, 280)
    if(mouseX>=165&&mouseX<=165+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      tela=4
    } //Alternativa A
  }  
  if(mouseX>=340&&mouseX<=340+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      tela=5
    } //Alternativa B
  }
  }
if  (tela==3){
  fill("Black")
  textAlign(CENTER)
  textSize(20)
  text("I'm too lazy...", 80, 120)
}
if  (tela==4){ 
  image(img_coracao,85,40,500,420)
  fill(0, 25, 51)
  frameRate(20)
  textAlign(CENTER)
  textSize(25)
 text(poema.substring(0,index), 0,150, width, height + textAscent())
  scrollY = scrollY + 40
  if(millis() > lastMillis + 300){
    index = index + 1 
    //PALAVRAS COMPLETAS 
    
    while(poema.charAt(index) != ' ' &&
        index < poema.length){
        index = index + 1;
    } 
    lastMillis = millis()
    
  }
  fill("White")
  rect(260, 410, 130, 30, 10)
  fill("Black")
  textAlign(CENTER)
  textSize(20)
  text("Next", 323, 435)
  if(mouseX>=260&&mouseX<=390&&mouseY>=410&&mouseY<=440){
      if(mouseIsPressed){
        tela = 6}   
    }
}
if  (tela==6){
  image(img_coracao,85,40,500,420)
  fill(0, 25, 51)
  frameRate(20)
  textAlign(CENTER)
  textSize(25)
 text(poema2.substring(0,index2), 0,150, width, height + textAscent())
  scrollY = scrollY + 40
  if(millis() > lastMillis2 + 300){
    index2 = index2 + 1 
    //PALAVRAS COMPLETAS 
    
    while(poema2.charAt(index2) != ' ' &&
        index2 < poema2.length){
        index2 = index2 + 1;
      }
    lastMillis2 = millis()
    }
  fill("White")
  rect(260, 370, 130, 30, 10)
  fill("Black")
  textAlign(CENTER)
  textSize(20)
  text("Next", 323, 395)   
    if(mouseX>=260&&mouseX<=390&&mouseY>=370&&mouseY<=400){
      if(mouseIsPressed){
        tela = 7}
    }
  }
if  (tela==7){
  image(img_coracao,85,40,500,420)
  fill(0, 25, 51)
  frameRate(20)
  textAlign(CENTER)
  textSize(25)
 text(poema3.substring(0,index3), 0,150, width, height + textAscent())
  scrollY = scrollY + 40
  if(millis() > lastMillis3 + 300){
    index3 = index3 + 1 
    //PALAVRAS COMPLETAS 
    
    while(poema3.charAt(index3) != ' ' &&
        index3 < poema3.length){
        index3 = index3 + 1;
      }
    lastMillis3 = millis()
    }
  fill("White")
  rect(260, 410, 130, 30, 10)
  fill("Black")
  textAlign(CENTER)
  textSize(20)
  text("Next", 323, 435)   
    if(mouseX>=260&&mouseX<=390&&mouseY>=410&&mouseY<=440){
      if(mouseIsPressed){
        tela = 8}
    }
  }
if  (tela==8){
  image(img_coracao,85,40,500,420)
  fill(0, 25, 51)
  frameRate(20)
  textAlign(CENTER)
  textSize(25)
 text(poema4.substring(0,index4), 0,150, width, height + textAscent())
  scrollY = scrollY + 40
  if(millis() > lastMillis4 + 300){
    index4 = index4 + 1 
    //PALAVRAS COMPLETAS 
    
    while(poema4.charAt(index4) != ' ' &&
        index4 < poema4.length){
        index4 = index4 + 1;
      }
    lastMillis4 = millis()
    }
  fill("White")
  rect(260, 370, 130, 30, 10)
  fill("Black")
  textAlign(CENTER)
  textSize(20)
  text("Next", 323, 395)   
    if(mouseX>=260&&mouseX<=390&&mouseY>=370&&mouseY<=400){
      if(mouseIsPressed){
        tela = 9}
    }
  }
if  (tela==9){
  image(img_coracao,85,40,500,420)
  fill(0, 25, 51)
  frameRate(20)
  textAlign(CENTER)
  textSize(25)
 text(poema5.substring(0,index5), 0,150, width, height + textAscent())
  scrollY = scrollY + 40
  if(millis() > lastMillis5 + 300){
    index5 = index5 + 1 
    //PALAVRAS COMPLETAS 
    
    while(poema5.charAt(index5) != ' ' &&
        index5 < poema5.length){
        index5 = index5 + 1;
      }
    lastMillis5 = millis()
    }
  }
  //tela de errado
if  (tela==5){
  fill("White")
  rect(235, 345, 150, 40, 10) //Informações
  rect(65, 275, 120, 150, 10) // Quadrado do livro
  image(img_livro,38,260,180,180)
  image(img_olha_a_faca, 400,240,180,180)
  fill("Black")
  textAlign(CENTER)
  textSize(55)
  text("Wrong Answer", 310, 180)
  textSize(25)
  text("Try Again", 310, 375)
  if(mouseX >= 235 && mouseX <= 385&& mouseY >= 345   && mouseY <=385){
    if(mouseIsPressed){
        tela = 2
      }
    }
  } 
} //draw