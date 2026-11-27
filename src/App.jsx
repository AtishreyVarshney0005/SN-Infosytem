import React, { useEffect, useState } from "react";
import equipmentOverviewImage from "../assets/1.jpeg";
import logoAsset from "../assets/logo.jpeg";
import gemLogoAsset from "../assets/gem-logo.webp";
import indiaMartLogoAsset from "../assets/indiamart-logo.webp";
import isoLogoAsset from "../assets/iso.webp";
import justdialLogoAsset from "../assets/justdial-logo.webp";
import msmeLogoAsset from "../assets/msme-logo.webp";
import eventKioskImage from "../assets/2.jpeg";
import eventTeamImage from "../assets/3.jpeg";
import macbookInventoryImage from "../assets/4.jpeg";
import refurbishedFleetImage from "../assets/5.jpeg";
import eventSetupImage from "../assets/6.jpeg";
import eventDisplayImage from "../assets/7.jpeg";
import conferenceSetupImage from "../assets/8.jpeg";
import laptopStockImage from "../assets/9.jpeg";
import laptopInventoryImage from "../assets/10.jpeg";
import teamLaptopFleetImage from "../assets/11.jpeg";
import teamDeviceSetupImage from "../assets/12.jpeg";
import bulkLaptopInventoryImage from "../assets/13.jpeg";
import warehouseLaptopsImage from "../assets/14.jpeg";
import rentalLaptopStockImage from "../assets/15.jpeg";
import desktopInventoryImage from "../assets/16.jpeg";
import carouselOneImage from "../assets/crousel1.png";
import carouselTwoImage from "../assets/crousel2.png";
import carouselThreeImage from "../assets/crousel3.png";
import carouselFourImage from "../assets/crousel4.png";

const whatsappNumber = "917862001700";
const contactEmail = "Hello@sninfosys.com";
const googleReviewUrl = "https://www.google.com/maps/place//data=!4m3!3m2!1s0x390ce3f64371429b:0x266f1d2579f448cb!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2";
const indiaMartUrl = "https://www.indiamart.com/sn-infosystems/";
const indiaMartProfileUrl = "https://www.indiamart.com/sninfosystems/profile.html";
const justdialUrl = "https://jsdl.in/DT-23S4SKXN";
const whatsappLink = (message = "Hi SN Infosystem, I'd like to know more about your products and services.") =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const footerLogos = [
  { name: "ISO", image: isoLogoAsset },
  { name: "MSME", image: msmeLogoAsset },
  { name: "GeM", image: gemLogoAsset },
  { name: "IndiaMART", image: indiaMartLogoAsset, href: indiaMartUrl },
  { name: "Justdial", image: justdialLogoAsset, href: justdialUrl },
];

const iconShapes = {
  laptop: (
    <>
      <rect x="5" y="5" width="14" height="11" rx="1.5" />
      <path d="M3 19h18l-1.5-2H4.5L3 19Z" />
    </>
  ),
  desktop: (
    <>
      <rect x="3.5" y="4" width="17" height="12" rx="1.5" />
      <path d="M12 16v4m-4 0h8" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" />
      <circle cx="12" cy="13.5" r="3.2" />
    </>
  ),
  printer: (
    <>
      <path d="M7 8V4h10v4m0 9h3v-7H4v7h3m0-3h10v6H7z" />
      <path d="M17 11h.01" />
    </>
  ),
  kiosk: (
    <>
      <rect x="6" y="3" width="12" height="13" rx="1.5" />
      <path d="M9 19h6m-3-3v3" />
    </>
  ),
  projector: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="16.5" cy="12" r="2.5" />
      <path d="M6.5 18v2m11-2v2" />
    </>
  ),
  display: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="1.5" />
      <path d="M12 17v3m-4 0h8" />
    </>
  ),
};

function Icon({ name, size = 25 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconShapes[name]}
    </svg>
  );
}

