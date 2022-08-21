import ThemeBtn from "./DarkToggle";

let prevScrollpos = window.pageYOffset;

document.addEventListener("scroll", () => {
	let currentScrollPos = window.pageYOffset;
	document.querySelector(".navBar").style.top = prevScrollpos > currentScrollPos ? "0" : "-200px";
	prevScrollpos = currentScrollPos;
})

export default function Header() {
	return (
		<header className='bg-white dark:bg-darkblue navBar sticky z-10 top-0 flex justify-between p-4 transition-all shadow-3xl'>
			<h1 className="text-2xl font-extrabold">Where in the World?</h1>
			<ThemeBtn />
		</header>
	)
}