// Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// CSS
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <h2>Share your review</h2>
        <p>
          We are happy with your purchase, use the form below to rate the
          product.
        </p>
      </div>
      <div className="form-container">
        <p>steps</p>
        <form>
          <div className="inputs-container"></div>
          <div className="actions">
            <button type="button">
              <GrFormPrevious />
              <span>Back</span>
            </button>
            <button type="submit">
              <span>Next</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
