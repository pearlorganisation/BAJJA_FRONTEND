import React, { useState } from "react";

const Comments = ({ isComments }) => {
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const addComment = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    return (
        <div className="">

            <div className="text-right">
            </div>
            {isComments && (
                <div className="mt-0 border border-gray-300 rounded-lg shadow-lg">
                    <div className="p-4">
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-100 p-3 rounded mb-2 text-sm"
                                >
                                    {comment}
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm">No comments yet. Be the first to comment!</p>
                        )}
                    </div>
                    {/* <form onSubmit={addComment} className="border-t p-3">
                        <input
                            type="text"
                            className="w-full p-2 border rounded focus:outline-none"
                            placeholder="Write a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                    </form> */}
                </div>
            )}
        </div>
    );
};

export default Comments;
