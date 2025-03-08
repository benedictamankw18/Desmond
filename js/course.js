function showCourseInfo(button) {
    // Get the course title and description from button attributes
    var title = button.getAttribute("data-title");
    var description = button.getAttribute("data-description");

    // Update modal content
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;

    // Display the modal
    document.getElementById("courseModal").style.display = "block"; // Show the modal
}

function closeCourseInfo() {
    // Hide the modal
    document.getElementById("courseModal").style.display = "none";
}
