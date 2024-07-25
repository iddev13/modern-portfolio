import { navItems } from '@/data';

import { Navbar } from '@/components/navbar';
import { Intro } from '@/components/intro';
import { About } from '@/components/about';
import { RecentProjects } from '@/components/recent-projects';
import { Clients } from '@/components/clients';
import { Experience } from '@/components/experience';
import { Approach } from '@/components/approach';
import { Footer } from '@/components/footer';

export default function Home() {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<Navbar navItems={navItems} />
				<Intro />
				<About />
				<RecentProjects />
				<Clients />
				<Experience />
				<Approach />
				<Footer />
			</div>
		</main>
	);
}
