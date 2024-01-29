import { useState } from "react";

export const useStep = (components) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = (e) => {
    e.preventDefault();
    if (currentStep >= components.length - 1) return;
    setCurrentStep((prev) => prev + 1);
  };

  const back = () => {
    if (currentStep <= 0) return;
    setCurrentStep((prev) => prev - 1);
  };

  return {
    currentStep,
    currentComponent: components[currentStep],
    next,
    back,
    isFirst: currentStep === 0,
    isLast: currentStep === components.length - 1,
  };
};
