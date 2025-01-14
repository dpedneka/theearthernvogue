import { productDetails } from "..";

const host = process.env.NEXT_PUBLIC_API_URL;

export const getProductDetailsByProductName = async (productName: any) => {
  // const response = await fetch(`${host}${lyrics}`);
  // return response;
  console.log(productName);
  const response = await fetch(`${host}${productDetails}${productName}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || "Failed to login");
  }
};
