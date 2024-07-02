import React, { useEffect, useState } from "react";
import Replies from "./Replies";
import {  useLocalStorage } from "./Action";
export type items = {
  id: Number;
  comment: string;
  items: items[];
};

type Comment = { id: Number; comment: string; items: items[] };
type CommentData = Comment[];
const Comments = () => {
  let commentsdata = [
    {
      id: 1,
      comment: "first comment",
      items: [
        { id: 11, comment: "first comment first reply", items: [] },
        { id: 12, comment: "first comment second reply", items: [] },
      ],
    },
    {
      id: 2,
      comment: "second comment",
      items: [
        { id: 21, comment: "second comment first reply", items: [] },
        { id: 22, comment: "second comment second reply", items: [] },
      ],
    },
  ];
  const { setItem , getItem } = useLocalStorage("comment-section")

  setItem(commentsdata);
  const data = getItem()
  const [addComment, setAddComment] = useState("");
  const [allComments, setAllComments] = useState<CommentData>(data);
  const [replyChange, setReplyChange] = useState(false)
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddComment(event.target.value);
  };
  useEffect(()=>{
     setItem(allComments)
  },[addComment,replyChange])

  function onAddComment() {
    console.log(allComments);
    
 setReplyChange(true)
    // if (addComment !== "") {
    //   setAllComments((prev: any) => {
    //     return [
    //       {
    //         id: Math.random() * 100,
    //         comment: addComment,
    //         items: [],
    //       },
    //       ...prev,
    //     ];
    //   });
      
    // }
  }

  return (

    <div className="comment-section min-h-screen bg-zinc-500">
      <div className="w-fit  flex flex-col min-w-[50%] mt-10 gap-2 ">
        <input
          className="w-full border-[1px]  border-zinc-950"
          onChange={onChangeHandler}
          type="text"
          value={addComment}
        />
        <button className="border-[1px] w-[20%] border-zinc-950 rounded-full" onClick={()=>{
            if (addComment !== "") {
              setAllComments((prev: any) => {
                return [
                  {
                    id: Math.random() * 100,
                    comment: addComment,
                    items: [],
                  },
                  ...prev,
                ];
              });
              setAddComment("");
              
            }
            
        }}>Comment</button>
      </div>
    <div className=" min-w-[50%] "> {allComments.map((item) => {
        return (
       <Replies  key={item.id.toString()} item={item}  replyChange={onAddComment}/>
        );
      })}</div> 
    </div>
  );
};

export default Comments;
