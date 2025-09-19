import { useState, useRef, useEffect } from 'react';
import { Clock, CheckCircle, ChevronRight, ExternalLink } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const admissionSchedule = [
	{ date: 'May 21, 2025', event: 'Application Form Release', status: 'completed' },
	{ date: 'June 15, 2025', event: 'Last Date for Applications', status: 'completed' },
	{ date: 'June 17, 2025', event: 'Merit List Publication', status: 'completed' },
	{ date: 'June 19-23, 2025', event: 'First Allotment & Counseling', status: 'completed' },
	{ date: 'June 26-30, 2025', event: 'Second Allotment', status: 'completed' },
	{ date: 'July 1, 2025', event: 'Classes Begin', status: 'completed' }
];

const seatMatrix = [
	{ program: 'B.Sc. Computer Science (Honours with Research)', total: 32, general: 30, obc: 18, sc: 9, st: 3 },
	{ program: 'B.Com Finance and Accounting (Honours with Research)', total: 40, general: 30, obc: 18, sc: 9, st: 3 },
	{ program: 'B.Com Co-operation (Honours with Research)', total: 40, general: 30, obc: 18, sc: 9, st: 3 },
	{ program: 'B.Sc. Psychology (Honours with Research)', total: 32, general: 15, obc: 9, sc: 4, st: 2 },
	{ program: 'B.A. Journalism and Mass Communication (Honours with Research)', total: 40, general: 15, obc: 9, sc: 4, st: 2 }
];

