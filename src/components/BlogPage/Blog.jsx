import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="my-7">
        <h1 className="font-extrabold pl-4 my-4">
          1. What is the difference Between Controlled And Uncontrolled
          components?
        </h1>
        <div className="relative overflow-x-auto mb-5">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
              <tr>
                <th scope="col" className="px-6 py-3 font-extrabold">
                  Controlled components
                </th>
                <th scope="col" className="px-6 py-3 font-extrabold">
                  Uncontrolled components
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black">
                <td scope="row" className="px-6 py-4 ">
                  Does not maintain its internal state.
                </td>
                <td className="px-6 py-4">Maintains its internal state.</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black">
                <td scope="row" className="px-6 py-4 ">
                  Data is controlled by the parent component.
                </td>
                <td className="px-6 py-4">
                  Data is controlled by the DOM itself.
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black">
                <td scope="row" className="px-6 py-4 ">
                  Accepts its current value as a prop.
                </td>
                <td className="px-6 py-4">
                  Uses a ref for their current values.
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black">
                <td scope="row" className="px-6 py-4 ">
                  Allows validation control.
                </td>
                <td className="px-6 py-4">
                  Does not allow validation control.
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black ">
                <td scope="row" className="px-6 py-4 ">
                  Better control over the form elements and data.
                </td>
                <td className="px-6 py-4">
                  Limited control over the form elements and data.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h1 className="font-extrabold pl-4 my-4">
          2. How to validate React props using PropTypes ?
        </h1>
        <div className="p-4">
          <h4 className="font-semibold">
            To validate React props using PropTypes, follow these steps:
          </h4>
          <div className="flex flex-col gap-4 my-4">
            <p>
              1. Install the
              <span className="font-bold">&quot;prop-types&quot;</span> package
              if it&apos;s not already installed. You can install it using npm
              or yarn.
            </p>
            <p>
              2. Import the
              <span className="font-bold">&quot;PropTypes&quot;</span> library
              from the
              <span className="font-bold">&quot;prop-types&quot;</span> package
              at the top of your component file.
            </p>
            <p>
              3. Define the PropTypes for your component by adding a
              <span className="font-bold">&quot;propTypes&quot;</span> object as
              a property of the component&apos;s class.
            </p>
            <p>
              4. Inside the
              <span className="font-bold">&quot;propTypes&quot;</span> object,
              specify the data types and requirements for each prop using the
              appropriate PropTypes validator. For example, you can use
              <span className="font-bold">&quot;PropTypes.string&quot;</span>
              to validate that a prop is a string, or
              <span className="font-bold">
                &quot;PropTypes.number.isRequired&quot;
              </span>
              to validate that a prop is a required number.
            </p>
            <p>
              5. Once you have defined the PropTypes for your component, React
              will automatically check the props passed to your component
              against the PropTypes you have defined. If any prop doesn&apos;t
              match the specified type or is missing a required prop, React will
              log a warning in the console.
            </p>
          </div>
          <p>
            Using PropTypes to validate props is important because it helps you
            catch errors early on and ensures that your components are used
            correctly. By defining PropTypes, you can make your components more
            robust and easier to maintain over time.
          </p>
        </div>
      </div>
      <div className="my-4">
        <h1 className="font-extrabold pl-4 my-3">
          3. What is the difference between nodejs and express js ?
        </h1>
        <div className="p-4">
          <p className="mb-5">
            <span className="font-bold">Node.js: </span>Node.js is an open
            source and cross-platform runtime environment for executing
            JavaScript code outside of a browser. You need to remember that
            NodeJS is not a framework and it&apos;s not a programming language.
            Most of the people are confused and understand it&apos;s a framework
            or a programming language. We often use Node.js for building
            back-end services like APIs like Web App or Mobile App. It&apos;s
            used in production by large companies such as Paypal, Uber, Netflix,
            Walmart and so on.
          </p>
          <p>
            <span className="font-bold">Express.js: </span>Express is a small
            framework that sits on top of Node.js&apos;s web server
            functionality to simplify its APIs and add helpful new features. It
            makes it easier to organize your application&apos;s functionality
            with middle ware and routing. It adds helpful utilities to
            Node.js&apos;s HTTP objects. It facilitates the rendering of dynamic
            HTTP objects.
          </p>
        </div>
      </div>
      <div className="mb-4">
        <h1 className="font-extrabold pl-4 my-3">
          4. What is a custom hook, and why will you create a custom hook ?
        </h1>
        <div className="p-4">
          <p>
            <span className="font-bold">Custom Hook </span> is a JavaScript
            function which we create by ourselves, when we want to share logic
            between other JavaScript functions. It allows you to reuse some
            piece of code in several parts of your app.
          </p>
          <p className="mt-3">
            When we want to share logic between two JavaScript functions, we
            extract it to a third function. Both components and Hooks are
            functions, so this works for them too!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
