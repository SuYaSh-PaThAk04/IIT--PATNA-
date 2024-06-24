document.addEventListener('DOMContentLoaded', function() {
    const downloadForm = document.getElementById('downloadForm');
    const resultsTable = document.getElementById('resultsTable');

    downloadForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const phone = document.getElementById('phone').value;

        // Simulated data for demonstration
        const data = [
            { date: '2024-06-15', report: 'report1.pdf', bill: 'bill1.pdf' },
            { date: '2024-06-14', report: 'report2.pdf', bill: 'bill2.pdf' },
            { date: '2024-06-13', report: null, bill: 'bill3.pdf' },
            { date: '2024-06-12', report: 'report4.pdf', bill: null },
            { date: '2024-06-11', report: null, bill: null }
        ];

        displayResults(data);
    });

    function displayResults(data) {
        // Clear previous results
        resultsTable.innerHTML = '';

        if (data.length === 0) {
            resultsTable.innerHTML = '<p>No results found.</p>';
            return;
        }

        // Create table
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        // Table headers
        const headers = ['Date', 'Report (PDF)', 'Bill (PDF)'];
        const headerRow = document.createElement('tr');
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Table rows
        data.forEach(item => {
            const row = document.createElement('tr');
            Object.keys(item).forEach(key => {
                const cell = document.createElement('td');
                if (key === 'report' || key === 'bill') {
                    if (item[key]) {
                        const downloadBtn = document.createElement('button');
                        downloadBtn.textContent = 'Download';
                        downloadBtn.classList.add('download-btn');
                        downloadBtn.onclick = function() {
                            // Simulate download action
                            alert(`Downloading ${item[key]}`);
                        };
                        cell.appendChild(downloadBtn);
                    } else {
                        cell.textContent = 'No document';
                        cell.classList.add('no-document');
                    }
                } else {
                    cell.textContent = item[key];
                }
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        // Append table to results div
        resultsTable.appendChild(table);
    }
});
