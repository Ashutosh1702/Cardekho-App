import React, { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [carData, setCarData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://fakestoreapi.com/products',
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);

        const placeholderImages = [
          {
            url: "https://th.bing.com/th/id/OIP.TiXvXESPL0nRmWngEJJlUAHaEK?rs=1&pid=ImgDetMain",
            name: "Car 1"
          },
          {
            url: "https://www.carscoops.com/wp-content/uploads/2020/01/Mini-Convertible-Sidewalk-1-1.jpg",
            name: "Car 2"
          },
          {
            url: "https://media.autoexpress.co.uk/image/private/s--mMjjiETe--/v1579701769/autoexpress/2019/06/01_60.jpg",
            name: "Car 3"
          },
          {
            url: "https://th.bing.com/th/id/R.d50d8644e1d239f7b28e43793628761f?rik=gYNqREXj0m8FdA&riu=http%3a%2f%2fwww.dragtimes.com%2fimages%2f31493-2013-Ford-Taurus.jpg&ehk=llQR8r3%2bvRVpvGs%2fv4hPr4tFqT20Depzn4g6x4UpiYI%3d&risl=&pid=ImgRaw&r=0",
            name: "Car 4"
          },
          {
            url: "https://s3.caradvice.com.au/wp-content/uploads/2017/03/2018_volvo_xc60_55.jpg",
            name: "Car 5"
          },
          {
            url: "https://rmsothebys-cache.azureedge.net/4/8/b/9/3/5/48b935db27c1ef7242a4752b8bfe75ff183bb79c.jpg",
            name: "Car 6"
          },
          {
            url: "https://th.bing.com/th/id/OIP.J3He275SWLcgMkXj-UPmzwAAAA?rs=1&pid=ImgDetMain",
            name: "Car 7"
          },
          {
            url: "https://media.ed.edmunds-media.com/gmc/canyon/2016/oem/2016_gmc_canyon_crew-cab-pickup_slt_fq_oem_1_1280.jpg",
            name: "Car 8"
          },
          {
            url: "https://i.redd.it/pti82qc47rf91.jpg",
            name: "Car 9"
          },
          {
            url: "https://th.bing.com/th/id/OIP.uqSQP3tKuz-CZY8LhqPQdQHaE8?rs=1&pid=ImgDetMain",
            name: "Car 10"
          }
        ];

        const productsWithImagesAndPrices = response.data.map((car, index) => ({
          make: car.make,
          model: car.model,
          vin: car.vin,
          year: car.year,
          image: placeholderImages[index % placeholderImages.length].url,
          imageName: placeholderImages[index % placeholderImages.length].name,
          price: (Math.random() * (50000 - 20000) + 20000).toFixed(2)
        }));

        setCarData(productsWithImagesAndPrices);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch car data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (image, imageName) => {
    setSelectedImage(image);
    setSelectedImageName(imageName);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageName("");
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {carData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carData.map((car, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={car.image}
                alt={`${car.make} ${car.model}`}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => handleImageClick(car.image, car.imageName)}
              />
              <div className="p-4">
                <h5 className="text-lg font-bold">{car.make} BMW{car.model}</h5>
                <p className="text-sm"><strong>VIN:</strong> Audi R8{car.vin}</p>
                <p className="text-sm"><strong>Year:</strong> 2022{car.year}</p>
                <p className="text-sm"><strong>Price:</strong> ${car.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
            <div className="flex justify-between items-center p-4 border-b">
              <h5 className="text-xl">{selectedImageName}</h5>
              <button type="button" className="text-gray-400 hover:text-gray-600" onClick={closeModal}>
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            <div className="p-4">
              <img src={selectedImage} alt={selectedImageName} className="w-full h-auto" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;