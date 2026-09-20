'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { homeContent } from '@/data/home';

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

function TextLines({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <span key={`${item}-${index}`}>
          {item}
          {index < items.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

export default function HomePage() {
  const root = useRef(null);
  const [openService, setOpenService] = useState(0);

  const {
    brand,
    navigation,
    hero,
    marquee,
    about,
    services,
    portfolio,
    experience,
    awards,
    pricing,
    testimonials,
    blog,
    footer
  } = homeContent;

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

      const marqueeTrack = document.querySelector('.marquee-track');
      if (marqueeTrack) {
        gsap.to(marqueeTrack, { xPercent: -50, duration: 20, repeat: -1, ease: 'none' });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root}>
      <header className="site-header nav-in">
        <a className="brand" href="#top" aria-label={brand.homeAriaLabel}>
          <Image src="/assets/brand/xiami-mark.svg" width={24} height={24} alt="" />
          <strong>{brand.name}</strong>
        </a>
        <nav className="main-nav" aria-label={navigation.ariaLabel}>
          {navigation.links.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
        </nav>
        <a className="dark-pill" href="#contact">{navigation.cta} <ArrowIcon /></a>
      </header>

      <section id="top" className="hero">
        <div className="hero-bg" />
        <div className="content-width hero-inner">
          <div className="hero-art">
            <Image
              className="hero-visual"
              src={hero.image}
              width={1122}
              height={1402}
              priority
              sizes="(max-width: 900px) 86vw, 44vw"
              alt={hero.imageAlt}
            />
          </div>
          <div className="hero-copy">
            <Kicker>{hero.kicker}</Kicker>
            <h1>{hero.titleLine1}<br />{hero.titleLine2} <span>{hero.titleAccent}</span></h1>
            <p>{hero.description}</p>
            <div className="hero-actions">
              <a className="green-btn" href="#portfolio">{hero.primaryCta} <ArrowIcon /></a>
              <a className="play-link" href="#portfolio">
                <span className="play-button"><Image src="/assets/icons/play.svg" width={13} height={13} alt="" /></span>
                {hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {[...Array(marquee.repeat)].map((_, index) => <span key={index}><b>✦</b>{marquee.text}</span>)}
        </div>
      </div>

      <section id="about" className="section-pad about">
        <div className="content-width about-grid">
          <div className="about-copy reveal">
            <Kicker>{about.kicker}</Kicker>
            <h2>{about.titleLine1}<br /><span>{about.titleAccent}</span></h2>
            <p>{about.description}</p>
            <div className="stats-row">
              {about.stats.map((stat) => (
                <div key={`${stat.value}-${stat.labelLine1}`}>
                  <strong>{stat.value}</strong>
                  <small>{stat.labelLine1}<br />{stat.labelLine2}</small>
                </div>
              ))}
            </div>
            <div className="about-actions">
              <a className="green-btn" href="#contact">{about.cta} <ArrowIcon /></a>
              <span className="signature">{about.signature}</span>
            </div>
          </div>
          <div className="about-art reveal">
            <Image
              src={about.image}
              width={1122}
              height={1402}
              sizes="(max-width: 900px) 88vw, 44vw"
              alt={about.imageAlt}
            />
          </div>
        </div>
      </section>

      <section id="services" className="section-pad dark-section services">
        <div className="content-width service-layout">
          <div className="services-head reveal">
            <Kicker>{services.kicker}</Kicker>
            <h2>{services.titleBeforeAccent}<span>{services.titleAccent}</span>{services.titleAfterAccent}</h2>
          </div>
          <div className="service-list reveal">
            {services.items.map((service, index) => (
              <button
                type="button"
                className={`service-row ${openService === index ? 'active' : ''}`}
                key={service.title}
                onClick={() => setOpenService(index)}
                aria-expanded={openService === index}
              >
                <span className="service-no">{service.number}</span>
                <span className="service-title">{service.title}</span>
                <span className="service-desc">{service.description}</span>
                <span className="service-arrow"><ArrowIcon /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-pad portfolio">
        <div className="content-width">
          <div className="section-title-row reveal">
            <div><Kicker>{portfolio.kicker}</Kicker><h2>{portfolio.titleBeforeAccent}<span>{portfolio.titleAccent}</span></h2></div>
            <a className="green-btn small" href="#portfolio">{portfolio.viewAllCta} <ArrowIcon /></a>
          </div>
          <div className="portfolio-grid stagger-grid">
            {portfolio.items.map((project) => (
              <article className="project-card" key={project.image}>
                <div className="project-image">
                  <Image src={project.image} width={1448} height={1086} sizes="(max-width: 720px) 100vw, 50vw" alt={project.title} />
                </div>
                <small>{project.category}</small>
                <div className="project-meta"><h3>{project.title}</h3><span><ArrowIcon /></span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad dark-section experience">
        <div className="content-width">
          <div className="center-title reveal">
            <Kicker>{experience.kicker}</Kicker>
            <h2>{experience.titleBeforeAccent}<span>{experience.titleAccent}</span>{experience.titleAfterAccent}</h2>
          </div>
          <div className="experience-list reveal">
            {experience.items.map((item) => (
              <div className="experience-row" key={`${item.year}-${item.role}`}>
                <span>{item.year}</span><strong>{item.role}</strong><em>{item.company}</em>
              </div>
            ))}
          </div>
          <div className="skills-row stagger-grid">
            {experience.skills.map((skill) => (
              <div className="skill" key={skill.name}>
                <Image src={skill.icon} width={38} height={38} alt="" />
                <strong>{skill.score}</strong><span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad awards">
        <div className="content-width awards-grid">
          <div className="reveal"><Kicker>{awards.kicker}</Kicker><h2><span>{awards.titleAccent}</span>{awards.titleAfterAccent}</h2></div>
          <div className="award-list stagger-grid">
            {awards.items.map((award, index) => (
              <div className="award-card" key={`${award.name}-${index}`}>
                <Image src={award.icon} width={30} height={30} alt="" />
                <div><strong>{award.name}</strong><small>{award.date}</small></div>
                <span className="award-laurel">❧</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pricing">
        <div className="content-width">
          <div className="center-title reveal">
            <Kicker>{pricing.kicker}</Kicker>
            <h2>{pricing.titleBeforeAccent}<span>{pricing.titleAccent}</span>{pricing.titleAfterAccent}</h2>
          </div>
          <div className="pricing-grid stagger-grid">
            {pricing.plans.map((plan) => (
              <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                {plan.featured && <span className="popular">{pricing.featuredLabel}</span>}
                <small>{plan.name}</small>
                <h3>{plan.price}<span>{pricing.priceSuffix}</span></h3>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}><Image src="/assets/icons/check.svg" width={13} height={13} alt="" />{feature}</li>
                  ))}
                </ul>
                <a href="#contact">{pricing.cta} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad dark-section testimonials">
        <div className="content-width testimonial-grid">
          <div className="reveal">
            <Kicker>{testimonials.kicker}</Kicker>
            <h2>{testimonials.titleLine1}<br /><span>{testimonials.titleAccent}</span></h2>
            <div className="rating-big">
              <strong>{testimonials.rating}</strong>
              <span>{testimonials.stars}</span>
              <small>{testimonials.reviews}</small>
            </div>
          </div>
          <div className="quote-card reveal">
            <div className="quote-author">
              <Image className="testimonial-avatar" src={testimonials.avatar} width={64} height={64} alt={testimonials.avatarAlt} />
              <div><strong>{testimonials.clientName}</strong><small>{testimonials.clientRole}</small></div>
            </div>
            <p>{testimonials.quote}</p>
            <div className="quote-controls">← <span>•••</span> →</div>
          </div>
        </div>
      </section>

      <section id="blog" className="section-pad blog">
        <div className="content-width">
          <div className="center-title reveal">
            <Kicker>{blog.kicker}</Kicker>
            <h2>{blog.titleBeforeAccent}<span>{blog.titleAccent}</span></h2>
          </div>
          <div className="blog-grid stagger-grid">
            {blog.posts.map((post) => (
              <article className="blog-card" key={post.title}>
                <div className="blog-image">
                  <Image src={post.image} width={1448} height={1086} sizes="(max-width: 720px) 100vw, 33vw" alt={post.title} />
                </div>
                <small>{post.meta}</small>
                <h3>{post.title}</h3>
                <a href="#blog" aria-label={`${blog.readAriaPrefix} ${post.title}`}><ArrowIcon /></a>
              </article>
            ))}
          </div>
          <div className="blog-cta reveal"><a className="green-btn small" href="#blog">{blog.viewAllCta} <ArrowIcon /></a></div>
        </div>
      </section>

      <footer id="contact" className="footer dark-section">
        <div className="content-width footer-grid">
          <div>
            <h3>{footer.serviceIntro.title}</h3>
            <p>{footer.serviceIntro.text}</p>
            <div className="social">{footer.serviceIntro.socialText}</div>
          </div>
          <div>
            <h3>{footer.contact.title}</h3>
            <p>{footer.contact.email}<br />{footer.contact.phone}</p>
          </div>
          <div>
            <h3>{footer.usefulLinks.title}</h3>
            <p><TextLines items={footer.usefulLinks.items} /></p>
          </div>
          <div>
            <h3>{footer.servicesList.title}</h3>
            <p><TextLines items={footer.servicesList.items} /></p>
          </div>
        </div>
        <div className="content-width footer-bottom">
          <span>{footer.bottomLeftBeforeAccent}<b>{footer.bottomLeftAccent}</b></span>
          <a className="brand footer-brand" href="#top"><Image src="/assets/brand/xiami-mark.svg" width={21} height={21} alt="" /><strong>{brand.name}</strong></a>
          <span>{footer.legalText}</span>
        </div>
      </footer>
    </main>
  );
}
