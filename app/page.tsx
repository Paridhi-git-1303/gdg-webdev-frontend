"use client";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
const faqs = [
  {
    question: "What is GDG RBU?",
    answer:
      "GDG RBU is focused on empowering students through hands-on workshops, tech talks, hackathons, and real-world project collaboration.",
  },
  {
    question: "How to join GDG?",
    answer:
      "You can join GDG RBU by participating in our events, workshops, and community activities. Follow our official announcements for membership opportunities.",
  },
  {
    question: "What does a GDG Lead do?",
    answer:
      "A GDG Lead helps build the community, organizes events, supports members, and encourages students to learn and collaborate on technology projects.",
  },
  {
    question: "How is GDG related to Google?",
    answer:
      "Google Developer Groups are community groups for developers interested in Google technologies and other developer tools. GDG RBU is a student community at RBU.",
  },
  {
    question: "How to reach us?",
    answer:
      "Follow our social media pages or attend our upcoming events to connect with the GDG RBU team.",
  },
];
function GoogleMark() {
  return <span className="google-mark" aria-label="Google">G</span>;
}
function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>;
}
type ChatMessage = { role: "assistant" | "user"; text: string };
function getHelpfulReply(question: string): string {
  const text = question.toLowerCase();
  if (text.includes("join") || text.includes("member")) return "You can get involved by following GDG RBU’s community channels and registering for an upcoming event. Beginners are welcome!";
  if (text.includes("event") || text.includes("workshop")) return "Check the Upcoming Events section for community sessions. Event dates will be shared here and through our social channels.";
  if (text.includes("beginner") || text.includes("start") || text.includes("learn")) return "Start with a workshop or study jam, ask questions, and build a small project with others. You do not need to be an expert to join.";
  if (text.includes("contact") || text.includes("reach") || text.includes("social")) return "You can reach the community through the Instagram, LinkedIn, and GitHub links in the footer.";
  if (text.includes("gdg") || text.includes("what is")) return "Google Developer Groups are community-led spaces where people learn about technology, share ideas, and build projects together.";
  return "I can help with joining GDG RBU, upcoming events, getting started as a beginner, or contacting the team. Try asking about one of those topics!";
}
function App() {
  const [dark, setDark] = useState(false);
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: "Hi! I’m the GDG RBU helper. Ask me about events, joining, or getting started." }
  ]);
  function askAssistant(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanQuestion = question.trim();
    if (!cleanQuestion) return;
    setMessages((oldMessages) => [
      ...oldMessages,
      { role: "user", text: cleanQuestion },
      { role: "assistant", text: getHelpfulReply(cleanQuestion) }
    ]);
    setQuestion("");
  }
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);
  return (
    <div className="site-shell">
      <div className="top-ribbon" aria-hidden="true">
        <span className="ribbon-triangle blue" /><span className="ribbon-dot yellow" />
        <span className="ribbon-pill red" /><span className="ribbon-triangle green" />
        <span className="ribbon-dot blue" /><span className="ribbon-pill yellow" />
      </div>
      <header className="header wrap">
        <a className="brand" href="#home" aria-label="GDG RBU home">
          <img
            className="gdg-logo"
            src="/assets/gdg-rbu-logo.png"
            alt="GDG RBU logo"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav
          className={menuOpen ? "nav nav-open" : "nav"}
          aria-label="Main navigation"
        >
          <a className="nav-link nav-home" href="#home"
            onClick={() => setMenuOpen(false)}>Home</a>
          <a className="nav-link nav-team" href="#team"
            onClick={() => setMenuOpen(false)}>Team</a>
          <a className="nav-link nav-events" href="#events"
            onClick={() => setMenuOpen(false)}>Events</a>
          <a className="nav-link nav-gallery" href="#gallery"
            onClick={() => setMenuOpen(false)}>Gallery</a>
          <a className="nav-link nav-portfolio" href="#portfolio"
            onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a className="nav-link nav-faqs" href="#faqs"
            onClick={() => setMenuOpen(false)}>FAQs</a>
          <div className="mobile-nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setDark(!dark)}
            >
              {dark ? "☀ Light mode" : "☾ Dark mode"}
            </button>
            <a
              className="profile-link"
              href="https://gdg.community.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="C:\Users\ASUS\Downloads\gdg-rbu-webdev-task\gdg-frontend-task\public\assets\gdg-image-person.jpg"
                alt="Profile"
                className="profile-photo"
              />
              <span>Paridhi</span>
            </a>
          </div>
        </nav>
        <div className="desktop-actions">
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
          >
            {dark ? "☀" : "☾"}
          </button>
          <a
            className="profile-link"
            href="https://gdg.community.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/profile.jpg"
              alt="Profile"
              className="profile-photo"
            />
            <span>Paridhi</span>
          </a>
        </div>
      </header>
      <main>
<section className="hero wrap" id="home">
  <div className="hero-copy reveal">
    <h1>
      Google Developer<br />
      Groups, <span className="outline-word">RBU</span>
    </h1>
    <p className="hero-description">
      Empowering students with cutting-edge tech skills, community and
      resources for a future in technology.
    </p>
    <div className="hero-actions">
      <a className="hero-card-button" href="#events">
        <span className="button-number"></span>
        <strong>LEARN MORE</strong>
      </a>
      <a className="hero-card-button" href="#team">
        <span className="button-number"></span>
        <strong>PROFILE</strong>
      </a>
    </div>
  </div>
  <div className="black-shape shape-one"></div>
  <div className="black-shape shape-two"></div>
</section>
<section className="upcoming-section" id="events">
  <h2 className="upcoming-title">Upcoming Event</h2>
  <div className="event-layout">
    
    <div className="event-main-card">
      <span className="event-category">GDG ORIENTATION</span>
      <span className="event-status">UPCOMING</span>
      <div className="event-main-content">
        <h3>GDG ORIENTATION</h3>
        <p>
          Google Developer Groups (GDG) – Student Chapter is a community
          of students passionate about technology, innovation, and learning.
          We bring students together to learn, build, and grow through
          technical workshops, hands-on sessions, hackathons, projects,
          and networking opportunities.
        </p>
      </div>
      <a className="event-arrow" href="#new-event" aria-label="View event">
        ↗
      </a>
    </div>
    <div className="event-register-card" id="new-event">
      <h3>
        New
        <br />
        Event
      </h3>
      <div className="event-divider"></div>
      <div className="event-date">
        <span>DATE &amp; TIME</span>
        <strong>Oct 7, 2026</strong>
        <strong>3:00 PM</strong>
      </div>
      <a
        className="event-register-button"
        href="https://gdg.community.dev/"
        target="_blank"
        rel="noreferrer"
      >
        Register Now
      </a>
    </div>
  </div>
</section>
        <section className="team-section wrap section-pad" id="team">
          <div className="team-panel">
            <div className="team-copy"><h2>Meet the<br />Google Developer<br />Group Team<span className="period">.</span></h2><p className="team-description">Google Developers Groups(GDG) are open and volunteer-run communities for developers interested in Google technologies. Our team focuses on learning, networking, and collaboration through events and hands-on sessions.</p>
              <ul className="team-values"><li><span>✓</span><div><b>Passionate Community Leaders</b><small>Our organizers build an inclusive environment where developers can connect, share knowledge and grow together</small></div></li><li><span>✓</span><div><b>Emowering Developers</b><small>We host meetups and codelabs to help developers stay current with modern tools and best practices.</small></div></li><li></li></ul>
            </div>
            <div className="team-photo-wrap"><img src="/assets/gdg-rbu-group.webp" alt="GDG RBU community group" className="team-photo" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling.style.display = "flex"; }} /><div className="team-photo-fallback"><strong>Add your GDG RBU group photo</strong><small>Save it as public/assets/gdg-rbu-group.jpg</small></div><div className="photo-label"><span>GDG RBU</span><span>COMMUNITY / 2026</span></div><div className="photo-stamp">WE<br />BUILD<br />TOGETHER</div></div>
          </div>
        </section>
        <section className="faq-section wrap section-pad" id="faqs">
          <h2 className="faq-title">FAQs</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={faq.question}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    {openFaq === index ? "⌃" : "⌄"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        
<footer className="gdg-footer">
  <div className="footer-logo">
    <img
            className="gdg-logo"
            src="/assets/gdg-rbu-logo.png"
            alt="GDG RBU logo"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
    <h2>Google Developer Groups</h2>
    <p>On Campus · Ramdeobaba University</p>
  </div>

  <div className="footer-divider"></div>

  <div className="footer-content">
    <div className="footer-info">
      <a
        className="footer-location"
        href="https://maps.google.com/?q=Ramdeobaba+University+Nagpur"
        target="_blank"
        rel="noreferrer"
      >
        <span>♧</span>
        <div>
          <strong>Ramdeobaba University</strong>
          <small>Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur-440013</small>
        </div>
      </a>

      <a className="footer-email" href="mailto:gdsc@rknec.edu">
        <span>✉</span>
        <strong>gdsc@rknec.edu</strong>
      </a>
    </div>

    <div className="footer-social">
      <h3>Follow Us:</h3>
      <div className="social-icons">
        <a
          className="social-icon instagram"
          href="https://www.instagram.com/gdgrbu/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          ◎
        </a>
        <a
          className="social-icon linkedin"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          in
        </a>
        <a
          className="social-icon x-social"
          href="https://x.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="X"
        >
          X
        </a>
      </div>
    </div>
  </div>
</footer>

      </main>
      <div className="bottom-ribbon" aria-hidden="true"><span className="ribbon-triangle green" /><span className="ribbon-pill yellow" /><span className="ribbon-dot red" /><span className="ribbon-triangle blue" /><span className="ribbon-pill green" /><span className="ribbon-dot yellow" /><span className="ribbon-triangle red" /><span className="ribbon-pill blue" /><span className="ribbon-dot green" /><span className="ribbon-triangle yellow" /><span className="ribbon-pill red" /></div>
      <div className="assistant-widget">
        {assistantOpen && <section className="assistant-panel" aria-label="GDG RBU helper">
          <div className="assistant-heading"><div><strong>GDG RBU Helper</strong><small>Quick community answers</small></div><button type="button" onClick={() => setAssistantOpen(false)} aria-label="Close helper">×</button></div>
          <div className="assistant-messages" aria-live="polite">{messages.map((message, index) => <p key={index} className={"assistant-message " + message.role}>{message.text}</p>)}</div>
          <form className="assistant-form" onSubmit={askAssistant}><input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask about events..." aria-label="Ask the GDG helper" /><button type="submit" aria-label="Send question">↗</button></form>
          <small className="assistant-note">Demo helper · answers are based on common GDG RBU questions.</small>
        </section>}
        <button className="assistant-launcher" type="button" onClick={() => setAssistantOpen(!assistantOpen)} aria-expanded={assistantOpen} aria-label="Open GDG RBU helper"><span>✳</span> Ask GDG</button>
      </div>
    </div>
  );
}
export default function HomePage() {
  return <App />;
}
