import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock Your Academic Potential</h1>
            <p className="text-xl mb-8">Tunas Perkasa provides high-quality tutoring services for primary and secondary students, both offline and online.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg text-center"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="bg-transparent hover:bg-blue-700 text-white border border-white font-bold py-3 px-6 rounded-lg text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <Image
                src="/placeholder-student.jpg"
                alt="Students learning"
                width={500}
                height={300}
                className="rounded"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Tutoring Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Offline Tutoring */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Offline Tutoring</h3>
              <p className="text-gray-600 mb-4">Join our classroom sessions with experienced tutors in a conducive learning environment.</p>
              <Link href="/services#offline" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>

            {/* Online Tutoring */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Online Tutoring</h3>
              <p className="text-gray-600 mb-4">Learn from the comfort of your home with our interactive online tutoring sessions.</p>
              <Link href="/services#online" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>

            {/* Exam Preparation */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Exam Preparation</h3>
              <p className="text-gray-600 mb-4">Specialized programs to help students excel in UPSR, PT3, and SPM examinations.</p>
              <Link href="/services#exam-prep" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Tunas Perkasa?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Experienced Tutors</h3>
                <p className="text-gray-600">Our tutors are highly qualified with years of teaching experience and deep subject knowledge.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Personalized Approach</h3>
                <p className="text-gray-600">We tailor our teaching methods to match each student's learning style and academic needs.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Curriculum</h3>
                <p className="text-gray-600">Our programs are aligned with the Malaysian education system and cover all key subjects.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Choose between weekday or weekend classes, with options for both offline and online sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Ahmad Rizal</h4>
                  <p className="text-gray-600 text-sm">SPM Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Thanks to Tunas Perkasa, I improved my Mathematics and Science grades significantly. The tutors are patient and explain concepts clearly."</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Siti Aminah</h4>
                  <p className="text-gray-600 text-sm">PT3 Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The online classes are very interactive and convenient. I can learn from home without compromising on the quality of education."</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Mrs. Lee</h4>
                  <p className="text-gray-600 text-sm">Parent</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"My son's confidence has grown tremendously since joining Tunas Perkasa. The personalized attention has made a big difference in his academic performance."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Excel Academically?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join Tunas Perkasa today and take the first step towards academic excellence.</p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-block"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
}
