// import { AboutProps } from "@/interfaces";
import Button from "@/components/common/button";
import Header from "../components/layout/Header";

const About: React.FC = () => {
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
      <hr />
      <Button
        size="large"
        shape="rounded-md"
        onClick={() => alert("Button clicked!")}
      >
        Click Me
      </Button>
      <hr />

        <Button
        size="medium"
        shape="rounded-full"
        onClick={() => alert("Button clicked!")}
      >
        Click Me
      </Button> 
      <hr />
        <Button
        size="small"
        shape="rounded-sm"
        onClick={() => alert("Button clicked!")}
      >
        Click Me
      </Button>  
    </div>  
  );
};
export default About;
