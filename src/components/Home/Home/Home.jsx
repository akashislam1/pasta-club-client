import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ChefSection from "../Chef-Section/ChefSection";
import FoodItem from "../Food/FoodItem";
import Comment from "../Comment/Comment";
import About from "../About/About";

const Home = () => {
  const chefdata = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <section className="w-full md:w-5/6 mx-auto min-h-screen">
        <h1 className="md:text-center mb-6 text-3xl font-bold underline p-3">
          Our <span className="text-[#F65900] underline">Master Chef</span>
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          {chefdata?.map((data) => (
            <ChefSection key={data.chef_id} data={data}></ChefSection>
          ))}
        </div>
      </section>
      <section className="w-full md:w-5/6 mx-auto my-20">
        <h1 className="md:text-center mb-6 text-3xl font-bold underline p-3">
          Our <span className="text-[#F65900] underline">Delicious Foods</span>
        </h1>
        <div>
          <FoodItem></FoodItem>
        </div>
      </section>
      <section className="w-full md:w-5/6 mx-auto my-20">
        <Comment></Comment>
      </section>
    </div>
  );
};

export default Home;
