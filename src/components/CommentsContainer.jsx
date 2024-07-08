import { useState } from "react";
import commentsData from "../utils/commentsData";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { RiArrowDownWideLine } from "react-icons/ri";

const Comment = ({ data }) => {
  const [increaseCount, setIncreaseCount] = useState(0);
  const [decreaseCount, setDecreaseCount] = useState(0);
  const [isRepliesOpen, setIsRepliesOpen] = useState(false);

  const toggleReplies = () => {
    setIsRepliesOpen(!isRepliesOpen);
  };
  const { name, text, img, replies } = data;

  return (
    <div className="py-2 px-2">
      <div className="flex items-center">
        <img
          className="h-12 w-12 object-cover rounded-full"
          alt="user"
          src={img}
        ></img>

        <p className="pl-2 font-bold">{name}</p>
      </div>

      <p className="pl-14">{text}</p>

      <div className="flex pl-14 items-center mt-2">
        <button
          className="flex items-center"
          onClick={() => {
            setIncreaseCount(increaseCount + 1);
          }}
        >
          <BiLike className="text-lg mr-1" />
          {increaseCount > 0 ? `${increaseCount}` : ""}
        </button>

        <button
          className="flex items-center ml-3 "
          onClick={() => {
            setDecreaseCount(decreaseCount - 1);
          }}
        >
          <BiDislike className="text-lg mr-1" />
          {decreaseCount < 0 ? `${-decreaseCount}` : ""}
        </button>

        <p className="pl-3 font-bold text-xs">Reply</p>
      </div>

      <button className="flex items-center pl-14 mt-2 text-blue-400 font-semibold">
        <RiArrowDownWideLine className="mr-2" onClick={toggleReplies} />
        {replies.length > 0 ? `${replies.length} reply` : ""}
      </button>

      {isRepliesOpen && replies.length > 0 && (
        <div className="pl-16">
          <CommentsList comments={replies} />
        </div>
      )}
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="border border-gray-50 bg-gray-100 px-2 py-3 rounded-md">
      <h1 className="text-lg font-bold pl-2">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
