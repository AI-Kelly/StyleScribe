import { useState, useEffect } from 'react';
import type { UserInfo } from '../types';
import { validateEmail, validateFirstName } from '../utils/validationUtils';
import { collectUserData } from '../services/userDataService';

export function useUserInfo() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: '',
    email: '',
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof UserInfo, string>>>({});
  const [hasInteracted, setHasInteracted] = useState<Record<keyof UserInfo, boolean>>({
    firstName: false,
    email: false,
  });

  const handleChange = (field: keyof UserInfo, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
    if (!hasInteracted[field]) {
      setHasInteracted(prev => ({ ...prev, [field]: true }));
    }
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Collect data when both fields are filled and valid
  useEffect(() => {
    const allFieldsInteracted = Object.values(hasInteracted).every(Boolean);
    if (allFieldsInteracted) {
      const firstNameValidation = validateFirstName(userInfo.firstName);
      const emailValidation = validateEmail(userInfo.email);
      
      if (firstNameValidation.isValid && emailValidation.isValid) {
        collectUserData(userInfo).catch(console.error);
      }
    }
  }, [userInfo, hasInteracted]);

  const validate = (): boolean => {
    const firstNameValidation = validateFirstName(userInfo.firstName);
    const emailValidation = validateEmail(userInfo.email);
    
    const newErrors: Partial<Record<keyof UserInfo, string>> = {};
    
    if (!firstNameValidation.isValid) {
      newErrors.firstName = firstNameValidation.error;
    }
    
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.error;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    userInfo,
    errors,
    handleChange,
    validate,
  };
}