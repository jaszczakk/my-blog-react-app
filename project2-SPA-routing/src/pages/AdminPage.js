import React from "react";
import { Route, Redirect } from "react-router-dom";

//przekierowanie do strony logowania użytkownika gdy wejdzie na adres /admin
const permission = false;

const AdminPage = () => {
  return (
    <Route
      render={() =>
        permission ? <h3>Panel admina</h3> : <Redirect to="/login" />
      }
    />
  );
};

export default AdminPage;
