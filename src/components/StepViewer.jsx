import { AiOutlineUser, AiOutlineStar, AiOutlineSend } from "react-icons/ai";

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
        <AiOutlineSend />
        <p>Submission</p>
      </div>
    </div>
  );
};

export default StepViewer;
