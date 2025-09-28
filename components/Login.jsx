import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authenticateUser, login } from "../utils/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/dashboard";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (authenticateUser(email, password)) {
      console.log("Login successful, setting auth state");
      login(rememberMe);
      navigate(from, { replace: true });
    } else {
      setError("Invalid credentials. Try email: newaq@gmail.com");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Dashboard Login</h1>
          <p className="mt-2 text-gray-600">Sign in to access your dashboard</p>
        </div>

        {error && (
          <div className="p-4 text-red-700 bg-red-100 rounded-md">{error}</div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="newaq@gmail.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="demopass123"
            />
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label
              htmlFor="remember-me"
              className="block ml-2 text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Sign in
            </button>
          </div>

          <div className="text-center text-sm text-gray-600">
            <p>Demo Email: newaq@gmail.com</p>
            <p>Demo Password: demopass123</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
