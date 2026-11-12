import { useState } from "react";
import { cx } from "@/shared/lib/cx";
import { Icon } from "@/shared/ui/icon";
import { Section } from "@/shared/ui/section";
import { QUESTIONS } from "../../model/questions";
import "./faq.css";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      title="Вопросы и ответы"
      subtitle="Знаем, о чём вы думаете прямо сейчас."
    >
      <ul className="faq-list">
        {QUESTIONS.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <li
              key={item.question}
              className={cx("faq-item", isOpen && "faq-item-open")}
            >
              <h3>
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <Icon name={isOpen ? "minus" : "plus"} size={18} />
                  {item.question}
                </button>
              </h3>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="faq-answer-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
