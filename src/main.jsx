import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const AMAZON_URL = "https://www.amazon.com/dp/B0H2D2QSWY";

const learningPoints = [
  {
    label: "Agent workflows",
    text: "Turn vague requests into repeatable AI-assisted workflows that move real work forward."
  },
  {
    label: "Delegation systems",
    text: "Learn how to brief agents, review outputs, and keep quality high without becoming technical."
  },
  {
    label: "Analysis acceleration",
    text: "Use AI to summarize data, surface patterns, draft insights, and pressure-test recommendations."
  },
  {
    label: "Automation habits",
    text: "Build a practical operating rhythm for reports, research, email, documentation, and decisions."
  }
];

const audiences = [
  "Analysts",
  "Operators",
  "Founders",
  "Marketers",
  "Consultants",
  "Business professionals"
];

const faqs = [
  {
    question: "Where can I buy the book?",
    answer:
      "The Kindle eBook is available now on Amazon. Use the Buy on Amazon button to open the live book page."
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Vibe Analyst is written for non-technical professionals who want practical systems for working with AI agents."
  },
  {
    question: "Will paperback and hardcover editions be available?",
    answer:
      "Paperback and hardcover formats are planned as future editions. This site will be updated as those formats become available."
  },
  {
    question: "Who should read this?",
    answer:
      "Anyone whose work involves analysis, writing, research, reporting, planning, or business decision-making and wants to produce more with AI."
  }
];

function App() {
  const ctaHref = AMAZON_URL;
  const ctaLabel = "Buy on Amazon";

  return (
    <main>
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Vibe Analyst home">
          <span className="brand-mark" aria-hidden="true">VA</span>
          <span>Vibe Analyst</span>
        </a>
        <div className="nav-links">
          <a href="#learn">What you will learn</a>
          <a href="#details">Details</a>
          <a href="#author">Author</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="network-bg" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Kindle eBook available now</p>
          <h1>Vibe Analyst</h1>
          <p className="subtitle">
            How Non-Technical Professionals Use AI Agents to Double Their Output
          </p>
          <p className="hero-text">
            A practical field guide for turning AI agents into everyday collaborators for analysis,
            research, reporting, strategy, and high-leverage business work.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={ctaHref}>
              {ctaLabel}
            </a>
            <a className="secondary-button" href="#learn">
              Explore the book
            </a>
          </div>
          <div className="quick-facts" aria-label="Book facts">
            <span>By Arjun Pardasani</span>
            <span>$11.00 USD</span>
            <span>AI agents for real work</span>
          </div>
        </div>

        <div className="book-showcase" aria-label="Vibe Analyst book cover">
          <div className="book-frame">
            <img src="/vibe-analyst-cover.jpg" alt="Vibe Analyst book cover" />
          </div>
          <div className="status-card">
            <span className="pulse" aria-hidden="true" />
            Now live on Amazon for Kindle readers.
          </div>
        </div>
      </section>

      <section className="promise section-band">
        <div>
          <p className="section-kicker">Reader promise</p>
          <h2>Stop treating AI like a chatbot. Start using it like a team.</h2>
        </div>
        <p>
          Vibe Analyst shows non-technical professionals how to structure work for AI agents,
          delegate with clarity, validate outputs, and turn scattered tasks into an operating
          system for better throughput.
        </p>
      </section>

      <section className="learn-section" id="learn">
        <div className="section-heading">
          <p className="section-kicker">Inside the book</p>
          <h2>What you will learn</h2>
        </div>
        <div className="learning-grid">
          {learningPoints.map((item) => (
            <article className="learning-card" key={item.label}>
              <div className="card-icon" aria-hidden="true">
                <span />
              </div>
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="audience section-band">
        <div>
          <p className="section-kicker">Built for</p>
          <h2>Professionals who need more output without more busywork.</h2>
        </div>
        <div className="audience-list">
          {audiences.map((audience) => (
            <span key={audience}>{audience}</span>
          ))}
        </div>
      </section>

      <section className="details" id="details">
        <div className="section-heading">
          <p className="section-kicker">Book details</p>
          <h2>Launch information</h2>
        </div>
        <div className="details-grid" id="availability">
          <article className="detail-panel active-format">
            <span className="format-label">Kindle eBook</span>
            <h3>$11.00 USD</h3>
            <p>Available now on Amazon. Open the live listing to buy the Kindle edition.</p>
          </article>
          <article className="detail-panel">
            <span className="format-label">Paperback</span>
            <h3>Planned</h3>
            <p>Print edition is planned as a future format expansion.</p>
          </article>
          <article className="detail-panel">
            <span className="format-label">Hardcover</span>
            <h3>Planned</h3>
            <p>A hardcover option is reserved for a later format expansion.</p>
          </article>
        </div>
      </section>

      <section className="author" id="author">
        <div className="author-card">
          <div className="author-initials" aria-hidden="true">AP</div>
          <div>
            <p className="section-kicker">Author</p>
            <h2>Arjun Pardasani</h2>
            <p>
              AI Educator and Founder of Vibe Analyst, focused on helping business professionals
              use AI agents for practical, high-output work.
            </p>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="section-heading">
          <p className="section-kicker">FAQ</p>
          <h2>Now available</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer>
        <p>Vibe Analyst by Arjun Pardasani</p>
        <a href={ctaHref}>{ctaLabel}</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
