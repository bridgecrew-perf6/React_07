import classes from "./Auth.module.css";
import { authActions } from "../store/index";
import { useAppDispatch } from "../store/hook";

const Auth = () => {
  const dispatch = useAppDispatch();

  const loginHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <form className={classes.auth} onSubmit={loginHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button className={classes.btn}>Login</button>
    </form>
  );
};

export default Auth;
