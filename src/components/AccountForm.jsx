const AccountForm = () => {
  return (
    <div>
      <div className="form-control">
        <label>
          <span>Name:</span>
          <input type="text" id="name" placeholder="Enter your name" required />
        </label>
      </div>
      <div className="form-control">
        <label>
          <span>Email:</span>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </label>
      </div>
    </div>
  );
};

export default AccountForm;
