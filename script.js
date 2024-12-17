// variables
c1 = document.getElementById("c1");
c2 = document.getElementById("c2");
c3 = document.getElementById("c3");

s1 = document.getElementById("s1");
s2 = document.getElementById("s2");
s3 = document.getElementById("s3");
s4 = document.getElementById("s4");
s5 = document.getElementById("s5");
s6 = document.getElementById("s6");

r2 = document.getElementById("r2");

//character functions

function switchSol() {
  document.getElementById("sol-audio").play();
  r2.classList.add("bg1");
  s1.setAttribute("class", "gone");
  s2.setAttribute("class", "gone");
  s3.classList.add("text");
  s3.classList.remove("color3", "asukaR");
  s4.classList.add("text");
  s4.classList.remove("color4", "giovanna");
  s5.setAttribute("class", "gone");
  s6.setAttribute("class", "gone");

  var img = document.createElement("img"); // Create an img element
  img.id = "full-sol"; // Set the ID
  img.classList.add("full-sol"); // Add a class
  img.onclick = function () {
    playSol();
  }; // Set the onclick function
  c1.appendChild(img); // Add the image to column1

  c3.classList.add("solList");

  s3.innerHTML =
    "Sol Badguy - The main protagonist of the Guilty Gear series.(previously known as Frederick) Type: Balance, Easy (★★★★★)";

  s4.innerHTML =
    "A short-tempered and blunt bounty hunter on a quest to eliminate all Gears.";
}

function switchElphelt() {
  document.getElementById("elphelt-audio").play();
  r2.classList.add("bg1");
  s1.setAttribute("class", "gone");
  s2.setAttribute("class", "gone");
  s3.classList.add("text");
  s3.classList.remove("color3", "asukaR");
  s4.classList.add("text");
  s4.classList.remove("color4", "giovanna");
  s5.setAttribute("class", "gone");
  s6.setAttribute("class", "gone");
  c3.classList.add("elpheltList");

  var img = document.createElement("img");
  img.id = "full-elphelt";
  img.classList.add("full-elphelt");

  img.onclick = function () {
    playElphelt();
  };
  c1.appendChild(img);
  s3.innerHTML =
    "Eplhelt Valentine - A Valentine created by the Universal Will along with her sister.  Type: Rushdown, Easy  (★★★★★)";
  s4.innerHTML =
    "A very bubbly character who loves animals and nature. Also in a band called Speothos Venaticus";
}

function switchAsukaR() {
  document.getElementById("asukaR-audio").play();
  r2.classList.add("bg2");
  s1.setAttribute("class", "gone");
  s2.setAttribute("class", "gone");
  s3.classList.add("text");
  s3.classList.remove("color3", "asukaR");
  s4.classList.add("text");
  s4.classList.remove("color4", "giovanna");
  s5.setAttribute("class", "gone");
  s6.setAttribute("class", "gone");
  c3.classList.add("asukaRList");

  var img = document.createElement("img");
  img.id = "full-asukaR";
  img.classList.add("full-asukaR");
  img.onclick = function () {
    playAsukaR();
  };
  c1.appendChild(img);

  s3.innerHTML =
    "Asuka R Kreutz - A scientist and master of magic, also known as That Man, or the Gear Maker. Type: Unique, Hard(★☆☆☆☆)";
  s4.innerHTML =
    "Asuka R#, is a clone That Man had created to do work on Earth. That Man or Asuka continues to transmit “clear numbers” from space, in the hopes of bringing peace to Earth";
}

function switchGiovanna() {
  document.getElementById("gio-audio").play();
  r2.classList.add("bg2");
  s1.setAttribute("class", "gone");
  s2.setAttribute("class", "gone");
  s3.classList.add("text");
  s3.classList.remove("color3", "asukaR");
  s4.classList.add("text");
  s4.classList.remove("color4", "giovanna");
  s5.setAttribute("class", "gone");
  s6.setAttribute("class", "gone");
  c3.classList.add("gioList");
  var img = document.createElement("img");
  img.id = "full-giovanna";
  img.classList.add("full-giovanna");
  img.onclick = function () {
    playGiovanna();
  };
  c1.appendChild(img);

  s3.innerHTML =
    "Giovanna - A special operations unit that protects the U.S. President. Type: Rushdown, ~Easy (★★★★☆)";
  s4.innerHTML =
    "Often seen with her wolf spirit Rei. Though seen as rude, she's especially friendly with children and animals";
}

