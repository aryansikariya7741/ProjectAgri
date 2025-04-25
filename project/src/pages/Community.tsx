import React, { useState } from 'react';
import { Search, MessageCircle, Video, FileText, Users, Globe } from 'lucide-react';
import ForumPost from '../components/ForumPost';

const Community: React.FC = () => {
  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for forum posts
  const forumPosts = [
    {
      id: '1',
      author: 'Rajesh Kumar',
      authorType: 'Farmer',
      title: 'Best practices for rice farming during water shortage?',
      content: 'This season we are expecting less rainfall in our region. I have 5 acres of rice cultivation. Can experienced farmers share their water conservation techniques for rice farming? What irrigation methods work best when water is scarce? I\'ve heard about SRI (System of Rice Intensification) but never tried it myself.',
      tags: ['rice', 'water-conservation', 'irrigation'],
      likes: 24,
      comments: 12,
      timeAgo: '2 hours ago',
      imageUrl: 'https://images.pexels.com/photos/5560457/pexels-photo-5560457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '2',
      author: 'Sunita Patel',
      authorType: 'Agricultural Expert',
      title: 'Identifying and managing wheat rust disease',
      content: 'I\'ve noticed many farmers in Gujarat are reporting wheat rust this season. Here\'s how to identify different types of rust (yellow, brown, black) and the recommended fungicides for each. Early detection is critical to prevent spread. Please share photos if you\'re unsure about symptoms in your field.',
      tags: ['wheat', 'disease-management', 'fungicide'],
      likes: 36,
      comments: 18,
      timeAgo: '1 day ago',
      imageUrl: 'https://images.pexels.com/photos/4946917/pexels-photo-4946917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '3',
      author: 'Vinod Sharma',
      authorType: 'Farmer',
      title: 'My experience with solar-powered irrigation pumps',
      content: 'Last year I installed solar panels to power my irrigation system on my 8-acre farm. Initial cost was high (around ₹2.5 lakhs after subsidy) but I\'ve calculated the ROI and want to share my experience. Electricity costs have reduced to zero and the system has been extremely reliable. Happy to answer questions about installation, maintenance, and government subsidy process.',
      tags: ['solar', 'irrigation', 'renewable-energy', 'cost-saving'],
      likes: 42,
      comments: 27,
      timeAgo: '3 days ago',
      imageUrl: 'https://images.pexels.com/photos/12879088/pexels-photo-12879088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '4',
      author: 'Meena Reddy',
      authorType: 'Buyer',
      title: 'Looking for organic vegetable suppliers in Telangana',
      content: 'I represent a chain of organic stores in Hyderabad. We\'re looking to source directly from farmers who practice organic vegetable farming within 100km of Hyderabad. We offer fair prices and consistent demand throughout the year. Particularly interested in leafy greens, tomatoes, and other common vegetables. We can provide transportation.',
      tags: ['organic', 'vegetable', 'direct-sourcing', 'telangana'],
      likes: 18,
      comments: 15,
      timeAgo: '4 days ago',
      imageUrl: 'https://images.pexels.com/photos/5591458/pexels-photo-5591458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const filteredPosts = forumPosts.filter((post) => {
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !post.content.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    if (category !== 'all') {
      if (category === 'questions' && !post.title.endsWith('?')) return false;
      if (category === 'experts' && post.authorType !== 'Agricultural Expert') return false;
      if (category === 'discussion' && post.title.endsWith('?')) return false;
      if (category === 'buyers' && post.authorType !== 'Buyer') return false;
    }
    
    return true;
  });

  const upcomingEvents = [
    {
      title: 'Organic Farming Workshop',
      date: 'Oct 18, 2025',
      location: 'Virtual',
      type: 'Workshop',
    },
    {
      title: 'New Crop Insurance Scheme',
      date: 'Oct 25, 2025',
      location: 'Punjab Agricultural University',
      type: 'Seminar',
    },
    {
      title: 'Modern Irrigation Technologies',
      date: 'Nov 2, 2025',
      location: 'Virtual',
      type: 'Webinar',
    },
  ];

  return (
    <div className="space-y-6 fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Community & Learning</h1>
        <button className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg flex items-center transition-colors">
          <MessageCircle size={18} className="mr-1" />
          Create Post
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search discussions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex overflow-x-auto py-2 gap-2 scrollbar-hide">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                category === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Posts
            </button>
            <button
              onClick={() => setCategory('questions')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                category === 'questions'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Questions
            </button>
            <button
              onClick={() => setCategory('discussion')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                category === 'discussion'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Discussion
            </button>
            <button
              onClick={() => setCategory('experts')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                category === 'experts'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Expert Advice
            </button>
            <button
              onClick={() => setCategory('buyers')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                category === 'buyers'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Buyer Requests
            </button>
          </div>
          
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <ForumPost
                key={post.id}
                id={post.id}
                author={post.author}
                authorType={post.authorType}
                title={post.title}
                content={post.content}
                tags={post.tags}
                likes={post.likes}
                comments={post.comments}
                timeAgo={post.timeAgo}
                imageUrl={post.imageUrl}
              />
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Learning Resources</h2>
            
            <div className="space-y-3">
              <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <div className="bg-blue-100 p-2 rounded mr-3">
                  <Video size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">Video Tutorials</div>
                  <div className="text-sm text-gray-500">250+ farming videos</div>
                </div>
              </a>
              <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <div className="bg-green-100 p-2 rounded mr-3">
                  <FileText size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="font-medium">Crop Guides</div>
                  <div className="text-sm text-gray-500">Detailed guides for 30+ crops</div>
                </div>
              </a>
              <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <div className="bg-purple-100 p-2 rounded mr-3">
                  <Users size={20} className="text-purple-600" />
                </div>
                <div>
                  <div className="font-medium">Expert Connect</div>
                  <div className="text-sm text-gray-500">Talk to agricultural experts</div>
                </div>
              </a>
              <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <div className="bg-orange-100 p-2 rounded mr-3">
                  <Globe size={20} className="text-orange-600" />
                </div>
                <div>
                  <div className="font-medium">Regional Programs</div>
                  <div className="text-sm text-gray-500">Local farming initiatives</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <div className="font-medium">{event.title}</div>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>{event.date}</span>
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      event.type === 'Workshop' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'Seminar' ? 'bg-green-100 text-green-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{event.location}</div>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-2">
                    Register Now
                  </button>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 text-center text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All Events
            </button>
          </div>
          
          <div className="bg-secondary-50 rounded-xl p-6">
            <h3 className="font-semibold text-secondary-800 mb-2">Weather Alerts</h3>
            <p className="text-secondary-700 text-sm">
              Set up personalized weather alerts for your farm location. Get notified about rainfall, temperature changes, and extreme weather events.
            </p>
            <button className="w-full py-2 mt-4 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg transition-colors text-sm">
              Configure Alerts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;