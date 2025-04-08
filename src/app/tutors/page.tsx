import Image from 'next/image';

export const metadata = {
  title: 'Our Tutors | Tunas Perkasa',
  description: 'Meet our experienced and dedicated tutors who are committed to helping students achieve academic excellence.',
};

export default function TutorsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Expert Tutors</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet our team of experienced educators dedicated to helping your child succeed academically.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Teaching Approach</h2>
              <p className="text-gray-700 mb-4">
                At Tunas Perkasa, we believe that effective tutoring goes beyond simply teaching the curriculum. Our tutors are trained to identify each student's unique learning style and adapt their teaching methods accordingly.
              </p>
              <p className="text-gray-700 mb-4">
                We focus on building strong foundations in each subject, developing critical thinking skills, and fostering a love for learning that extends beyond the classroom.
              </p>
              <p className="text-gray-700">
                All our tutors undergo rigorous selection and training processes to ensure they have both the academic expertise and the teaching skills needed to help students excel.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 p-2 rounded-lg shadow-md">
                <Image 
                  src="/placeholder-teaching.jpg" 
                  alt="Tutor teaching students" 
                  width={600} 
                  height={400}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutor Selection Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Tutor Selection Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Academic Screening</h3>
              <p className="text-gray-700">
                We verify academic qualifications and subject expertise through rigorous assessment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Teaching Assessment</h3>
              <p className="text-gray-700">
                Candidates demonstrate their teaching abilities through mock lessons and pedagogical evaluations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Training Program</h3>
              <p className="text-gray-700">
                Selected tutors undergo comprehensive training in our teaching methodology and student engagement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Ongoing Development</h3>
              <p className="text-gray-700">
                Our tutors participate in regular professional development to stay current with educational best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Tutors Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Tutors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tutor 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Ms. Nurul Huda</h3>
                <p className="text-blue-600 mb-2">Mathematics & Science</p>
                <p className="text-gray-600 text-sm mb-4">BSc in Mathematics, 8 years teaching experience</p>
                <p className="text-gray-700 mb-4">
                  Ms. Nurul specializes in making complex mathematical concepts accessible to students of all abilities. Her patient approach and clear explanations help students build confidence in mathematics.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Primary</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Secondary</span>
                </div>
              </div>
            </div>

            {/* Tutor 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Mr. Tan Wei Ming</h3>
                <p className="text-blue-600 mb-2">English & History</p>
                <p className="text-gray-600 text-sm mb-4">MA in Education, 12 years teaching experience</p>
                <p className="text-gray-700 mb-4">
                  Mr. Tan is passionate about literature and history. He engages students through interactive discussions and creative projects that make learning both fun and effective.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Primary</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Secondary</span>
                </div>
              </div>
            </div>

            {/* Tutor 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Dr. Lim Mei Ling</h3>
                <p className="text-blue-600 mb-2">Physics & Chemistry</p>
                <p className="text-gray-600 text-sm mb-4">PhD in Physics, 15 years teaching experience</p>
                <p className="text-gray-700 mb-4">
                  Dr. Lim brings complex scientific concepts to life through practical demonstrations and real-world applications, making science accessible and interesting for all students.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Secondary</span>
                </div>
              </div>
            </div>

            {/* Tutor 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Mr. Rajesh Kumar</h3>
                <p className="text-blue-600 mb-2">Mathematics & Additional Mathematics</p>
                <p className="text-gray-600 text-sm mb-4">BSc in Engineering, 10 years teaching experience</p>
                <p className="text-gray-700 mb-4">
                  Mr. Rajesh excels at breaking down complex mathematical problems into simple steps, helping students develop strong problem-solving skills and mathematical confidence.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Secondary</span>
                </div>
              </div>
            </div>

            {/* Tutor 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Ms. Aisha Abdullah</h3>
                <p className="text-blue-600 mb-2">Bahasa Malaysia & Geography</p>
                <p className="text-gray-600 text-sm mb-4">BA in Malay Studies, 7 years teaching experience</p>
                <p className="text-gray-700 mb-4">
                  Ms. Aisha's engaging teaching style and deep knowledge of Malaysian culture and geography make her classes both educational and enjoyable for students.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Primary</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Secondary</span>
                </div>
              </div>
            </div>

            {/* Tutor 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Mr. Jason Wong</h3>
                <p className="text-blue-600 mb-2">Science & Biology</p>
                <p className="text-gray-600 text-sm mb-4">BSc in Biology, 5 years teaching experience</p>
                <p className="text-gray-700 mb-4">
                  Mr. Wong specializes in making science fun and accessible for younger students, using experiments and interactive activities to spark curiosity and interest in scientific concepts.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Primary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Parents & Students Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Mrs. Tan</h4>
                  <p className="text-gray-600 text-sm">Parent of Secondary Student</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Ms. Nurul has been an incredible mathematics tutor for my daughter. Her grades have improved from a C to an A- in just one semester. The personalized attention and clear explanations have made all the difference."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Ahmad</h4>
                  <p className="text-gray-600 text-sm">SPM Student</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Dr. Lim's physics classes have completely changed how I view the subject. What used to be my most difficult subject is now one of my favorites. Her practical examples and patient explanations have been invaluable."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Mrs. Kumar</h4>
                  <p className="text-gray-600 text-sm">Parent of Primary Student</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Mr. Jason has a special way with children. My son used to dread science lessons, but now he comes home excited to share what he learned. The hands-on activities and experiments have sparked a real interest in science."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Siti</h4>
                  <p className="text-gray-600 text-sm">PT3 Student</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Ms. Aisha makes Bahasa Malaysia so interesting with stories and cultural insights. Her classes are always engaging, and she's very patient with explaining grammar rules. My writing has improved tremendously."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Teaching Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Are you a passionate educator looking to make a difference in students' lives? We're always looking for talented tutors to join our team.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">We're Looking For:</h3>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Qualified teachers with at least a bachelor's degree in their subject area</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Minimum 2 years of teaching or tutoring experience</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Passion for education and ability to connect with students</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Excellent communication skills and fluency in English and Bahasa Malaysia</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Comfort with both in-person and online teaching environments</span>
              </li>
            </ul>
            <a 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block"
            >
              Apply to Join Our Team
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Learn from the Best</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our tutors are ready to help your child achieve academic excellence. Contact us today to get started.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-block"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
