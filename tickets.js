let ticketBox = document.querySelectorAll(".ticket-box");
// let newTicket = document.querySelector(".generate-tickets");

let randomNumberStored = [];
let coloum1Count = 1;
let coloum2Count = 1;
let coloum3Count = 1;
let coloum4Count = 1;
let coloum5Count = 1;
let coloum6Count = 1;
let coloum7Count = 1;
let coloum8Count = 1;
let coloum9Count = 1;

let coloum1 = [0, 9, 18];
let coloum2 = [1, 10, 19];
let coloum3 = [2, 11, 20];
let coloum4 = [3, 12, 21];
let coloum5 = [4, 13, 22];
let coloum6 = [5, 14, 23];
let coloum7 = [6, 15, 24];
let coloum8 = [7, 16, 25];
let coloum9 = [8, 17, 26];

let row1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let row2 = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let row3 = [18, 19, 20, 21, 22, 23, 24, 25, 26];

let randomNumber;
// /Housie-Number-Generator
if (window.location.pathname === "/Housie-Number-Generator/ticket.html") {
  ticketBox.forEach((e) => {
    e.innerHTML = "";
  });
  for (let i = 1; i <= 15; i++) {
    do {
      randomNumberGenerator();
    } while (randomNumberStored.includes(randomNumber));
    randomNumberStored.push(randomNumber);

    if (randomNumber <= 9) {
      let randomColoum1 = Math.floor(Math.random() * coloum1.length);
      removeIndexIfUsed(randomColoum1, coloum1);
    } else if (randomNumber > 9 && randomNumber <= 19) {
      let randomColoum2 = Math.floor(Math.random() * coloum2.length);
      removeIndexIfUsed(randomColoum2, coloum2);
    } else if (randomNumber > 19 && randomNumber <= 29) {
      let randomColoum3 = Math.floor(Math.random() * coloum3.length);
      removeIndexIfUsed(randomColoum3, coloum3);
    } else if (randomNumber > 29 && randomNumber <= 39) {
      let randomColoum4 = Math.floor(Math.random() * coloum4.length);
      removeIndexIfUsed(randomColoum4, coloum4);
    } else if (randomNumber > 39 && randomNumber <= 49) {
      let randomColoum5 = Math.floor(Math.random() * coloum5.length);
      removeIndexIfUsed(randomColoum5, coloum5);
    } else if (randomNumber > 49 && randomNumber <= 59) {
      let randomColoum6 = Math.floor(Math.random() * coloum6.length);
      removeIndexIfUsed(randomColoum6, coloum6);
    } else if (randomNumber > 59 && randomNumber <= 69) {
      let randomColoum7 = Math.floor(Math.random() * coloum7.length);
      removeIndexIfUsed(randomColoum7, coloum7);
    } else if (randomNumber > 69 && randomNumber <= 79) {
      let randomColoum8 = Math.floor(Math.random() * coloum8.length);
      removeIndexIfUsed(randomColoum8, coloum8);
    } else if (randomNumber > 79 && randomNumber <= 90) {
      let randomColoum9 = Math.floor(Math.random() * coloum9.length);
      removeIndexIfUsed(randomColoum9, coloum9);
    }
  }
  assendingOrder();
}

function removeIndexIfUsed(randomColoum, coloum) {
  ticketBox[coloum[randomColoum]].innerHTML = randomNumber;
  if (randomColoum == 0) {
    coloum.shift();
  } else if (randomColoum == 1) {
    coloum.splice(randomColoum, randomColoum);
  } else {
    coloum.splice(randomColoum, randomColoum - 1);
  }
}

// newTicket.addEventListener("click", function () {});

// function putNumberInABox() {}

