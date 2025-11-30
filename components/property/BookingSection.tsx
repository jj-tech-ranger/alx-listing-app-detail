import React, { useState, useMemo } from "react";
import { BookingProps } from "@/interfaces/index";

const BookingSection: React.FC<BookingProps> = ({ price }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const nights = useMemo(() => {
    if (!checkInDate || !checkOutDate) return 0;
    const diff = new Date(checkOutDate).getTime() - new Date(checkInDate).getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }, [checkInDate, checkOutDate]);
  const totalCost = nights > 0 ? nights * price : 0;
  const handleReserve = () => {
    if (!checkInDate || !checkOutDate || nights <= 0) {
      alert("Please select valid dates");
      return;
    }
    alert(`Reservation confirmed! Total: $${totalCost}`);
  };
  const today = new Date().toISOString().split("T")[0];
  return (
    <div className="sticky top-8 bg-white p-6 shadow-lg rounded-lg border">
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-600">/night</span>
      </div>
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Check-in</label>
          <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} min={today} className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Check-out</label>
          <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} min={checkInDate || today} className="w-full px-4 py-2 border rounded-lg" />
        </div>
      </div>
      {nights > 0 && (
        <div className="mb-6 pb-6 border-b space-y-2">
          <div className="flex justify-between">
            <span>${price} x {nights} nights</span>
            <span>${totalCost}</span>
          </div>
        </div>
      )}
      <button onClick={handleReserve} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700">Reserve now</button>
    </div>
  );
};
export default BookingSection;
