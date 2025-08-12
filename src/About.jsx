import { useLanguage } from "./translations/LanguageContext";


function About() {
  const { t } = useLanguage()

  return (
    <section style={{padding:"60px"}} className="row">
      <h2>{t.about.header}</h2>
      <p>{t.about.content}</p>
      <p>{t.about.content2}</p>
    </section>
  );
}

export default About