function switchBridget() {
  document.getElementById("bridget-audio").play();
  r2.classList.add("bg3");
  s1.setAttribute("class", "gone");
  s2.setAttribute("class", "gone");
  s3.classList.add("text");
  s3.classList.remove("color3", "asukaR");
  s4.classList.add("text");
  s4.classList.remove("color4", "giovanna");
  s5.setAttribute("class", "gone");
  s6.setAttribute("class", "gone");
  c3.classList.add("bridgetList");
  var img = document.createElement("img");
  img.id = "full-bridget";
  img.classList.add("full-bridget");
  img.onclick = function () {
    playBridget();
  };
  c1.appendChild(img);

  s3.innerHTML =
    "Bridget - A bounty hunter weilding a yo-yo looking for a purpose. Type: Balance, ~Easy (★★★★☆)";
  s4.innerHTML =
    "Rasied as a girl Bridget became a bounty hunter to disprove her village's superstitions. She also fights alongside a strange teddy bear called Roger.";
}

function switchHChaos() {
  document.getElementById("chaos-audio").play();
  r2.classList.add("bg3");
  s1.setAttribute("class", "gone");
  s2.setAttribute("class", "gone");
  s3.classList.add("text");
  s3.classList.remove("color3", "asukaR");
  s4.classList.add("text");
  s4.classList.remove("color4", "giovanna");
  s5.setAttribute("class", "gone");
  s6.setAttribute("class", "gone");
  c3.classList.add("chaosList");
  var img = document.createElement("img");
  img.id = "full-chaos";
  img.classList.add("full-chaos");
  img.onclick = function () {
    playHappyChaos();
  };
  c1.appendChild(img);

  s3.innerHTML =
    "Happy Chaos - Is the Orginal who taught humanity about magic. Type: Shooting, Hard (★☆☆☆☆)";
  s4.innerHTML =
    "Chaos was Asuka R's teacher. He believes the concepts of good and evil are of equal value, and carries all of humanity's hope towards living";
}

function playSol() {
  c1.classList.remove("ful-sol");
  c1.classList.add("solGif");
  document.getElementById("sol-intro").play();
}

function playElphelt() {
  c1.classList.remove("ful-elphelt");
  c1.classList.add("elphGif");
  document.getElementById("elphelt-intro").play();
}

function playAsukaR() {
  c1.classList.remove("ful-asukaR");
  c1.classList.add("AsukaRGif");
  document.getElementById("asukaR-intro").play();
}

function playGiovanna() {
  c1.classList.remove("full-giovanna", "color4");
  c1.classList.add("giovannaGif");
  document.getElementById("giovanna-intro").play();
}

function playBridget() {
  c1.classList.remove("full-bridget");
  c1.classList.add("bridgetGif");
  document.getElementById("bridget-intro").play();
}
function playHappyChaos() {
  c1.classList.remove("full-Hchaos");
  c1.classList.add("chaosGif");
  document.getElementById("chaos-intro").play();
}

//logo&symbol functions
let videoInserted = false; // keeps track if the vid was added

function introSymbol() {
  //adds background img + center content
  r2.classList.add("bg1", "center-content");
  // adds user experience stuff
  document.getElementById("symbol").classList.add("opacity");
  document.getElementById("symbol").classList.remove("hover");
  // makes all the classes display none
  s1.setAttribute("class", "gone");
  s2.setAttribute("class", "gone");
  s3.setAttribute("class", "gone");
  s4.setAttribute("class", "gone");
  s5.setAttribute("class", "gone");
  s6.setAttribute("class", "gone");
  c1.setAttribute("class", "gone");
  c2.setAttribute("class", "gone");
  c3.setAttribute("class", "gone");
  //creates  the element iframe
  if (!videoInserted) {
    const iframe = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.frameBorder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    //YouTube video URL
    iframe.src =
      "https://www.youtube.com/embed/TrhstElDoRg?si=x9Bxs9GGq3ydC3NB";
    // Append the iframe to the row2 div (where the vid should appear)
    r2.appendChild(iframe);
    //marked as inserted
    videoInserted = true;
  }
}

