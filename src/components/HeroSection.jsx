import React from 'react';

function HeroSection() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center herosec">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">৫ মিনিটে টেকনাফ থেকে তেতুলিয়া
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
            <span className="text-green-300 font-bold ml-4 ">সুপার  ফাস্ট ডেলিভারি</span>
          </h1>
          
          <p className="mb-8 leading-relaxed">হোনেন মিয়া আমাগোরে খালি মাল-সামানা দিয়া আপনি নাকে সরিষার তেল দিয়ে ঘুমাইবেন। আপনার মাল পাঁচ মিনিটে টেকনাফ থেকে তেতুলিয়া পৌঁছানোর দায়িত্ব আমাদের। কান খাড়া করে হুনেন, আনাড়ি লোকের কাছে দিয়া পিছন মারা খাইয়েন না।</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">পিকআপ ডাকুন</button>
            <a href="http://"><button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">যোগাযোগ</button></a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="src/images/pic3.jpg" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
