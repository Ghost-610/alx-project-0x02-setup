import Header from '../components/layout/Header';

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
   {/* ✅ Use static path from public/ */}
      <img src="/assets/images/house.png" alt="Home Image" className="mx-auto my-4" />

      <p className="text-center text-md text-gray-500">
        Explore the project and learn more about its objectives.
      </p>
    </div>
  );
}
