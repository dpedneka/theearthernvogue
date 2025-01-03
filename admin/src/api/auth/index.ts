import { login } from "../";

const host = process.env.NEXT_PUBLIC_API_URL;

export const loginAsAdmin = async ({ email, password }: any) => {
  const response = await fetch(`${host}${login}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    // Save token to localStorage
    localStorage.setItem("token", data.token);
    return response;
  } else {
    throw new Error(data.message || "Failed to login");
  }
};

// Get token from localStorage
export const getToken = () => localStorage.getItem("token");
