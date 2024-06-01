
import React from 'react';
import { fetch_cars_data } from '../Data/CarData';

const Cars = () => {
  return (
    <div className="flex flex-wrap gap-5 p-5">
      {fetch_cars_data.map((car) => (
        <div
          key={car.id}
          className="max-w-sm bg-white border-gray-400 border-2 rounded-lg shadow-lg p-6 m-6"
        >
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src={car.image}
            alt={car.model}
          />
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-2">{car.model}</h2>
            <p className="text-gray-700 mb-2">{car.description}</p>
            <ul className="mb-2">
              <li>
                <span className="font-semibold">Price:</span> {car.price}
              </li>
              <li>
                <span className="font-semibold">Color:</span> {car.color}
              </li>
              <li>
                <span className="font-semibold">Max Speed:</span> {car.max_speed} km/h
              </li>
              <li>
                <span className="font-semibold">Make Year:</span> {car.make_year}
              </li>
              <li>
                <span className="font-semibold">Fuel:</span> {car.fuel}
              </li>
              <li>
                <span className="font-semibold">Location:</span> {car.location}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Car;





