import React from 'react';
import { useLanguage } from './translations/LanguageContext.jsx';

function Pricing() {
  const { t } = useLanguage();

  return (
    <section className='pricing_container row'>
      <section style={{ padding: '20px', width: "100%", height: "190px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <h2>{t.pricing.header}</h2>
        <div className="cards">
          <div className="card">
            <h3>{t.pricing.hourly}</h3>
            <p>{t.pricing.hourlyPrice}</p>
          </div>
          <div className="card">
            <h3>{t.pricing.party}</h3>
            <p>{t.pricing.partyPrice}</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Pricing;
