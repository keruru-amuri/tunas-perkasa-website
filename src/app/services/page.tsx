import Image from 'next/image';

export const metadata = {
  title: 'Our Services | Tunas Perkasa',
  description: 'Explore our tutoring services for primary and secondary students, including offline and online options.',
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Tutoring Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive educational support for primary and secondary students, tailored to meet individual learning needs.
          </p>
        </div>
      </section>

      {/* Offline Tutoring Section */}
      <section id="offline" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Offline Tutoring</h2>
              <p className="text-gray-700 mb-4">
                Our classroom-based tutoring provides students with a conducive learning environment and face-to-face interaction with our experienced tutors. We maintain small class sizes to ensure each student receives personalized attention.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                <li>Small group classes (maximum 8 students per class)</li>
                <li>Dedicated study materials and resources</li>
                <li>Regular progress assessments and feedback</li>
                <li>Comfortable, well-equipped classrooms</li>
                <li>Flexible scheduling options (weekday and weekend classes)</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Subjects Offered:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Bahasa Malaysia</li>
                <li>English Language</li>
                <li>History</li>
                <li>Geography</li>
                <li>Additional Mathematics</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 p-2 rounded-lg shadow-md">
                <Image 
                  src="/placeholder-offline.jpg" 
                  alt="Offline tutoring classroom" 
                  width={600} 
                  height={400}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Tutoring Section */}
      <section id="online" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Online Tutoring</h2>
              <p className="text-gray-700 mb-4">
                Our online tutoring platform brings quality education to your home. Using interactive technology, we create engaging virtual classrooms that provide the same level of educational excellence as our offline sessions.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                <li>Live, interactive sessions with experienced tutors</li>
                <li>Digital learning materials and resources</li>
                <li>Recorded sessions for review</li>
                <li>Virtual whiteboard and screen sharing capabilities</li>
                <li>Flexible scheduling to accommodate student needs</li>
                <li>One-on-one sessions available</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Technical Requirements:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Stable internet connection</li>
                <li>Computer, tablet, or smartphone</li>
                <li>Webcam and microphone</li>
                <li>Quiet learning environment</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 p-2 rounded-lg shadow-md">
                <Image 
                  src="/placeholder-online.jpg" 
                  alt="Online tutoring session" 
                  width={600} 
                  height={400}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Preparation Section */}
      <section id="exam-prep" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Exam Preparation</h2>
              <p className="text-gray-700 mb-4">
                Our specialized exam preparation programs are designed to help students excel in national examinations. We focus on exam techniques, time management, and targeted practice using past papers and mock exams.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Examinations We Prepare For:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                <li>UPSR (Ujian Pencapaian Sekolah Rendah)</li>
                <li>PT3 (Pentaksiran Tingkatan 3)</li>
                <li>SPM (Sijil Pelajaran Malaysia)</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Our Approach:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Comprehensive review of all exam topics</li>
                <li>Focus on common exam questions and patterns</li>
                <li>Regular practice tests under exam conditions</li>
                <li>Personalized feedback and improvement strategies</li>
                <li>Stress management and exam preparation techniques</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 p-2 rounded-lg shadow-md">
                <Image 
                  src="/placeholder-exam.jpg" 
                  alt="Exam preparation session" 
                  width={600} 
                  height={400}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Pricing Plans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-100 p-6 text-center">
                <h3 className="text-2xl font-bold text-blue-800">Basic Plan</h3>
                <div className="text-4xl font-bold my-4">RM 150<span className="text-lg font-normal text-gray-600">/month</span></div>
                <p className="text-gray-600">For primary school students</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    8 sessions per month
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Small group classes
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Basic study materials
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Monthly progress reports
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="mt-6 block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Enroll Now
                </a>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform scale-105 border-2 border-blue-500">
              <div className="bg-blue-600 p-6 text-center text-white">
                <h3 className="text-2xl font-bold">Standard Plan</h3>
                <div className="text-4xl font-bold my-4">RM 250<span className="text-lg font-normal">/month</span></div>
                <p>For secondary school students</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    12 sessions per month
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Small group classes
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Comprehensive study materials
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Bi-weekly progress reports
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Practice tests and assessments
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="mt-6 block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Enroll Now
                </a>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-100 p-6 text-center">
                <h3 className="text-2xl font-bold text-blue-800">Premium Plan</h3>
                <div className="text-4xl font-bold my-4">RM 350<span className="text-lg font-normal text-gray-600">/month</span></div>
                <p className="text-gray-600">For exam preparation</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    16 sessions per month
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Small group or one-on-one
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Premium study materials
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Weekly progress reports
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Mock exams and intensive reviews
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="mt-6 block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How do I know which tutoring option is best for my child?</h3>
              <p className="text-gray-700">
                We recommend scheduling a consultation with our academic advisors who can assess your child's learning style, academic needs, and schedule to recommend the most suitable option.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can I switch between online and offline tutoring?</h3>
              <p className="text-gray-700">
                Yes, we offer flexible arrangements that allow students to switch between online and offline sessions based on their needs and circumstances.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How are the tutoring sessions structured?</h3>
              <p className="text-gray-700">
                Each session typically includes a review of previous material, introduction of new concepts, guided practice, and independent work. We also incorporate regular assessments to track progress.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What if my child needs help with a subject not listed?</h3>
              <p className="text-gray-700">
                We may be able to accommodate additional subjects based on demand and tutor availability. Please contact us to discuss your specific requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Do you offer trial classes?</h3>
              <p className="text-gray-700">
                Yes, we offer a single trial class at a reduced rate so that students can experience our teaching approach before committing to a full program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and learn more about how Tunas Perkasa can help your child excel academically.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
