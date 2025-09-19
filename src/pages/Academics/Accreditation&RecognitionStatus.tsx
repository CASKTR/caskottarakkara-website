import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const AccreditationRecognitionStatus: React.FC = () => {
	const [scrollY, setScrollY] = useState(0);
	const [isNavHidden, setIsNavHidden] = useState(false);
	const lastScrollYRef = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;
			const isScrollingDown = currentY > lastScrollYRef.current;
			setIsNavHidden(isScrollingDown && currentY > 60);
			lastScrollYRef.current = currentY;
			setScrollY(currentY);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const noopNavigate = () => {};

	return (
		<div className="flex flex-col min-h-screen bg-gray-50">
			<Header activeSection="academics" onNavigate={noopNavigate} scrollY={scrollY} isHidden={isNavHidden} />

			{/* Page title band */}
			<section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
				<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
					<div className="flex items-center text-sm text-white/80 mb-3">
						<span className="hover:text-white transition-colors">Academics</span>
						<ChevronRight className="mx-2 h-4 w-4 opacity-70" />
						<span className="text-white">Accreditation & Recognition Status</span>
					</div>
					<h1 className="text-3xl md:text-4xl font-bold">Accreditation & Recognition Status</h1>
					<p className="mt-2 text-white/90 max-w-2xl">Latest accreditations, recognitions, and rankings of our institution.</p>
				</div>
			</section>

			{/* Main content */}
			<section className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
				<div className="bg-white rounded-xl shadow-md p-8">
					<h2 className="text-2xl font-semibold text-blue-900 mb-4">NAAC Accreditation Journey</h2>
					<p className="mb-4 text-gray-800">
						The College is in the process of securing <span className="font-medium">NAAC Accreditation (Cycle-1)</span>, which marks a major milestone in our journey toward academic and institutional excellence. Accreditation is not merely a statutory requirement, but a commitment to quality enhancement, accountability, and continuous improvement.
					</p>
					<p className="mb-4 text-gray-800">
						Our institution has already initiated the groundwork through the <span className="font-medium">Internal Quality Assurance Cell (IQAC)</span> and has begun systematically aligning policies, practices, and documentation with NAAC’s seven core criteria. This involves comprehensive preparation of the <span className="font-medium">Institutional Information for Quality Assessment (IIQA)</span> and <span className="font-medium">Self-Study Report (SSR)</span>, while simultaneously strengthening our governance framework, teaching–learning ecosystem, research culture, and student support mechanisms.
					</p>
					<p className="text-gray-800">
						Beyond NAAC, the College is also planning for further national and international accreditations, including sector-specific quality certifications and rankings that benchmark us against global standards. These parallel efforts ensure that our institution not only meets national norms but also positions itself on the international map of higher education quality and recognition.
					</p>
				</div>
			</section>
			<Footer onNavigate={noopNavigate} />
		</div>
	);
};

export default AccreditationRecognitionStatus;
