import React from 'react';

export function MarketingCTA() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-soft border border-gray-100">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-primary text-center">
          Want to build AI tools like this one?
        </h3>
        <p className="text-lg text-gray-700">
          Join our community of professional marketers creating these exact applications together. Transform from AI user to AI innovator.
        </p>
        <a
          href="https://ai-marketinglabs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg 
                    hover:from-primary-dark hover:to-secondary-dark transition-all duration-200 
                    shadow-soft hover:shadow-lg transform hover:-translate-y-0.5
                    text-center font-semibold"
        >
          Join Now
        </a>
      </div>
    </div>
  );
}