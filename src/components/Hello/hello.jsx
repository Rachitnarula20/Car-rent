import React, { useState } from 'react';
import { BiSolidGasPump } from 'react-icons/bi';
import { GiSteeringWheel } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';
import { BsSpeedometer2 } from 'react-icons/bs';
import carData from '../CarData/carData';
import Pagination from '../Footer/pagination'; // Import the Pagination component

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
                    <img src={item.image} alt="Car Image" className="mb-4 w-full h-32 object-cover rounded-md" />
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
                <button className="bg-cyan-500 text-white py-2 [padding-left:1.75rem] [padding-right:1.75rem] px-4 rounded-full text-s  hover:bg-cyan-700">
          Rent
        </button>
            </div>
           
        </div>
        ))
        const pageCount = Math.ceil(carData.length / ItemsPerPage);
    

        return (
          <div className="bg-cyan-100 p-4 rounded-xl ml-7 mr-7 mt-3">
            <div className="container mx-auto">
              <div className="flex flex-wrap -mx-4">
                {currentItems}
                <Pagination pageCount={pageCount} handlePageClick={handlePageClick} currentPage={currentPage} />

              </div>
            </div>
          </div>
        );
      }
      
      export default hello;