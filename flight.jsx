// Flight type switcher
function changeFlightType(type) {
    const tabs = document.querySelectorAll('#flight-search-modal .tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    const returnRow = document.getElementById('return-row');
    const multiCityRows = document.getElementById('multi-city-rows');
    
    if (type === 'one-way') {
        returnRow.style.display = 'none';
        multiCityRows.style.display = 'none';
    } else if (type === 'round-trip') {
        returnRow.style.display = 'flex';
        multiCityRows.style.display = 'none';
    } else if (type === 'multi-city') {
        returnRow.style.display = 'none';
        multiCityRows.style.display = 'block';
        // Here you would add logic to dynamically add city fields
    }
}

// Passenger counter
function adjustPassengers(type, change) {
    const countElement = document.getElementById(`${type}-count`);
    let count = parseInt(countElement.textContent);
    count += change;
    
    // Set minimum and maximum limits
    if (count < 0) count = 0;
    if (type === 'adult' && count < 1) count = 1; // At least 1 adult
    if (count > 9) count = 9; // Maximum 9 passengers per type
    
    countElement.textContent = count;
}