import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import { getUser, signIn as sendSignInRequest } from "../api/auth";
import { Auth } from "aws-amplify";
import {
  UserByEmailDocument,
  useActiveAccountsQuery,
  useUserByEmailQuery,
  useUserByEmailLazyQuery,
} from "../api/queries.generated";

function AuthProvider(props) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [
    fetchUser,
    { data, loading: userLoading, error },
  ] = useUserByEmailLazyQuery({
    variables: {
      email: user?.email,
    },
  });

  useEffect(() => {
    (async function () {
      const result = await getUser();
      if (result.isOk) {
        setUser(result.data);
      }

      setLoading(false);
    })();
  }, []);

  const signIn = useCallback(async (email, password, confirmation) => {
    const result = await sendSignInRequest(email, password, confirmation);
    if (result.isOk) {
      setUser(result.data);
      fetchUser();
    }

    return result;
  }, []);

  const socialSignIn = useCallback(async (email) => {
    setUser({ email: email });
    fetchUser();

    return { isOK: true };
  }, []);

  const signOut = useCallback(() => {
    Auth.signOut().then(() => setUser({}));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        userData: data?.user,
        signIn,
        signOut,
        socialSignIn,
        loading,
      }}
      {...props}
    />
  );
}

const AuthContext = createContext({});

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
