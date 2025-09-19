import React from 'react';

const RTIDetails: React.FC = () => {
	return (
		<section id="rti-details" className="py-12 bg-white">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12">
					<h3 className="text-2xl font-bold text-gray-900 mb-4">Right to Information (RTI) Details</h3>
					<p className="text-gray-600">Transparency and accountability through RTI Act implementation</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{/* CPIO Details */}
					<div className="bg-white rounded-2xl shadow-lg p-8">
						<h4 className="text-xl font-bold text-gray-900 mb-6">Central Public Information Officer (CPIO)</h4>
						<div className="space-y-4">
							<div className="bg-blue-50 rounded-xl p-6">
								<h5 className="font-semibold text-gray-900 mb-2">Mr. Suresh Kumar</h5>
								<p className="text-blue-600 font-medium mb-2">Registrar</p>
								<div className="space-y-1 text-sm text-gray-600">
									<p><strong>Email:</strong> rti@cas.edu.in</p>
									<p><strong>Phone:</strong> +91-487-2345679</p>
									<p><strong>Office:</strong> Administrative Block, Room 101</p>
									<p><strong>Office Hours:</strong> 10:00 AM - 5:00 PM</p>
								</div>
							</div>
						</div>
					</div>

					{/* Appellate Authority */}
					<div className="bg-white rounded-2xl shadow-lg p-8">
						<h4 className="text-xl font-bold text-gray-900 mb-6">Appellate Authority</h4>
						<div className="space-y-4">
							<div className="bg-green-50 rounded-xl p-6">
								<h5 className="font-semibold text-gray-900 mb-2">Dr. Priya Nair</h5>
								<p className="text-green-600 font-medium mb-2">Principal</p>
								<div className="space-y-1 text-sm text-gray-600">
									<p><strong>Email:</strong> principal@cas.edu.in</p>
									<p><strong>Phone:</strong> +91-487-2345680</p>
									<p><strong>Office:</strong> Principal's Chamber</p>
									<p><strong>Office Hours:</strong> 11:00 AM - 4:00 PM</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* RTI Process */}
				<div className="mt-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
					<h4 className="text-xl font-bold text-gray-900 mb-6">How to File RTI Application</h4>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="bg-white rounded-xl p-6 text-center">
							<div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
								1
							</div>
							<h5 className="font-semibold text-gray-900 mb-2">Submit Application</h5>
							<p className="text-gray-600 text-sm">Submit RTI application with ₹10 fee to CPIO office</p>
						</div>
						<div className="bg-white rounded-xl p-6 text-center">
							<div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
								2
							</div>
							<h5 className="font-semibold text-gray-900 mb-2">Processing</h5>
							<p className="text-gray-600 text-sm">CPIO processes application within 30 days</p>
						</div>
						<div className="bg-white rounded-xl p-6 text-center">
							<div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
								3
							</div>
							<h5 className="font-semibent text-gray-900 mb-2">Response</h5>
							<p className="text-gray-600 text-sm">Receive information or file appeal if unsatisfied</p>
						</div>
					</div>
				</div>

				{/* Information Available */}
				<div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
					<h4 className="text-xl font-bold text-gray-900 mb-6">Information Available Under RTI</h4>
					<div className="grid md:grid-cols-2 gap-6">
						<ul className="space-y-2 text-gray-700">
							<li>• College policies and procedures</li>
							<li>• Administrative decisions and records</li>
							<li>• Financial information and budgets</li>
							<li>• Faculty and staff information</li>
							<li>• Admission procedures and criteria</li>
						</ul>
						<ul className="space-y-2 text-gray-700">
							<li>• Infrastructure development plans</li>
							<li>• Committee meeting minutes</li>
							<li>• Grievance redressal records</li>
							<li>• Procurement and tender details</li>
							<li>• Student services information</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RTIDetails;
