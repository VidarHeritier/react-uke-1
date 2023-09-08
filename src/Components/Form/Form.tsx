import "./nav.css";
import "./login.css";

export function Form() {
  return (
    <>
      <div className="login">
        <div className="user">
          <h6>username</h6>
          <input type="text" name="username" id="user" maxLength={10} />
        </div>
        <div className="pass">
          <h6>password</h6>
          <input type="password" name="pass" id="pass" maxLength={10} />
        </div>
        <div className="submit">
          <input type="submit" value="submit" />
        </div>
      </div>
    </>
  );
}
