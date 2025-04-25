import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Flag, Share2, User } from 'lucide-react';

interface ForumPostProps {
  id: string;
  author: string;
  authorType: string;
  title: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  timeAgo: string;
  imageUrl?: string;
}

const ForumPost: React.FC<ForumPostProps> = ({
  author,
  authorType,
  title,
  content,
  tags,
  likes,
  comments,
  timeAgo,
  imageUrl,
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const truncatedContent = content.length > 250 && !isExpanded 
    ? content.substring(0, 250) + '...' 
    : content;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-all">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
          {imageUrl ? (
            <img src={imageUrl} alt={author} className="w-10 h-10 rounded-full object-cover" />
          ) : (
            <User size={20} className="text-gray-500" />
          )}
        </div>
        <div>
          <div className="font-medium text-gray-900">{author}</div>
          <div className="flex items-center">
            <span className={`text-xs px-2 py-0.5 rounded mr-2 ${
              authorType === 'Farmer' 
                ? 'bg-primary-100 text-primary-800' 
                : authorType === 'Buyer' 
                ? 'bg-secondary-100 text-secondary-800'
                : 'bg-accent-100 text-accent-800'
            }`}>
              {authorType}
            </span>
            <span className="text-xs text-gray-500">{timeAgo}</span>
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      
      <div className="text-gray-700 mb-3">
        <p>{truncatedContent}</p>
        {content.length > 250 && (
          <button 
            onClick={toggleExpand} 
            className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-1"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleLike}
            className={`flex items-center text-sm ${
              liked ? 'text-primary-600' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <ThumbsUp size={18} className={liked ? 'fill-primary-600' : ''} />
            <span className="ml-1">{likeCount}</span>
          </button>
          
          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
            <MessageCircle size={18} />
            <span className="ml-1">{comments}</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="text-gray-500 hover:text-gray-700">
            <Share2 size={18} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Flag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForumPost;