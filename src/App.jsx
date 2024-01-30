// Components
import { GrFormNext, GrFormPrevious, GrSend } from "react-icons/gr";
import AccountForm from "./components/AccountForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import StepViewer from "./components/StepViewer";

// Hooks
import { useStep } from "./hooks/useStep";
import { useState } from "react";

// CSS
import "./App.css";

const dataTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(dataTemplate);

  const handleData = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const stepsComponents = [
    <AccountForm data={data} handleData={handleData} />,
    <ReviewForm data={data} handleData={handleData} />,
    <Thanks data={data} />,
  ];
  const { currentStep, currentComponent, next, back, isFirst, isLast } =
    useStep(stepsComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Share your opinion</h2>
        <p>
          We are happy with your purchase, use the form below to rate the
          product.
        </p>
      </div>
      <div className="form-container">
        <StepViewer currentStep={currentStep} />
        <form onSubmit={(e) => next(e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirst && (
              <button type="button" onClick={back}>
                <GrFormPrevious />
                <span>Back</span>
              </button>
            )}

            {!isLast ? (
              <button type="submit">
                <span>Next</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="submit">
                <span>Submit</span>
                <GrSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
