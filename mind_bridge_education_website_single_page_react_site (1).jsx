import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  Handshake,
  HeartHandshake,
  LineChart,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

/**
 * MindBridge Education — single-page marketing site
 * - Uses Tailwind
 * - Uses lucide-react icons
 * - Designed to be dropped into a Next.js or Vite + React project
 *
 * LOGO SETUP:
 * 1) Save your provided logo as: /public/mindbridge-logo.png
 * 2) Keep the <img src="/mindbridge-logo.png" ... /> below as-is
 */

const BRAND = {
  blue: "#0C4C8A", // deep blue
  green: "#3FAE49", // green
  magenta: "#C23B8E", // magenta
};

const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Pill = ({ icon: Icon, label }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm backdrop-blur">
    <Icon className="h-4 w-4" />
    {label}
  </span>
);

const SectionTitle = ({ eyebrow, title, desc }) => (
  <div className="mx-auto max-w-2xl text-center">
    {eyebrow ? (
      <p className="text-sm font-semibold tracking-wide" style={{ color: BRAND.magenta }}>
        {eyebrow}
      </p>
    ) : null}
    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
      {title}
    </h2>
    {desc ? <p className="mt-3 text-base text-slate-600">{desc}</p> : null}
  </div>
);

const Card = ({ icon: Icon, title, children, accent = "blue" }) => {
  const accentColor =
    accent === "green" ? BRAND.green : accent === "magenta" ? BRAND.magenta : BRAND.blue;
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div
        className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-10 blur-2xl"
        style={{ backgroundColor: accentColor }}
      />
      <div className="flex items-start gap-4">
        <div
          className="grid h-11 w-11 place-items-center rounded-xl"
          style={{ backgroundColor: `${accentColor}18` }}
        >
          <Icon className="h-5 w-5" style={{ color: accentColor }} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <div className="mt-2 text-sm leading-6 text-slate-600">{children}</div>
        </div>
      </div>
      <div
        className="mt-5 h-[2px] w-full rounded-full opacity-60"
        style={{
          background: `linear-gradient(90deg, ${BRAND.blue}, ${BRAND.magenta}, ${BRAND.green})`,
        }}
      />
    </div>
  );
};

const GradientText = ({ children }) => (
  <span
    className="bg-clip-text text-transparent"
    style={{
      backgroundImage: `linear-gradient(90deg, ${BRAND.blue}, ${BRAND.magenta}, ${BRAND.green})`,
    }}
  >
    {children}
  </span>
);

const Wave = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 1440 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M0 120C180 40 360 40 540 120C720 200 900 200 1080 120C1260 40 1380 40 1440 80V200H0V120Z"
      fill="url(#g)"
      opacity="0.18"
    />
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor={BRAND.blue} />
        <stop offset="0.5" stopColor={BRAND.magenta} />
        <stop offset="1" stopColor={BRAND.green} />
      </linearGradient>
    </defs>
  </svg>
);

const Nav = ({ onJump }) => {
  const links = [
    { id: "services", label: "Services" },
    { id: "approach", label: "Our Approach" },
    { id: "training", label: "Training" },
    { id: "resources", label: "Resources" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <img
              src="/mindbridge-logo.png"
              alt="MindBridge Education logo"
              className="h-10 w-10 rounded-lg object-contain"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-slate-900">MindBridge Education</p>
              <p className="text-xs" style={{ color: BRAND.green }}>
                Educate~Elevate~Thrive
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => onJump(l.id)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => onJump("contact")}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm"
            style={{ backgroundColor: BRAND.blue }}
          >
            Book a Consult <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </Container>
    </div>
  );
};

