import { useContext } from 'react';
import { AuthContext } from '@/contexts/UnifiedAuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within UnifiedAuthProvider');
  }
  return context;
};

// Legacy hook support for gradual migration
export const useUnifiedAuth = useAuth;
