import React from "react";

const tourDates = [
  {
    date: "JUL16",
    city: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL19",
    city: "TORONTO,ON",
    venue: "BUDWEISER STAGE",
  },
  {
    date: "JUL 22",
    city: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    city: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    city: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    city: "CONCORD, CA",
    venue: "CONCORD PAVILION",
  },
];

const TourDates = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">TOURS</h2>
        <div className="space-y-4">
          {tourDates.map((tour, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div className="flex flex-col md:flex-row md:items-center md:space-x-8 mb-4 md:mb-0">
                <span className="text-gray-500 font-medium">{tour.date}</span>
                <span className="font-semibold">{tour.city}</span>
                <span className="text-gray-600">{tour.venue}</span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-600 transition-colors duration-200">
                BUY TICKETS
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourDates;
