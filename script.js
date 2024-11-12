 const apiUrl = 'https://cors-anywhere.herokuapp.com/https://sampleapis.com/api-list/coffee/hot';

 const coffeeContainer = document.getElementById('coffee-container');

 async function fetchCoffeeData() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Coffee data could not be fetched');
        
        }
    
    const coffeeData = await response.json();

    const coffeeHTML = coffeeData.map(coffee => {
        return `
        <div class="coffee-item">
          <h3>${coffee.title}</h3>
          <img src="${coffee.image}" alt="${coffee.title}">
          <p><strong>Ingredients:</strong> ${coffee.ingredients.join(', ')}</p>
          <p><strong>Description:</strong> ${coffee.description}</p>
        </div>
        `;
    }).join('');
    
    coffeeContainer.innerHTML = coffeeHTML;
    } catch (error) {
        coffeeContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}   

 fetchCoffeeData();
