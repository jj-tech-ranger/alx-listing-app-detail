import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = useMemo(() => {
    if (!id) return null;
    return PROPERTYLISTINGSAMPLE.find(
      (item) => item.name === id || item.id === id
    );
  }, [id]);

  if (!router.isReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Property Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the property you're looking for.
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Back to Listings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PropertyDetail property={property} />
    </div>
  );
}
