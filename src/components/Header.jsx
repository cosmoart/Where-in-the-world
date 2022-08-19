let prevScrollpos = window.pageYOffset;

document.addEventListener("scroll", () => {
	let currentScrollPos = window.pageYOffset;
	document.querySelector(".navBar").style.top = prevScrollpos > currentScrollPos ? "0" : "-200px";
	prevScrollpos = currentScrollPos;
})

export default function Header() {
	return (
		<header className='navBar'>
			<h1>Where in the World?</h1>
			<button>Dark Mode</button>
		</header>
	)
}