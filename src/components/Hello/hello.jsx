import React, { useState } from 'react'
import {BiSolidGasPump} from 'react-icons/bi'
import {GiSteeringWheel} from 'react-icons/gi'
import {FaUsers} from 'react-icons/fa'
import {BsSpeedometer2} from 'react-icons/bs'
import Car1 from '../../images/car1.jpeg'
import Car2 from '../../images/car2.jpeg'
import Car3 from '../../images/car3.jpeg'
import Car4 from '../../images/car4.jpg'
import Car5 from '../../images/car5.jpg'
import Car6 from '../../images/car6.jpg'
import ReactPaginate from 'react-paginate'
import './paginate.css'

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
      id : 3,
      image: Car3,
      name: 'Maruti Ertiga',
      fuel: 'Petrol',
      seats: 7,
      mileage: 27,
      year: 2019,
      transmission:'Manual',
      price:'Rs.1600'
  },
  {
    id : 3,
    image: Car3,
    name: 'Maruti Ertiga',
    fuel: 'Petrol',
    seats: 7,
    mileage: 27,
    year: 2019,
    transmission:'Manual',
    price:'Rs.1600'
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
      name: 'Maruti Ertiga',
      fuel: 'Petrol',
      seats: 7,
      mileage: 27,
      year: 2019,
      transmission:'Manual',
      price:'Rs.1600'
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
      id : 5,
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
      id : 5,
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
  }
]


const ItemsPerPage = 6;

const hello = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const offset = currentPage * ItemsPerPage;
  const currentItems = carData.slice(offset, offset + ItemsPerPage).map((item) => (
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-4 mb-8">
         <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between w-[300px]">
                <div>
                    <img src={item.image} alt="Car Image" class="mb-4 w-full h-32 object-cover rounded-md" />
                    <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                    <div className="flex flex-row mb-2">
                        <div className="mr-4">
                            <p className="text-gray-600"><GiSteeringWheel className="inline-block mr-2 fill-cyan-400"/> {item.transmission}</p>
                            
                            <p className="text-gray-600"> <BiSolidGasPump className="inline-block mr-2 fill-cyan-400" />{item.fuel}</p>
                        </div>
                        <div>
                            <p className="text-gray-600"><FaUsers className="inline-block mr-2 fill-cyan-400" />{item.seats}</p>
                            <p className="text-gray-600"> <BsSpeedometer2 className="inline-block mr-2 fill-cyan-400" />{item.mileage}km/litre</p>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <p className="text-gray-600 text-lg font-semibold">{item.price}/day</p>  
            </div>
        </div>
        ))
        const pageCount = Math.ceil(carData.length / ItemsPerPage);
    

        return (
            <div className="bg-cyan-100 p-4 rounded-xl ml-7 mr-7 mt-3">
     <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
        {currentItems}
        <div className="pagination-container">

        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
            
    </div>
 </div>
</div>
  
  )
}

export default hello
