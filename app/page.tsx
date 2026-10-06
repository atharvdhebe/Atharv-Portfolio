const projects = [
{
  number: "01",
  title: "WaterWise",
  subtitle: "Smart Water Consumption Prediction",
  description:
    "A web-based system that records household water usage, analyzes consumption patterns, and predicts daily water consumption using Machine Learning.",
  technologies: ["Python", "Random Forest", "PHP", "MySQL"],
  github: "https://github.com/atharvdhebe/WaterConsumptionProject",
},
]

const skills = [
  "Python",
  "C",
  "JavaScript",
  "PHP",
  "HTML",
  "CSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "MySQL",
  "Pandas",
  "NumPy",
  "Power BI",
  "DAX",
  "Git",
  "GitHub",
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}

      <nav className="navbar">
        <div className="nav-logo">AD.</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            ATHARV
            <br />
            <span>DHEBE</span>
          </h1>

          <p className="hero-role">
            MCA Student <span>•</span> Developer <span>•</span> Data Enthusiast
          </p>

          <p className="hero-description">
            I build web applications, explore data-driven solutions, and turn
            ideas into working digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary-button">
              View My Work
            </a>

            <a
              href="ATHARV_DHEBE_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary-button"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="profile-wrapper">
            <img
              src="/images/atharv_photo.jpeg"
              alt="Atharv Dhebe"
              className="profile-image"
            />
          </div>

          <div className="vertical-text">PORTFOLIO • 2026</div>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="section about-section">
        <div className="section-number">01</div>

        <div className="section-content">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Building with
            <br />
            <span>curiosity.</span>
          </h2>

          <p className="large-text">
            I'm an MCA student with a background in BBA-CA, interested in
            software development, data science, and emerging technologies.
          </p>

          <p>
            I enjoy building practical applications that combine programming,
            databases, and data-driven decision making. From web applications
            and machine-learning projects to IoT systems, I like learning by
            actually building things.
          </p>

          <p>
            I believe good technology is not just about writing code. It is
            about understanding a problem, designing a solution, and creating
            something useful.
          </p>
        </div>
      </section>

      {/* SKILLS */}

      <section id="skills" className="section skills-section">
        <div className="section-number">02</div>

        <div className="section-content">
          <p className="section-label">SKILLS & TECHNOLOGIES</p>

          <h2>
            Tools I use
            <br />
            <span>to build.</span>
          </h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects" className="section projects-section">
        <div className="section-number">03</div>

        <div className="section-content">
          <p className="section-label">SELECTED WORK</p>

          <h2>
            Things I've
            <br />
            <span>built.</span>
          </h2>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>

                <div className="project-main">
                  <p className="project-subtitle">{project.subtitle}</p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="technology-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
                {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    View on GitHub ↗
  </a>
)}

                <div className="project-arrow">↗</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}

      <section className="section education-section">
        <div className="section-number">04</div>

        <div className="section-content">
          <p className="section-label">EDUCATION</p>

          <h2>
            Learning
            <br />
            <span>continuously.</span>
          </h2>

          <div className="education-item">
            <div className="education-year">2025 — PRESENT</div>

            <div>
              <h3>Master of Computer Applications</h3>

              <p>PES Modern College of Engineering, Pune</p>

              <span>MCA</span>
            </div>
          </div>

          <div className="education-item">
            <div className="education-year">2025</div>

            <div>
              <h3>Bachelor of Business Administration</h3>

              <p>
                Brihan Maharashtra College of Commerce, Pune
              </p>

              <span>BBA — Computer Applications</span>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND CODE */}

      <section className="section beyond-section">
        <div className="section-number">05</div>

        <div className="section-content">
          <p className="section-label">BEYOND CODE</p>

          <h2>
            Technology is
            <br />
            <span>only one side.</span>
          </h2>

          <div className="beyond-grid">
            <div className="beyond-card">
              <span>01</span>
              <h3>Theatre</h3>
              <p>
                Stage lighting design and operation for performances and
                productions.
              </p>
            </div>

            <div className="beyond-card">
              <span>02</span>
              <h3>Live Production</h3>
              <p>
                Experience working with lighting and production for college
                performances and dance crews.
              </p>
            </div>

            <div className="beyond-card">
              <span>03</span>
              <h3>Writing</h3>
              <p>
                Poetry and creative writing in Marathi, Hindi, and Urdu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="contact-section">
        <p className="section-label">GET IN TOUCH</p>

        <h2>
          Let's build
          <br />
          <span>something.</span>
        </h2>

        <p>
          Have an opportunity, project, or simply want to connect?
        </p>

        <a
          href="mailto:your-email@example.com"
          className="contact-email"
        >
          atharvdhebe11@gmail.com
        </a>

     <div className="social-links">
  <a
    href="https://github.com/atharvdhebe"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/atharv-dhebe57ba60248"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn ↗
  </a>
</div>

        <footer>
          <span>© 2026 Atharv Dhebe</span>
          <span>Built with Next.js</span>
        </footer>
      </section>
    </main>
  );
}