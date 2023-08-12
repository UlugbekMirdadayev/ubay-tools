import { useState, useId } from "react";
import { CloseArrow } from "../icon";
import { ModalStyled } from "./style";

const UserModal = ({ handleClose }) => {
  const inputID = useId();
  const [phone, setPhone] = useState({
    value: "",
    error: false,
    touched: false,
  });

  const handleChange = ({ target: { value } }) => {
    if (value?.length <= 9) {
      if (value?.length === 9) {
        setPhone({ value, error: false, touched: true });
      } else {
        setPhone((state) => ({ ...state, error: true, value }));
      }
    }
  };

  const onSubmit = () => {
    if (phone.value?.length !== 9) {
      return setPhone((state) => ({ ...state, error: true, touched: true }));
    }
    console.log({ phone: "+998" + phone.value });
    handleClose();
  };

  return (
    <ModalStyled className="scroll-custome">
      <div className="overlay" onClick={handleClose} />
      <div className="modal-body">
        <button className="closer" onClick={handleClose}>
          <CloseArrow />
        </button>
        <h1 className="title">Войти или создать профиль</h1>
        <label htmlFor={inputID}>Номер телефона</label>
        <div
          className={`input_row ${phone.touched && phone.error ? "error" : ""}`}
        >
          <span>+998</span>
          <input
            type="tel"
            id={inputID}
            onChange={handleChange}
            value={phone.value}
          />
        </div>
        <button onClick={onSubmit} className="submit">
          Yuborish
        </button>
      </div>
    </ModalStyled>
  );
};

export default UserModal;
