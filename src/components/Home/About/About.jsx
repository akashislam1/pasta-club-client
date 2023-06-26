import { FaArrowRight } from "react-icons/fa";
import aboutImg from "../../../assets/category/About.jpg";

const About = () => {
  return (
    <div className=" w-full md:w-5/6 mx-auto min-h-screen">
      <div className="text-center font-bold text-4xl  mb-10">
        <h1 className="md:text-center mb-6 text-3xl font-bold underline p-3">
          About <span className="text-[#F65900] underline">Us</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-x-hidden overflow-y-hidden">
        <div className="">
          <img className="rounded-md w-full" src={aboutImg} alt="" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">
            We Have Everything You Need ?
          </h3>
          <p className="mb-5">
            Italian pasta can come in various colors and flavors. While the
            traditional color of pasta is yellow or off-white, you can find
            pasta in different hues by incorporating natural ingredients into
            the dough.
            <br />
            Remember that when making colored pasta, it&apos;s essential to
            balance the moisture levels in the dough, as the added ingredients
            can affect its consistency. Additionally, you may need to adjust the
            cooking time slightly, as colored pasta may cook faster or slower
            than regular pasta. <br /> Enjoy experimenting with different colors
            and flavors in your pasta creations!
          </p>

          <button className="font-semibold text-white bg-[#F65900] text-center  rounded  hover:bg-white hover:text-[#F17228] border hover:border-[#F65900] duration-300 py-2 px-8  focus:outline-none focus:shadow-outline">
            Contact us{" "}
            <FaArrowRight className="inline-block ml-3"></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
