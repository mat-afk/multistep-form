import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

const Thanks = () => {
  return (
    <div className="thanks-container">
      <h2>Just one last step...</h2>
      <p>
        Your opinion is very important, you will soon receive a 10% discount
        coupon for your next purchase.
      </p>
      <p>To complete your evaluation, click the Submit button below.</p>
      <h3>Here is your review summary:</h3>
      <p className="review-data">
        <span>Satisfaction with the product: </span>
        <BsFillEmojiFrownFill />
      </p>
      <p className="review-data">
        <span>Comment: </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, in
        inventore laboriosam ut corporis harum porro perferendis earum
        blanditiis asperiores officia assumenda veritatis recusandae eius sed
        eveniet ex quidem similique?
      </p>
    </div>
  );
};

export default Thanks;
