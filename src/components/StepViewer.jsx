import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import "./StepViewer.css";

const StepViewer = ({ currentStep }) => {
  return (
    <div className="step-viewer">
      <div className="step active">
        <AiOutlineUser />
        <p>Account</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Review</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Submission</p>
      </div>
    </div>
  );
};

export default StepViewer;
