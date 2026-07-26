import { Link } from 'react-router-dom'
import logo from '../assets/loopangan.jpeg'

function Home() {
  const courses = [
    {
      status: 'open',
      tag: 'Bootcamp',
      title: 'Python Zero to Hero Bootcamp 2083',
      desc: 'Start from absolute zero and build real projects — variables to OOP, then a full capstone app.',
      meta: 'Enrolling now',
    },
    {
      status: 'upcoming',
      tag: 'Coming Soon',
      title: 'More Courses on the Way',
      desc: "We're building out our next courses based on demand. Follow LoopAngan to be the first to know when they open.",
      meta: 'Upcoming',
    },
  ]

  return (
    <>
      {/* HERO */}
      <section className="max-w-[1180px] mx-auto px-8 pt-16 pb-20 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center animate-fade-up [animation-delay:40ms] [animation-fill-mode:both]">
        <div className="animate-fade-up [animation-delay:120ms] [animation-fill-mode:both]">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-[#232F9E] bg-[#F1F3FF] border border-[#E1E5F5] px-3 py-1.5 rounded-full mb-5 tracking-wide">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#0F9D58] text-white" aria-hidden="true">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1.5 5.2 3.8 7.5 8.5 2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Learn. Build. Repeat.
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-[#10142B] max-w-[16ch] animate-fade-up [animation-delay:180ms] [animation-fill-mode:both]">
            Code lives in loops. <span className="text-[#3B4FE0]">Learning should too.</span>
          </h1>

          <p className="mt-5 text-[17px] text-[#5B6178] max-w-[46ch] animate-fade-up [animation-delay:240ms] [animation-fill-mode:both]">
            Practical, project-based courses in web development and the tools working developers actually use — taught by people who build, not just present.
          </p>

          <div className="flex flex-wrap gap-3.5 mt-8 animate-fade-up [animation-delay:300ms] [animation-fill-mode:both]">
            <Link to="/contact" className="inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-full bg-[#3B4FE0] text-white hover:bg-[#232F9E] transition-colors">
              Enroll Now
            </Link>
            <Link to="/courses" className="inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-full border border-[#E1E5F5] text-[#10142B] hover:border-[#3B4FE0] hover:text-[#232F9E] transition-colors">
              Browse Courses
            </Link>
          </div>
        </div>

        {/* Loop visual */}
        <div className="relative aspect-square max-w-[420px] mx-auto w-full animate-fade-up [animation-delay:180ms] [animation-fill-mode:both]" aria-hidden="true">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#3FCADB] font-bold text-6xl leading-none">{'{'}</span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#3FCADB] font-bold text-6xl leading-none">{'}'}</span>
          <svg viewBox="0 0 440 440" className="absolute inset-0 w-full h-full">
            <circle cx="220" cy="220" r="164" fill="none" stroke="#E1E5F5" strokeWidth="1.5" />
            <circle cx="220" cy="220" r="164" fill="none" stroke="#3B4FE0" strokeWidth="2" strokeDasharray="6 10" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[190px] h-[190px] rounded-full bg-white border border-[#E1E5F5] shadow-[0_16px_40px_rgba(16,20,43,0.08)] flex items-center justify-center">
              <img
                src={logo}
                alt="LoopAngan logo"
                className="w-[150px] h-auto object-contain"
              />
            </div>
          </div>
          <div className="absolute font-mono text-xs bg-white border border-[#E1E5F5] px-3 py-1.5 rounded-lg text-[#232F9E] shadow-sm" style={{ top: '10%', left: '50%', transform: 'translate(-50%,-50%)' }}>Learn</div>
          <div className="absolute font-mono text-xs bg-white border border-[#E1E5F5] px-3 py-1.5 rounded-lg text-[#232F9E] shadow-sm" style={{ top: '50%', left: '88%', transform: 'translate(-50%,-50%)' }}>Build</div>
          <div className="absolute font-mono text-xs bg-white border border-[#E1E5F5] px-3 py-1.5 rounded-lg text-[#232F9E] shadow-sm" style={{ top: '85%', left: '68%', transform: 'translate(-50%,-50%)' }}>Repeat</div>
          <div className="absolute font-mono text-xs bg-white border border-[#E1E5F5] px-3 py-1.5 rounded-lg text-[#232F9E] shadow-sm" style={{ top: '85%', left: '32%', transform: 'translate(-50%,-50%)' }}>ship</div>
          <div className="absolute font-mono text-xs bg-white border border-[#E1E5F5] px-3 py-1.5 rounded-lg text-[#232F9E] shadow-sm" style={{ top: '50%', left: '12%', transform: 'translate(-50%,-50%)' }}>iterate()</div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="max-w-[1180px] mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 animate-fade-up [animation-delay:240ms] [animation-fill-mode:both]">
        <div className="animate-fade-up [animation-delay:300ms] [animation-fill-mode:both]">
          <span className="block font-mono text-xs text-[#3B4FE0] uppercase tracking-wide mb-3">01 / About</span>
          <h2 className="text-3xl font-semibold text-[#10142B] max-w-[14ch]">Not another tutorial hell.</h2>
        </div>
        <div className="animate-fade-up [animation-delay:360ms] [animation-fill-mode:both]">
          <p className="text-[#5B6178] max-w-[56ch] mb-4">
            LoopAngan started from a simple frustration: most courses teach you to follow along, not to build. We flip that — every course centers on a real, deployable project.
          </p>
          <p className="text-[#5B6178] max-w-[56ch] mb-4">
            "Angan" means courtyard — a shared space where people gather to learn from each other. Small cohorts, live feedback, instructors who still write code every day.
          </p>
          <Link to="/about" className="inline-block text-sm font-semibold text-[#232F9E] hover:underline">
            More about LoopAngan →
          </Link>
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section className="bg-[#F8FAFF] border-t border-b border-[#E7EAF3] py-24 animate-fade-up [animation-delay:360ms] [animation-fill-mode:both]">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="flex justify-between items-end flex-wrap gap-5 mb-11">
            <div>
              <span className="block font-mono text-xs text-[#3B4FE0] uppercase tracking-wide mb-3">02 / Courses</span>
              <h2 className="text-3xl font-semibold text-[#10142B]">Pick your stack</h2>
            </div>
            <Link to="/courses" className="inline-flex items-center justify-center font-semibold text-sm px-5 py-2.5 rounded-full border border-[#E1E5F5] text-[#10142B] hover:border-[#3B4FE0] hover:text-[#232F9E] transition-colors">
              View all courses
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {courses.map((c) => (
              <div key={c.title} className="hover-3d cursor-pointer">
                <div
                  className={`card-3d bg-white border rounded-2xl p-7 flex flex-col gap-4 ${
                    c.status === 'open'
                      ? 'border-[#3B4FE0] shadow-md'
                      : 'border-[#E1E5F5] opacity-70'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#232F9E] bg-[#F1F3FF] w-fit px-2.5 py-1 rounded-md">{c.tag}</span>
                    {c.status === 'open' ? (
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-[#0F9D58]">
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#E9F8EF] text-[#0F9D58]">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                            <path d="M1.5 5.2 3.8 7.5 8.5 2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        Open now
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-[#9AA0BC]">Coming soon</span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-[#10142B]">{c.title}</h3>
                  <p className="text-sm text-[#5B6178]">{c.desc}</p>

                  <div className="flex justify-between items-center mt-auto pt-3 border-t border-[#E1E5F5] text-sm">
                    <span className="text-[#5B6178]">{c.meta}</span>
                    {c.status === 'open' ? (
                      <Link to="/contact" className="font-semibold text-white bg-[#3B4FE0] hover:bg-[#232F9E] px-4 py-1.5 rounded-full transition-colors">
                        Enroll Now
                      </Link>
                    ) : (
                      <span className="text-[#9AA0BC] font-medium">Notify me</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-[1180px] mx-auto px-8 py-28 text-center animate-fade-up [animation-delay:420ms] [animation-fill-mode:both]">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#10142B] max-w-[16ch] mx-auto animate-fade-up [animation-delay:480ms] [animation-fill-mode:both]">
          Ready to start looping forward?
        </h2>
        <p className="text-[#5B6178] mt-3.5 animate-fade-up [animation-delay:540ms] [animation-fill-mode:both]">
          Seats for the Python Zero to Hero Bootcamp 2083 are open — no experience required, just a willingness to build.
        </p>
        <div className="flex justify-center gap-3.5 mt-7 flex-wrap animate-fade-up [animation-delay:600ms] [animation-fill-mode:both]">
          <Link to="/contact" className="inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-full bg-[#3B4FE0] text-white hover:bg-[#232F9E] transition-colors">
            Enroll Now
          </Link>
          <Link to="/contact" className="inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-full border border-[#E1E5F5] text-[#10142B] hover:border-[#3B4FE0] hover:text-[#232F9E] transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home