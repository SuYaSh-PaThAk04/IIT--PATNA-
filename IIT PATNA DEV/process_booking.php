<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize inputs
    $fullName = htmlspecialchars($_POST['fullName']);
    $dob = htmlspecialchars($_POST['dob']);
    $phone = htmlspecialchars($_POST['phone']);
    $gender = htmlspecialchars($_POST['gender']);
    $pinCode = htmlspecialchars($_POST['pinCode']);
    $healthCenter = htmlspecialchars($_POST['healthCenter']);
    $date = htmlspecialchars($_POST['date']);
    $time = htmlspecialchars($_POST['time']);
    $purpose = htmlspecialchars($_POST['purpose']);

    // Database connection
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "appointment";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind SQL statement
    $stmt = $conn->prepare("INSERT INTO appointments (fullName, dob, phone, gender, pinCode, healthCenter, date, time, purpose) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssss", $fullName, $dob, $phone, $gender, $pinCode, $healthCenter, $date, $time, $purpose);

    if ($stmt->execute()) {
        echo "New appointment booked successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method. Please use POST method to submit the form.";
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Slot - MediConnect</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="logo-container">
            <img src="logo.png" alt="MediConnect Logo" class="logo">
            <span class="logo-text">MediConnect</span>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="book_slot.html" class="active">Book Slot</a></li>
                <li><a href="#">Live Consult</a></li>
                <li><a href="#">Download</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Book Slot Your Healthcare Appointment</h1>
        <form id="bookingForm" action="process_booking.php" method="POST">
            <fieldset>
                <legend>Personal Details</legend>
                <label for="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required>
                
                <label for="dob">DOB:</label>
                <input type="date" id="dob" name="dob" required>
                
                <label for="phone">Phone No:</label>
                <input type="tel" id="phone" name="phone" required>
                
                <label for="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </fieldset>
            
            <fieldset>
                <legend>Appointment Details</legend>
                <label for="pinCode">Pin code:</label>
                <input type="text" id="pinCode" name="pinCode" required>
                
                <label for="healthCenter">Choose Health Center:</label>
                <select id="healthCenter" name="healthCenter" required>
                    <!-- Options will be populated by JavaScript -->
                </select>
                
                <label for="date">Date:</label>
                <input type="date" id="date" name="date" required>
                
                <label for="time">Time:</label>
                <select id="time" name="time" required>
                    <option value="09:00AM-12:00PM">09:00AM-12:00PM</option>
                    <option value="12:00PM-03:00PM">12:00PM-03:00PM</option>
                    <option value="03:00PM-06:00PM">03:00PM-06:00PM</option>
                </select>
                
                <label for="purpose">Purpose of Visit:</label>
                <select id="purpose" name="purpose" required>
                    <option value="eye_checkup">Eye Checkup</option>
                    <option value="hypertension">Hypertension</option>
                    <option value="x_ray">X-Ray</option>
                    <option value="consultation">Consultation</option>
                    <!-- Add more options as needed -->
                </select>
            </fieldset>
            
            <button id="paymentButton" type="button" onclick="handlePayment()">Make Payment</button>
            <button type="submit">Submit</button>
        </form>
    </main>
    <script src="script.js"></script>
</body>
</html>
