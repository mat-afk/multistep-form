// Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import AccountForm from "./components/AccountForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

// Hooks
import { useStep } from "./hooks/useStep";

// CSS
import "./App.css";

function App() {
  const stepsComponents = [<AccountForm />, <ReviewForm />, <Thanks />];
  const { currentComponent, next, back, isFirst, isLast } =
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
        <p>steps</p>
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
                <span>Send</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
