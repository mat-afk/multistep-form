const AccountForm = ({ data, handleData }) => {
  return (
    <div className="account-container">
      <div className="form-control">
        <label>
          <span>Name:</span>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            required
            value={data.name || ""}
            onChange={(e) => handleData("name", e.target.value)}
          />
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
            value={data.email || ""}
            onChange={(e) => handleData("email", e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default AccountForm;
