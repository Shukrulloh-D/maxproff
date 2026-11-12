import { Advantages } from "@/widgets/advantages";
import { Faq } from "@/widgets/faq";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Masters } from "@/widgets/masters";
import { Pricing } from "@/widgets/pricing";
import { Process } from "@/widgets/process";
import { Promo } from "@/widgets/promo";
import { QualityControl } from "@/widgets/quality-control";
import { Reviews } from "@/widgets/reviews";
import { Suppliers } from "@/widgets/suppliers";
import { Team } from "@/widgets/team";
import { Warehouse } from "@/widgets/warehouse";
import { Works } from "@/widgets/works";
import { YouTube } from "@/widgets/youtube";

export const HomePage = () => (
  <>
    <a className="skip-link" href="#main">
      Перейти к содержимому
    </a>
    <Header />
    <main id="main">
      <Hero />
      <Pricing />
      <Works />
      <Promo />
      <Process />
      <Warehouse />
      <QualityControl />
      <Advantages />
      <Reviews />
      <Team />
      <Masters />
      <YouTube />
      <Suppliers />
      <Faq />
    </main>
    <Footer />
  </>
);
