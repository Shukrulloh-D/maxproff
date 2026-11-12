import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { formatPrice } from "@/shared/lib/format";
import { isPhoneComplete } from "@/shared/lib/phone";
import { Button } from "@/shared/ui/button";
import { PhoneField } from "@/shared/ui/phone-field";
import { RadioGroup } from "@/shared/ui/radio-group";
import { RangeField } from "@/shared/ui/range-field";
import {
  AREA,
  HOUSING_OPTIONS,
  INITIAL_INPUT,
  REPAIR_OPTIONS,
  ROOMS_OPTIONS,
  calculate,
  formatDays,
} from "../../model/calculate";
import type { CalcInput } from "../../model/calculate";
import "./price-calculator.css";

export const PriceCalculator = () => {
  const [input, setInput] = useState<CalcInput>(INITIAL_INPUT);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const result = useMemo(() => calculate(input), [input]);

  const update = <K extends keyof CalcInput>(key: K, value: CalcInput[K]) =>
    setInput((current) => ({ ...current, [key]: value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isPhoneComplete(phone)) {
      setError("Введите номер телефона полностью");
      return;
    }

    setSent(true);
    setPhone("");
  };

  return (
    <form
      id="calculator"
      className="calculator"
      onSubmit={handleSubmit}
      noValidate
    >
      <h2 className="calculator-title">Рассчитайте стоимость ремонта</h2>

      <div className="calculator-fields">
        <RadioGroup
          legend="Вид ремонта:"
          layout="grid"
          options={REPAIR_OPTIONS}
          value={input.repair}
          onChange={(value) => update("repair", value)}
        />
        <RadioGroup
          legend="Тип вашей недвижимости:"
          options={HOUSING_OPTIONS}
          value={input.housing}
          onChange={(value) => update("housing", value)}
        />
        <RadioGroup
          legend="Количество комнат:"
          variant="chip"
          options={ROOMS_OPTIONS}
          value={input.rooms}
          onChange={(value) => update("rooms", value)}
        />
        <RangeField
          label="Площадь, м²:"
          min={AREA.min}
          max={AREA.max}
          value={input.area}
          onChange={(value) => update("area", value)}
        />
      </div>

      <dl className="calculator-result" aria-live="polite">
        <div className="calculator-result-total">
          <dt>Стоимость ремонта</dt>
          <dd>от {formatPrice(result.total)}</dd>
        </div>
        <div>
          <dt>Срок ремонта:</dt>
          <dd>{formatDays(result.days)}</dd>
        </div>
        <div>
          <dt>Скидка составит:</dt>
          <dd className="calculator-discount">
            {formatPrice(result.discount)}
          </dd>
        </div>
      </dl>

      <div className="calculator-order">
        {sent ? (
          <p className="calculator-success" role="status">
            Заявка отправлена. Мы перезвоним в течение 15 минут.
          </p>
        ) : (
          <div className="calculator-order-row">
            <PhoneField
              label="Введите номер телефона"
              value={phone}
              error={error}
              onChange={(value) => {
                setPhone(value);
                setError("");
              }}
            />
            <Button type="submit">Заказать</Button>
          </div>
        )}
      </div>
    </form>
  );
};
