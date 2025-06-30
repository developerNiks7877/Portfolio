// JavaScript to open PDF on click
document
  .getElementById("openPdfLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const pdfPath = "/images/MY RESUME.pdf"; // Path to your PDF file
    window.open(pdfPath, "_blank"); // Open the PDF in a new tab
  });