const services = [
  { icon: "laptop", title: "Refurbished laptops & PCs", description: "Quality-assured business laptops and computers at cost-effective prices." },
  { icon: "desktop", title: "Computer repair & maintenance", description: "Laptop and desktop diagnostics, repairs and dependable ongoing care." },
  { icon: "camera", title: "CCTV & security solutions", description: "Surveillance planning, installation and support for your workplace." },
  { icon: "display", title: "LED TV sales & installation", description: "LED TVs with professional installation and after-sales support." },
  { icon: "desktop", title: "Annual maintenance (AMC)", description: "Planned IT maintenance and reliable support for your business." },
  { icon: "printer", title: "Laptop, desktop & printer rentals", description: "Flexible rentals for teams, training sessions, offices and events." },
  { icon: "display", title: "IT infrastructure & networking", description: "Practical network setup and connected IT infrastructure for your team." },
  { icon: "kiosk", title: "Event & conference support", description: "Technical support for seminars, conferences, exhibitions and events." },
];

const reasons = [
  { title: "Quality-assured products", description: "Reliable equipment selected to meet your business and budget needs." },
  { title: "Experienced technical team", description: "Get practical advice and hands-on help from technology professionals." },
  { title: "Fast, dependable support", description: "Responsive assistance for repairs, installations, rentals and IT issues." },
  { title: "Cost-effective solutions", description: "Choose the right technology without paying for more than you need." },
  { title: "End-to-end IT services", description: "One partner for devices, repairs, security, networking and event support." },
];

const portfolioImages = [
  { src: equipmentOverviewImage, alt: "SN Infosystem rental products including laptops, computers, CCTV, printers and event technology", title: "Technology for every plan" },
  { src: eventTeamImage, alt: "Guests and self-service check-in kiosks at a conference", title: "Smooth event check-in" },
  { src: macbookInventoryImage, alt: "MacBook laptops arranged for a business device requirement", title: "Premium laptop options" },
  { src: refurbishedFleetImage, alt: "Rows of refurbished laptops prepared for business use", title: "Business laptop inventory" },
  { src: eventDisplayImage, alt: "Large LED event display with on-site technology support", title: "LED event experiences" },
  { src: conferenceSetupImage, alt: "Conference registration area equipped for attendee check-in", title: "Conference support" },
  { src: laptopInventoryImage, alt: "A range of business laptops ready for team requirements", title: "Laptops for growing teams" },
  { src: teamLaptopFleetImage, alt: "Black and silver laptops arranged for a team rental", title: "Flexible team rentals" },
  { src: teamDeviceSetupImage, alt: "Prepared laptops grouped for a business device rollout", title: "Ready-to-deploy devices" },
  { src: bulkLaptopInventoryImage, alt: "Large quantity of laptops organized for bulk requirements", title: "Bulk device rollouts" },
  { src: warehouseLaptopsImage, alt: "Laptop inventory organized in the SN Infosystem warehouse", title: "Rental fleet preparation" },
  { src: rentalLaptopStockImage, alt: "Business laptops selected and arranged for rental orders", title: "Rental-ready equipment" },
  { src: desktopInventoryImage, alt: "Business desktop computers organized for IT deployments", title: "Desktop IT solutions" },
];

const heroSlides = [
  { src: carouselOneImage, alt: "Promotional banner for desktop computer rentals across India", title: "Desktop rentals across India" },
  { src: carouselTwoImage, alt: "Promotional banner for laptops available to rent for business needs", title: "Laptop rentals for business" },
  { src: carouselThreeImage, alt: "Promotional banner for printers, plotters and scanners available for rent", title: "Printers and scanners for rent" },
  { src: carouselFourImage, alt: "Promotional banner for server rentals across India", title: "Server rentals across India" },
];

const steps = [
  { number: "01", title: "Tell us what you need", description: "Share your products, quantity, dates and location over WhatsApp." },
  { number: "02", title: "Get a clear quote", description: "We’ll help you choose the right setup and rental plan." },
  { number: "03", title: "Get set up", description: "Your equipment arrives ready for your team, event or project." },
];

