export function isTokenExpired(token) {
  if (!token) {
    // If there's no token, consider it expired
    return true;
  }

  const tokenData = JSON.parse(atob(token.split(".")[1])); // Decode the token payload

  if (!tokenData.exp) {
    // If the token doesn't have an expiration claim, consider it expired
    return true;
  }

  // Get the current timestamp in seconds
  const currentTime = Math.floor(Date.now() / 1000);

  // Compare the current time to the expiration time
  return tokenData.exp < currentTime;
}
