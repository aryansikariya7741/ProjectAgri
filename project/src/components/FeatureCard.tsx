import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  linkTo: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, linkTo, color }) => {
  return (
    <Link to={linkTo} className="block">
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 h-full">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;