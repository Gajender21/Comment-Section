import React, { Dispatch, SetStateAction, useState } from "react";
import { items } from "./Comments";
import { useLocalStorage } from "./Action";

const Replies = ({ item ,replyChange}: { item: items  ,replyChange:any}) => {
  const [data, setdata] = useState(item);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [storeReply, setStoreReply] = useState("");
  const [showReply, setShowReply] = useState(false);
  function ReplyHandler() {
    if (storeReply!=="") {
      setdata((prev) => {
        return {
          id: prev.id,
          comment: prev.comment,
          items: [
            ...prev.items,
            {
              id: Math.random() * 100,
              comment: storeReply,
              items: [],
            },
          ],
        };
      });

      setShowReply(true);
      setShowReplyInput(false);
      setStoreReply("");
      replyChange();
    }
   
  }
  return (
    <div key={data.id.toString()} className="mt-5 ml-5 w-auto mb-4 border-l-[1px] border-zinc-950  ">
      <input className="w-full " type="text" value={data.comment} readOnly />
      <div className="flex">
      {!showReply ? (
        <img
          onClick={() => setShowReply(true)}
          src="src\assets\down-arrow.png"
          alt=""
          width={30}
        />
      ) : (
        <img
          onClick={() => setShowReply(false)}
          src="src\assets\up-arrow.png"
          alt=""
          width={30}
        />
      )}
      {!showReplyInput ? (
       
          <button
            className="border-[1px] rounded-full p-1"
            onClick={() => setShowReplyInput(!showReplyInput)}
          >
            Reply
          </button>
       
      ) : (
        <>
          <button
            className="border-[1px] rounded-full p-1"
            onClick={() => setShowReplyInput(false)}
          >
            Cancel
          </button>
        </>
      )}</div>

      {showReplyInput && (
        <div>
          <input
            type="text"
            name=""
            id=""
            onChange={(event) => {
              setStoreReply(event.target.value);
            }}
            value={storeReply}
          />

          <button
            className="border-[1px] rounded-full p-1"
            onClick={ReplyHandler}
            
          >
            Reply
          </button>
        </div>
      )}
      {showReply && data.items &&
        data.items.map((i) => {
          return <Replies key={i.id.toString()} item={i} replyChange={replyChange}/>;
        })}
    </div>
  );
};

export default Replies;
