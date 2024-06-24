document.addEventListener('DOMContentLoaded', function() {
    // Array of health centers with their pin codes and payment requirements
    const healthCenters = [
        { name: 'Health Center A', pinCode: '12345', paymentRequired: true },
        { name: 'Health Center B', pinCode: '23456', paymentRequired: false },
        { name: 'Health Center C', pinCode: '34567', paymentRequired: true }
        // Add more health centers as needed
    ];

    const healthCenterSelect = document.getElementById('healthCenter');
    const pinCodeInput = document.getElementById('pinCode');
    const paymentButton = document.getElementById('paymentButton');

    // Function to populate health centers based on selected pin code
    function populateHealthCenters() {
        const selectedPin = pinCodeInput.value.trim();
        // Clear current options
        healthCenterSelect.innerHTML = '';

        // Filter and populate options based on pin code
        healthCenters.forEach(center => {
            if (center.pinCode === selectedPin) {
                const option = document.createElement('option');
                option.textContent = center.name;
                option.value = center.name;
                healthCenterSelect.appendChild(option);
            }
        });

        // Check if selected health center requires payment
        const selectedCenter = healthCenters.find(center => center.name === healthCenterSelect.value);
        if (selectedCenter && selectedCenter.paymentRequired) {
            paymentButton.style.display = 'block';
        } else {
            paymentButton.style.display = 'none';
        }
    }

    // Event listener for pin code change
    pinCodeInput.addEventListener('input', populateHealthCenters);

    // Event listener for health center change
    healthCenterSelect.addEventListener('change', function() {
        const selectedCenter = healthCenters.find(center => center.name === healthCenterSelect.value);
        if (selectedCenter && selectedCenter.paymentRequired) {
            paymentButton.style.display = 'block';
        } else {
            paymentButton.style.display = 'none';
        }
    });

    // Function to handle payment button click
    window.handlePayment = function() {
        // Logic to handle payment before submission (you can add your payment gateway logic here)
        alert('Redirecting to payment gateway...');
    };
});


document.addEventListener('DOMContentLoaded', function() {
    // Function to get today's date in the format YYYY-MM-DD
    function getTodayDate() {
        const today = new Date();
        let month = String(today.getMonth() + 1).padStart(2, '0');
        let day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();

        return `${year}-${month}-${day}`;
    }

    // Initialize appointment date input element
    const appointmentDateInput = document.getElementById('date');

    // Set min attribute to today's date in the appointment date input
    appointmentDateInput.setAttribute('min', getTodayDate());
});
