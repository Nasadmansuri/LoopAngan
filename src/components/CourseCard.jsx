import { Link } from 'react-router-dom'
import { useState } from 'react'

function CourseCard({ tag, status, title, desc, meta, featured = false, href = '/contact', action = 'Register' }) {
	const [tiltStyle, setTiltStyle] = useState({
		transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)',
		boxShadow: featured ? '0 18px 50px rgba(16,20,43,0.08)' : '0 12px 32px rgba(16,20,43,0.04)',
		sheen: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.55), transparent 65%)',
	})

	function handlePointerMove(event) {
		const currentTarget = event.currentTarget
		const rect = currentTarget.getBoundingClientRect()
		const centerX = rect.left + rect.width / 2
		const centerY = rect.top + rect.height / 2
		const rotateY = ((event.clientX - centerX) / (rect.width / 2)) * 8
		const rotateX = -((event.clientY - centerY) / (rect.height / 2)) * 8
		const x = ((event.clientX - rect.left) / rect.width) * 100
		const y = ((event.clientY - rect.top) / rect.height) * 100

		setTiltStyle({
			transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale3d(1.01, 1.01, 1.01)`,
			boxShadow: '0 26px 70px rgba(16, 20, 43, 0.14)',
			sheen: `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.72), rgba(255,255,255,0.24) 22%, rgba(59,79,224,0.08) 44%, transparent 68%)`,
		})
	}

	function handlePointerLeave() {
		setTiltStyle({
			transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)',
			boxShadow: featured ? '0 18px 50px rgba(16,20,43,0.08)' : '0 12px 32px rgba(16,20,43,0.04)',
			sheen: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.45), transparent 65%)',
		})
	}

	return (
		<div
			className="cursor-pointer"
			onPointerMove={handlePointerMove}
			onPointerLeave={handlePointerLeave}
			onPointerDown={handlePointerMove}
		>
			<div
				className={`relative isolate overflow-hidden rounded-3xl p-8 lg:p-9 flex flex-col gap-5 bg-white border transition-transform duration-200 ease-out ${
					featured ? 'border-[#DDE3F6]' : 'border-[#E7EAF3] bg-[#FCFCFE]'
				}`}
				style={tiltStyle}
			>
				<div
					className="absolute inset-0 pointer-events-none opacity-80 transition-opacity duration-200"
					style={{ background: tiltStyle.sheen }}
				/>
				<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DDE3F6] to-transparent" />
				<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F8FAFF] to-transparent opacity-60 pointer-events-none" />

				<div className="flex items-center justify-between gap-4">
					<span className="font-mono text-xs text-[#232F9E] bg-white/80 backdrop-blur-sm border border-[#E7EAF3] w-fit px-2.5 py-1 rounded-md tracking-[0.18em] uppercase shadow-[0_6px_18px_rgba(16,20,43,0.04)]">
						{tag}
					</span>
					<span className={`inline-flex items-center gap-2 text-xs font-semibold ${featured ? 'text-[#0F9D58]' : 'text-[#9AA0BC]'}`}>
						<span className={`h-2 w-2 rounded-full ${featured ? 'bg-[#0F9D58] shadow-[0_0_0_4px_rgba(15,157,88,0.12)]' : 'bg-[#9AA0BC]'}`} />
						{status}
					</span>
				</div>

				<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#10142B] max-w-[16ch] leading-tight">
					{title}
				</h2>
				<p className="text-sm md:text-[15px] leading-7 text-[#5B6178] max-w-[58ch]">
					{desc}
				</p>

				<div className="flex items-center justify-between gap-4 pt-4 mt-auto border-t border-[#E7EAF3] relative z-10">
					<span className="text-sm text-[#5B6178]">{meta}</span>
					<Link
						to={href}
						className={`inline-flex items-center justify-center font-semibold text-sm px-5 py-2.5 rounded-full transition-colors tracking-[0.01em] ${
							featured
								? 'bg-[#3B4FE0] text-white hover:bg-[#232F9E]'
								: 'border border-[#DDE2F1] text-[#10142B] hover:border-[#3B4FE0] hover:text-[#232F9E]'
						}`}
					>
						{action}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CourseCard
