'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { awards, experience, plans, portfolio, posts, services, skills } from '@/data/home';

function Kicker({ children }) {
  return (
    <div className="kicker">
      <Image src="/assets/icons/sparkle.svg" width={10} height={10} alt="" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function ArrowIcon() {
  return <Image src="/assets/icons/arrow-up-right.svg" width={14} height={14} alt="" aria-hidden="true" />;
}

export default function HomePage() {
  const root = useRef(null);
  const [openService, setOpenService] = useState(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.nav-in', { y: -18, opacity: 0, duration: 0.65, ease: 'power3.out' });
      gsap.from('.hero-copy > *', {
        y: 26,
        opacity: 0,
        stagger: 0.07,
        duration: 0.72,
        ease: 'power3.out',
        delay: 0.08
      });
      gsap.from('.hero-visual', {
        x: -30,
        opacity: 0,
        scale: 0.98,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.12
      });

      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.from(element, {
          y: 34,
          opacity: 0,
          duration: 0.72,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 86%', once: true }
        });
      });

      gsap.utils.toArray('.stagger-grid').forEach((grid) => {
        gsap.from(grid.children, {
          y: 24,
          opacity: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: grid, start: 'top 84%', once: true }
        });
      });

      const marquee = document.querySelector('.marquee-track');
      if (marquee) {
        gsap.to(marquee, { xPercent: -50, duration: 20, repeat: -1, ease: 'none' });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root}>
      <header className="site-header nav-in">
        <a className="brand" href="#top" aria-label="Xiami home">
          <Image src="/assets/brand/xiami-mark.svg" width={24} height={24} alt="" />
          <strong>Xiami</strong>
        </a>
        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact Me</a>
        </nav>
        <a className="dark-pill" href="#contact">Hire Me <ArrowIcon /></a>
      </header>

      <section id="top" className="hero">
        <div className="hero-bg" />
        <div className="content-width hero-inner">
          <div className="hero-art">
            <Image
              className="hero-visual"
              src="/assets/images/hero-visual.png"
              width={1122}
              height={1402}
              priority
              sizes="(max-width: 900px) 86vw, 44vw"
              alt="Product designer portrait illustration"
            />
          </div>
          <div className="hero-copy">
            <Kicker>Hey There</Kicker>
            <h1>I&apos;m Rachel Davis<br />App <span>Designer</span></h1>
            <p>Product designer creating clear, attractive digital experiences for mobile apps, SaaS products and modern websites.</p>
            <div className="hero-actions">
              <a className="green-btn" href="#portfolio">Get Started <ArrowIcon /></a>
              <a className="play-link" href="#portfolio">
                <span className="play-button"><Image src="/assets/icons/play.svg" width={13} height={13} alt="" /></span>
                Showreel
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {[...Array(20)].map((_, index) => <span key={index}><b>✦</b>The Best Solution</span>)}
        </div>
      </div>

      <section id="about" className="section-pad about">
        <div className="content-width about-grid">
          <div className="about-copy reveal">
            <Kicker>About Me</Kicker>
            <h2>Solving Problems With<br /><span>Intuitive Design</span></h2>
            <p>I help ambitious products turn complex ideas into simple experiences by combining interface craft, user-centered thinking and practical product strategy.</p>
            <div className="stats-row">
              <div><strong>10+</strong><small>Years<br />Experience</small></div>
              <div><strong>10+</strong><small>Global<br />Awards</small></div>
            </div>
            <div className="about-actions">
              <a className="green-btn" href="#contact">About Me <ArrowIcon /></a>
              <span className="signature">Rachel Davis</span>
            </div>
          </div>
          <div className="about-art reveal">
            <Image
              src="/assets/images/about-visual.png"
              width={1122}
              height={1402}
              sizes="(max-width: 900px) 88vw, 44vw"
              alt="Happy customer illustration with ratings"
            />
          </div>
        </div>
      </section>

      <section id="services" className="section-pad dark-section services">
        <div className="content-width service-layout">
          <div className="services-head reveal">
            <Kicker>My Services</Kicker>
            <h2>The Ease-<span>Service</span> Process</h2>
          </div>
          <div className="service-list reveal">
            {services.map(([number, title, description], index) => (
              <button
                type="button"
                className={`service-row ${openService === index ? 'active' : ''}`}
                key={title}
                onClick={() => setOpenService(index)}
                aria-expanded={openService === index}
              >
                <span className="service-no">{number}</span>
                <span className="service-title">{title}</span>
                <span className="service-desc">{description}</span>
                <span className="service-arrow"><ArrowIcon /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-pad portfolio">
        <div className="content-width">
          <div className="section-title-row reveal">
            <div><Kicker>Project</Kicker><h2>My Featured <span>Portfolio</span></h2></div>
            <a className="green-btn small" href="#portfolio">View Projects <ArrowIcon /></a>
          </div>
          <div className="portfolio-grid stagger-grid">
            {portfolio.map(([image, category, title]) => (
              <article className="project-card" key={image}>
                <div className="project-image">
                  <Image src={image} width={1448} height={1086} sizes="(max-width: 720px) 100vw, 50vw" alt={title} />
                </div>
                <small>{category}</small>
                <div className="project-meta"><h3>{title}</h3><span><ArrowIcon /></span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad dark-section experience">
        <div className="content-width">
          <div className="center-title reveal"><Kicker>My Experience</Kicker><h2>My <span>Work</span> Experience</h2></div>
          <div className="experience-list reveal">
            {experience.map(([year, role, company]) => (
              <div className="experience-row" key={`${year}-${role}`}>
                <span>{year}</span><strong>{role}</strong><em>{company}</em>
              </div>
            ))}
          </div>
          <div className="skills-row stagger-grid">
            {skills.map(([icon, score, name]) => (
              <div className="skill" key={name}>
                <Image src={icon} width={38} height={38} alt="" />
                <strong>{score}</strong><span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad awards">
        <div className="content-width awards-grid">
          <div className="reveal"><Kicker>Awards</Kicker><h2><span>Awards</span> &amp; Recognition</h2></div>
          <div className="award-list stagger-grid">
            {awards.map(([icon, name, date], index) => (
              <div className="award-card" key={`${name}-${index}`}>
                <Image src={icon} width={30} height={30} alt="" />
                <div><strong>{name}</strong><small>{date}</small></div>
                <span className="award-laurel">❧</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pricing">
        <div className="content-width">
          <div className="center-title reveal"><Kicker>Best Pricing</Kicker><h2>My <span>Pricing</span> Plan</h2></div>
          <div className="pricing-grid stagger-grid">
            {plans.map((plan) => (
              <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                {plan.featured && <span className="popular">Most Popular</span>}
                <small>{plan.name}</small>
                <h3>{plan.price}<span>/project</span></h3>
                <p>{plan.desc}</p>
                <ul>{plan.features.map((feature) => <li key={feature}><Image src="/assets/icons/check.svg" width={13} height={13} alt="" />{feature}</li>)}</ul>
                <a href="#contact">Start Project <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad dark-section testimonials">
        <div className="content-width testimonial-grid">
          <div className="reveal">
            <Kicker>Testimonials</Kicker>
            <h2>Our Clients Awesome -<br /><span>Testimonials</span></h2>
            <div className="rating-big"><strong>4.8</strong><span>★★★★★</span><small>250+ reviews</small></div>
          </div>
          <div className="quote-card reveal">
            <div className="quote-author">
              <Image className="testimonial-avatar" src="/assets/images/testimonial-avatar.png" width={64} height={64} alt="Wilson Carey" />
              <div><strong>Wilson Carey</strong><small>Agency Founder</small></div>
            </div>
            <p>“Working together made the product feel much more focused. Every screen became easier to understand while still feeling premium and distinctive.”</p>
            <div className="quote-controls">← <span>•••</span> →</div>
          </div>
        </div>
      </section>

      <section id="blog" className="section-pad blog">
        <div className="content-width">
          <div className="center-title reveal"><Kicker>My Blog</Kicker><h2>Latest <span>Blog</span></h2></div>
          <div className="blog-grid stagger-grid">
            {posts.map(([image, meta, title]) => (
              <article className="blog-card" key={title}>
                <div className="blog-image"><Image src={image} width={1448} height={1086} sizes="(max-width: 720px) 100vw, 33vw" alt={title} /></div>
                <small>{meta}</small>
                <h3>{title}</h3>
                <a href="#blog" aria-label={`Read ${title}`}><ArrowIcon /></a>
              </article>
            ))}
          </div>
          <div className="blog-cta reveal"><a className="green-btn small" href="#blog">View All <ArrowIcon /></a></div>
        </div>
      </section>

      <footer id="contact" className="footer dark-section">
        <div className="content-width footer-grid">
          <div><h3>Services</h3><p>UI/UX design for apps, SaaS, landing pages and responsive product websites.</p><div className="social">Social: &nbsp; ◉ &nbsp; ◌ &nbsp; ◍ &nbsp; ×</div></div>
          <div><h3>Contact</h3><p>hello@racheldavis.design<br />+1 202 555 0148</p></div>
          <div><h3>Useful Links</h3><p>About Me<br />Articles<br />Portfolio<br />Blog</p></div>
          <div><h3>Services</h3><p>Web App Design<br />Mobile App<br />Web Design<br />UI/UX Design</p></div>
        </div>
        <div className="content-width footer-bottom">
          <span>Designed with <b>care</b></span>
          <a className="brand footer-brand" href="#top"><Image src="/assets/brand/xiami-mark.svg" width={21} height={21} alt="" /><strong>Xiami</strong></a>
          <span>Terms &amp; Conditions &nbsp; Privacy Policy</span>
        </div>
      </footer>
    </main>
  );
}
