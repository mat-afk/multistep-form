import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

const emojiMap = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
}

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Just one last step...</h2>
      <p>
        Your opinion is very important, you will soon receive a 10% discount
        coupon for your next purchase in <span id="email">{data.email}</span>.
      </p>
      <p>To complete your review, click the Submit button below.</p>
      <h3>Here is your review summary, {data.name}:</h3>
      <p className="review-data">
        <span>Satisfaction with the product: </span>
        <span id="emoji">{emojiMap[data.review]}</span>
      </p>
      <p className="review-data">
        <span>Comment: </span>
        <span id="comment">{data.comment}</span>
      </p>
    </div>
  );
};

export default Thanks;
