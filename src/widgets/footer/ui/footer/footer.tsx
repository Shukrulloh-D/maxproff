import { useCallbackModal } from "@/features/callback-modal";
import { SITE } from "@/shared/config/site";
import { Icon } from "@/shared/ui/icon";
import { Logo } from "@/shared/ui/logo";
import { CtaStrip } from "../cta-strip/cta-strip";
import "./footer.css";

const SERVICES = [
  "Квартиры",
  "Коттеджи",
  "Торговые",
  "Офисы",
  "Инженерные системы",
  "Портфолио работ",
];

const PAGES = [
  { label: "Портфолио", href: "#works" },
  { label: "Стоимость", href: "#prices" },
  { label: "Акции", href: "#promo" },
  { label: "О компании", href: "#quality" },
  { label: "Статьи", href: "#youtube" },
  { label: "Контакты", href: "#contacts" },
];

const PAYMENTS = ["Visa", "Mastercard", "МИР"];

export const Footer = () => {
  const { open } = useCallbackModal();

  return (
    <>
      <CtaStrip />

      <footer id="contacts" className="footer">
        <div className="page-container footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p className="footer-payments-title">Любая форма оплаты</p>
            <ul className="footer-payments">
              {PAYMENTS.map((payment) => (
                <li key={payment}>{payment}</li>
              ))}
            </ul>
          </div>

          <nav aria-label="Услуги">
            <h2 className="footer-heading footer-heading-accent">
              Наши услуги
            </h2>
            <ul className="footer-links">
              {SERVICES.map((item) => (
                <li key={item}>
                  <a href="#prices">{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Разделы сайта">
            <h2 className="footer-heading">Разделы</h2>
            <ul className="footer-links">
              {PAGES.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <address className="footer-contacts">
            <a className="footer-phone" href={SITE.phoneHref}>
              <Icon name="phone" size={18} />
              {SITE.phone}
            </a>
            <p className="footer-hours">{SITE.workHours}</p>
            <button type="button" className="footer-callback" onClick={open}>
              Заказать звонок
            </button>
            <a className="footer-contact" href={`mailto:${SITE.email}`}>
              <Icon name="mail" size={16} />
              {SITE.email}
            </a>
            <p className="footer-contact">
              <Icon name="pin" size={16} />
              {SITE.address}
            </p>
          </address>
        </div>

        <div className="footer-bottom">
          <div className="page-container footer-bottom-inner">
            <p>
              © {new Date().getFullYear()} «{SITE.name}».{" "}
              <a
                href={SITE.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Политика конфиденциальности
              </a>
            </p>

            <ul className="footer-socials">
              {SITE.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={16} />
                  </a>
                </li>
              ))}
            </ul>

            <p className="footer-disclaimer">
              Сайт не является публичной офертой и носит информационный характер
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
