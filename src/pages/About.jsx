import { Link } from 'react-router-dom'
import logo from '../assets/loopangan.jpeg'

function About() {
  return (
    <section className="max-w-[1180px] mx-auto px-8 py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start mb-14">
        <div className="max-w-4xl">
          <span className="block font-mono text-xs text-[#3B4FE0] uppercase tracking-[0.2em] mb-4">About LoopAngan</span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#10142B] max-w-[14ch] leading-[1.08] mb-6">
            A small, serious place to learn by building.
          </h1>
          <p className="text-lg md:text-[18px] leading-8 text-[#5B6178] max-w-[62ch] mb-4">
            LoopAngan started from a simple frustration: most courses teach you to follow along, not to build. We keep it practical, clear, and project-led so the learning feels real from day one.
          </p>
          <p className="text-lg md:text-[18px] leading-8 text-[#5B6178] max-w-[62ch] mb-4">
            "Angan" means courtyard in Nepali — a shared space where people gather, exchange ideas, and learn together. That is the tone we want here: focused cohorts, direct feedback, and instructors who still write code every day.
          </p>
          <p className="text-lg md:text-[18px] leading-8 text-[#5B6178] max-w-[62ch] mb-10">
            The first program is Python Zero to Hero Bootcamp 2083, and everything else will grow from what students actually need next.
          </p>
        </div>

        <div className="lg:pt-8">
          <div className="rounded-[2rem] border border-[#E7EAF3] bg-white p-6 shadow-[0_12px_40px_rgba(16,20,43,0.06)]">
            <div className="rounded-[1.5rem] bg-[#F8FAFF] border border-[#E7EAF3] p-6 flex items-center justify-center">
              <img
                src={logo}
                alt="LoopAngan logo"
                className="w-full max-w-[340px] h-auto object-contain"
              />
            </div>
            <div className="pt-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#3B4FE0] mb-2">Built for learners</p>
              <p className="text-sm font-semibold tracking-tight text-[#10142B]">
                Learn. Build. Repeat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-14">
        <div className="rounded-2xl border border-[#E7EAF3] bg-white p-6 lg:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#3B4FE0] mb-3">01</p>
          <h3 className="text-lg font-semibold text-[#10142B] mb-2">Project-first</h3>
          <p className="text-sm leading-6 text-[#5B6178]">Every course moves toward a real, working outcome instead of passive follow-along lessons.</p>
        </div>
        <div className="rounded-2xl border border-[#E7EAF3] bg-white p-6 lg:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#3B4FE0] mb-3">02</p>
          <h3 className="text-lg font-semibold text-[#10142B] mb-2">Small cohorts</h3>
          <p className="text-sm leading-6 text-[#5B6178]">Direct instructor feedback, fewer distractions, and more room to actually ask questions.</p>
        </div>
        <div className="rounded-2xl border border-[#E7EAF3] bg-white p-6 lg:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#3B4FE0] mb-3">03</p>
          <h3 className="text-lg font-semibold text-[#10142B] mb-2">Built to ship</h3>
          <p className="text-sm leading-6 text-[#5B6178]">Students leave with something usable, not just notes and a certificate.</p>
        </div>
      </div>

      <div className="rounded-3xl border border-[#E7EAF3] bg-[#F8FAFF] px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span className="block font-mono text-xs text-[#3B4FE0] uppercase tracking-[0.18em] mb-3">First cohort</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#10142B] max-w-[18ch] leading-tight">
            Python Zero to Hero Bootcamp 2083 is open for enrollment.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-full bg-[#3B4FE0] text-white hover:bg-[#232F9E] transition-colors">
            Enroll Now
          </Link>
          <Link to="/courses" className="inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-full border border-[#DDE2F1] text-[#10142B] hover:border-[#3B4FE0] hover:text-[#232F9E] transition-colors">
            View Courses
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About 