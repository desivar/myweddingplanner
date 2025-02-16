const data = [
    {
      "name": "Ad Hoc Catering",
      "address": "example",
      "phone": "0000 0000",
      "website": "https://adhoccatering.com/",
      "image": "images/catering.png"
    },
    {
      "name": "Floral Gallery",
      "address": "example",
      "phone": "0000 0000",
      "website": "https://www.flowersgallery.com/",
      "image": "images/floristwed.png"
    },
    {
      "name": "Hitched in France",
      "address": "example",
      "phone": "0000-0000",
      "website": "https://www.hitchedinfrance.com/",
      "image": "images/venuescast.png"
    },
    {
      "name": "Bogdan Chrircan",
      "address": "example",
      "phone": "0000 0000",
      "website": "https://bogdanchircan.com/",
      "image": "images/phorowe.png"
    },
    {
      "name": "Royal Wedding Car",
      "address": "example",
      "phone": "0000 0000",
      "website": "https://www.royalweddingcar.com/",
      "image": "images/rentcar.png"
    }
  ];
  
  const container = document.getElementById('card-container');
  
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p>${item.address}</p>
      <p>${item.phone}</p>
      <a href="${item.website}">Website</a>
    `;
    container.appendChild(card);
  });