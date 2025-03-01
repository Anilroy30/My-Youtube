import React from 'react'

const commentsData = [
    {
      name: "John Doe",
      text: "This is the first comment on the thread.",
      replies: [
        {
          name: "Jane Smith",
          text: "This is a reply to John.",
          replies: [
            {
              name: "Alice Johnson",
              text: "Replying to Jane with my thoughts.",
              replies: [
                {
                  name: "Bob Brown",
                  text: "A deep reply inside Alice's comment.",
                  replies: [
                    {
                      name: "Charlie Wilson",
                      text: "This is getting quite deep!",
                      replies: [
                        {
                          name: "Diana Adams",
                          text: "Indeed! Discussions can go very deep.",
                          replies: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Eve White",
          text: "Another reply to John's comment.",
          replies: [
            {
              name: "Frank Green",
              text: "I agree with Eve's point.",
              replies: [
                {
                  name: "Grace Hall",
                  text: "Following up on Frank's thoughts.",
                  replies: [
                    {
                      name: "Hank Lewis",
                      text: "Another deep level in this conversation.",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Michael Williams",
      text: "This is another top-level comment.",
      replies: [
        {
          name: "Sarah Davis",
          text: "Replying to Michael with some insights.",
          replies: [
            {
              name: "David Miller",
              text: "A nested reply inside Sarah's reply.",
              replies: [
                {
                  name: "Olivia Scott",
                  text: "Adding more depth here.",
                  replies: [
                    {
                      name: "Paul Harris",
                      text: "This is quite an interesting discussion!",
                      replies: [
                        {
                          name: "Quincy Allen",
                          text: "Absolutely! Loving this conversation.",
                          replies: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Thomas Baker",
      text: "Yet another comment at the top level.",
      replies: [
        {
          name: "Rachel Young",
          text: "Replying to Thomas with some questions.",
          replies: [
            {
              name: "Samuel Carter",
              text: "I have a response to Rachel.",
              replies: [
                {
                  name: "Vanessa Cooper",
                  text: "Continuing this thread with my take.",
                  replies: [
                    {
                      name: "William Parker",
                      text: "Adding more depth to this conversation.",
                      replies: [
                        {
                          name: "Xavier Martin",
                          text: "Deep discussions are always great!",
                          replies: [
                            {
                              name: "Yvonne Nelson",
                              text: "Couldn't agree more!",
                              replies: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  
const Comment = ({data}) => {
    const {name, text, replies} = data;

    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img className='h-12' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user"/>

            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({comments}) => {
    return comments.map((comment, index) => (
        <div>
            <Comment key={index} data={comment}/>

            <div className='ml-5 pl-5 border border-l-black'>
                <CommentsList comments={comment.replies}/>
            </div>
        </div>
    ))
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer