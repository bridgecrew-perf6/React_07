import React from "react";
import Auth from "./components/Auth";
import Header from "./components/Header";
import { useAppSelector } from "./store/hook";
import UserListCardWrapper from "./components/UserListCardWrapper/UserListCardWrapper";

function App() {
  const isAuth: boolean = useAppSelector((state) => state.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserListCardWrapper />}
    </>
  );
}

export default App;
