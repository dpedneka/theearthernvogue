import { products, suppliers } from "..";
import { getToken } from "../auth";

const host = process.env.NEXT_PUBLIC_API_URL;

export const getAllSuppliers = async () => {
  // const response = await fetch(`${host}${lyrics}`);
  // return response;
  const response = await fetch(`${host}${suppliers}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken() || "",
    },
  });
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || "Failed to login");
  }
};

//   export const getLyricsSubmittedByUser = async () => {
//     const response = await fetch(`${host}${lyricsSubmittedByUser}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: getToken() || "",
//       },
//     });

//     const data = await response.json();

//     if (response.ok) {
//       return data;
//     } else {
//       throw new Error(data.message || "Failed to login");
//     }
//   };

//   export const getLyricsById = async (Id: any) => {
//     const response = await fetch(`${host}${lyricsById}${Id}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: getToken() || "",
//       },
//     });
//     const data = await response.json();

//     if (response.ok) {
//       return data;
//     } else {
//       throw new Error(data.message || "Failed to login");
//     }
//   };

//   export const createLyricsForm = async (formData: any) => {
//     const response = await fetch(`${host}${createLyrics}`, {
//       method: "POST",
//       headers: {
//         Authorization: getToken() || "",
//       },
//       body: formData,
//     });
//     const data = await response.json();
//     if (response.ok) {
//       return response;
//     } else {
//       throw new Error(data.message || "Failed to login");
//     }
//   };

//   export const updateLyricsForm = async ({ formData, editId }: any) => {
//     const response = await fetch(`${host}${updateLyrics}${editId}`, {
//       method: "POST",
//       headers: {
//         Authorization: getToken() || "",
//       },
//       body: formData,
//     });
//     const data = await response.json();
//     if (response.ok) {
//       return response;
//     } else {
//       throw new Error(data.message || "Failed to login");
//     }
//   };
