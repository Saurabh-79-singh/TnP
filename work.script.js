document.getElementById('submitBtn').addEventListener('click', function() {
    const fileInput = document.getElementById("upload");
    const feedback = document.getElementById("feedback");

    if (fileInput.files.length === 0) {
        feedback.textContent = "Please upload an image.";
        feedback.style.color = "red";
        return;
    }

    // Simulate processing of the image
    feedback.textContent = "Processing image, please wait...";

    // Simulate the response after processing the image
    setTimeout(function() {
        // Simulated feedback based on the construction phase
        const phases = ["Foundation Phase", "Superstructure Phase", "Facade Phase", "Interior Finishing Phase"];
        const randomPhase = phases[Math.floor(Math.random() * phases.length)];

        feedback.textContent = `Current construction phase identified: ${randomPhase}`;
        feedback.style.color = "green";
    }, 2000);
});
