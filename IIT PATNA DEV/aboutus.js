document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you can implement logic to handle the feedback form submission,
        // such as sending the data to a server or displaying a confirmation message.
        // For demonstration purposes, we'll log the data to console.
        console.log('Feedback Form Submission:');
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Message:', message);

        // Optionally, you can display a success message or clear the form fields
        // after successful submission.
        feedbackForm.reset(); // Clear the form fields
        alert('Thank you for your feedback!');
    });
});
