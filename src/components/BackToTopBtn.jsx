export default function BackToTopBtn() {
	document.addEventListener("scroll", () => document.querySelector("#topArrow").classList[scrollY >= 200 ? "add" : "remove"]("!opacity-100", "!translate-y-0"))

	return (
		<button onClick={() => scroll(0, 0)} id="topArrow" className='bg-verylightgray dark:bg-darkblue p-2 rounded-full fixed bottom-5 left-5 transition-all opacity-0 translate-y-12 hover:opacity-80 hover:scale-105 active:scale-95 shadow-md' title='Back to top'>
			<svg xmlns="http://www.w3.org/2000/svg" className='w-[30px] h-[30px]' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg>
		</button>
	)
}