function randomNumberGenerator() {
  randomNumber = Math.floor(Math.random() * 90) + 1;
  if (randomNumber <= 9 && coloum1Count <= 2) {
    coloum1Count++;
    return randomNumber;
  } else if (randomNumber > 9 && randomNumber <= 19 && coloum2Count <= 2) {
    coloum2Count++;
    return randomNumber;
  } else if (randomNumber > 19 && randomNumber <= 29 && coloum3Count <= 2) {
    coloum3Count++;
    return randomNumber;
  } else if (randomNumber > 29 && randomNumber <= 39 && coloum4Count <= 2) {
    coloum4Count++;
    return randomNumber;
  } else if (randomNumber > 39 && randomNumber <= 49 && coloum5Count <= 2) {
    coloum5Count++;
    return randomNumber;
  } else if (randomNumber > 49 && randomNumber <= 59 && coloum6Count <= 2) {
    coloum6Count++;
    return randomNumber;
  } else if (randomNumber > 59 && randomNumber <= 69 && coloum7Count <= 2) {
    coloum7Count++;
    return randomNumber;
  } else if (randomNumber > 69 && randomNumber <= 79 && coloum8Count <= 2) {
    coloum8Count++;
    return randomNumber;
  } else if (randomNumber > 79 && randomNumber <= 90 && coloum9Count <= 2) {
    coloum9Count++;
    return randomNumber;
  } else {
    randomNumberGenerator();
  }
}

