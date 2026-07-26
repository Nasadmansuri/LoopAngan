import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'

function Courses() {
  const courses = [
    {
      tag: 'Bootcamp',
      status: 'Open now',
      title: 'Python Zero to Hero Bootcamp 2083',
      desc: 'Start from zero and build real projects — variables, loops, Casting, functions and a final project.',
      meta: 'Live cohort · Beginner friendly',
      action: 'Enroll Now',
      featured: true,
    },
    {
      tag: 'Coming soon',
      status: 'Waitlist',
      title: 'More Courses on the Way',
      desc: 'We are building the next programs based on what learners ask for most, so the roadmap stays practical.',
      meta: 'Roadmap driven · New topics later',
      action: 'Notify me',
      featured: false,
    },
  ]

  return (
    <section className="max-w-295 mx-auto px-8 py-20 lg:py-24">
      <div className="max-w-4xl mb-14">
        <span className="block font-mono text-xs text-[#3B4FE0] uppercase tracking-[0.2em] mb-4">Courses</span>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#10142B] max-w-[12ch] leading-[1.08] mb-5">
          Pick a stack that feels real.
        </h1>
        <p className="text-lg md:text-[18px] leading-8 text-[#5B6178] max-w-[62ch]">
          We are starting with one focused bootcamp and building around what learners actually need. The tone stays minimal, the content stays practical.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-6">



          {courses.map((course) => (
            <CourseCard
              key={course.title}
              tag={course.tag}
              status={course.status}
              title={course.title}
              desc={course.desc}
              meta={course.meta}
              featured={course.featured}
              href="/contact"
              action="Register"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses