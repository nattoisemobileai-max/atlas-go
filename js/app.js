// Quick logic gate for stages
const userStats = JSON.parse(localStorage.getItem('atlasProgress')) || { level: 1, streak: 0 };

function getRandomCity() {
    const availableCities = cityData.filter(city => city.difficulty <= userStats.level);
    return availableCities[Math.floor(Math.random() * availableCities.length)];
}