const faqs = [
  {
    question: "What kind of equipment can I rent?",
    answer: "Ask us about laptops, desktops, printers, CCTV equipment, LED TVs and event technology. Share what you need, how many units and the dates.",
  },
  {
    question: "Can I rent equipment for an event?",
    answer: "Yes. Share your event date, venue, audience size and the equipment you have in mind, and our team can help plan a suitable setup.",
  },
  {
    question: "How do I get pricing and availability?",
    answer: "Message us on WhatsApp with the equipment, quantity, rental dates and delivery location. We’ll get back to you with availability and a quote.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const revealItems = [...document.querySelectorAll("[data-reveal]")];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const revealVisibleItems = () => {
      const revealThreshold = window.innerHeight * 0.92;
      revealItems.forEach((item) => {
        const bounds = item.getBoundingClientRect();
        if (bounds.top < revealThreshold && bounds.bottom > 0) {
          item.classList.add("is-visible");
        }
      });
    };

    revealVisibleItems();
    window.addEventListener("scroll", revealVisibleItems, { passive: true });
    window.addEventListener("resize", revealVisibleItems);
    return () => {
      window.removeEventListener("scroll", revealVisibleItems);
      window.removeEventListener("resize", revealVisibleItems);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const carouselTimer = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(carouselTimer);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const showHeroSlide = (index) => {
    setActiveHeroSlide((index + heroSlides.length) % heroSlides.length);
  };

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="SN Infosystem home" onClick={closeMenu}>
            <img src={logoAsset} alt="SN Infosystem" />
            <span>SN <strong>INFOSYSTEM</strong></span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            <div className="nav-links">
              <a href="#services" onClick={closeMenu}>What we offer</a>
              <a href="#how-it-works" onClick={closeMenu}>How it works</a>
              <a href="#work" onClick={closeMenu}>Our work</a>
              <a href="#faq" onClick={closeMenu}>FAQs</a>
            </div>
            <a className="nav-cta" href={whatsappLink("Hi SN Infosystem, I'd like to get a quote.")} target="_blank" rel="noreferrer">
              Get a quote <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero hero-carousel" id="home">
          <div className="hero-visual" data-reveal>
            <div className="visual-frame">
              <img
                key={heroSlides[activeHeroSlide].title}
                className="hero-slide"
                src={heroSlides[activeHeroSlide].src}
                alt={heroSlides[activeHeroSlide].alt}
              />
              <div className="slide-shade" />
              <div className="carousel-indicators" aria-label="Choose a slide">
                {heroSlides.map((slide, index) => (
                  <button
                    className={index === activeHeroSlide ? "carousel-indicator is-active" : "carousel-indicator"}
                    type="button"
                    aria-label={`Show slide ${index + 1}: ${slide.title}`}
                    aria-current={index === activeHeroSlide ? "true" : undefined}
                    onClick={() => showHeroSlide(index)}
                    key={slide.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="intro-strip" aria-label="Our services at a glance">
          <div className="container intro-strip-inner">
            <span>Complete IT solutions under one roof</span>
            <div><b>Businesses</b><i /> <b>Workplaces</b><i /> <b>Events</b><i /> <b>Exhibitions</b></div>
          </div>
        </section>

        <section className="section services-section container" id="services">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> COMPLETE IT SOLUTIONS</div>
              <h2>Everything tech.<br /><span>All under one roof.</span></h2>
            </div>
            <p>From sales and service to rentals, AMC and event support, find the right technology for your business.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <a
                className="service-card"
                data-reveal
                style={{ "--reveal-delay": `${(index % 4) * 70}ms` }}
                href={whatsappLink(`Hi SN Infosystem, I'm interested in ${service.title.toLowerCase()}.`)}
                target="_blank"
                rel="noreferrer"
                key={service.title}
              >
                <div className="service-card-top">
                  <span className="service-icon"><Icon name={service.icon} /></span>
                  <span className="card-index">0{index + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="card-link">Ask us about it <span aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>
        </section>

        <section className="trust-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span className="eyebrow-dot" /> WHY SN INFOSYSTEM</div>
                <h2>Reliable technology.<br /><span>People you can count on.</span></h2>
              </div>
              <p>We bring practical IT solutions, experienced technical support and a team that sees every job through.</p>
            </div>
            <div className="trust-grid">
              {reasons.map((reason, index) => (
                <article className="trust-card" data-reveal style={{ "--reveal-delay": `${index * 70}ms` }} key={reason.title}>
                  <span className="trust-number">0{index + 1}</span>
                  <span className="trust-check" aria-hidden="true">✓</span>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="container work-layout">
            <div className="work-copy" data-reveal>
              <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> BUILT AROUND YOUR MOMENT</div>
              <h2>Big ideas deserve<br />a <span>brilliant setup.</span></h2>
              <p>From business IT and on-site technical support to guest check-in and event displays, we bring the equipment and know-how to make your setup feel effortless.</p>
              <a className="button button-white" href={whatsappLink("Hi SN Infosystem, I'd like to plan an event or technology setup.")} target="_blank" rel="noreferrer">
                Plan your setup <span aria-hidden="true">↗</span>
              </a>
              <div className="work-footnote"><span>01 — 03</span> A glimpse of what we do</div>
            </div>
            <div className="work-gallery" data-reveal>
              <figure className="gallery-main">
                <img src={eventKioskImage} alt="Touchscreen self-service check-in kiosks set up for an event" loading="lazy" />
                <figcaption><span>EVENT TECHNOLOGY</span><strong>Check-in, made seamless.</strong></figcaption>
              </figure>
              <figure className="gallery-side gallery-event">
                <img src={eventSetupImage} alt="Technology and registration desk at an event" loading="lazy" />
                <figcaption>On-site event setups</figcaption>
              </figure>
              <figure className="gallery-side gallery-stock">
                <img src={laptopStockImage} alt="SN Infosystem laptop inventory ready for business and team rentals" loading="lazy" />
                <figcaption>Ready-to-rent laptops</figcaption>
              </figure>
              <div className="gallery-tag"><span>✳</span> YOUR IDEA, ALL SET</div>
            </div>
          </div>
          <div className="container portfolio-showcase">
            <div className="portfolio-heading" data-reveal>
              <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> A CLOSER LOOK</div>
              <h3>Technology for workdays,<br /><span>events and everything between.</span></h3>
              <p>A few more looks at our equipment, inventory and event setups.</p>
            </div>
            <div className="portfolio-grid">
              {portfolioImages.map((image, index) => (
                <figure
                  className="portfolio-card"
                  data-reveal
                  style={{ "--reveal-delay": `${(index % 4) * 60}ms` }}
                  key={image.title}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <figcaption>{image.title}<span>SN INFOSYSTEM</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section container" id="how-it-works">
          <div className="process-heading">
            <div className="eyebrow"><span className="eyebrow-dot" /> EASY FROM THE FIRST HELLO</div>
            <h2>Three steps.<br /><span>All sorted.</span></h2>
            <p>Skip the guesswork. We make it easy to go from “we need this” to ready to go.</p>
            <a className="text-link" href={whatsappLink()} target="_blank" rel="noreferrer">Start a conversation <span aria-hidden="true">↗</span></a>
          </div>
          <div className="steps-list">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
                <span className="step-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="container faq-layout">
            <div className="faq-intro">
              <div className="eyebrow"><span className="eyebrow-dot" /> THE QUICK ANSWERS</div>
              <h2>Good questions.<br /><span>Clear answers.</span></h2>
              <p>Have a different question? We’re just a message away.</p>
              <a className="text-link" href={whatsappLink("Hi SN Infosystem, I have a question.")} target="_blank" rel="noreferrer">Ask us on WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <article className={openFaq === index ? "faq-item is-open" : "faq-item"} key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={openFaq === index}
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    >
                      {faq.question}<span aria-hidden="true">{openFaq === index ? "−" : "+"}</span>
                    </button>
                  </h3>
                  {openFaq === index && <p>{faq.answer}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <div className="contact-card">
            <div className="contact-orbit orbit-one" />
            <div className="contact-orbit orbit-two" />
            <div className="contact-content">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> LET’S MAKE IT HAPPEN</div>
              <h2>Have a setup<br />in mind?</h2>
              <p>Tell us what you’re planning. We’ll help you figure out the right tech for it.</p>
              <a className="button button-white" href={whatsappLink("Hi SN Infosystem, I'd like to discuss a setup.")} target="_blank" rel="noreferrer">
                Message us on WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="contact-number">
              <span>CALL, EMAIL OR WHATSAPP</span>
              <a href="tel:+917862001700">+91 78620 01700</a>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
            <div className="contact-bubble" aria-hidden="true">SN</div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#home">
              <img src={logoAsset} alt="" />
              <span>SN <strong>INFOSYSTEM</strong></span>
            </a>
            <p>Powering businesses with reliable technology. Your complete partner for computers, repairs, security, rentals and event support.</p>
            <div className="footer-socials">
              <span className="footer-label">FOLLOW SN INFOSYSTEM</span>
              <div className="social-links">
                <a className="social-icon social-facebook" href="https://www.facebook.com/SnInfosystems/" target="_blank" rel="noreferrer" aria-label="Follow SN Infosystem on Facebook">
                  <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" /></svg>
                </a>
                <a className="social-icon social-instagram" href="https://www.instagram.com/sninfosystems" target="_blank" rel="noreferrer" aria-label="Follow SN Infosystem on Instagram">
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle className="social-dot" cx="17.7" cy="6.8" r="1" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-links footer-services">
            <span className="footer-label">OUR SERVICES</span>
            <div className="footer-service-grid">
              {services.map((service) => (
                <a href="#services" key={service.title}>{service.title}<span aria-hidden="true">↗</span></a>
              ))}
            </div>
          </div>
          <div className="footer-links footer-contact">
            <span className="footer-label">GET IN TOUCH</span>
            <a href="tel:+917862001700">+91 78620 01700</a>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <span className="footer-location">Sales · Service · Rentals · Support</span>
            <a className="footer-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer">Chat with our team <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="container footer-trust">
          <span className="footer-label">OUR CREDENTIALS</span>
          <div className="footer-badges">
            {footerLogos.map((item) => (
              item.href ? (
                <a className="footer-badge" href={item.href} key={item.name} target="_blank" rel="noreferrer" aria-label={`Visit SN Infosystem on ${item.name}`}>
                  <img src={item.image} alt={item.name} loading="lazy" />
                </a>
              ) : (
                <div className="footer-badge" key={item.name}>
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
              )
            ))}
          </div>
          <a className="footer-profile-link" href={indiaMartProfileUrl} target="_blank" rel="noreferrer">
            About us on IndiaMART <span aria-hidden="true">↗</span>
          </a>
          <a className="footer-review-link" href={googleReviewUrl} target="_blank" rel="noreferrer">
            <span>Google Reviews</span>
            <strong>Write a review <span aria-hidden="true">↗</span></strong>
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} SN Infosystem. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat with SN Infosystem on WhatsApp">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.1.55 4.15 1.6 5.96L.12 24l6.3-1.65a11.85 11.85 0 0 0 5.68 1.45h.01c6.54 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.47-8.44ZM12.1 21.77a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.87 9.87 0 0 1-1.52-5.26c0-5.46 4.44-9.9 9.91-9.9a9.83 9.83 0 0 1 7.01 2.91 9.84 9.84 0 0 1 2.9 7.01c0 5.47-4.44 9.91-9.91 9.91Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.5-.89-.79-1.5-1.76-1.67-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.09 4.48.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.18-1.42-.08-.13-.28-.2-.58-.35Z" />
        </svg>
      </a>
    </>
  );
}

export default App;
