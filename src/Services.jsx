import { useLanguage } from "./translations/LanguageContext";


function Services() {
    const { t } = useLanguage()
    const services = [
        { title: t.services.title1, desc: t.services.desc1 },
        { title: t.services.title2, desc: t.services.desc2 },
        { title: t.services.title3, desc: t.services.desc3 },
    ];
    return (
        <section className="row" style={{ padding: "20px 0px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", minHeight: "100vh", }} >
            <h2>{t.services.header}</h2>
            <div className="cards" style={{ width: "100%", height: "140px", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", }}>
                {services.map(({ title, desc }) => (
                    <div className="card" key={title} style={{ cursor: "pointer" }}>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services