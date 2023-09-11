import "./nav.css";
import "./login.css";
import { useState } from "react";

interface FormProps {
  username: string;
  password: string;
}

export function Form({ username, password }: FormProps) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [setShowWelcome] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUsers([...users, formData]);
    setFormData({
      username: "",
      password: "",
    });
    setSubmitted(true);
    setShowWelcome(true);
  };

  const handleWelcomeClick = () => {
    setShowWelcome(false);
  };

  return (
    <>
      <div className="login">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="user">
              <h6>username</h6>
              <input
                type="text"
                name="username"
                id="user"
                maxLength={10}
                autoComplete="off"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="pass">
              <h6>password</h6>
              <input
                type="password"
                name="password"
                id="pass"
                maxLength={10}
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="submit">
              <input type="submit" value="submit" />
            </div>
          </form>
        ) : (
          <div className="welcome" onClick={handleWelcomeClick}>
            <h2>
              Yo, {users[users.length - 1].username}! <br></br> Welcome back.
            </h2>
          </div>
        )}
      </div>
    </>
  );
}