const Hero = ({ onJump }) => (
  <div className="relative overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(1000px 500px at 20% 10%, rgba(12,76,138,0.20), transparent 60%), radial-gradient(900px 500px at 80% 20%, rgba(194,59,142,0.18), transparent 55%), radial-gradient(900px 500px at 60% 90%, rgba(63,174,73,0.18), transparent 55%)",
      }}
    />

    <Container>
      <div className="relative grid gap-10 py-14 lg:grid-cols-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="flex flex-wrap gap-2">
            <Pill icon={ShieldCheck} label="Trauma-informed" />
            <Pill icon={Users} label="Student-centered" />
            <Pill icon={LineChart} label="Data-driven" />
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Bridging learning, leadership, and outcomes —
            <span className="block">
              with <GradientText>educational services</GradientText> that stick.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            MindBridge Education partners with schools, districts, and organizations to strengthen
            systems, build capacity, and support students — especially those facing barriers.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => onJump("services")}
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm"
              style={{ backgroundColor: BRAND.blue }}
            >
              Explore Services <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onJump("training")}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              View Trainings <Sparkles className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { k: "Leadership", v: "Development" },
              { k: "School", v: "Consulting" },
              { k: "Grant", v: "Writing" },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur"
              >
                <p className="text-xs font-semibold" style={{ color: BRAND.magenta }}>
                  {x.k}
                </p>
                <p className="mt-1 text-base font-semibold text-slate-900">{x.v}</p>
                <div
                  className="mt-3 h-1 w-12 rounded-full"
                  style={{ backgroundColor: BRAND.green }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "linear-gradient(135deg, rgba(12,76,138,0.12), rgba(194,59,142,0.10), rgba(63,174,73,0.10))",
              }}
            />
            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">What we help you build</p>
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ backgroundColor: BRAND.magenta }}
                >
                  Systems + Skills
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                {[
                  {
                    icon: GraduationCap,
                    title: "Capacity-building PD",
                    desc: "Practical strategies educators can use tomorrow.",
                    accent: "blue",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Restorative & reintegration",
                    desc: "Support students returning from suspension/expulsion.",
                    accent: "green",
                  },
                  {
                    icon: ClipboardCheck,
                    title: "Grant strategy + writing",
                    desc: "From needs assessment to award-ready narratives.",
                    accent: "magenta",
                  },
                ].map((c) => (
                  <Card key={c.title} icon={c.icon} title={c.title} accent={c.accent}>
                    {c.desc}
                  </Card>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">Quick contact</p>
                <div className="mt-3 grid gap-2 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" style={{ color: BRAND.blue }} />
                    info@mindbridgeeducation.com
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" style={{ color: BRAND.green }} />
                    (000) 000-0000
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" style={{ color: BRAND.magenta }} />
                    Your City, State
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>

    <Wave className="absolute bottom-0 left-0 right-0" />
  </div>
);

const Services = () => (
  <div id="services" className="py-16 sm:py-20">
    <Container>
      <SectionTitle
        eyebrow="Services"
        title="Educational products and services built for real-world needs"
        desc="Consulting and capacity-building that strengthens systems, supports educators, and improves outcomes for students."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card icon={Handshake} title="Organizational Development" accent="blue">
          Leadership coaching, team alignment, and implementation supports that move plans into
          practice.
        </Card>
        <Card icon={Users} title="Leadership Development" accent="magenta">
          Training and coaching for administrators, teacher leaders, and student support teams.
        </Card>
        <Card icon={BookOpen} title="Instructional & Student Supports" accent="green">
          Strategies for engagement, behavior support, and equitable learning environments.
        </Card>
        <Card icon={HeartHandshake} title="Restorative Practices" accent="green">
          Circles, conferences, and relationship-centered responses to harm.
        </Card>
        <Card icon={ShieldCheck} title="Reintegration Systems" accent="blue">
          Practical protocols for students returning from suspension, in-school suspension, or
          expulsion.
        </Card>
        <Card icon={ClipboardCheck} title="Consulting & Grant Writing" accent="magenta">
          Needs assessment, program design, evidence alignment, budgets, and full narrative writing.
        </Card>
      </div>
    </Container>
  </div>
);

const Approach = () => (
  <div id="approach" className="py-16 sm:py-20" style={{ backgroundColor: "#F8FAFC" }}>
    <Container>
      <SectionTitle
        eyebrow="Our Approach"
        title="Practical, restorative, and data-informed"
        desc="We blend strong systems, skill-building, and relationship-centered practices — especially for students who are vulnerable or experiencing behavioral challenges."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">How we partner</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: BRAND.blue }} />
                <span>
                  <span className="font-semibold">Listen first:</span> Walkthroughs, interviews, and
                  data review to understand the real problem.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: BRAND.magenta }} />
                <span>
                  <span className="font-semibold">Design for implementation:</span> Clear roles,
                  routines, and tools staff can sustain.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: BRAND.green }} />
                <span>
                  <span className="font-semibold">Coach & calibrate:</span> Side-by-side support,
                  feedback loops, and continuous improvement.
                </span>
              </li>
            </ul>

            <div
              className="mt-6 rounded-2xl p-4 text-sm text-slate-800"
              style={{
                background:
                  "linear-gradient(135deg, rgba(12,76,138,0.10), rgba(194,59,142,0.08), rgba(63,174,73,0.08))",
              }}
            >
              <p className="font-semibold">Signature tools you can include</p>
              <p className="mt-1 text-slate-700">
                STARR Strategy • Restorative Conversations • Reintegration Protocols • Staff
                Role-Plays • Student-Facing Scripts • Checklists & Tracking
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">What success looks like</h3>
            <div className="mt-5 grid gap-4">
              {[
                { label: "Fewer repeat incidents", value: "↓" },
                { label: "More instructional time", value: "↑" },
                { label: "Stronger adult-student relationships", value: "↑" },
                { label: "Clear, consistent processes", value: "✓" },
              ].map((r, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                  <span className="text-sm font-medium text-slate-800">{r.label}</span>
                  <span
                    className="grid h-9 w-9 place-items-center rounded-xl text-sm font-bold text-white"
                    style={{
                      backgroundColor:
                        idx % 3 === 0 ? BRAND.blue : idx % 3 === 1 ? BRAND.magenta : BRAND.green,
                    }}
                  >
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

const Training = () => (
  <div id="training" className="py-16 sm:py-20">
    <Container>
      <SectionTitle
        eyebrow="Professional Learning"
        title="Trainings educators actually use"
        desc="Interactive sessions with tools, scripts, and implementation plans — designed for both elementary and secondary contexts."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card icon={ShieldCheck} title="STARR Strategy" accent="blue">
          De-escalation and reflection routines that build self-regulation and accountability.
        </Card>
        <Card icon={HeartHandshake} title="Restorative Practices" accent="green">
          Circles, conferences, and repair-focused conversations.
        </Card>
        <Card icon={Users} title="Reintegration Systems" accent="magenta">
          Protocols, checklists, and role-plays for successful student re-entry.
        </Card>
        <Card icon={LineChart} title="Data & Discipline Review" accent="blue">
          Identify patterns, disproportionality, and high-leverage intervention points.
        </Card>
        <Card icon={GraduationCap} title="Leadership for Student Support" accent="magenta">
          Build functioning teams (MTSS/PBIS), clear roles, and sustainable routines.
        </Card>
        <Card icon={ClipboardCheck} title="Grant Readiness Workshop" accent="green">
          Align needs, evidence-based programs, and measurable outcomes.
        </Card>
      </div>
    </Container>
  </div>
);

const Resources = () => (
  <div id="resources" className="py-16 sm:py-20" style={{ backgroundColor: "#F8FAFC" }}>
    <Container>
      <SectionTitle
        eyebrow="Resources"
        title="Tools you can download and use"
        desc="Your website can link to your PDFs (protocols, checklists, scripts) and collect requests for trainings." 
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold" style={{ color: BRAND.blue }}>
            Reintegration Protocols
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Elementary + Secondary versions with printable and fillable options.
          </p>
          <div className="mt-4 h-1 w-24 rounded-full" style={{ backgroundColor: BRAND.blue }} />
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold" style={{ color: BRAND.magenta }}>
            Student-Facing Scripts
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Reflection prompts and restorative language educators can use immediately.
          </p>
          <div className="mt-4 h-1 w-24 rounded-full" style={{ backgroundColor: BRAND.magenta }} />
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold" style={{ color: BRAND.green }}>
            Training Toolkits
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Agendas, facilitation guides, role-plays, and implementation checklists.
          </p>
          <div className="mt-4 h-1 w-24 rounded-full" style={{ backgroundColor: BRAND.green }} />
        </div>
      </div>
    </Container>
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("MindBridge Education — Consultation Request");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.org}\n\nMessage:\n${form.message}`
    );
    return `mailto:info@mindbridgeeducation.com?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <div id="contact" className="py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build a plan that fits your students and staff"
          desc="Send a quick message and we’ll follow up to schedule a consult." 
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Contact details</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" style={{ color: BRAND.blue }} />
                  info@mindbridgeeducation.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" style={{ color: BRAND.green }} />
                  (000) 000-0000
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" style={{ color: BRAND.magenta }} />
                  Your City, State
                </div>
              </div>

              <div
                className="mt-6 rounded-2xl p-4 text-sm text-slate-700"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(12,76,138,0.10), rgba(194,59,142,0.08), rgba(63,174,73,0.08))",
                }}
              >
                <p className="font-semibold text-slate-900">Popular requests</p>
                <ul className="mt-2 space-y-1">
                  <li>• Reintegration & restorative implementation</li>
                  <li>• Leadership development & team coaching</li>
                  <li>• Grant strategy + writing support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Send a message</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2"
                  style={{ outlineColor: BRAND.blue }}
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                />
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2"
                  style={{ outlineColor: BRAND.blue }}
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                />
                <input
                  className="sm:col-span-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2"
                  style={{ outlineColor: BRAND.blue }}
                  placeholder="School / Organization"
                  value={form.org}
                  onChange={(e) => setForm((s) => ({ ...s, org: e.target.value }))}
                />
                <textarea
                  className="sm:col-span-2 min-h-[120px] rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2"
                  style={{ outlineColor: BRAND.blue }}
                  placeholder="What are you looking to build or improve?"
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                />
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={mailto}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm"
                  style={{ backgroundColor: BRAND.blue }}
                >
                  Email MindBridge <Mail className="h-4 w-4" />
                </a>
                <p className="text-xs text-slate-500">
                  Tip: Replace this mailto with a form service later (Google Forms, Jotform, or
                  a custom backend).
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Footer = ({ onJump }) => (
  <footer className="border-t border-slate-200 bg-white">
    <Container>
      <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/mindbridge-logo.png"
            alt="MindBridge Education logo"
            className="h-10 w-10 rounded-lg object-contain"
          />
          <div>
            <p className="text-sm font-semibold text-slate-900">MindBridge Education</p>
            <p className="text-xs" style={{ color: BRAND.green }}>
              Educate~Elevate~Thrive
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            { id: "services", label: "Services" },
            { id: "training", label: "Training" },
            { id: "resources", label: "Resources" },
            { id: "contact", label: "Contact" },
          ].map((l) => (
            <button
              key={l.id}
              onClick={() => onJump(l.id)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 pb-10 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} MindBridge Education. All rights reserved.</p>
        <p>
          Designed in MindBridge brand colors: <span style={{ color: BRAND.blue }}>Blue</span>,{" "}
          <span style={{ color: BRAND.magenta }}>Magenta</span>, <span style={{ color: BRAND.green }}>Green</span>
        </p>
      </div>
    </Container>
  </footer>
);

export default function MindBridgeEducationSite() {
  const jump = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav onJump={jump} />
      <Hero onJump={jump} />
      <Services />
      <Approach />
      <Training />
      <Resources />
      <Contact />
      <Footer onJump={jump} />
    </div>
  );
}
