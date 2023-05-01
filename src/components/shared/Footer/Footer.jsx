import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white text-center p-3">
        <div className="md:flex justify-center items-center gap-3 ">
          <FaRegCopyright className="inline-block mr-2"></FaRegCopyright> All
          rights Reserved
          <div className="mt-2 md:mt-0">
            <span className="  text-[#F17228] mr-2">Pasta</span>
            <span className="  text-[#FFB30E]">Club ,</span> 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
