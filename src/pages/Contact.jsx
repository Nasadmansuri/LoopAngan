import { useState } from 'react'

// Replace with your actual Formspree form ID (from formspree.io)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjeokdk'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const phoneNumber = '+977 9817824219'

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', course: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="max-w-[1180px] mx-auto px-8 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 items-start">
      <div className="max-w-2xl">
        <span className="block font-mono text-xs text-[#3B4FE0] uppercase tracking-wide mb-3">Contact</span>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#10142B] max-w-[12ch] leading-[1.08] mb-4">Registration</h1>
        <p className="text-lg md:text-[18px] leading-8 text-[#5B6178] max-w-[46ch] mb-10">
          Questions about the Python Zero to Hero Bootcamp 2083, or anything else? Send a message and we'll get back to you.
        </p>

        <div className="rounded-2xl border border-[#E7EAF3] bg-[#F8FAFF] p-5 mb-8 shadow-[0_12px_32px_rgba(16,20,43,0.04)]">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-[#3B4FE0] mb-2">Live now</p>
          <h2 className="text-lg font-semibold text-[#10142B] mb-2">Python Zero to Hero Bootcamp 2083</h2>
          <p className="text-sm leading-6 text-[#5B6178]">
            Beginner-friendly, project-led, and open for enrollment now.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <a href={`mailto:loopangan.team@gmail.com`} className="rounded-2xl border border-[#E7EAF3] bg-white p-5 hover:border-[#3B4FE0] transition-colors">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-[#3B4FE0] mb-2">Email</p>
            <p className="text-sm text-[#5B6178] font-mono">loopangan.team@gmail.com</p>
          </a>
          <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="rounded-2xl border border-[#E7EAF3] bg-white p-5 hover:border-[#3B4FE0] transition-colors">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-[#3B4FE0] mb-2">Phone</p>
            <p className="text-sm text-[#5B6178] font-mono">{phoneNumber}</p>
          </a>
          <div className="rounded-2xl border border-[#E7EAF3] bg-white p-5 sm:col-span-2">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-[#3B4FE0] mb-2">Location</p>
            <p className="text-sm text-[#5B6178]">Biratnagar, Nepal</p>
          </div>
        </div>

      </div>

      <div className="lg:pt-4">
        {status === 'success' ? (
          <div className="bg-[#F8FAFF] border border-[#E7EAF3] rounded-3xl p-8 text-center shadow-[0_12px_32px_rgba(16,20,43,0.05)]">
            <h3 className="text-xl font-semibold text-[#10142B] mb-2">Message sent</h3>
            <p className="text-[#5B6178]">We'll get back to you soon.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm font-semibold text-[#3B4FE0] hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-3xl border border-[#E7EAF3] bg-white p-6 md:p-8 shadow-[0_12px_32px_rgba(16,20,43,0.05)]">
            <div>
              <label className="block text-sm font-medium text-[#10142B] mb-1.5">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-[#E1E5F5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3B4FE0]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#10142B] mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-[#E1E5F5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3B4FE0]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#10142B] mb-1.5">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-[#E1E5F5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3B4FE0]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#10142B] mb-1.5">Interested Course Type</label>
              <select
                name="course"
                required
                value={form.course}
                onChange={handleChange}
                className="w-full border border-[#E1E5F5] rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#3B4FE0]"
              >
                <option value="" disabled>Select a course</option>
                <option value="Python Zero to Hero Bootcamp 2083">Python Zero to Hero Bootcamp 2083</option>
                <option value="More Courses on the Way">More Courses on the Way</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#10142B] mb-1.5">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-[#E1E5F5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3B4FE0]"
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-600">
                Something went wrong sending your message. Please try again, or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-full bg-[#3B4FE0] text-white hover:bg-[#232F9E] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact