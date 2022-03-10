import classes from "./Header.module.css";
import { authActions } from "../store/index";
import { useAppDispatch, useAppSelector } from "../store/hook";
const Header = () => {
  const dispatch = useAppDispatch();
  const isAuth: boolean = useAppSelector((state) => state.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h2>{process.env.REACT_APP_TITLE}</h2>
      {isAuth && <button onClick={logoutHandler}>Logout</button>}
    </header>
  );
};

export default Header;
