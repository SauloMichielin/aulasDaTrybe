import { createContext, useMemo } from 'react';
import useAuth from '../hooks/useAuth';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const { error, isLoading, userGitData, performLogin } = useAuth();

  const contextValue = useMemo(() => (
    {
      isLoading,
      error,
      userGitData,
      performLogin,
    }), [isLoading, error, userGitData]);

  return (
    <AuthContext.Provider value={ contextValue }>
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;
