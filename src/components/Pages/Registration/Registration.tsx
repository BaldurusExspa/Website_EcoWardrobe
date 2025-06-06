// modules imports
import { api } from "../../../api/config";
import { FormEvent, useState } from "react";
import { register } from "../../../api/auth";
import { useNavigate, Link } from "react-router-dom";
// components imports
import { InputForm } from "../../functional-components/InputForm/InputForm";
import { Button } from "../../functional-components/Button/Button";
// styles import
import "./Registration.css";

export const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // async function getTokenAfterRegistration() {
  //   try {
  //     const response = await api.post("/registration");

  //     if (response.data.success) {
  //       localStorage.setItem("token", response.data.token);
  //       return response.data.token;
  //     }
  //   } catch (error) {
  //     console.error("Ошибка:", error);
  //     throw error;
  //   }
  // }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const user = await register(name, mobilePhone, email, password);
      // getTokenAfterRegistration();
      navigate("/catalog");
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
  };

  return (
    <div className="registration-section">
      <form onSubmit={handleSubmit} className="user-form">
        <div className="user-form__input-group">
          <InputForm
            inputType="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className_input="user-form__input"
          >
            Имя
          </InputForm>
          <InputForm
            inputType="number"
            value={mobilePhone}
            onChange={(e) => setMobilePhone(e.target.value)}
            className_input="user-form__input"
          >
            Телефон
          </InputForm>
          <InputForm
            inputType="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className_input="user-form__input"
          >
            Почта
          </InputForm>
          <InputForm
            inputType="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className_input="user-form__input"
          >
            Пароль
          </InputForm>
        </div>
        <Button type="submit" className="user-form__button">
          Зарегистрироваться
        </Button>
        <Link className="user-form__change" to="/authorization">
          Зайти
        </Link>
      </form>
    </div>
  );
};
