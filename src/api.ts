

export  let data = [
    {
        id: 1,
        comment: "first comment",
        replies: [
            { id: 11, reply: "first comment first reply" },
            { id: 12, reply: "first comment second reply" }
        ]
    },
    {
        id: 2,
        comment: "second comment",
        replies: [
            { id: 21, reply: "second comment first reply" },
            { id: 22, reply: "second comment second reply" }
        ]
    }
];
  // try {
  //   const res = await fetch("http://localhost:3000/comments")
  //   const data = await res.json()
  //   console.log( data);
    
  //   return  data;
  // } catch (error) {
  //   console.log(error);
    
  // }
