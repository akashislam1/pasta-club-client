import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ChefSection from "../Chef-Section/ChefSection";

const Home = () => {
  const chefdata = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <section className="my-20">
        <h1 className="md:text-center mb-6 text-3xl font-bold underline p-3">
          Our <span className="text-[#F65900] underline">Master Chef</span>
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          {chefdata?.map((data) => (
            <ChefSection key={data.chef_id} data={data}></ChefSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;