const AdmissionProcessGuidelines = () => {
	const [scrollY, setScrollY] = useState(0);
	const [isNavHidden, setIsNavHidden] = useState(false);

	const lastScrollYRef = useRef(0);
	const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;
			const isScrollingDown = currentY > lastScrollYRef.current;
			setIsNavHidden(isScrollingDown && currentY > 60);
			lastScrollYRef.current = currentY;
			setScrollY(currentY);

		};
		
		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial check
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const noopNavigate = () => {};

	const setSectionRef = (key: string) => (el: HTMLElement | null) => {
		sectionRefs.current[key] = el;
	};

	return (
		<div className="flex flex-col min-h-screen bg-gray-50">
			<Header activeSection="admissions" onNavigate={noopNavigate} scrollY={scrollY} isHidden={isNavHidden} />

				{/* Page title band */}
				    <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
						<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
							<div className="flex items-center text-sm text-white/80 mb-3">
								<span className="hover:text-white transition-colors cursor-pointer">Admissions & Fee</span>
								<ChevronRight className="mx-2 h-4 w-4 opacity-70" />
								<span className="text-white">Admission Process & Guidelines</span>
						</div>
							<h1 className="text-3xl md:text-4xl font-bold">Admission Process & <span className="block text-transparent bg-clip-text bg-gradient-to-r text-white">Guidelines</span></h1>
							<p className="mt-2 text-white/90 max-w-2xl">Your gateway to excellence starts here. Explore our admission process, seat matrix, and guidelines for various programs.</p>
							</div>
					</section>

			<main className="flex-1 py-16 sm:py-20">
				<section className="bg-gray-50">
					<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
						<div className="space-y-16">
							{/* Admission Procedure*/}
							<div 
								ref={setSectionRef('procedure')}
								className="max-w-5xl mx-auto"
							>
								<div className="text-center mb-12">
									<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Admission Procedure</h3>
									<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
								</div>
								
								<div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
									<div className="prose prose-gray max-w-none">
										<p className="text-gray-700 leading-relaxed mb-6 text-base">
											Admission based on this prospectus is limited to the seats to be filled by the colleges only. <strong className="text-black-800">Fifty percent of the merit seats and all reservation quota seats will be filled through the Centralized Allotment Process (CAP) conducted by the University of Kerala.</strong> 
											For more information, please refer to the University CAP website at 
											<a href="https://admissions.keralauniversity.ac.in/fyugp2024/" 
											   className="text-blue-600 hover:text-blue-800 underline ml-1 inline-flex items-center gap-1 transition-colors" 
											   target="_blank" 
											   rel="noopener noreferrer">
												University CAP Portal
												<ExternalLink className="h-4 w-4" />
											</a>
										</p>
										<p className="text-gray-700 leading-relaxed mb-6 text-base">
											Candidates who wish to apply for the seats to be filled by the colleges must submit a duly filled application in the prescribed form or apply through the centralized allotment via the IHRD portal. The rank list will be prepared by the college based on merit.
										</p>

										<div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-r-2xl shadow-inner">
											<h5 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
												<CheckCircle className="h-5 w-5 text-blue-600" />
												Important Notes:
											</h5>
											<ol className="list-decimal list-inside space-y-3 text-gray-700 text-sm">
												<li className="leading-relaxed">Fifty percent of the merit seats and all reservation quota seats will be filled through the Centralized Allotment Process (CAP) conducted by the University. For more information, please refer to the University CAP website at <a href="https://admissions.keralauniversity.ac.in/fyugp2024/" className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">University Portal <ExternalLink className="h-3 w-3" /></a>.</li>
												<li className="leading-relaxed">If the total intake is increased during the current academic year, admission to the additional seats will be made from the same list of candidates who applied based on this prospectus.</li>
												<li className="leading-relaxed">Paragraphs 1 to 5 of this prospectus apply only to the admission of seats allotted to and filled by the college. The remaining paragraphs apply to all students admitted.</li>
												<li className="leading-relaxed">If the University permits the college to fill vacant seats under the CAP category, those admissions will be conducted by the college in accordance with the conditions specified in this prospectus.</li>
											</ol>
										</div>
									</div>
								</div>
							</div>

							{/* How to Apply with enhanced design */}
							<div 
								ref={setSectionRef('apply')}
								className="max-w-5xl mx-auto"
							>
								<div className="text-center mb-12">
									<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">How to Apply</h3>
									<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
								</div>
								
								<div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
									<div className="prose prose-gray max-w-none">
										<p className="text-gray-700 leading-relaxed mb-6 text-base">
											Applications can be submitted online through 
											<a href="https://ihrdadmissions.org/Home/backindex" 
											   className="text-blue-600 hover:text-blue-800 underline font-medium mx-1 inline-flex items-center gap-1 transition-colors" 
											   target="_blank" 
											   rel="noopener noreferrer">
												IHRD Admissions Portal
												<ExternalLink className="h-4 w-4" />
											</a>. 
											Application forms and prospectus can also be downloaded from the IHRD website 
											<a href="http://www.ihrd.ac.in" 
											   className="text-blue-600 hover:text-blue-800 underline font-medium mx-1 inline-flex items-center gap-1 transition-colors" 
											   target="_blank" 
											   rel="noopener noreferrer">
												www.ihrd.ac.in
												<ExternalLink className="h-4 w-4" />
											</a>. 
											The duly filled application must be submitted to Principal of the College of Applied Science, Kottarakkara, along with the registration fee of <strong className="text-black-600">Rs.350/-</strong> (Rs.150/- for SC/ST) either in cash or by Demand Draft(D.D) on or before the last date specified by the University.
										</p>
										<p className="text-gray-700 leading-relaxed mb-6 text-base">
											The Demand Draft should be drawn in favor of the Principal of the College. If the filled application is sent to the Principal by post, it must be accompanied by a D.D. for ₹350/- (₹150/- for SC/ST candidates) towards the registration fee, drawn in favour of the Principal of the concerned college.
										</p>

										<div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 rounded-r-2xl shadow-inner">
											<h5 className="font-bold text-red-900 mb-4 text-lg flex items-center gap-2">
												<div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
													<span className="text-white text-xs font-bold">!</span>
												</div>
												Important Note:
											</h5>
											<div className="text-red-800 space-y-3 leading-relaxed text-sm">
												<p>The registration fee, once paid, will not be refunded under any circumstances. Application forms for admission to B.Sc / B.A / B.Com courses, duly filled in, must reach the Principal of the concerned college on or before the last date specified by the University.</p>
												<p>Applications for admission to degree courses will not be accepted at the IHRD Headquarters or at any other associated institutions. Applications received after the last date specified by the University will not be accepted under any circumstances.</p>
												<p>Candidates seeking admission to the college must also furnish their CAP registration number in the application form, after completing the online registration procedure through the University of Kerala admission portal: <a href="https://admissions.keralauniversity.ac.in/fyugp2024/" className="text-red-600 hover:text-red-800 underline inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">University Portal <ExternalLink className="h-3 w-3" /></a></p>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/*Eligibility*/}
							<div 
								ref={setSectionRef('eligibility')}
								className="max-w-5xl mx-auto"
							>
								<div className="text-center mb-12">
									<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Eligibility for Admission</h3>
									<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
								</div>
								
								<div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
									<div className="flex items-center gap-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 shadow-inner">
										<div className="flex-shrink-0">
											<CheckCircle className="h-10 w-10 text-green-600" />
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-900 mb-1">Eligibility Requirement</h4>
											<p className="text-gray-800 text-sm leading-relaxed">
												Candidates must fulfill all eligibility requirements as prescribed by the University for admission to the course.
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Enhanced Admission Schedule */}
							<div 
								ref={setSectionRef('schedule')}
								className="max-w-5xl mx-auto"
							>
								<div className="text-center mb-12">
									<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Admission Schedule 2025-26</h3>
									<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
								</div>
								
								<div className="space-y-4">
									{admissionSchedule.map((item, index) => (
										<div
											key={index}
											className={`group flex items-center gap-4 p-5 rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-xl ${
												item.status === 'completed'
													? 'bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 shadow-lg'
													: item.status === 'active'
														? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 shadow-lg'
														: 'bg-gradient-to-r from-gray-50 to-slate-50 border-l-4 border-gray-300 shadow-md'
											}`}
											style={{ animationDelay: `${index * 0.1}s` }}
										>
											<div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg ${
												item.status === 'completed'
													? 'bg-gradient-to-br from-green-500 to-green-600'
													: item.status === 'active'
														? 'bg-gradient-to-br from-blue-500 to-blue-600'
														: 'bg-gradient-to-br from-gray-400 to-gray-500'
											}`}>
												{item.status === 'completed' ? (
													<CheckCircle className="h-5 w-5 text-white" />
												) : (
													<Clock className="h-5 w-5 text-white" />
												)}
											</div>
											<div className="flex-1">
												<h4 className="text-base font-bold text-gray-900 mb-1 group-hover:text-blue-800 transition-colors">{item.event}</h4>
												<p className="text-gray-600 text-sm">{item.date}</p>
											</div>
											<div className={`px-4 py-1 rounded-full text-xs font-bold shadow-md ${
												item.status === 'completed'
													? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800'
													: item.status === 'active'
														? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800'
														: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800'
											}`}>
												{item.status.charAt(0).toUpperCase() + item.status.slice(1)}
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Enhanced Seat Matrix */}
							<div 
								ref={setSectionRef('seatMatrix')}
								className="max-w-7xl mx-auto"
							>
								<div className="text-center mb-12">
									<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Seat Matrix</h3>
									<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
								</div>
								
								<div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
									<div className="overflow-x-auto">
										<table className="w-full">
											<thead className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
												<tr>
													<th className="px-4 py-4 text-left font-bold text-base">Program</th>
													<th className="px-4 py-4 text-center font-bold text-base">Total Seats</th>
													<th className="px-4 py-4 text-center font-bold text-base">General</th>
													<th className="px-4 py-4 text-center font-bold text-base">OBC</th>
													<th className="px-4 py-4 text-center font-bold text-base">SC</th>
													<th className="px-4 py-4 text-center font-bold text-base">ST</th>
												</tr>
											</thead>
											<tbody className="divide-y divide-gray-200">
												{seatMatrix.map((program, index) => (
													<tr key={index} className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group">
														<td className="px-4 py-3 font-semibold text-gray-900 group-hover:text-blue-800 transition-colors text-sm">{program.program}</td>
														<td className="px-4 py-3 text-center">
															<span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold rounded-full shadow-lg group-hover:scale-110 transition-transform text-sm">
																{program.total}
															</span>
														</td>
														<td className="px-4 py-3 text-center font-semibold text-gray-700 text-sm">{program.general}</td>
														<td className="px-4 py-3 text-center font-semibold text-gray-700 text-sm">{program.obc}</td>
														<td className="px-4 py-3 text-center font-semibold text-gray-700 text-sm">{program.sc}</td>
														<td className="px-4 py-3 text-center font-semibold text-gray-700 text-sm">{program.st}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer onNavigate={noopNavigate} />
			
		</div>
	);
};

export default AdmissionProcessGuidelines;