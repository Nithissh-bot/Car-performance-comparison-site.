const cars = [
  {
    name: 'Tesla Model 3',
    type: 'EV',
    price: '$42,990',
    power: '283 hp',
    efficiency: '363 mi',
    range: '5.1s',
    tag: 'Best value',
  },
  {
    name: 'BMW X5',
    type: 'SUV',
    price: '$67,500',
    power: '389 hp',
    efficiency: '24 MPG',
    range: '5.3s',
    tag: 'Luxury',
  },
  {
    name: 'Honda CR-V',
    type: 'SUV',
    price: '$31,500',
    power: '190 hp',
    efficiency: '38 MPG',
    range: '7.6s',
    tag: 'Fuel saver',
  },
  {
    name: 'Hyundai Ioniq 5',
    type: 'EV',
    price: '$45,800',
    power: '320 hp',
    efficiency: '303 mi',
    range: '5.1s',
    tag: 'Tech favorite',
  },
  {
    name: 'Toyota Camry',
    type: 'Sedan',
    price: '$28,400',
    power: '203 hp',
    efficiency: '52 MPG',
    range: '7.0s',
    tag: 'Reliable',
  },
  {
    name: 'Toyota Prius',
    type: 'Hybrid',
    price: '$29,500',
    power: '194 hp',
    efficiency: '58 MPG',
    range: '7.2s',
    tag: 'Eco pick',
  },
  {
    name: 'Mercedes C-Class',
    type: 'Sedan',
    price: '$46,750',
    power: '255 hp',
    efficiency: '34 MPG',
    range: '5.9s',
    tag: 'Premium',
  },
  {
    name: 'Kia EV6',
    type: 'EV',
    price: '$43,950',
    power: '225 hp',
    efficiency: '310 mi',
    range: '5.2s',
    tag: 'Hot EV',
  },
  {
    name: 'Toyota RAV4 Hybrid',
    type: 'Hybrid',
    price: '$33,500',
    power: '219 hp',
    efficiency: '40 MPG',
    range: '7.8s',
    tag: 'Hybrid SUV',
  },
  {
    name: 'Lexus RX 350h',
    type: 'Hybrid',
    price: '$51,000',
    power: '246 hp',
    efficiency: '39 MPG',
    range: '7.6s',
    tag: 'Luxury hybrid',
  },
  {
    name: 'Ford Escape Hybrid',
    type: 'Hybrid',
    price: '$32,000',
    power: '202 hp',
    efficiency: '44 MPG',
    range: '8.1s',
    tag: 'Efficient SUV',
  },
  {
    name: 'Hyundai Tucson Hybrid',
    type: 'Hybrid',
    price: '$33,000',
    power: '226 hp',
    efficiency: '38 MPG',
    range: '8.0s',
    tag: 'Smart hybrid',
  },
  {
    name: 'Kia Sportage Hybrid',
    type: 'Hybrid',
    price: '$34,000',
    power: '227 hp',
    efficiency: '43 MPG',
    range: '7.9s',
    tag: 'Hybrid favorite',
  },
  {
    name: 'Toyota Corolla Hybrid',
    type: 'Hybrid',
    price: '$23,500',
    power: '138 hp',
    efficiency: '53 MPG',
    range: '9.2s',
    tag: 'Fuel saver',
  },
  {
    name: 'Honda Accord Hybrid',
    type: 'Hybrid',
    price: '$32,000',
    power: '204 hp',
    efficiency: '51 MPG',
    range: '7.6s',
    tag: 'Hybrid sedan',
  },
  {
    name: 'Hyundai Sonata Hybrid',
    type: 'Hybrid',
    price: '$31,000',
    power: '192 hp',
    efficiency: '52 MPG',
    range: '8.3s',
    tag: 'Smooth hybrid',
  },
  {
    name: 'Kia Niro Hybrid',
    type: 'Hybrid',
    price: '$26,500',
    power: '139 hp',
    efficiency: '53 MPG',
    range: '9.5s',
    tag: 'Urban hybrid',
  },
  {
    name: 'Toyota Highlander Hybrid',
    type: 'SUV',
    price: '$42,000',
    power: '243 hp',
    efficiency: '36 MPG',
    range: '7.3s',
    tag: 'Family SUV',
  },
  {
    name: 'Subaru Forester Hybrid',
    type: 'SUV',
    price: '$36,000',
    power: '196 hp',
    efficiency: '39 MPG',
    range: '8.5s',
    tag: 'Adventure SUV',
  },
  {
    name: 'Mazda CX-50 Hybrid',
    type: 'SUV',
    price: '$35,500',
    power: '219 hp',
    efficiency: '38 MPG',
    range: '7.9s',
    tag: 'Road trip SUV',
  },
  {
    name: 'BMW X5 xDrive50e',
    type: 'SUV',
    price: '$78,500',
    power: '483 hp',
    efficiency: '26 MPG',
    range: '4.6s',
    tag: 'Plug-in SUV',
  },
  {
    name: 'Mercedes GLE 350e',
    type: 'SUV',
    price: '$74,000',
    power: '455 hp',
    efficiency: '27 MPG',
    range: '5.1s',
    tag: 'Luxury hybrid',
  },
  {
    name: 'Volvo XC60 Recharge',
    type: 'SUV',
    price: '$58,000',
    power: '455 hp',
    efficiency: '28 MPG',
    range: '4.8s',
    tag: 'Premium hybrid',
  },
  {
    name: 'Ferrari SF90 Stradale',
    type: 'Hypercar',
    price: '$500,000',
    power: '986 hp',
    efficiency: '16 MPG',
    range: '3.5s',
    tag: 'Hybrid beast',
  },
  {
    name: 'Lamborghini Huracán STO',
    type: 'Hypercar',
    price: '$338,000',
    power: '631 hp',
    efficiency: '18 MPG',
    range: '3.0s',
    tag: 'Track icon',
  },
  {
    name: 'McLaren 750S',
    type: 'Hypercar',
    price: '$315,000',
    power: '740 hp',
    efficiency: '22 MPG',
    range: '2.8s',
    tag: 'Superlight',
  },
  {
    name: 'Porsche 911 Turbo S',
    type: 'Hypercar',
    price: '$222,000',
    power: '640 hp',
    efficiency: '23 MPG',
    range: '2.7s',
    tag: 'Turbo legend',
  },
  {
    name: 'Bugatti Chiron Super Sport',
    type: 'Hypercar',
    price: '$3,300,000',
    power: '1,600 hp',
    efficiency: '12 MPG',
    range: '2.4s',
    tag: 'Ultimate speed',
  }
];

const carGrid = document.getElementById('carGrid');
const filterButtons = document.querySelectorAll('.filter');

function renderCars(type = 'all') {
  const filteredCars = type === 'all'
    ? cars
    : cars.filter((car) => car.type === type);

  carGrid.innerHTML = filteredCars
    .map(
      (car) => `
        <article class="car-panel">
          <span class="mini-label">${car.tag}</span>
          <h3>${car.name}</h3>
          <div class="price">${car.price}</div>
          <ul>
            <li><span>Type</span><strong>${car.type}</strong></li>
            <li><span>Power</span><strong>${car.power}</strong></li>
            <li><span>Efficiency</span><strong>${car.efficiency}</strong></li>
            <li><span>0-60</span><strong>${car.range}</strong></li>
          </ul>
          <button class="compare-btn">Compare model</button>
        </article>
      `
    )
    .join('');
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    renderCars(button.dataset.type);
  });
});

renderCars();
