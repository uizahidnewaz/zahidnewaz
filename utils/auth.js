// Authentication utility with static credentials for Next.js

const DEMO_EMAIL = "newaz.blinto@gmail.com";
const DEMO_PASSWORD = "demopass123"; // You should use a more secure password

// Check if the provided credentials match the demo credentials
export const authenticateUser = (email, password) => {
  return email === DEMO_EMAIL && password === DEMO_PASSWORD;
};

// Check if user is logged in
export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false; // Server-side rendering
  }

  // For client-side checks
  const localAuth = localStorage.getItem("isAuthenticated") === "true";
  const sessionAuth = sessionStorage.getItem("isAuthenticated") === "true";
  console.log(
    "Auth check - localStorage:",
    localAuth,
    "sessionStorage:",
    sessionAuth
  );
  return localAuth || sessionAuth;
};

// Log in the user
export const login = (rememberMe = false) => {
  // Set cookie for Next.js middleware
  document.cookie = `isAuthenticated=true; path=/; ${
    rememberMe ? "max-age=604800;" : ""
  }`;

  // For client-side auth checks
  if (rememberMe) {
    localStorage.setItem("isAuthenticated", "true");
  } else {
    sessionStorage.setItem("isAuthenticated", "true");
  }
};

// Log out the user
export const logout = () => {
  // Clear cookie
  document.cookie = "isAuthenticated=false; path=/; max-age=0";

  // Clear storage
  localStorage.removeItem("isAuthenticated");
  sessionStorage.removeItem("isAuthenticated");
};
