const sampleListings = [
  {
    title: "Luxury Beachfront Villa",
    image: {
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 5000, location: "Malibu", country: "USA",
    description: "A stunning beach villa."
  },
  {
    title: "Cozy Mountain Cabin",
    image: {
      url: "https://images.unsplash.com/photo-1663659509057-ca42df076bac?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1200, location: "Aspen", country: "USA",
    description: "Mountain retreat."
  },
  {
    title: "Modern City Apartment",
    image: {
      url: "https://images.unsplash.com/photo-1454388683759-ee76c15fee26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1800, location: "New York", country: "USA",
    description: "Urban living."
  },
  {
    title: "Lakefront Cottage",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1500, location: "Lake Tahoe", country: "USA",
    description: "Water views."
  },
  {
    title: "Rustic Log Cabin",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100, location: "Montana", country: "USA",
    description: "Woodsy retreat."
  },
  {
    title: "Beach Side",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100, location: "Montana", country: "USSR",
    description: "Woodsy retreat."
  },
  {
    title: "Beach Side",
    image: {
      url: "https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100, location: "Montana", country: "USSR",
    description: "Woodsy retreat."
  },
  {
    title: "Beach Side",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1676321688607-2d18ba129dbd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100, location: "Montana", country: "USSR",
    description: "Woodsy retreat."
  },
  {
    title: "Beach Side",
    image: {
      url: "https://images.unsplash.com/photo-1523699289804-55347c09047d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100, location: "Montana", country: "USSR",
    description: "Woodsy retreat."
  },
  {
    title: "Beach Side",
    image: {
      url: "https://images.unsplash.com/photo-1625244695851-1fc873f942bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100, location: "Montana", country: "USSR",
    description: "Woodsy retreat."
  },
  {
    title: "Beach Side",
    image: {
      url: "https://images.unsplash.com/photo-1524234599372-a5bd0194758d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100, location: "Montana", country: "USSR",
    description: "Woodsy retreat."
  },
  {
    title: "Beach Side",
    image: {
      url: "https://images.unsplash.com/photo-1711470623168-885d5b054e57?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100, location: "Montana", country: "USSR",
    description: "Woodsy retreat."
  },
  {
    title: "Beach Side",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100, location: "Montana", country: "USSR",
    description: "Woodsy retreat."
  },
  {
    title: "Beach Side",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100, location: "Montana", country: "USSR",
    description: "Woodsy retreat."
  },
  {
    title: "Beach Side",
    image: {
      url: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100, location: "Montana", country: "USSR",
    description: "Woodsy retreat."
  },
  {
    title: "Beach Side",
    image: {
      url: "https://images.unsplash.com/photo-1637730826933-54287f79e1c3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100, location: "Montana", country: "USSR",
    description: "Woodsy retreat."
  },
  {
    title: "Beach Side",
    image: {
      url: "https://images.unsplash.com/photo-1562790351-d273a961e0e9?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100, location: "Montana", country: "USSR",
    description: "Woodsy retreat."
  },
   {
    title: "Beach Side",
    image: {
      url: "https://images.unsplash.com/photo-1724947053227-2335bf21d0ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100, location: "Montana", country: "USSR",
    description: "Woodsy retreat."
  },
  {
    title: "Beach Side",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1682913629540-3857602b540c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100, location: "Montana", country: "USSR",
    description: "Woodsy retreat."
  },
];


module.exports = { data: sampleListings };
