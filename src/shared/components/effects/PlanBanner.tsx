import React from 'react';

interface PlanBannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  className?: string;
  opacity?: number;
  children?: React.ReactNode;
}

export const PlanBanner: React.FC<PlanBannerProps> = ({
  imageUrl,
  title,
  subtitle,
  className = '',
  opacity = 0.5,
  children
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 p-6 text-left">
        <h2 className="text-2xl font-black mb-1 text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-300 text-sm">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default PlanBanner;