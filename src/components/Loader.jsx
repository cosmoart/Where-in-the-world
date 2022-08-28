import loaderSVG from "../assets/icons/loader.svg"
export default function Loader() {
	return (
		<img src={loaderSVG} alt="Loading..." className="w-24 absolute-center" />
	)
}