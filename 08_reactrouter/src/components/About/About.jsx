import React from 'react';

function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-white py-16 px-6 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            We are <span className="text-blue-600">Innovators</span>,{' '}
            <span className="text-green-600">Creators</span>, and{' '}
            <span className="text-red-600">Builders</span>.
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-lg">
            At our company, we strive to create solutions that empower people. With a passionate team and a drive for
            excellence, we are here to make the world a better place.
          </p>
          <a
            href="#our-team"
            className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Meet the Team
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          {/* Image can go here */}
        </div>
      </div>

      {/* Company Info Section */}
      <div className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">What We Do</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          We are a software development company with expertise in delivering top-notch digital solutions. Our projects
          range from mobile apps to full-stack web development, and everything in between.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <span className="text-blue-600 text-4xl mb-4 inline-block">🚀</span>
            <h3 className="text-xl font-bold text-gray-900">Innovative Solutions</h3>
            <p className="mt-4 text-gray-600">
              We focus on innovation, delivering creative solutions to complex problems for our clients.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <span className="text-green-600 text-4xl mb-4 inline-block">💡</span>
            <h3 className="text-xl font-bold text-gray-900">Creative Ideas</h3>
            <p className="mt-4 text-gray-600">
              Our team thrives on creativity, producing fresh and unique ideas for every project we work on.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <span className="text-red-600 text-4xl mb-4 inline-block">⚙️</span>
            <h3 className="text-xl font-bold text-gray-900">Solid Development</h3>
            <p className="mt-4 text-gray-600">
              With cutting-edge technology, we ensure all our products are reliable, scalable, and performant.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div id="our-team" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We’re a diverse group of individuals united by a shared passion for technology and innovation. Get to know the
          faces behind our company.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="mt-6 text-lg font-bold text-gray-900">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
            <p className="mt-2 text-sm text-gray-500">
              John leads the company with vision and determination. He’s passionate about turning ideas into reality.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="mt-6 text-lg font-bold text-gray-900">Jane Smith</h3>
            <p className="text-gray-600">Lead Developer</p>
            <p className="mt-2 text-sm text-gray-500">
              Jane is the technical mastermind behind our projects, ensuring everything runs smoothly.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="mt-6 text-lg font-bold text-gray-900">Mark Johnson</h3>
            <p className="text-gray-600">UI/UX Designer</p>
            <p className="mt-2 text-sm text-gray-500">
              Mark designs intuitive and beautiful user experiences for our clients' applications.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 py-6 text-center text-white">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default About;
