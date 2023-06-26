import { FaHamburger, FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white ">
      <div className="grid md:grid-cols-3 gap-5 px-3 py-8 w-full md:w-5/6 mx-auto">
        <div>
          <h2 className="mb-4">
            <Link to="/" className="flex items-center gap-2">
              <FaHamburger className="text-[#F58D00] text-xl "></FaHamburger>{" "}
              <span className="font-bold text-xl text-[#F17228] ">Pasta</span>
              <span className="font-bold text-xl text-[#FFB30E]">Club</span>
            </Link>
          </h2>
          <p>
            consectetur adipisicing elit. Harum hic autem suscipit odio, quasi
            ea voluptas ipsum quod, dignissimos inventore tempora deleniti
            voluptates repudiandae .
          </p>
        </div>
        <div className="md:text-center ">
          <h2 className="mb-4 font-semibold">Contact Us</h2>
          <p>Call +01 1234567890 </p>
          <p>pastaclub@gmail.com</p>
          <div className="flex md:justify-center items-center gap-4 my-4 cursor-pointer">
            <span>
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="126.444 2.281 589 589"
                id="twitter"
              >
                <circle
                  cx="420.944"
                  cy="296.781"
                  r="294.5"
                  fill="#2daae1"
                ></circle>
                <path
                  fill="#fff"
                  d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Ebene 1"
                viewBox="0 0 1024 1024"
                id="facebook-logo-2019"
              >
                <path
                  fill="#1877f2"
                  d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                ></path>
                <path
                  fill="#fff"
                  d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="147.553 39.286 514.231 514.631"
                id="snapchat"
              >
                <path
                  fill="#fffc00"
                  d="M147.553 423.021v.023c.308 11.424.403 22.914 2.33 34.268 2.042 12.012 4.961 23.725 10.53 34.627 7.529 14.756 17.869 27.217 30.921 37.396 9.371 7.309 19.608 13.111 30.94 16.771 16.524 5.33 33.571 7.373 50.867 7.473 10.791.068 21.575.338 32.37.293 78.395-.33 156.792.566 235.189-.484 10.403-.141 20.636-1.41 30.846-3.277 19.569-3.582 36.864-11.932 51.661-25.133 17.245-15.381 28.88-34.205 34.132-56.924 3.437-14.85 4.297-29.916 4.444-45.035v-3.016c0-1.17-.445-256.892-.486-260.272-.115-9.285-.799-18.5-2.54-27.636-2.117-11.133-5.108-21.981-10.439-32.053-5.629-10.641-12.68-20.209-21.401-28.57-13.359-12.81-28.775-21.869-46.722-26.661-16.21-4.327-32.747-5.285-49.405-5.27-.027-.004-.09-.173-.094-.255H278.56c-.005.086-.008.172-.014.255-9.454.173-18.922.102-28.328 1.268-10.304 1.281-20.509 3.21-30.262 6.812-15.362 5.682-28.709 14.532-40.11 26.347-12.917 13.386-22.022 28.867-26.853 46.894-4.31 16.084-5.248 32.488-5.271 49.008"
                ></path>
                <path
                  fill="#fff"
                  d="M407.001 473.488c-1.068 0-2.087-.039-2.862-.076-.615.053-1.25.076-1.886.076-22.437 0-37.439-10.607-50.678-19.973-9.489-6.703-18.438-13.031-28.922-14.775-5.149-.854-10.271-1.287-15.22-1.287-8.917 0-15.964 1.383-21.109 2.389-3.166.617-5.896 1.148-8.006 1.148-2.21 0-4.895-.49-6.014-4.311-.887-3.014-1.523-5.934-2.137-8.746-1.536-7.027-2.65-11.316-5.281-11.723-28.141-4.342-44.768-10.738-48.08-18.484a7.187 7.187 0 0 1-.584-2.443 4.518 4.518 0 0 1 3.777-4.711c22.348-3.68 42.219-15.492 59.064-35.119 13.049-15.195 19.457-29.713 20.145-31.316a2.85 2.85 0 0 1 .101-.217c3.247-6.588 3.893-12.281 1.926-16.916-3.626-8.551-15.635-12.361-23.58-14.882-1.976-.625-3.845-1.217-5.334-1.808-7.043-2.782-18.626-8.66-17.083-16.773 1.124-5.916 8.949-10.036 15.273-10.036 1.756 0 3.312.308 4.622.923 7.146 3.348 13.575 5.045 19.104 5.045 6.876 0 10.197-2.618 11-3.362a1170.709 1170.709 0 0 0-.679-11.262c-1.614-25.675-3.627-57.627 4.546-75.95 24.462-54.847 76.339-59.112 91.651-59.112a3909.561 3909.561 0 0 0 7.582-.071c15.354 0 67.339 4.27 91.816 59.15 8.173 18.335 6.158 50.314 4.539 76.016l-.076 1.23c-.222 3.49-.427 6.793-.6 9.995.756.696 3.795 3.096 9.978 3.339 5.271-.202 11.328-1.891 17.998-5.014 2.062-.968 4.345-1.169 5.895-1.169 2.343 0 4.727.456 6.714 1.285l.106.041c5.66 2.009 9.367 6.024 9.447 10.242.071 3.932-2.851 9.809-17.223 15.485-1.472.583-3.35 1.179-5.334 1.808-7.952 2.524-19.951 6.332-23.577 14.878-1.97 4.635-1.322 10.326 1.926 16.912.036.072.067.145.102.221 1 2.344 25.205 57.535 79.209 66.432a4.523 4.523 0 0 1 3.778 4.711 7.252 7.252 0 0 1-.598 2.465c-3.289 7.703-19.915 14.09-48.064 18.438-2.642.408-3.755 4.678-5.277 11.668-.63 2.887-1.271 5.717-2.146 8.691-.819 2.797-2.641 4.164-5.567 4.164h-.441c-1.905 0-4.604-.346-8.008-1.012-5.95-1.158-12.623-2.236-21.109-2.236-4.948 0-10.069.434-15.224 1.287-10.473 1.744-19.421 8.062-28.893 14.758-13.265 9.379-28.272 19.987-50.707 19.987"
                ></path>
                <path
                  fill="#020202"
                  d="M408.336 124.235c14.455 0 64.231 3.883 87.688 56.472 7.724 17.317 5.744 48.686 4.156 73.885-.248 3.999-.494 7.875-.694 11.576l-.084 1.591 1.062 1.185c.429.476 4.444 4.672 13.374 5.017l.144.008.15-.003c5.904-.225 12.554-2.059 19.776-5.442 1.064-.498 2.48-.741 3.978-.741 1.707 0 3.521.321 5.017.951l.226.09c3.787 1.327 6.464 3.829 6.505 6.093.022 1.28-.935 5.891-14.359 11.194-1.312.518-3.039 1.069-5.041 1.7-8.736 2.774-21.934 6.96-26.376 17.427-2.501 5.896-1.816 12.854 2.034 20.678 1.584 3.697 26.52 59.865 82.631 69.111a2.487 2.487 0 0 1-.229.9c-.951 2.24-6.996 9.979-44.612 15.783-5.886.902-7.328 7.5-9 15.17-.604 2.746-1.218 5.518-2.062 8.381-.258.865-.306.914-1.233.914h-.442c-1.668 0-4.2-.346-7.135-.922-5.345-1.041-12.647-2.318-21.982-2.318-5.21 0-10.577.453-15.962 1.352-11.511 1.914-20.872 8.535-30.786 15.543-13.314 9.408-27.075 19.143-48.071 19.143-.917 0-1.812-.031-2.709-.076l-.236-.01-.237.018c-.515.045-1.034.068-1.564.068-20.993 0-34.76-9.732-48.068-19.143-9.916-7.008-19.282-13.629-30.791-15.543-5.38-.896-10.752-1.352-15.959-1.352-9.333 0-16.644 1.428-21.978 2.471-2.935.574-5.476 1.066-7.139 1.066-1.362 0-1.388-.08-1.676-1.064-.844-2.865-1.461-5.703-2.062-8.445-1.676-7.678-3.119-14.312-9.002-15.215-37.613-5.809-43.659-13.561-44.613-15.795a2.739 2.739 0 0 1-.231-.918c56.11-9.238 81.041-65.408 82.63-69.119 3.857-7.818 4.541-14.775 2.032-20.678-4.442-10.461-17.638-14.653-26.368-17.422-2.007-.635-3.735-1.187-5.048-1.705-11.336-4.479-14.823-8.991-14.305-11.725.601-3.153 6.067-6.359 10.837-6.359 1.072 0 2.012.173 2.707.498 7.747 3.631 14.819 5.472 21.022 5.472 9.751 0 14.091-4.537 14.557-5.055l1.057-1.182-.085-1.583c-.197-3.699-.44-7.574-.696-11.565-1.583-25.205-3.563-56.553 4.158-73.871 23.37-52.396 72.903-56.435 87.525-56.435.36 0 6.717-.065 6.717-.065.26-.002.549-.006.852-.006m0-9.038h-.017c-.333 0-.646 0-.944.004l-6.633.066c-8.566 0-25.705 1.21-44.115 9.336-10.526 4.643-19.994 10.921-28.14 18.66-9.712 9.221-17.624 20.59-23.512 33.796-8.623 19.336-6.576 51.905-4.932 78.078l.006.041c.176 2.803.361 5.73.53 8.582-1.265.581-3.316 1.194-6.339 1.194-4.864 0-10.648-1.555-17.187-4.619-1.924-.896-4.12-1.349-6.543-1.349-3.893 0-7.997 1.146-11.557 3.239-4.479 2.63-7.373 6.347-8.159 10.468-.518 2.726-.493 8.114 5.492 13.578 3.292 3.008 8.128 5.782 14.37 8.249 1.638.645 3.582 1.261 5.641 1.914 7.145 2.271 17.959 5.702 20.779 12.339 1.429 3.365.814 7.793-1.823 13.145-.069.146-.138.289-.201.439-.659 1.539-6.807 15.465-19.418 30.152-7.166 8.352-15.059 15.332-23.447 20.752-10.238 6.617-21.316 10.943-32.923 12.855a9.038 9.038 0 0 0-7.559 9.424c.078 1.33.39 2.656.931 3.939l.013.023c1.843 4.311 6.116 7.973 13.063 11.203 8.489 3.943 21.185 7.26 37.732 9.855.836 1.59 1.704 5.586 2.305 8.322.629 2.908 1.285 5.898 2.22 9.074 1.009 3.441 3.626 7.553 10.349 7.553 2.548 0 5.478-.574 8.871-1.232 4.969-.975 11.764-2.305 20.245-2.305 4.702 0 9.575.414 14.48 1.229 9.455 1.574 17.606 7.332 27.037 14 13.804 9.758 29.429 20.803 53.302 20.803.651 0 1.304-.021 1.949-.066.789.037 1.767.066 2.799.066 23.88 0 39.501-11.049 53.29-20.799l.022-.02c9.433-6.66 17.575-12.41 27.027-13.984 4.903-.814 9.775-1.229 14.479-1.229 8.102 0 14.517 1.033 20.245 2.15 3.738.736 6.643 1.09 8.872 1.09l.218.004h.226c4.917 0 8.53-2.699 9.909-7.422.916-3.109 1.57-6.029 2.215-8.986.562-2.564 1.46-6.674 2.296-8.281 16.558-2.6 29.249-5.91 37.739-9.852 6.931-3.215 11.199-6.873 13.053-11.166.556-1.287.881-2.621.954-3.979a9.036 9.036 0 0 0-7.56-9.424c-51.585-8.502-74.824-61.506-75.785-63.758a6.454 6.454 0 0 0-.205-.438c-2.637-5.354-3.246-9.777-1.816-13.148 2.814-6.631 13.621-10.062 20.771-12.332 2.07-.652 4.021-1.272 5.646-1.914 7.039-2.78 12.07-5.796 15.389-9.221 3.964-4.083 4.736-7.995 4.688-10.555-.121-6.194-4.856-11.698-12.388-14.393-2.544-1.052-5.445-1.607-8.399-1.607-2.011 0-4.989.276-7.808 1.592-6.035 2.824-11.441 4.368-16.082 4.588-2.468-.125-4.199-.66-5.32-1.171.141-2.416.297-4.898.458-7.486l.067-1.108c1.653-26.19 3.707-58.784-4.92-78.134-5.913-13.253-13.853-24.651-23.604-33.892-8.178-7.744-17.678-14.021-28.242-18.661-18.384-8.066-35.522-9.271-44.1-9.271"
                ></path>
                <path
                  fill="none"
                  d="M147.553 39.443h514.231v514.23H147.553z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500.2"
                id="pinterest"
              >
                <ellipse
                  cx="250"
                  cy="250.1"
                  fill="#e13138"
                  rx="250"
                  ry="250.1"
                ></ellipse>
                <path
                  fill="#fff"
                  d="M259.8 133.9c-69.9 0-105.2 49.4-105.2 90.6 0 25 9.6 47.1 30.1 55.4 3.4 1.4 6.4.1 7.4-3.6.7-2.5 3.8-9 4.5-11.6 1-3.6.6-4.9-2.1-8.1-5.9-6.9-9.6-14.1-9.6-26.7 0-42 26.2-71.9 70.8-71.9 39.5 0 61.2 24.5 61.2 56.3 0 41.8-18.8 75.8-46.7 75.8-15.4 0-26.9-11.2-23.2-26.6 4.4-18.4 13-38.2 13-51.5 0-11.9-6.4-20.4-19.8-20.4-15.7 0-28.4 14.7-28.4 36.2 0 13.7 4.5 20.5 4.5 20.5s-15.9 69.7-18.8 81.5c-5.6 23.5-.8 52.2-.4 55.1.2 1.7 2.5 2.1 3.5.8 1.4-1.8 20.2-24.7 26.6-47.5 1.8-6.4 10.4-39.8 10.4-39.8 5.1 9.6 20.1 15.8 35.9 15.8 47.3 0 79.4-40.3 79.4-97.1.1-43.1-36.9-83.2-93.1-83.2z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="md:text-center">
          <h3 className="mb-4 font-semibold">Opening Hours</h3>
          <p className="my-4">Everyday</p>
          <p>10.00 Am - 10.00 Pm</p>
        </div>
      </div>
      <div className="border border-white mx-4"></div>
      <div className=" text-center p-3">
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
