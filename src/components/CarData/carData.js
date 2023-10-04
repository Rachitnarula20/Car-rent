import Car1 from '../../images/car1.jpeg'
import Car2 from '../../images/car2.jpeg'
import Car3 from '../../images/car3.jpeg'
import Car4 from '../../images/car4.jpg'
import Car5 from '../../images/car5.jpg'
import Car6 from '../../images/car6.jpg'
import Car8 from '../../images/car8.jpg'
import Car10 from '../../images/car10.jpg'
import Car11 from '../../images/car11.jpeg'
import Car14 from '../../images/car14.jpeg'
import Car9 from '../../images/car9.jpg'
import Car12 from '../../images/car12.jpg'
import Car13 from '../../images/car13.jpg'

const carData = [
    {
        id : 1,
        image: Car1,
        name: 'Mahindra Thar',
        fuel: 'Petrol',
        seats: 5,
        mileage: 23,
        year: 2018,
        transmission:'Manual',
        price:'Rs.1500'
    },
    {
        id : 2,
        image: Car2,
        name: 'Tata Nexon',
        fuel: 'Petrol',
        seats: 5,
        mileage: 22,
        year: 2020,
        transmission:'Automatic',
        price:'Rs.1300'
    },
    {
        id : 2,
        image: Car11,
        name: 'Koenigsegg',
        fuel: 'Petrol',
        seats: 2,
        mileage: 10,
        year: 2021,
        transmission:'Manual',
        price:'Rs.13000'
    },
    {
      id : 3,
      image: Car1,
      name: 'Mahindra Thar',
      fuel: 'Petrol',
      seats: 5,
      mileage: 23,
      year: 2018,
      transmission:'Manual',
      price:'Rs.1500'
  },
    {
        id :4,
        image: Car9,
        name: 'Lamborghini Urus',
        fuel: 'Petrol',
        seats: 5,
        mileage: 12,
        year: 2022,
        transmission:'Automatic',
        price:'Rs.16000'
    },
    {
        id :5,
        image: Car12,
        name: 'Buggati',
        fuel: 'Petrol',
        seats: 2,
        mileage: 21,
        year: 2022,
        transmission:'Manual',
        price:'Rs.15000'
    },
    {
        id :6,
        image: Car8,
        name: 'Grand i10',
        fuel: 'Petrol',
        seats: 5,
        mileage: 24,
        year: 2017,
        transmission:'Manual',
        price:'Rs.1400'
    },
    {
        id : 7,
        image: Car10,
        name: 'Rolls Royce',
        fuel: 'Petrol',
        seats: 6,
        mileage: 11,
        year: 2020,
        transmission:'Automatic',
        price:'Rs.20000'
    },
    {
        id : 8,
        image: Car10,
        name: 'Rolls Royce',
        fuel: 'Petrol',
        seats: 6,
        mileage: 11,
        year: 2020,
        transmission:'Automatic',
        price:'Rs.20000'
    },
    
    {
      id : 9,
      image: Car11,
      name: 'Koenigsegg',
      fuel: 'Petrol',
      seats: 2,
      mileage: 10,
      year: 2021,
      transmission:'Manual',
      price:'Rs.13000'
  },
    {
        id : 10,
        image: Car1,
        name: 'Mahindra Thar',
        fuel: 'Petrol',
        seats: 5,
        mileage: 23,
        year: 2018,
        transmission:'Manual',
        price:'Rs.1500'
    },
    {
        id : 11,
        image: Car3,
        name: 'Innova ',
        fuel: 'Petrol',
        seats: 7,
        mileage: 23,
        year: 2020,
        transmission:'Manual',
        price:'Rs.1800'
    },
    {
        id : 12,
        image: Car11,
        name: 'Koenigsegg',
        fuel: 'Petrol',
        seats: 2,
        mileage: 10,
        year: 2021,
        transmission:'Manual',
        price:'Rs.13000'
    },
    {
        id : 13,
        image: Car9,
        name: 'Lamborghini Urus',
        fuel: 'Petrol',
        seats: 5,
        mileage: 12,
        year: 2022,
        transmission:'Automatic',
        price:'Rs.16000'
    },
    {
        id : 14,
        image: Car10,
        name: 'Rolls Royce',
        fuel: 'Petrol',
        seats: 6,
        mileage: 11,
        year: 2020,
        transmission:'Automatic',
        price:'Rs.20000'
    },
    {
        id : 15,
        image: Car2,
        name: 'Tata Nexon',
        fuel: 'Petrol',
        seats: 5,
        mileage: 22,
        year: 2020,
        transmission:'Automatic',
        price:'Rs.1300'
    },
    {
        id : 16,
        image: Car13,
        name: 'Audi r8',
        fuel: 'Petrol',
        seats: 2,
        mileage: 10,
        year: 2019,
        transmission:'Manual',
        price:'Rs.15000'
    },
    {
        id : 17,
        image: Car4,
        name: 'Maruti Swift ',
        fuel: 'Petrol',
        seats: 5,
        mileage: 28,
        year: 2023,
        transmission:'Automatic',
        price:'Rs.1100'
    },
    {
        id : 18,
        image: Car14,
        name: 'Bmw i8',
        fuel: 'Petrol',
        seats: 3,
        mileage: 13,
        year: 2018,
        transmission:'Manual',
        price:'Rs.14000'
    },
    {
        id : 19,
        image: Car3,
        name: 'Innova ',
        fuel: 'Petrol',
        seats: 7,
        mileage: 23,
        year: 2020,
        transmission:'Manual',
        price:'Rs.1800'
    },
    {
        id : 20,
        image: Car10,
        name: 'Rolls Royce',
        fuel: 'Petrol',
        seats: 6,
        mileage: 11,
        year: 2020,
        transmission:'Automatic',
        price:'Rs.20000'
    },
    {
        id : 21,
        image: Car11,
        name: 'Koenigsegg',
        fuel: 'Petrol',
        seats: 2,
        mileage: 10,
        year: 2021,
        transmission:'Manual',
        price:'Rs.13000'
    },
    {
        id : 22,
        image: Car5,
        name: 'Honda Amaze ',
        fuel: 'Diesel',
        seats: 5,
        mileage: 18,
        year: 2020,
        transmission:'Manual',
        price:'Rs.1300'
    },
    {
        id : 23,
        image: Car2,
        name: 'Tata Nexon',
        fuel: 'Petrol',
        seats: 5,
        mileage: 22,
        year: 2020,
        transmission:'Automatic',
        price:'Rs.1300'
    },
    {
        id : 24,
        image: Car1,
        name: 'Mahindra Thar',
        fuel: 'Petrol',
        seats: 5,
        mileage: 23,
        year: 2018,
        transmission:'Manual',
        price:'Rs.1500'
    },
    {
        id : 25,
        image: Car3,
        name: 'Innova ',
        fuel: 'Petrol',
        seats: 7,
        mileage: 23,
        year: 2020,
        transmission:'Manual',
        price:'Rs.1800'
    },
    {
        id : 26,
        image: Car9,
        name: 'Lamborghini Urus',
        fuel: 'Petrol',
        seats: 5,
        mileage: 12,
        year: 2022,
        transmission:'Automatic',
        price:'Rs.16000'
    },
    {
        id : 27,
        image: Car10,
        name: 'Rolls Royce',
        fuel: 'Petrol',
        seats: 6,
        mileage: 11,
        year: 2020,
        transmission:'Automatic',
        price:'Rs.20000'
    },
    {
      id : 28,
      image: Car2,
      name: 'Tata Nexon',
      fuel: 'Petrol',
      seats: 5,
      mileage: 22,
      year: 2020,
      transmission:'Automatic',
      price:'Rs.1300'
  },
    {
        id : 29,
        image: Car6,
        name: 'Toyota Innova',
        fuel: 'Diesel',
        seats: 8,
        mileage: 25,
        year: 2023,
        transmission:'Manual',
        price:'Rs.1800'
    },
    {
        id : 30,
        image: Car14,
        name: 'Bmw i8',
        fuel: 'Petrol',
        seats: 3,
        mileage: 13,
        year: 2018,
        transmission:'Manual',
        price:'Rs.14000'
    },
    {
        id : 31,
        image: Car11,
        name: 'Koenigsegg',
        fuel: 'Petrol',
        seats: 2,
        mileage: 10,
        year: 2021,
        transmission:'Manual',
        price:'Rs.13000'
    },
    {
      id : 32,
      image: Car1,
      name: 'Mahindra Thar',
      fuel: 'Petrol',
      seats: 5,
      mileage: 23,
      year: 2018,
      transmission:'Manual',
      price:'Rs.1500'
  },
    {
        id : 33,
        image: Car4,
        name: 'Maruti Swift ',
        fuel: 'Petrol',
        seats: 5,
        mileage: 28,
        year: 2023,
        transmission:'Automatic',
        price:'Rs.1100'
    },
    {
      id : 34,
      image: Car6,
      name: 'Toyota Innova',
      fuel: 'Diesel',
      seats: 8,
      mileage: 25,
      year: 2023,
      transmission:'Manual',
      price:'Rs.1800'
  },
  {
    id : 35,
    image: Car2,
    name: 'Tata Nexon',
    fuel: 'Petrol',
    seats: 5,
    mileage: 22,
    year: 2020,
    transmission:'Automatic',
    price:'Rs.1300'
},
  {
    id : 36,
    image: Car9,
    name: 'Lamborghini Urus',
    fuel: 'Petrol',
    seats: 5,
    mileage: 12,
    year: 2022,
    transmission:'Automatic',
    price:'Rs.16000'
},
{
    id : 37,
    image: Car14,
    name: 'Bmw i8',
    fuel: 'Petrol',
    seats: 3,
    mileage: 13,
    year: 2018,
    transmission:'Manual',
    price:'Rs.14000'
},
    {
        id : 38,
        image: Car5,
        name: 'Honda Amaze ',
        fuel: 'Diesel',
        seats: 5,
        mileage: 18,
        year: 2020,
        transmission:'Manual',
        price:'Rs.1300'
    },
    {
        id : 11,
        image: Car11,
        name: 'Koenigsegg',
        fuel: 'Petrol',
        seats: 2,
        mileage: 10,
        year: 2021,
        transmission:'Manual',
        price:'Rs.13000'
    },
    {
        id : 3,
        image: Car3,
        name: 'Innova ',
        fuel: 'Petrol',
        seats: 7,
        mileage: 23,
        year: 2020,
        transmission:'Manual',
        price:'Rs.1800'
    },
    {
        id : 1,
        image: Car1,
        name: 'Mahindra Thar',
        fuel: 'Petrol',
        seats: 5,
        mileage: 23,
        year: 2018,
        transmission:'Manual',
        price:'Rs.1500'
    },
    {
        id : 12,
        image: Car12,
        name: 'Buggati',
        fuel: 'Petrol',
        seats: 2,
        mileage: 21,
        year: 2022,
        transmission:'Manual',
        price:'Rs.15000'
    },
    {
        id : 14,
        image: Car14,
        name: 'Bmw i8',
        fuel: 'Petrol',
        seats: 3,
        mileage: 13,
        year: 2018,
        transmission:'Manual',
        price:'Rs.14000'
    },
    {
        id : 4,
        image: Car4,
        name: 'Maruti Swift ',
        fuel: 'Petrol',
        seats: 5,
        mileage: 28,
        year: 2023,
        transmission:'Automatic',
        price:'Rs.1100'
    },
    {
        id : 2,
        image: Car2,
        name: 'Tata Nexon',
        fuel: 'Petrol',
        seats: 5,
        mileage: 22,
        year: 2020,
        transmission:'Automatic',
        price:'Rs.1300'
    },
    {
        id : 3,
        image: Car3,
        name: 'Innova ',
        fuel: 'Petrol',
        seats: 7,
        mileage: 23,
        year: 2020,
        transmission:'Manual',
        price:'Rs.1800'
    },
    {
        id : 1,
        image: Car1,
        name: 'Mahindra Thar',
        fuel: 'Petrol',
        seats: 5,
        mileage: 23,
        year: 2018,
        transmission:'Manual',
        price:'Rs.1500'
    },
    {
        id : 6,
        image: Car6,
        name: 'Toyota Innova',
        fuel: 'Diesel',
        seats: 8,
        mileage: 25,
        year: 2023,
        transmission:'Manual',
        price:'Rs.1800'
    },
    {
        id : 12,
        image: Car12,
        name: 'Buggati',
        fuel: 'Petrol',
        seats: 2,
        mileage: 21,
        year: 2022,
        transmission:'Manual',
        price:'Rs.15000'
    },
    {
        id : 14,
        image: Car14,
        name: 'Bmw i8',
        fuel: 'Petrol',
        seats: 3,
        mileage: 13,
        year: 2018,
        transmission:'Manual',
        price:'Rs.14000'
    },
    {
        id : 4,
        image: Car4,
        name: 'Maruti Swift ',
        fuel: 'Petrol',
        seats: 5,
        mileage: 28,
        year: 2023,
        transmission:'Automatic',
        price:'Rs.1100'
    },
    {
        id : 9,
        image: Car9,
        name: 'Lamborghini Urus',
        fuel: 'Petrol',
        seats: 5,
        mileage: 12,
        year: 2022,
        transmission:'Automatic',
        price:'Rs.16000'
    },
    {
      id : 1,
      image: Car1,
      name: 'Mahindra Thar',
      fuel: 'Petrol',
      seats: 5,
      mileage: 23,
      year: 2018,
      transmission:'Manual',
      price:'Rs.1500'
  },
  
    {
        id : 39,
        image: Car3,
        name: 'Innova ',
        fuel: 'Petrol',
        seats: 7,
        mileage: 23,
        year: 2020,
        transmission:'Manual',
        price:'Rs.1800'
    },
    {
        id : 40,
        image: Car1,
        name: 'Mahindra Thar',
        fuel: 'Petrol',
        seats: 5,
        mileage: 23,
        year: 2018,
        transmission:'Manual',
        price:'Rs.1500'
    },
    {
        id : 41,
        image: Car12,
        name: 'Buggati',
        fuel: 'Petrol',
        seats: 2,
        mileage: 21,
        year: 2022,
        transmission:'Manual',
        price:'Rs.15000'
    },
    {
        id : 42,
        image: Car14,
        name: 'Bmw i8',
        fuel: 'Petrol',
        seats: 3,
        mileage: 13,
        year: 2018,
        transmission:'Manual',
        price:'Rs.14000'
    },
    {
        id : 43,
        image: Car4,
        name: 'Maruti Swift ',
        fuel: 'Petrol',
        seats: 5,
        mileage: 28,
        year: 2023,
        transmission:'Automatic',
        price:'Rs.1100'
    },
    {
        id : 44,
        image: Car2,
        name: 'Tata Nexon',
        fuel: 'Petrol',
        seats: 5,
        mileage: 22,
        year: 2020,
        transmission:'Automatic',
        price:'Rs.1300'
    },
    {
        id : 45,
        image: Car3,
        name: 'Innova ',
        fuel: 'Petrol',
        seats: 7,
        mileage: 23,
        year: 2020,
        transmission:'Manual',
        price:'Rs.1800'
    },
    {
        id : 46,
        image: Car1,
        name: 'Mahindra Thar',
        fuel: 'Petrol',
        seats: 5,
        mileage: 23,
        year: 2018,
        transmission:'Manual',
        price:'Rs.1500'
    },
    {
        id : 47,
        image: Car6,
        name: 'Toyota Innova',
        fuel: 'Diesel',
        seats: 8,
        mileage: 25,
        year: 2023,
        transmission:'Manual',
        price:'Rs.1800'
    },
    {
        id : 48,
        image: Car12,
        name: 'Buggati',
        fuel: 'Petrol',
        seats: 2,
        mileage: 21,
        year: 2022,
        transmission:'Manual',
        price:'Rs.15000'
    },
    {
        id : 49,
        image: Car14,
        name: 'Bmw i8',
        fuel: 'Petrol',
        seats: 3,
        mileage: 13,
        year: 2018,
        transmission:'Manual',
        price:'Rs.14000'
    },
    {
        id : 50,
        image: Car4,
        name: 'Maruti Swift ',
        fuel: 'Petrol',
        seats: 5,
        mileage: 28,
        year: 2023,
        transmission:'Automatic',
        price:'Rs.1100'
    },
    {
        id : 51,
        image: Car9,
        name: 'Lamborghini Urus',
        fuel: 'Petrol',
        seats: 5,
        mileage: 12,
        year: 2022,
        transmission:'Automatic',
        price:'Rs.16000'
    },
    {
        id : 52,
        image: Car1,
        name: 'Mahindra Thar',
        fuel: 'Petrol',
        seats: 5,
        mileage: 23,
        year: 2018,
        transmission:'Manual',
        price:'Rs.1500'
    },
    {
        id : 53,
        image: Car6,
        name: 'Toyota Innova',
        fuel: 'Diesel',
        seats: 8,
        mileage: 25,
        year: 2023,
        transmission:'Manual',
        price:'Rs.1800'
    },
    {
        id : 54,
        image: Car3,
        name: 'Innova ',
        fuel: 'Petrol',
        seats: 7,
        mileage: 23,
        year: 2019,
        transmission:'Manual',
        price : 'Rs.1700'
    },
    {
        id :55,
        image: Car6,
        name: 'Toyota Innova',
        fuel: 'Diesel',
        seats: 8,
        mileage: 25,
        year: 2023,
        transmission:'Manual',
        price:'Rs.1800'
    },
    {
        id : 56,
        image: Car3,
        name: 'Innova ',
        fuel: 'Petrol',
        seats: 7,
        mileage: 23,
        year: 2020,
        transmission:'Manual',
        price:'Rs.1800'
    },
    {
        id : 57,
        image: Car11,
        name: 'Koenigsegg',
        fuel: 'Petrol',
        seats: 2,
        mileage: 10,
        year: 2021,
        transmission:'Manual',
        price:'Rs.13000'
    },
    {
        id : 58,
        image: Car12,
        name: 'Buggati',
        fuel: 'Petrol',
        seats: 2,
        mileage: 21,
        year: 2022,
        transmission:'Manual',
        price:'Rs.15000'
    },
    {
        id : 59,
        image: Car4,
        name: 'Maruti Swift ',
        fuel: 'Petrol',
        seats: 5,
        mileage: 28,
        year: 2023,
        transmission:'Automatic',
        price:'Rs.1100'
    },
    {
        id : 60,
        image: Car9,
        name: 'Lamborghini Urus',
        fuel: 'Petrol',
        seats: 5,
        mileage: 12,
        year: 2022,
        transmission:'Automatic',
        price:'Rs.16000'
    }

  ]
  export default carData