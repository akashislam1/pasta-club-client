import { FaAngleLeft, FaAngleRight, FaCheckCircle } from "react-icons/fa";
import { review1, review2, review3 } from "../../Images/Images";

const Reviews = () => {
  return (
    <>
      <div className="">
        <h1 className="md:text-center mb-6 text-3xl font-bold underline p-3">
          Customer <span className="text-[#F65900] underline">Review</span>
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          {/* card 1 */}
          <div className=" rounded-lg bg-slate-100 shadow-xl">
            <div className="p-10 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    className="rounded-full w-12 h-12 border border-black"
                    src={review1}
                    alt=""
                  />
                  <div className="">
                    <h3 className="font-bold from-black">
                      Samson Carlk
                      <FaCheckCircle className="inline-block ml-2"></FaCheckCircle>
                    </h3>
                    <p className="text-sm">24-04-2023</p>
                  </div>
                </div>
              </div>
              <p>
                I recently had the pleasure of dining at La Bella Trattoria and
                trying their spaghetti carbonara. It was an exquisite culinary
                experience that left me craving for more.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className=" rounded-lg bg-slate-100 shadow-xl">
            <div className="p-10 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    className="rounded-full w-12 h-12 border border-black"
                    src={review2}
                    alt=""
                  />
                  <div className="">
                    <h3 className="font-bold from-black">
                      Piteer James
                      <FaCheckCircle className="inline-block ml-2"></FaCheckCircle>
                    </h3>
                    <p className="text-sm">24-04-2023</p>
                  </div>
                </div>
              </div>
              <p>
                I recently had the pleasure of dining at La Bella Trattoria and
                trying their spaghetti carbonara. It was an exquisite culinary
                experience that left me craving for more.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className=" rounded-lg bg-slate-100 shadow-xl">
            <div className="p-10 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    className="rounded-full w-12 h-12 border border-black"
                    src={review3}
                    alt=""
                  />
                  <div className="">
                    <h3 className="font-bold from-black">
                      Anderson carbonara
                      <FaCheckCircle className="inline-block ml-2"></FaCheckCircle>
                    </h3>
                    <p className="text-sm">24-04-2023</p>
                  </div>
                </div>
              </div>
              <p>
                I recently had the pleasure of dining at La Bella Trattoria and
                trying their spaghetti carbonara. It was an exquisite culinary
                experience that left me craving for more.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center font-bold text-4xl mt-4 mb-10">
          <FaAngleLeft className="inline-block cursor-pointer text-[#F65900]"></FaAngleLeft>{" "}
          <FaAngleRight className="inline-block cursor-pointer text-[#F65900]"></FaAngleRight>
        </div>
      </div>
    </>
  );
};

export default Reviews;
