import { LoginForm } from "./LoginForm";
import "./LoginReminder.css";

export const LoginReminder = ({ setCurrentScreen, setIsLoggedIn }) => {
  return (
    <div className="loginReminder">
      <h1>Plese log in to start your Mood journey!</h1>

      <LoginForm
        setCurrentScreen={setCurrentScreen}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};
