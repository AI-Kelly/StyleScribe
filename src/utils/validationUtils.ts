export const validateEmail = (email: string): ValidationResult => {
  if (!email) {
    return { isValid: false, error: 'Email is required' };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  return { isValid: true };
};

export const validateFirstName = (firstName: string): ValidationResult => {
  if (!firstName) {
    return { isValid: false, error: 'First name is required' };
  }
  
  if (firstName.length < 2) {
    return { isValid: false, error: 'First name must be at least 2 characters' };
  }
  
  return { isValid: true };
};