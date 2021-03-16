import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export function useBearerToken() {
  const auth = useAuth0();
  const [state, setState] = useState<string>();

  useEffect(() => {
    auth.getAccessTokenSilently().then((token) => {
      setState(token);
    });
  }, []);

  if (!state) {
    return null;
  }

  return `Bearer ${state}`;
}
