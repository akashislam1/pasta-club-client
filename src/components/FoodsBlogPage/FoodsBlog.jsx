import { FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import {
  pasta1,
  pasta2,
  pasta3,
  pasta4,
  pasta5,
  pasta6,
} from "../Images/Images";

const FoodsBlog = () => {
  return (
    <>
      <div className="">
        <h1 className="md:text-center my-6 text-3xl font-bold underline p-3">
          <span className="text-[#F65900] underline">Foods Blog</span>
        </h1>
      </div>
      <div className="w-full md:w-5/6 mx-auto min-h-screen mb-10">
        <div className="overflow-x-hidden overflow-y-hidden grid md:grid-cols-3 gap-5 ">
          {/* Card 1 */}
          <div className="bg-slate-50 p-2 flex flex-col gap-5 rounded-2xl">
            <img
              className="w-full h-56 rounded-xl mx-auto "
              src={pasta1}
              alt=""
            />
            <div>
              <h4 className="font-bold text-xl text-[#F17228]">February 23</h4>
              <div className="space-y-2 mb-2">
                <div className="flex gap-3 mt-2">
                  <p className="flex items-center font-semibold gap-2">
                    <FaRegCalendarAlt></FaRegCalendarAlt>
                    17 February 2023
                  </p>
                  <p className="flex items-center font-semibold gap-2">
                    <FaUserAlt></FaUserAlt>
                    By John Doe
                  </p>
                </div>
                <h2 className="font-bold text-xl">
                  Sweet Food Pasta and Pizza
                </h2>
                <p className="text-[#787878]">
                  Faded short sleeves t-shirt with high neckline. Soft and
                  stretchy material for a comfortable fit. Accessorize with a
                  straw hat...
                </p>
                <button className="font-semibold text-white bg-[#F65900] text-center  rounded  hover:bg-white hover:text-[#F17228] border hover:border-[#F65900] duration-200 py-2 px-8  focus:outline-none focus:shadow-outline">
                  Read more...
                </button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-slate-50 p-2 flex flex-col gap-5 rounded-2xl">
            <img
              className="w-full h-56 rounded-xl mx-auto "
              src={pasta2}
              alt=""
            />
            <div>
              <h4 className="font-bold text-xl text-[#F17228]">February 23</h4>
              <div className="space-y-2 mb-2">
                <div className="flex gap-3 mt-2">
                  <p className="flex items-center font-semibold gap-2">
                    <FaRegCalendarAlt></FaRegCalendarAlt>
                    17 February 2023
                  </p>
                  <p className="flex items-center font-semibold gap-2">
                    <FaUserAlt></FaUserAlt>
                    By John Doe
                  </p>
                </div>
                <h2 className="font-bold text-xl">
                  Amazing Homemade Connies Pasta
                </h2>
                <p className="text-[#787878]">
                  Faded short sleeves t-shirt with high neckline. Soft and
                  stretchy material for a comfortable fit. Accessorize with a
                  straw hat...
                </p>
                <button className="font-semibold text-white bg-[#F65900] text-center  rounded  hover:bg-white hover:text-[#F17228] border hover:border-[#F65900] duration-200 py-2 px-8  focus:outline-none focus:shadow-outline">
                  Read more...
                </button>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-slate-50 p-2 flex flex-col gap-5 rounded-2xl">
            <img
              className="w-full h-56 rounded-xl mx-auto "
              src={pasta3}
              alt=""
            />
            <div>
              <h4 className="font-bold text-xl text-[#F17228]">February 23</h4>
              <div className="space-y-2 mb-2">
                <div className="flex gap-3 mt-2">
                  <p className="flex items-center font-semibold gap-2">
                    <FaRegCalendarAlt></FaRegCalendarAlt>
                    17 February 2023
                  </p>
                  <p className="flex items-center font-semibold gap-2">
                    <FaUserAlt></FaUserAlt>
                    By John Doe
                  </p>
                </div>
                <h2 className="font-bold text-xl">
                  Mid day half baked harvest Pasta
                </h2>
                <p className="text-[#787878]">
                  Faded short sleeves t-shirt with high neckline. Soft and
                  stretchy material for a comfortable fit. Accessorize with a
                  straw hat...
                </p>
                <button className="font-semibold text-white bg-[#F65900] text-center  rounded  hover:bg-white hover:text-[#F17228] border hover:border-[#F65900] duration-200 py-2 px-8  focus:outline-none focus:shadow-outline">
                  Read more...
                </button>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-slate-50 p-2 flex flex-col gap-5 rounded-2xl">
            <img
              className="w-full h-56 rounded-xl mx-auto "
              src={pasta4}
              alt=""
            />
            <div>
              <h4 className="font-bold text-xl text-[#F17228]">April 23</h4>
              <div className="space-y-2 mb-2">
                <div className="flex gap-3 mt-2">
                  <p className="flex items-center font-semibold gap-2">
                    <FaRegCalendarAlt></FaRegCalendarAlt>
                    21 April 2023
                  </p>
                  <p className="flex items-center font-semibold gap-2">
                    <FaUserAlt></FaUserAlt>
                    By Oliver Smith
                  </p>
                </div>
                <h2 className="font-bold text-xl">
                  Alive & Kickin Crust Pasta
                </h2>
                <p className="text-[#787878]">
                  Faded short sleeves t-shirt with high neckline. Soft and
                  stretchy material for a comfortable fit. Accessorize with a
                  straw hat...
                </p>
                <button className="font-semibold text-white bg-[#F65900] text-center  rounded  hover:bg-white hover:text-[#F17228] border hover:border-[#F65900] duration-200 py-2 px-8  focus:outline-none focus:shadow-outline">
                  Read more...
                </button>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-slate-50 p-2 flex flex-col gap-5 rounded-2xl">
            <img
              className="w-full h-56 rounded-xl mx-auto "
              src={pasta6}
              alt=""
            />
            <div>
              <h4 className="font-bold text-xl text-[#F17228]">May 23</h4>
              <div className="space-y-2 mb-2">
                <div className="flex gap-3 mt-2">
                  <p className="flex items-center font-semibold gap-2">
                    <FaRegCalendarAlt></FaRegCalendarAlt>
                    01 May 2023
                  </p>
                  <p className="flex items-center font-semibold gap-2">
                    <FaUserAlt></FaUserAlt>
                    By Mack Joe
                  </p>
                </div>
                <h2 className="font-bold text-xl">Brick Oven Pasta</h2>
                <p className="text-[#787878]">
                  Faded short sleeves t-shirt with high neckline. Soft and
                  stretchy material for a comfortable fit. Accessorize with a
                  straw hat...
                </p>
                <button className="font-semibold text-white bg-[#F65900] text-center  rounded  hover:bg-white hover:text-[#F17228] border hover:border-[#F65900] duration-200 py-2 px-8  focus:outline-none focus:shadow-outline">
                  Read more...
                </button>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-slate-50 p-2 flex flex-col gap-5 rounded-2xl">
            <img
              className="w-full h-56 rounded-xl mx-auto "
              src={pasta5}
              alt=""
            />
            <div>
              <h4 className="font-bold text-xl text-[#F17228]">March 23</h4>
              <div className="space-y-2 mb-2">
                <div className="flex gap-3 mt-2">
                  <p className="flex items-center font-semibold gap-2">
                    <FaRegCalendarAlt></FaRegCalendarAlt>
                    17 March 2023
                  </p>
                  <p className="flex items-center font-semibold gap-2">
                    <FaUserAlt></FaUserAlt>
                    By Higuin Chao
                  </p>
                </div>
                <h2 className="font-bold text-xl">
                  Pasta Quest with Peter Reinhart
                </h2>
                <p className="text-[#787878]">
                  Faded short sleeves t-shirt with high neckline. Soft and
                  stretchy material for a comfortable fit. Accessorize with a
                  straw hat...
                </p>
                <button className="font-semibold text-white bg-[#F65900] text-center  rounded  hover:bg-white hover:text-[#F17228] border hover:border-[#F65900] duration-200 py-2 px-8  focus:outline-none focus:shadow-outline">
                  Read more...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodsBlog;
