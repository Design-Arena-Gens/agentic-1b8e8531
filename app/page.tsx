import Link from 'next/link';

type Experience = {
  company: string;
  role: string;
  timeframe: string;
  summary: string;
  achievements: string[];
  tools: string[];
};

type Project = {
  name: string;
  description: string;
  impact: string;
  tech: string[];
  link?: {
    label: string;
    href: string;
  };
};

const experiences: Experience[] = [
  {
    company: 'Acme Tech',
    role: 'Senior Software Engineer',
    timeframe: '2021 – Present',
    summary:
      'Leading the development of scalable web applications with a focus on developer experience and product velocity.',
    achievements: [
      'Architected a modular design system that reduced UI build time by 40%',
      'Introduced automated testing that cut production bugs by 55%',
      'Mentored a team of six engineers through complex cross-functional projects'
    ],
    tools: ['TypeScript', 'Next.js', 'Node.js', 'GraphQL', 'Playwright']
  },
  {
    company: 'Brightline Labs',
    role: 'Full-Stack Engineer',
    timeframe: '2017 – 2021',
    summary:
      'Delivered end-to-end features across product analytics and collaboration experiences for SaaS customers.',
    achievements: [
      'Implemented feature flag rollout tooling supporting 5k+ daily experiments',
      'Optimized API response times by 35% through query refactoring and caching',
      'Collaborated with product and design to launch integrations with top partners'
    ],
    tools: ['React', 'Redux', 'Ruby on Rails', 'PostgreSQL', 'Kubernetes']
  }
];

const projects: Project[] = [
  {
    name: 'LaunchPad Analytics',
    description:
      'Self-serve analytics dashboard enabling product teams to measure adoption in real-time.',
    impact: 'Adopted company-wide and drives quarterly product planning decisions.',
    tech: ['Next.js', 'tRPC', 'Prisma', 'Tailwind CSS'],
    link: {
      label: 'Case Study',
      href: 'https://example.com/launchpad'
    }
  },
  {
    name: 'OpsGuard',
    description:
      'Incident management workflow that unifies alerts, on-call scheduling, and runbooks.',
    impact: 'Reduced average time to resolution by 28% across 30+ engineering teams.',
    tech: ['React', 'Go', 'gRPC', 'Terraform']
  }
];

const skills = {
  languages: ['TypeScript', 'JavaScript', 'Go', 'Ruby', 'SQL'],
  frameworks: ['Next.js', 'React', 'Node.js', 'GraphQL', 'Tailwind CSS'],
  platforms: ['AWS', 'Vercel', 'Kubernetes', 'PostgreSQL', 'Redis'],
  practices: ['System Design', 'CI/CD', 'Design Systems', 'Accessibility']
};

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-14">
      <header className="flex flex-col gap-6 border-b border-slate-800 pb-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Your Name
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Senior Software Engineer blending product thinking with technical
            execution to ship resilient, user-centric web experiences.
          </p>
        </div>

        <dl className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
          <div>
            <dt className="uppercase tracking-wide text-slate-500">Location</dt>
            <dd>San Francisco, CA (Remote Friendly)</dd>
          </div>
          <div>
            <dt className="uppercase tracking-wide text-slate-500">Email</dt>
            <dd>
              <Link
                href="mailto:you@example.com"
                className="text-accent-light hover:text-accent"
              >
                you@example.com
              </Link>
            </dd>
          </div>
          <div>
            <dt className="uppercase tracking-wide text-slate-500">Portfolio</dt>
            <dd>
              <Link
                href="https://yourportfolio.com"
                className="text-accent-light hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                yourportfolio.com
              </Link>
            </dd>
          </div>
        </dl>
      </header>

      <section className="grid gap-5">
        <h2 className="text-xl font-semibold uppercase tracking-[0.25em] text-slate-400">
          Experience
        </h2>
        <div className="grid gap-10">
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-[0_20px_60px_-40px_rgba(15,118,110,0.7)]"
            >
              <header className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {experience.role}
                  </h3>
                  <p className="text-sm uppercase tracking-wide text-accent-light">
                    {experience.company}
                  </p>
                </div>
                <span className="text-sm text-slate-400">
                  {experience.timeframe}
                </span>
              </header>

              <p className="text-sm text-slate-300">{experience.summary}</p>

              <ul className="grid gap-2 text-sm text-slate-200">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-light" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs uppercase tracking-wide text-accent-light"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5">
        <h2 className="text-xl font-semibold uppercase tracking-[0.25em] text-slate-400">
          Selected Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex h-full flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
            >
              <header className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-300">{project.description}</p>
                </div>
                {project.link ? (
                  <Link
                    href={project.link.href}
                    className="text-xs uppercase tracking-wide text-accent-light underline underline-offset-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.link.label}
                  </Link>
                ) : null}
              </header>
              <p className="text-sm text-slate-200">{project.impact}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs uppercase tracking-wide text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5">
        <h2 className="text-xl font-semibold uppercase tracking-[0.25em] text-slate-400">
          Skills
        </h2>
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:grid-cols-2">
          <div className="grid gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              Languages
            </h3>
            <p className="text-sm text-slate-300">{skills.languages.join(', ')}</p>
          </div>
          <div className="grid gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              Frameworks
            </h3>
            <p className="text-sm text-slate-300">
              {skills.frameworks.join(', ')}
            </p>
          </div>
          <div className="grid gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              Platforms
            </h3>
            <p className="text-sm text-slate-300">{skills.platforms.join(', ')}</p>
          </div>
          <div className="grid gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              Practices
            </h3>
            <p className="text-sm text-slate-300">{skills.practices.join(', ')}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-5">
        <h2 className="text-xl font-semibold uppercase tracking-[0.25em] text-slate-400">
          Education & Certifications
        </h2>
        <div className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <div>
            <h3 className="text-lg font-semibold text-white">
              B.S. Computer Science
            </h3>
            <p className="text-sm text-slate-300">
              University of Innovation · 2013 – 2017
            </p>
          </div>
          <ul className="grid gap-2 text-sm text-slate-300">
            <li>Machine Learning Specialization, Coursera</li>
            <li>AWS Certified Solutions Architect – Associate</li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-slate-800 pt-8 text-xs text-slate-500">
        Updated April 2024 · Available for select advisory engagements
      </footer>
    </main>
  );
}
