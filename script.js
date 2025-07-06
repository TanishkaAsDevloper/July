// function startSurprise() {
//       document.getElementById("entry").style.display = "none";
//       document.getElementById("mainContent").style.display = "flex";

//     const audio = document.getElementById("bgMusic");
//     audio.play().catch(e => {
//         console.warn("Autoplay blocked:", e);
//     });

//       showLines();
//       generateFlowers();
//     }
    
// function showLines() {
//     const lines = ["line1", "line2", "line3"];
//     let i = 0;

//     function next() {
//         if (i > 0) {
//           document.getElementById(lines[i - 1]).style.opacity = 0;
//         }

//         if (i < lines.length) {
//           const el = document.getElementById(lines[i]);
//           el.style.opacity = 1;
//           i++;
//           setTimeout(next, 5000); 
//         } else {
//           const image = document.getElementById("cutoutImage");
//           image.style.opacity = 1;

//           setTimeout(() => {
//             image.style.opacity = 0;
//             setTimeout(() => {
//               document.getElementById("nextPageBtn").style.display = "block";
//             }, 2000);
//           },8000);
//         }
//      }
//     next();
//}



// function startSurprise() {
//   document.getElementById("entry").style.display = "none";
//   document.getElementById("mainContent").style.display = "flex";

//   const audio = document.getElementById("bgMusic");
//   audio.play().catch(e => {
//     console.warn("Autoplay blocked:", e);
//   });

//   showLines();
    // generateFlowers();  // If you're using this
//}

// function startPage2() {
//   document.getElementById("nextPageBtn").style.display = "none";

//   const audio2 = document.getElementById("bg_music");
//   audio2.play().catch(e => {
//     console.warn("Autoplay blocked:",e);
//   });


//   window.location.href = "page2.html";
//}



// function goToPage2() {
    
//     setTimeout(() => {
//       window.location.href = 'page2.html';
//     }, 1000); 
//   }
// function generateFlowers() {
//     for (let i = 0; i < 30; i++) {
//         const flower = document.createElement("div");
//         flower.className = "flower";
//         flower.style.left = Math.random() * 100 + "vw";
//         flower.style.animationDelay = Math.random() * 10 + "s";
//         document.body.appendChild(flower);
//     }
// }
function startSurprise() {
  // Hide entry screen, show main content
  document.getElementById("entry").style.display = "none";
  document.getElementById("mainContent").style.display = "flex";

  // Play background music
  const audio = document.getElementById("bgMusic");
  audio.play().catch(e => {
    console.warn("Autoplay blocked:", e);
  });

  // Start line animations
  showLines();

  // Optional flower animation (uncomment if needed)
  // generateFlowers();
}

function showLines() {
  const lines = ["line1", "line2", "line3"];
  let i = 0;

  function next() {
    if (i > 0) {
      document.getElementById(lines[i - 1]).style.opacity = 0;
    }

    if (i < lines.length) {
      const el = document.getElementById(lines[i]);
      el.style.opacity = 1;
      i++;
      setTimeout(next, 5000); // Next line after 5 seconds
    } else {
      const image = document.getElementById("cutoutImage");
      image.style.opacity = 1;

      // After image is shown for 8 seconds, fade it out
      setTimeout(() => {
        image.style.opacity = 0;

        // Then show the next button
        setTimeout(() => {
          document.getElementById("nextPageBtn").style.display = "block";
        }, 2000);

      }, 8000);
    }
  }

  next();
}

// function startPage2() {
//   // Hide the button
//   document.getElementById("nextPageBtn").style.display = "none";

//   // Play next page background music
//   const audio2 = document.getElementById("bg_music");
//   audio2.play().catch(e => {
//     console.warn("Autoplay blocked:", e);
//   });
//   localStorage.setItem("playMusic", "yes");

//   // Go to next page
//   window.location.href = "page2.html";
// }




// Optional flower animation (if you want cute effects)
// function generateFlowers() {
//   for (let i = 0; i < 30; i++) {
//     const flower = document.createElement("div");
//     flower.className = "flower";
//     flower.style.left = Math.random() * 100 + "vw";
//     flower.style.animationDelay = Math.random() * 10 + "s";
//     document.body.appendChild(flower);
//   }
// }
