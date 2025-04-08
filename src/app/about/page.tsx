import Image from 'next/image';

export const metadata = {
  title: 'About Us | Tunas Perkasa',
  description: 'Learn about Tunas Perkasa, our mission, vision, and our dedicated team of tutors.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Tunas Perkasa</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering students to achieve academic excellence through personalized tutoring and dedicated support.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Tunas Perkasa was founded in 2020 with a simple mission: to provide high-quality, accessible education to primary and secondary students in Malaysia. Our founder, a passionate educator with over 15 years of teaching experience, recognized the need for personalized tutoring that addresses each student's unique learning style and academic needs.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small tutoring service with just a handful of students has grown into a trusted educational institution serving hundreds of students across Malaysia, both in-person and online.
              </p>
              <p className="text-gray-700">
                The name "Tunas Perkasa" reflects our philosophy: nurturing young minds (Tunas) to become powerful, capable individuals (Perkasa) through education.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 p-2 rounded-lg shadow-md">
                <Image 
                  src="/placeholder-about.jpg" 
                  alt="Tunas Perkasa tutoring center" 
                  width={600} 
                  height={400}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide accessible, high-quality education that empowers students to achieve academic excellence and develop a lifelong love for learning. We strive to create a supportive environment where every student can reach their full potential through personalized attention and innovative teaching methods.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading tutoring service in Malaysia, recognized for our educational excellence, innovative teaching methods, and the success of our students. We envision a future where every student has access to quality education that prepares them for academic success and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center mb-4 h-20 w-20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in everything we do, from our teaching methods to our student support services.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center mb-4 h-20 w-20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Personalization</h3>
              <p className="text-gray-700">
                We recognize that each student is unique, with different learning styles, strengths, and areas for improvement.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center mb-4 h-20 w-20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
              <p className="text-gray-700">
                We are committed to continuous improvement and staying updated with the latest educational methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Ahmad Razali</h3>
                <p className="text-blue-600 mb-4">Founder & Director</p>
                <p className="text-gray-700">
                  With over 15 years of teaching experience, Ahmad founded Tunas Perkasa with a vision to transform education in Malaysia.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Dr. Sarah Lim</h3>
                <p className="text-blue-600 mb-4">Academic Director</p>
                <p className="text-gray-700">
                  Dr. Lim oversees our curriculum development and ensures our teaching methods align with the latest educational research.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Rajesh Kumar</h3>
                <p className="text-blue-600 mb-4">Operations Manager</p>
                <p className="text-gray-700">
                  Rajesh ensures the smooth running of both our offline and online tutoring services, focusing on student experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Tunas Perkasa Family</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference of personalized education tailored to your child's needs.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
