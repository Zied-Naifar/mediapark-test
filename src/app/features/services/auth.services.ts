import unsplash from "../../utils/unsplash";

export const authenticate = async (): Promise<any> => {
  const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes",
  ]);

  window.location.assign(authenticationUrl);
};

export const getToken = async () => {
  const code = window.location.search.split("code=")[1];
  let token;
  if (code) {
    token = await unsplash.auth
      .userAuthentication(code)
      .then((res) => res.json());

    unsplash.auth.setBearerToken(token);
  }
  return token;
};