function assendingOrder() {
  for (let i = 0; i <= 1; i++) {
    if (ticketBox[0].innerHTML != "" && ticketBox[9].innerHTML != "") {
      if (ticketBox[0].innerHTML > ticketBox[9].innerHTML) {
        let ticketBox0 = ticketBox[0].innerHTML;
        ticketBox[0].innerHTML = ticketBox[9].innerHTML;
        ticketBox[9].innerHTML = ticketBox0;
      }
    }
    if (ticketBox[9].innerHTML != "" && ticketBox[18].innerHTML != "") {
      if (ticketBox[9].innerHTML > ticketBox[18].innerHTML) {
        let ticketBox9 = ticketBox[9].innerHTML;
        ticketBox[9].innerHTML = ticketBox[18].innerHTML;
        ticketBox[18].innerHTML = ticketBox9;
      }
    }
    if (ticketBox[0].innerHTML != "" && ticketBox[18].innerHTML != "") {
      if (ticketBox[0].innerHTML > ticketBox[18].innerHTML) {
        let ticketBox0 = ticketBox[0].innerHTML;
        ticketBox[0].innerHTML = ticketBox[18].innerHTML;
        ticketBox[18].innerHTML = ticketBox0;
      }
    }

    if (ticketBox[1].innerHTML != "" && ticketBox[10].innerHTML != "") {
      if (ticketBox[1].innerHTML > ticketBox[10].innerHTML) {
        let ticketBox1 = ticketBox[1].innerHTML;
        ticketBox[1].innerHTML = ticketBox[10].innerHTML;
        ticketBox[10].innerHTML = ticketBox1;
      }
    }
    if (ticketBox[10].innerHTML != "" && ticketBox[19].innerHTML != "") {
      if (ticketBox[10].innerHTML > ticketBox[19].innerHTML) {
        let ticketBox10 = ticketBox[10].innerHTML;
        ticketBox[10].innerHTML = ticketBox[19].innerHTML;
        ticketBox[19].innerHTML = ticketBox10;
      }
    }
    if (ticketBox[1].innerHTML != "" && ticketBox[19].innerHTML != "") {
      if (ticketBox[1].innerHTML > ticketBox[19].innerHTML) {
        let ticketBox1 = ticketBox[1].innerHTML;
        ticketBox[1].innerHTML = ticketBox[19].innerHTML;
        ticketBox[19].innerHTML = ticketBox1;
      }
    }

    if (ticketBox[2].innerHTML != "" && ticketBox[11].innerHTML != "") {
      if (ticketBox[2].innerHTML > ticketBox[11].innerHTML) {
        let ticketBox2 = ticketBox[2].innerHTML;
        ticketBox[2].innerHTML = ticketBox[11].innerHTML;
        ticketBox[11].innerHTML = ticketBox2;
      }
    }
    if (ticketBox[11].innerHTML != "" && ticketBox[20].innerHTML != "") {
      if (ticketBox[11].innerHTML > ticketBox[20].innerHTML) {
        let ticketBox11 = ticketBox[11].innerHTML;
        ticketBox[11].innerHTML = ticketBox[20].innerHTML;
        ticketBox[20].innerHTML = ticketBox11;
      }
    }
    if (ticketBox[2].innerHTML != "" && ticketBox[20].innerHTML != "") {
      if (ticketBox[2].innerHTML > ticketBox[20].innerHTML) {
        let ticketBox2 = ticketBox[2].innerHTML;
        ticketBox[2].innerHTML = ticketBox[20].innerHTML;
        ticketBox[20].innerHTML = ticketBox2;
      }
    }

    if (ticketBox[3].innerHTML != "" && ticketBox[12].innerHTML != "") {
      if (ticketBox[3].innerHTML > ticketBox[12].innerHTML) {
        let ticketBox3 = ticketBox[3].innerHTML;
        ticketBox[3].innerHTML = ticketBox[12].innerHTML;
        ticketBox[12].innerHTML = ticketBox3;
      }
    }
    if (ticketBox[12].innerHTML != "" && ticketBox[21].innerHTML != "") {
      if (ticketBox[12].innerHTML > ticketBox[21].innerHTML) {
        let ticketBox12 = ticketBox[12].innerHTML;
        ticketBox[12].innerHTML = ticketBox[21].innerHTML;
        ticketBox[21].innerHTML = ticketBox12;
      }
    }
    if (ticketBox[3].innerHTML != "" && ticketBox[21].innerHTML != "") {
      if (ticketBox[3].innerHTML > ticketBox[21].innerHTML) {
        let ticketBox3 = ticketBox[3].innerHTML;
        ticketBox[3].innerHTML = ticketBox[21].innerHTML;
        ticketBox[21].innerHTML = ticketBox3;
      }
    }

    if (ticketBox[4].innerHTML != "" && ticketBox[13].innerHTML != "") {
      if (ticketBox[4].innerHTML > ticketBox[13].innerHTML) {
        let ticketBox4 = ticketBox[4].innerHTML;
        ticketBox[4].innerHTML = ticketBox[13].innerHTML;
        ticketBox[13].innerHTML = ticketBox4;
      }
    }
    if (ticketBox[13].innerHTML != "" && ticketBox[22].innerHTML != "") {
      if (ticketBox[13].innerHTML > ticketBox[22].innerHTML) {
        let ticketBox13 = ticketBox[13].innerHTML;
        ticketBox[13].innerHTML = ticketBox[22].innerHTML;
        ticketBox[22].innerHTML = ticketBox13;
      }
    }
    if (ticketBox[4].innerHTML != "" && ticketBox[22].innerHTML != "") {
      if (ticketBox[4].innerHTML > ticketBox[22].innerHTML) {
        let ticketBox4 = ticketBox[4].innerHTML;
        ticketBox[4].innerHTML = ticketBox[22].innerHTML;
        ticketBox[22].innerHTML = ticketBox4;
      }
    }

    if (ticketBox[5].innerHTML != "" && ticketBox[14].innerHTML != "") {
      if (ticketBox[5].innerHTML > ticketBox[14].innerHTML) {
        let ticketBox5 = ticketBox[5].innerHTML;
        ticketBox[5].innerHTML = ticketBox[14].innerHTML;
        ticketBox[14].innerHTML = ticketBox5;
      }
    }
    if (ticketBox[14].innerHTML != "" && ticketBox[23].innerHTML != "") {
      if (ticketBox[14].innerHTML > ticketBox[23].innerHTML) {
        let ticketBox14 = ticketBox[14].innerHTML;
        ticketBox[14].innerHTML = ticketBox[23].innerHTML;
        ticketBox[23].innerHTML = ticketBox14;
      }
    }
    if (ticketBox[5].innerHTML != "" && ticketBox[23].innerHTML != "") {
      if (ticketBox[5].innerHTML > ticketBox[23].innerHTML) {
        let ticketBox5 = ticketBox[5].innerHTML;
        ticketBox[5].innerHTML = ticketBox[23].innerHTML;
        ticketBox[23].innerHTML = ticketBox5;
      }
    }

    if (ticketBox[6].innerHTML != "" && ticketBox[15].innerHTML != "") {
      if (ticketBox[6].innerHTML > ticketBox[15].innerHTML) {
        let ticketBox6 = ticketBox[6].innerHTML;
        ticketBox[6].innerHTML = ticketBox[15].innerHTML;
        ticketBox[15].innerHTML = ticketBox6;
      }
    }
    if (ticketBox[15].innerHTML != "" && ticketBox[24].innerHTML != "") {
      if (ticketBox[15].innerHTML > ticketBox[24].innerHTML) {
        let ticketBox15 = ticketBox[15].innerHTML;
        ticketBox[15].innerHTML = ticketBox[24].innerHTML;
        ticketBox[24].innerHTML = ticketBox15;
      }
    }
    if (ticketBox[6].innerHTML != "" && ticketBox[24].innerHTML != "") {
      if (ticketBox[6].innerHTML > ticketBox[24].innerHTML) {
        let ticketBox6 = ticketBox[6].innerHTML;
        ticketBox[6].innerHTML = ticketBox[24].innerHTML;
        ticketBox[24].innerHTML = ticketBox6;
      }
    }

    if (ticketBox[7].innerHTML != "" && ticketBox[16].innerHTML != "") {
      if (ticketBox[7].innerHTML > ticketBox[16].innerHTML) {
        let ticketBox7 = ticketBox[7].innerHTML;
        ticketBox[7].innerHTML = ticketBox[16].innerHTML;
        ticketBox[16].innerHTML = ticketBox7;
      }
    }
    if (ticketBox[16].innerHTML != "" && ticketBox[25].innerHTML != "") {
      if (ticketBox[16].innerHTML > ticketBox[25].innerHTML) {
        let ticketBox16 = ticketBox[16].innerHTML;
        ticketBox[16].innerHTML = ticketBox[25].innerHTML;
        ticketBox[25].innerHTML = ticketBox16;
      }
    }
    if (ticketBox[7].innerHTML != "" && ticketBox[25].innerHTML != "") {
      if (ticketBox[7].innerHTML > ticketBox[25].innerHTML) {
        let ticketBox7 = ticketBox[7].innerHTML;
        ticketBox[7].innerHTML = ticketBox[25].innerHTML;
        ticketBox[25].innerHTML = ticketBox7;
      }
    }

    if (ticketBox[8].innerHTML != "" && ticketBox[17].innerHTML != "") {
      if (ticketBox[8].innerHTML > ticketBox[17].innerHTML) {
        let ticketBox8 = ticketBox[8].innerHTML;
        ticketBox[8].innerHTML = ticketBox[17].innerHTML;
        ticketBox[17].innerHTML = ticketBox8;
      }
    }
    if (ticketBox[17].innerHTML != "" && ticketBox[26].innerHTML != "") {
      if (ticketBox[17].innerHTML > ticketBox[26].innerHTML) {
        let ticketBox17 = ticketBox[17].innerHTML;
        ticketBox[17].innerHTML = ticketBox[26].innerHTML;
        ticketBox[26].innerHTML = ticketBox17;
      }
    }
    if (ticketBox[8].innerHTML != "" && ticketBox[26].innerHTML != "") {
      if (ticketBox[8].innerHTML > ticketBox[26].innerHTML) {
        let ticketBox8 = ticketBox[8].innerHTML;
        ticketBox[8].innerHTML = ticketBox[26].innerHTML;
        ticketBox[26].innerHTML = ticketBox8;
      }
    }
  }
}

ticketBox.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e.innerHTML != "") {
      this.disabled = true;
      if (this.disabled == true) {
        this.style.color = "black";
        this.style.background = "red";
      }
    }
  });
});
