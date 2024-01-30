import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css";

const ReviewForm = () => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <div>
            <input type="radio" value="unsatisfied" name="review" required />
            <BsFillEmojiFrownFill />
          </div>
          <p>Unsatisfied</p>
        </label>
        <label className="radio-container">
          <div>
            <input type="radio" value="neutral" name="review" required />
            <BsFillEmojiNeutralFill />
          </div>
          <p>Could be better</p>
        </label>
        <label className="radio-container">
          <div>
            <input type="radio" value="satisfied" name="review" required />
            <BsFillEmojiSmileFill />
          </div>
          <p>Satisfied</p>
        </label>
        <label className="radio-container">
          <div>
            <input type="radio" value="very-satisfied" name="review" required />
            <BsFillEmojiHeartEyesFill />
          </div>
          <p>Vary satisfied</p>
        </label>
      </div>
      <div className="form-control">
        <label>
          <span>Comment:</span>
          <textarea
            id="comment"
            placeholder="Tell us about your experience..."
            required
          ></textarea>
        </label>
      </div>
    </div>
  );
};

export default ReviewForm;
