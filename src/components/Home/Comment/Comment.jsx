import React from "react";

const Comment = () => {
  return (
    <div className="bg-yellow-500 p-10 ">
      <div className="flex justify-center">
        <textarea
          className="p-5 rounded-md"
          name=""
          id=""
          cols="50"
          rows="5"
          placeholder="Add your comment here...."
        ></textarea>
      </div>
      <div className="flex justify-center my-5">
        <button className="my-btn-primary">Add Comment</button>
      </div>
    </div>
  );
};

export default Comment;
