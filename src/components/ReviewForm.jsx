import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css";

const ReviewForm = ({ data, handleData }) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <div>
            <input
              type="radio"
              value="unsatisfied"
              name="review"
              required
              checked={data.review === "unsatisfied"}
              onChange={(e) => handleData("review", e.target.value)}
            />
            <BsFillEmojiFrownFill />
          </div>
          <p>Unsatisfied</p>
        </label>
        <label className="radio-container">
          <div>
            <input
              type="radio"
              value="neutral"
              name="review"
              required
              checked={data.review === "neutral"}
              onChange={(e) => handleData("review", e.target.value)}
            />
            <BsFillEmojiNeutralFill />
          </div>
          <p>Could be better</p>
        </label>
        <label className="radio-container">
          <div>
            <input
              type="radio"
              value="satisfied"
              name="review"
              required
              checked={data.review === "satisfied"}
              onChange={(e) => handleData("review", e.target.value)}
            />
            <BsFillEmojiSmileFill />
          </div>
          <p>Satisfied</p>
        </label>
        <label className="radio-container">
          <div>
            <input
              type="radio"
              value="very_satisfied"
              name="review"
              required
              checked={data.review === "very_satisfied"}
              onChange={(e) => handleData("review", e.target.value)}
            />
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
            value={data.comment || ""}
            onChange={(e) => handleData("comment", e.target.value)}
          ></textarea>
        </label>
      </div>
    </div>
  );
};

export default ReviewForm;
