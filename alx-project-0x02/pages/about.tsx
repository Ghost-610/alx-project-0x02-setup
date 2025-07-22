import Header from '../components/layout/Header';

export default function AboutPage() {
  return (
    <div>
           <Header />
      <h1 className="text-center text-4xl font-bold text-orange-700 my-8">
        About Page
      </h1>
      <p className="text-center text-lg text-gray-600 mb-4">
        This is the about page of the ALX project 0x02-setup.
        <br />
        Here you can find more information about the project and its objectives.
      </p>
    </div>
  );
}