export default function MainFooter() {
	return (
		<footer className="p-5 text-right w-full">
			<p>
				Made with ♥️ by <a href="https://github.com/cosmoart" target="_blank" rel="noopener noreferrer" className="text-sky-400 font-semibold hover:opacity-90">Cosmo</a> - <a href="https://github.com/cosmoart/Where-in-the-world" target="_blank" rel="noopener noreferrer" className="text-sky-400 font-semibold inline-flex gap-1 items-center hover:opacity-90">
					Repository
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
				</a>
			</p>
		</footer>
	)
}