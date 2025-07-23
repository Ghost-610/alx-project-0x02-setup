// import React from 'react'
import Header from "../components/layout/Header";
import Card from "@/components/common/card";


export default function HomePageProps() {
  return (
    <div>
      <Header />
      <h1 className="text-center text-4xl font-bold text-yellow-700 my-8">
        Welcome Page
      </h1>
      <p className="text-center text-lg text-gray-600 mb-4">
        This is the home page of the ALX project 0x02-setup.
        <br />
        The project is designed to help you set up your development environment.
      </p>
      <hr />
      {/* ✅ Use static path from public/ */}
      {/* <img
        src="/assets/images/house.png"
        alt="Home Image"
        className="mx-auto my-4"
      />
      <p className="text-center text-md text-gray-500">
        Explore the project and learn more about its objectives.
      </p> */}

      <br />

      <div>
        <Card
          title="Card Title"
          content="This is the content of the card."
          imageSrc="/assets/images/IMG.jpg" // must be in public/assets/images
          imageAlt="Sample card image"
        />
        <br />
        <Card
          title="Card Title"
          content="This is the content of the card."
          imageSrc="/assets/images/IMG.jpg" // must be in public/assets/images
          imageAlt="Sample card image"
        />
       <br />
        <Card
          title="Card Title"
          content="This is the content of the card."
          imageSrc="/assets/images/IMG.jpg" // must be in public/assets/images
          imageAlt="Sample card image"
        />
      </div>
      <div className="text-center mt-8">
        <a href="/about" className="text-blue-500 hover:underline">
          Learn more about this project
        </a>
      </div>
    </div>
  );
}
