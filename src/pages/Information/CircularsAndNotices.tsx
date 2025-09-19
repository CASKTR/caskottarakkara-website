import React from 'react';
import { Megaphone } from 'lucide-react';

const circulars = [
	{
		date: '2024-12-01',
		title: 'Examination Schedule - Winter Semester 2024',
		category: 'Academic',
		urgent: true
	},
	{
		date: '2024-11-28',
		title: 'New Library Timings - Effective December 2024',
		category: 'General',
		urgent: false
	},
	{
		date: '2024-11-25',
		title: 'Industry Visit Registration - Final Year Students',
		category: 'Academic',
		urgent: false
	},
	{
		date: '2024-11-20',
		title: 'Fee Payment Deadline Extension Notice',
		category: 'Finance',
		urgent: true
	},
	{
		date: '2024-11-15',
		title: 'Annual College Day Celebration - December 15, 2024',
		category: 'Events',
		urgent: false
	}
];

const CircularsAndNotices: React.FC = () => {
	return (
		<section id="circulars-notices" className="py-12 bg-white">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h3 className="text-2xl font-bold text-gray-900 mb-4">Circulars & Notices</h3>
					<p className="text-gray-600">Stay updated with the latest announcements and official communications</p>
				</div>

				<div className="space-y-6">
					{circulars.map((circular, index) => (
						<div key={index} className={`bg-white rounded-2xl shadow-lg p-6 ${circular.urgent ? 'border-l-4 border-red-500' : 'border-l-4 border-blue-500'}`}>
							<div className="flex items-start justify-between">
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-2">
										<span className={`px-3 py-1 rounded-full text-xs font-medium ${
											circular.urgent 
												? 'bg-red-100 text-red-800' 
												: circular.category === 'Academic' 
												? 'bg-blue-100 text-blue-800'
												: circular.category === 'Events'
												? 'bg-green-100 text-green-800'
												: circular.category === 'Finance'
												? 'bg-orange-100 text-orange-800'
												: 'bg-gray-100 text-gray-800'
										}`}>
											{circular.category}
										</span>
										{circular.urgent && (
											<span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
												URGENT
											</span>
										)}
									</div>
									<h4 className="text-lg font-semibold text-gray-900 mb-2">{circular.title}</h4>
									<p className="text-gray-600 text-sm">{new Date(circular.date).toLocaleDateString('en-US', { 
										year: 'numeric', 
										month: 'long', 
										day: 'numeric' 
									})}</p>
								</div>
								<div className="flex items-center gap-2">
									<button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
										Download
									</button>
									<Megaphone className="h-6 w-6 text-gray-400" />
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Archive */}
				<div className="mt-12 text-center">
					<button className="bg-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300">
						View Archive
					</button>
				</div>
			</div>
		</section>
	);
};

export default CircularsAndNotices;
