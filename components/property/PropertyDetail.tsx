import React, { useState } from "react";
import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "reviews" | "host">("overview");

  const tabs = [
    { id: "overview" as const, label: "What we offer" },
    { id: "reviews" as const, label: "Reviews" },
    { id: "host" as const, label: "About host" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{property.name}</h1>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">⭐</span>
              <span className="font-semibold">{property.rating}</span>
              <span className="text-gray-500">(Reviews)</span>
            </div>
            <div className="flex items-center space-x-1 mt-2 md:mt-0">
              <span>📍</span>
              <span>{property.address.city}, {property.address.country}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-2 md:row-span-2">
            <img src={property.image} alt={property.name} className="w-full h-80 md:h-96 object-cover rounded-lg" />
          </div>
          {property.images && property.images.slice(0, 4).map((img, index) => (
            <img key={index} src={img} alt={`${property.name} ${index + 2}`} className="w-full h-40 md:h-44 object-cover rounded-lg hover:opacity-90 transition" />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`pb-4 px-4 font-medium transition-colors ${activeTab === tab.id ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600 hover:text-gray-900"}`}>
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="mt-6">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">About this property</h3>
                      <p className="text-gray-700 leading-relaxed">{property.description}</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">What this place offers</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {property.category.map((amenity, index) => (
                          <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                            <span className="text-2xl">✓</span>
                            <span className="text-gray-900 font-medium">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "reviews" && <ReviewSection reviews={property.reviews || []} />}
                {activeTab === "host" && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">H</div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Property Host</h4>
                        <p className="text-gray-600">Experienced host</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mt-4">Professional property management with years of experience in hospitality.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
