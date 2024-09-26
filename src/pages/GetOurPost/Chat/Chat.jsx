import React, { useState } from "react";

const Chat = ({ chat, setChat }) => {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            setMessages([...messages, input]);
            setInput("");
        }
    };

    return (
        <div className="fixed bottom-4 right-4">
            <div className="flex flex-col items-end">
                {chat && (
                    <div className="w-72 h-96 bg-white shadow-lg rounded-lg mt-4 flex flex-col">
                        {/* Header */}
                        <div className="bg-blue-600 text-white p-4 rounded-t-lg cursor-pointer"
                            onClick={() => setChat(false)}
                        >
                            Chat Support
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto">
                            {messages.length > 0 ? (
                                messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-100 p-2 rounded mb-2 text-sm"
                                    >
                                        {message}
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-400 text-sm">No messages yet.</p>
                            )}
                        </div>

                        {/* Input box */}
                        <form onSubmit={sendMessage} className="p-3 border-t">
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                            />
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chat;
