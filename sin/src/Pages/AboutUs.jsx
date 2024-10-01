import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './AboutUs.css'; // Separate CSS for custom styling

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <section className="about-us-banner p-4 flex justify-center items-center flex-col text-center">
        <h1 className="text-6xl font-bold font-[poppins] text-black mb-4">Who We Are?</h1>
        <p className="text-xl text-black max-w-3xl">
          At Sin Engineering, we innovate and bring cutting-edge technology into reality. Our dedicated team strives for perfection, delivering modern solutions for the future.
        </p>
      </section>

      <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 about-us-content">
        <div className="flex flex-col justify-center items-center text-center">
          <img src="./team.png" className="h-48 md:h-56 lg:h-64 rounded-lg hover:scale-105 transition-transform duration-300" alt="Our Team" />
          <h2 className="text-2xl font-semibold mt-4">Our Passionate Team</h2>
          <p className="text-gray-600 mt-2">A dynamic group of engineers, designers, and problem-solvers dedicated to building the future.</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <img src="./innovation.png" className="h-48 md:h-56 lg:h-64 rounded-lg hover:scale-105 transition-transform duration-300" alt="Innovation" />
          <h2 className="text-2xl font-semibold mt-4">Innovative Solutions</h2>
          <p className="text-gray-600 mt-2">Creating state-of-the-art products that redefine how we interact with technology.</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <img src="./growth.png" className="h-48 md:h-56 lg:h-64 rounded-lg hover:scale-105 transition-transform duration-300" alt="Growth" />
          <h2 className="text-2xl font-semibold mt-4">Our Growth Journey</h2>
          <p className="text-gray-600 mt-2">From humble beginnings to becoming an industry leader, our journey has been transformative.</p>
        </div>
      </section>

      <section className="p-8 text-center bg-gray-100 mt-8">
        <h2 className="text-3xl font-bold mb-6">What Drives Us?</h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-lg">
          At Sin Engineering, we believe in pushing the boundaries of innovation. Our team is fueled by a desire to revolutionize industries through smart engineering, research, and development. From cutting-edge technology solutions to sustainable practices, we are driven by the power of innovation and passion.
        </p>
      </section>

      <section className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
        <div>
          <h2 className="text-3xl font-bold">Our Vision</h2>
          <p className="text-gray-600 mt-4 text-lg">
            To lead the way in engineering innovation and create transformative solutions that inspire future generations. We aim to be at the forefront of technological advancements, fostering growth and sustainability in all we do.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Our mission is to deliver innovative products and services that solve real-world challenges. We strive to provide solutions that exceed expectations, focusing on efficiency, design, and sustainability.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
