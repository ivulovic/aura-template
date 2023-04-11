export interface AuthContext {
  auth: boolean;
  channel: BroadcastChannel;
  setAuth(e: boolean): void;
}

export type AuthProviderProps = {};
