import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaTrash,
  FaTruck,
  FaShieldAlt,
  FaCalendarAlt,
  FaCreditCard,
} from "react-icons/fa";
import { SelectSkipStep } from "./steps/SelectSkipStep";
import { useMainContext } from "@/context/MainContext";
import { ArrowLeft, ArrowRight, Calendar, Truck } from "lucide-react";

const steps = [
  { label: "Postcode", icon: <FaMapMarkerAlt /> },
  { label: "Waste Type", icon: <FaTrash /> },
  { label: "Select Skip", icon: <FaTruck /> },
  { label: "Permit Check", icon: <FaShieldAlt /> },
  { label: "Choose Date", icon: <FaCalendarAlt /> },
  { label: "Payment", icon: <FaCreditCard /> },
];

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const {selectedCard} = useMainContext();
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <div >📍 Enter your postcode</div>;
      case 1:
        return <div >🗑️ Select waste type</div>;
      case 2:
        return (
          <SelectSkipStep />
        );
      case 3:
        return <div >🛡️ Checking for permit requirements...</div>;
      case 4:
        return <div >📅 Choose your desired delivery date</div>;
      case 5:
        return <div >💳 Proceed to payment</div>;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col items-center gap-8  p-6 rounded-lg  relative">
      <div className="flex items-center justify-between  w-full lg:w-fit overflow-auto">
        {steps.map((step, index) => {
          const isActive = index <= currentStep;

          return (
            <div key={index} className="flex items-center">
              <div className="flex items-center gap-2">
                <div className={`${isActive ? "text-blue-500" : "text-gray-400"}`}>
                  {step.icon}
                </div>
                <span
                  className={
                    "whitespace-nowrap text-lg tracking-wider " +
                    `${isActive ? "" : "text-gray-400"}`
                  }
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-10 h-px mx-2 ${isActive ? "bg-blue-500" : "bg-gray-700"}`}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="  flex items-center justify-center ">{renderStepContent()}</div>

      { currentStep===2&&!selectedCard?.id?"": (
  <div className="fixed bottom-2 dark:bg-zinc-800 bg-zinc-100 left-1/2 transform -translate-x-1/2 w-[calc(100%-32px)] p-4  flex flex-col md:flex-row gap-4 items-start md:items-center justify-between rounded-lg shadow-2xl z-50">
    
    {/* Sol taraf: Seçili kart bilgisi */}
    <div className=" space-y-1  w-full flex  gap-x-4 flex-col sm:flex-row items-center ">
      { selectedCard?.id&&currentStep===2&& <>
          <h2 className="text-lg font-semibold flex items-center gap-2">
        <Truck className="w-5 h-5 text-blue-400" />
        {selectedCard.size} Yard Skip
      </h2>
      <p className="text-lg flex items-center gap-2">
        <Calendar className="w-5 h-5 text-yellow-400" />
        14 Day Hire
      </p>
      <p className="text-2xl font-bold text-blue-500 flex items-center mb-1">
        £ {selectedCard.price_before_vat}
      </p>
      </>}
    </div>

    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:ml-auto ">
      <button
        onClick={handlePrev}
        className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition cursor-pointer w-full md:w-auto"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <button
        onClick={handleNext}
        disabled={currentStep === steps.length - 1}
        className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer w-full md:w-auto disabled:opacity-40"
      >
        Continue
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </div>
)}


    </div>
  );
}
