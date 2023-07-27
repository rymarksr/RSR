// Function to check if an element is in the viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to pause the video when it is not in the viewport
  function pauseVideoIfNotInViewport() {
    var video1 = document.getElementById('video-player1');
    var videoSection1 = document.getElementById('video-section1');
    var video2 = document.getElementById('video-player2');
    var videoSection2 = document.getElementById('video-section2');
  
    if (!isElementInViewport(videoSection1)) {
      video1.pause();
    }
    if (!isElementInViewport(videoSection2)) {
      video2.pause();
    }
  }
  
  // Event listener for scroll events
  window.addEventListener('scroll', pauseVideoIfNotInViewport);
  
  // Event listener for the page load to initially pause the video if not in the viewport
  window.addEventListener('load', pauseVideoIfNotInViewport);



  document.addEventListener("DOMContentLoaded", function () {
    // Get the download button element by its ID
    const downloadButton = document.getElementById("download-cv");
  
    // Add a click event listener to the download button
    downloadButton.addEventListener("click", function () {
      // Create a link element
      const downloadLink = document.createElement("a");
      // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
      downloadLink.setAttribute("href", "CV/RECAPLAZA-RYMARK-S.pdf");
      // Set the desired file name for the download
      downloadLink.setAttribute("download", "RECAPLAZA-RYMARK-S.pdf");
  
      // Append the link to the document (it doesn't have to be visible)
      document.body.appendChild(downloadLink);
  
      // Programmatically click the link to initiate the download
      downloadLink.click();
  
      // Remove the link from the document after the download is initiated
      document.body.removeChild(downloadLink);
    });
  });


  // Float-In

const floatItems = document.querySelectorAll(".float-in-item");

function floatInOnScroll() {
  floatItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const itemBottom = item.getBoundingClientRect().bottom;
    const isVisible = itemTop < window.innerHeight && itemBottom >= 0;

    if (isVisible) {
      item.classList.add("float-in");
    } else {
      item.classList.remove("float-in");
    }
  });
}

document.addEventListener("scroll", floatInOnScroll);
