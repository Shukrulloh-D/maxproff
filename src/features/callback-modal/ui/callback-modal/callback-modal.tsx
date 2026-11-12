import { useState } from "react";
import type { FormEvent } from "react";
import { isPhoneComplete } from "@/shared/lib/phone";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import { Modal } from "@/shared/ui/modal";
import { PhoneField } from "@/shared/ui/phone-field";
import { TextField } from "@/shared/ui/text-field";
import { useCallbackModal } from "../../model/use-callback-modal";
import "./callback-modal.css";

export const CallbackModal = () => {
  const { isOpen, close } = useCallbackModal();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleClose = () => {
    close();
    setName("");
    setPhone("");
    setError("");
    setSent(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isPhoneComplete(phone)) {
      setError("Введите номер телефона полностью");
      return;
    }

    setSent(true);
  };

  return (
    <Modal open={isOpen} onClose={handleClose} label="Заказать звонок">
      {sent ? (
        <div className="callback-success" role="status">
          <span className="callback-success-icon">
            <Icon name="check" size={28} />
          </span>
          <h2 className="callback-title">Заявка принята</h2>
          <p className="callback-text">
            Перезвоним в течение 15 минут в рабочее время.
          </p>
          <Button block onClick={handleClose}>
            Закрыть
          </Button>
        </div>
      ) : (
        <form className="callback-form" onSubmit={handleSubmit} noValidate>
          <h2 className="callback-title">Заказать звонок</h2>
          <p className="callback-text">
            Перезвоним в течение 15 минут и ответим на все вопросы.
          </p>
          <TextField
            label="Ваше имя"
            autoComplete="name"
            placeholder="Как к вам обращаться"
            value={name}
            onChange={setName}
          />
          <PhoneField
            label="Телефон"
            value={phone}
            error={error}
            onChange={(value) => {
              setPhone(value);
              setError("");
            }}
          />
          <Button type="submit" size="lg" block>
            Заказать звонок
          </Button>
        </form>
      )}
    </Modal>
  );
};
