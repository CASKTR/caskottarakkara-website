
import React, { useState, useRef, useEffect } from 'react';
import { FileText, Download, ChevronRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Prospectus: React.FC = () => {
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
			<Header activeSection="admissions" onNavigate={noopNavigate} scrollY={scrollY} isHidden={isNavHidden} />

			{/* Page title band */}
			<section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
				<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
					<div className="flex items-center text-sm text-white/80 mb-3">
						<span className="hover:text-white transition-colors">Admissions & Fee</span>
						<ChevronRight className="mx-2 h-4 w-4 opacity-70" />
						<span className="text-white">Prospectus</span>
					</div>
					<h1 className="text-3xl md:text-4xl font-bold">Prospectus</h1>
					<p className="mt-2 text-white/90 max-w-2xl">Download the latest prospectus and important admission information.</p>
				</div>
			</section>

			<main className="flex-1 py-10 sm:py-14">
				<section className="bg-gray-50">
					<div className="max-w-4xl mx-auto text-center">
						<h3 className="text-2xl font-bold text-gray-900 mb-8">Download Prospectus</h3>
						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
								<div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
									<FileText className="h-12 w-12 text-white" />
								</div>
								<h4 className="text-xl font-bold text-gray-900 mb-4">University Prospectus</h4>
								<p className="text-gray-600 mb-6">
									Comprehensive guide for all undergraduate and postgraduate programs offered 
									through University of Kerala.
								</p>
								<a
									href="https://admissions.keralauniversity.ac.in/fyugp2025/pdfs/FYUGP_Prospectus2_2025.pdf"
									download
									target="_blank"
									rel="noopener noreferrer"
									className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-blue-700 transition-colors duration-300"
									style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}
								>
									<Download className="h-5 w-5" />
									Download PDF
								</a>
							</div>

							<div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8">
								<div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
									<FileText className="h-12 w-12 text-white" />
								</div>
								<h4 className="text-xl font-bold text-gray-900 mb-4">IHRD Prospectus</h4>
								<p className="text-gray-600 mb-6">
									Detailed information about IHRD programs, short-term courses, 
									skill development programs, and certification courses.
								</p>
								<a
									href="https://ihrdadmissions.org/assets/docs/mgu_pg_prospectus_2025_26.pdf"
									download
									target="_blank"
									rel="noopener noreferrer"
									className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-green-700 transition-colors duration-300"
									style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}
								>
									<Download className="h-5 w-5" />
									Download PDF
								</a>
							</div>
						</div>

						<div className="mt-12 bg-red-50 rounded-2xl p-8">
							<h4 className="text-xl font-bold text-gray-900 mb-4">Important Information</h4>
							<p className="text-gray-700 text-base">The admissions for 2025 are closed.</p>
						</div>
					</div>
				</section>
			</main>
			<Footer onNavigate={noopNavigate} />
		</div>
	);
};

export default Prospectus;


