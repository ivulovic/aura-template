import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import AuthContext from "./context";
import { AuthProviderProps } from "./types";
import { AUTH_CHANNEL_KEY, AUTH_KEY } from "./constants";

export default function AuthProvider(props: PropsWithChildren<AuthProviderProps>): JSX.Element {
  const channel = useMemo(() => new BroadcastChannel(AUTH_CHANNEL_KEY), []);
  const [auth, setAuth] = useState(localStorage.getItem(AUTH_KEY) === "true");

  useEffect(() => {
    if (!channel) {
      return;
    }

    console.log(channel);
    channel.onmessage = (e: MessageEvent<any>) => {
      setAuth(e.data);
    };

    return () => {
      channel.close();
    };
  }, [channel]);

  const onSetAuth = (status: boolean) => {
    setAuth(status);
    channel.postMessage(status);
    localStorage.setItem(AUTH_KEY, status.toString());
  };
  return (
    <AuthContext.Provider
      value={{
        channel,
        auth,
        setAuth: onSetAuth,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
