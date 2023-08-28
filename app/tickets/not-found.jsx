import Link from "next/link";

export default function NotFound() {
	return (
		<main className="text-center mt-20">
			<h1 className="text-3xl">We Hit a Brick Wall!</h1>
			<p className="mt-5">We could not find the page you were looking for!</p>
			<p className="mt-5">
				Go back to the <Link href="/tickets">Tickets</Link>.
			</p>
		</main>
	);
}
