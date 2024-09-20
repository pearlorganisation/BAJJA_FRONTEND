import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex space-x-2">
        {/* Dot 1 */}
        <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        {/* Dot 2 */}
        <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        {/* Dot 3 */}
        <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.10s' }}></div>
        {/* Dot 4 */}
        <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
};

export default Loading;
