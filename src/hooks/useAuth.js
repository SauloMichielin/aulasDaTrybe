import { useState } from 'react';
import useFetch from './useFetch';

function useAuth() {
  const [userGitData, setUserGitData] = useState(null);
  const { error, isLoading, makeFetch } = useFetch();

  const performLogin = async (username) => {
    const result = await makeFetch(`https://api.github.com/users/${username}`);
    if (result) {
      setUserGitData(result);
    }
  };

  return { error, isLoading, userGitData, performLogin };
}

export default useAuth;