function resetAll() {
  r2.classList.remove("bg1", "bg2", "bg3");
  // adds squares 1 and 2 content back
  s1.classList.remove("gone");
  s1.classList.add("color1", "box3", "center-content");
  s2.classList.remove("gone");
  s2.classList.add("color2", "box3", "center-content");

  // adds square 3 content back
  s3.classList.remove("text", "gone");
  s3.innerHTML = "";
  s3.classList.add("color3", "box3", "center-content");
  var img3 = document.createElement("img");
  img3.src = "images/asukaR (2).PNG";
  img3.classList.add("asukaR", "hover");
  img3.onclick = function () {
    switchAsukaR();
  };
  // adds square 4 content back
  s4.classList.remove("text", "gone");
  s4.innerHTML = "";
  s4.classList.add("color4", "box3", "center-content");
  var img4 = document.createElement("img");
  img4.src = "images/gio.jpg";
  img4.classList.add("giovanna", "hover");
  img4.onclick = function () {
    switchGiovanna();
  };
  //appends the child images
  s3.appendChild(img3);
  s4.appendChild(img4);

  // adds squares 5 & 6 content back
  s5.classList.remove("gone");
  s5.classList.add("color5", "box3", "center-content");
  s6.classList.remove("gone");
  s6.classList.add("color6", "box3", "center-content");
  // removes everything in column 1
  c1.classList.remove(
    "color1",
    "full-sol",
    "color2",
    "full-elphelt",
    "color3",
    "full-asukaR",
    "color4",
    "full-giovanna",
    "color5",
    "full-bridget",
    "color6",
    "full-chaos",
    "solGif",
    "elpheltGif",
    "AsukaRGif",
    "giovannaGif",
    "bridgetGif",
    "chaosGif"
  );
  //removes the full body img of characters
  var img = document.getElementById("full-sol");
  if (img) {
    c1.removeChild(img);
  }
  var img = document.getElementById("full-elphelt");
  if (img) {
    c1.removeChild(img);
  }
  var img = document.getElementById("full-asukaR");
  if (img) {
    c1.removeChild(img);
  }
  var img = document.getElementById("full-giovanna");
  if (img) {
    c1.removeChild(img);
  }
  var img = document.getElementById("full-bridget");
  if (img) {
    c1.removeChild(img);
  }
  var img = document.getElementById("full-chaos");
  if (img) {
    c1.removeChild(img);
  }
  //removes the lists
  c3.classList.remove(
    "solList",
    "elpheltList",
    "asukaRList",
    "gioList",
    "bridgetList",
    "chaosList"
  );
  //adds symbol
  document.getElementById("symbol").setAttribute("class", "symbol");
  document.getElementById("symbol").classList.add("hover");
  if (videoInserted) {
    const iframe = r2.querySelector("iframe");
    if (iframe) {
      // Removes the iframe
      r2.removeChild(iframe);
    }

    // Reset the videoInserted
    videoInserted = false;
  }
  c1.setAttribute("class", "columns");
  c2.setAttribute("class", "columns");
  c3.setAttribute("class", "columns");
  //sound
  document.getElementById("sol-intro").pause();
  document.getElementById("sol-intro").currentTime = 0;
  document.getElementById("elphelt-intro").pause();
  document.getElementById("elphelt-intro").currentTime = 0;
  document.getElementById("asukaR-intro").pause();
  document.getElementById("asukaR-intro").currentTime = 0;
  document.getElementById("giovanna-intro").pause();
  document.getElementById("giovanna-intro").currentTime = 0;
  document.getElementById("bridget-intro").pause();
  document.getElementById("bridget-intro").currentTime = 0;
  document.getElementById("chaos-intro").pause();
  document.getElementById("chaos-intro").currentTime = 0;
}
