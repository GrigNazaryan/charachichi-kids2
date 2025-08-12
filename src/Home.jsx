import { useLanguage } from "./translations/LanguageContext";

function Home() {
  const { t } = useLanguage()
  return (
    <section className="home_container row">
      <div style={{ padding: '20px', background: '#FFF8E7', height: '50vh', color: '#FF6F61', fontFamily: 'Comic Sans MS, cursive, sans-serif'}} >
        <h1>{t.home.title}</h1>
        <h2>{t.home.subtitle}</h2>
        <p>{t.home.description}</p>
        <p>{t.home.hours}</p>
        <p>{t.home.address}</p>
      </div>
    </section>
  );
}
export default Home