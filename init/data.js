const sampleListings = [
  {
    title: "Skyline Suite",
    description: "Reconnect with nature in this peaceful barn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    price: 8887,
    location: "Nairobi",
    country: "New Zealand",
    category: "Clouds"
  },
  {
    title: "Oceanview Condo",
    description: "Reconnect with nature in this peaceful barn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
    },
    price: 2568,
    location: "Barcelona",
    country: "Kenya",
    category: "Mountains"
  },
  {
    title: "Hillside Farmhouse",
    description: "Perfect for a quiet weekend getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499696010180-025efb8f5f38"
    },
    price: 6635,
    location: "Cairo",
    country: "Greece",
    category: "Beach"
  },
  {
    title: "Glacier Lodge",
    description: "Live luxuriously on the water.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582719188408-928d61f3123e"
    },
    price: 8433,
    location: "Zermatt",
    country: "Greece",
    category: "Snow"
  },
  {
    title: "Urban Studio",
    description: "Reconnect with nature in this peaceful barn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1573497019663-0a9dc2d7e19f"
    },
    price: 3855,
    location: "Santorini",
    country: "New Zealand",
    category: "Farm"
  },
  {
    title: "Forest Hideout",
    description: "Step into the glamour of the 1920s...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587085277315-9d6c02643f56"
    },
    price: 3205,
    location: "Rio de Janeiro",
    country: "Spain",
    category: "Hotels"
  },
  {
    title: "Floating Villa",
    description: "Reconnect with nature in this peaceful barn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
    },
    price: 1514,
    location: "Barcelona",
    country: "New Zealand",
    category: "Clouds"
  },
  {
    title: "Countryside Barn Stay",
    description: "Live luxuriously on the water.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1574169208507-8437617480b9"
    },
    price: 7026,
    location: "Seoul",
    country: "Spain",
    category: "Farm"
  },
  {
    title: "Urban Studio",
    description: "Panoramic views of the entire city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1535556116002-6281ff8a39e0"
    },
    price: 7721,
    location: "Rio de Janeiro",
    country: "South Korea",
    category: "Iconic cities"
  },
  {
    title: "Forest Hideout",
    description: "Panoramic views of the entire city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499696786230-29e5096f3b9a"
    },
    price: 2650,
    location: "Barcelona",
    country: "Egypt",
    category: "Best views"
  },
  {
    title: "Glacier Lodge",
    description: "Reconnect with nature in this peaceful barn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
    },
    price: 8477,
    location: "Nairobi",
    country: "Spain",
    category: "Mountains"
  },
  {
    title: "Countryside Barn Stay",
    description: "Adventure near the glaciers and nature trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"
    },
    price: 1806,
    location: "Barcelona",
    country: "Kenya",
    category: "Trending"
  },
  {
    title: "Hillside Farmhouse",
    description: "Perfect for a quiet weekend getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1588776814546-ec7c2f1b2c53"
    },
    price: 4045,
    location: "Santorini",
    country: "New Zealand",
    category: "Lakes"
  },
  {
    title: "Skyline Suite",
    description: "Reconnect with nature in this peaceful barn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1536009721666-5ffbbfdfaa3d"
    },
    price: 5411,
    location: "Zermatt",
    country: "Brazil",
    category: "Stargazing"
  },
  {
    title: "Forest Hideout",
    description: "Reconnect with nature in this peaceful barn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552083375-1470ac3c258f"
    },
    price: 9026,
    location: "Seoul",
    country: "Greece",
    category: "Best views"
  },
  {
    title: "Skyline Suite",
    description: "Reconnect with nature in this peaceful barn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1535254380571-2e79e7a5f9b7"
    },
    price: 8678,
    location: "Barcelona",
    country: "Kenya",
    category: "World"
  },
  {
    title: "Floating Villa",
    description: "Located in the heart of downtown.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560347876-0d0e4500b51c"
    },
    price: 2121,
    location: "Santorini",
    country: "South Korea",
    category: "Hotels"
  },
  {
    title: "Skyline Suite",
    description: "Reconnect with nature in this peaceful barn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523415414705-6cfd8f423d77"
    },
    price: 2017,
    location: "Nairobi",
    country: "Egypt",
    category: "Iconic cities"
  },
  {
    title: "Oceanview Condo",
    description: "Enjoy breathtaking views and modern comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1526481280690-99c07a3cfc1c"
    },
    price: 7964,
    location: "Queenstown",
    country: "Spain",
    category: "Lakes"
  },
  {
    title: "Oceanview Condo",
    description: "Step into the glamour of the 1920s...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1529222106710-3491f4c15f4c"
    },
    price: 4577,
    location: "Queenstown",
    country: "Brazil",
    category: "Mountains"
  },
  {
    title: "Floating Villa",
    description: "Panoramic views of the entire city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455"
    },
    price: 8666,
    location: "Barcelona",
    country: "Spain",
    category: "Beach"
  },
  {
    title: "Hillside Farmhouse",
    description: "Adventure near the glaciers and nature trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    },
    price: 6140,
    location: "Cairo",
    country: "Greece",
    category: "Beach"
  },
  {
    title: "Floating Villa",
    description: "Live luxuriously on the water.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582719478149-9ff8a5fc86c1"
    },
    price: 3806,
    location: "Cairo",
    country: "Kenya",
    category: "World"
  },
  {
    title: "Countryside Barn Stay",
    description: "Perfect for a quiet weekend getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559158962-1901e63bd7f0"
    },
    price: 1570,
    location: "Santorini",
    country: "Greece",
    category: "Hotels"
  },
  {
    title: "Hillside Farmhouse",
    description: "Live luxuriously on the water.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
    },
    price: 785,
    location: "Queenstown",
    country: "Brazil",
    category: "Lakes"
  },
  {
    title: "Countryside Barn Stay",
    description: "Reconnect with nature in this peaceful barn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    },
    price: 2927,
    location: "Seoul",
    country: "South Korea",
    category: "Farm"
  },
  {
    title: "Urban Studio",
    description: "Adventure near the glaciers and nature trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455"
    },
    price: 8957,
    location: "Zermatt",
    country: "Spain",
    category: "Mountains"
  },
  {
    title: "Oceanview Condo",
    description: "Enjoy breathtaking views and modern comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582719478149-9ff8a5fc86c1"
    },
    price: 3821,
    location: "Nairobi",
    country: "South Korea",
    category: "Best views"
  },
  {
    title: "Floating Villa",
    description: "Located in the heart of downtown.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559158962-1901e63bd7f0"
    },
    price: 2154,
    location: "Rio de Janeiro",
    country: "New Zealand",
    category: "Trending"
  },
  {
    title: "Skyline Suite",
    description: "Step into the glamour of the 1920s...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
    },
    price: 7920,
    location: "Barcelona",
    country: "Egypt",
    category: "Iconic cities"
  },
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?..."
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Beach"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?..."
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Iconic cities"
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?..."
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains"
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?..."
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Iconic cities"
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?..."
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Best views"
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?..."
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Beach"
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?..."
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Lakes"
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?..."
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Best views"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?..."
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Snow"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?..."
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "World"
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?..."
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Iconic cities"
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?..."
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "World"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?..."
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Farm"
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?..."
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "Iconic cities"
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?..."
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "Beach"
  },
  {
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?..."
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "Mountains"
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Step into the glamour of the 1920s...",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?..."
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "Iconic cities"
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?..."
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "Beach"
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?..."
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Iconic cities"
  },
  {
    title: "Desert Oasis in Dubai",
    description: "Experience luxury in the middle of the desert...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?..."
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "World"
  },
  {
    title: "Rustic Log Cabin in Montana",
    description: "Unplug and unwind...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?..."
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "Farm"
  },
  {
    title: "Beachfront Villa in Greece",
    description: "Enjoy the crystal-clear waters...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?..."
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "Beach"
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay in an eco-friendly treehouse...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?..."
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Farm"
  },
  {
    title: "Historic Cottage in Charleston",
    description: "Experience the charm of historic Charleston...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?..."
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "Iconic cities"
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Explore the vibrant city of Tokyo...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?..."
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic cities"
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description: "Spend your days by the lake...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?..."
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "Lakes"
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Indulge in luxury in this overwater villa...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?..."
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "Beach"
  },
  {
    title: "Ski Chalet in Aspen",
    description: "Hit the slopes in style...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?..."
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "Snow"
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Escape to a secluded beach house...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?..."
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Beach"
  }
];

module.exports = { data: sampleListings };
