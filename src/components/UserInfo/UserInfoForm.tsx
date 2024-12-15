import React from 'react';
import type { UserInfo } from '../../types';

interface UserInfoFormProps {
  userInfo: UserInfo;
  onChange: (field: keyof UserInfo, value: string) => void;
  errors: Partial<Record<keyof UserInfo, string>>;
}

export function UserInfoForm({ userInfo, onChange, errors }: UserInfoFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
          First Name *
        </label>
        <input
          type="text"
          id="firstName"
          value={userInfo.firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 
                     focus:border-primary transition-colors duration-200
                     ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Enter your first name"
        />
        {errors.firstName && (
          <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          value={userInfo.email}
          onChange={(e) => onChange('email', e.target.value)}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 
                     focus:border-primary transition-colors duration-200
                     ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>
    </div>
  );
}