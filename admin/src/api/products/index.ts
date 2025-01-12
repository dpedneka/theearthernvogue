import { productCategories, products } from "..";
import { getToken } from "../auth";

const host = process.env.NEXT_PUBLIC_API_URL;

export const getAllProducts = async () => {
  // const response = await fetch(`${host}${lyrics}`);
  // return response;
  const response = await fetch(`${host}${products}`, {
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

export const addProducts = async (formData: any) => {
  const response = await fetch(`${host}${products}`, {
    method: "POST",
    headers: {
      Authorization: getToken() || "",
    },
    body: formData,
  });
  const data = await response.json();
  if (response.ok) {
    return response;
  } else {
    throw new Error(data.message || "Failed to login");
  }
};

export const updateProduct = async ({ formData, editId }: any) => {
  const response = await fetch(`${host}${products}/update/${editId}`, {
    method: "POST",
    headers: {
      Authorization: getToken() || "",
    },
    body: formData,
  });
  const data = await response.json();
  if (response.ok) {
    return response;
  } else {
    throw new Error(data.message || "Failed to login");
  }
};

export const deleteProduct = async (productId: any) => {
  const response = await fetch(`${host}${products}/delete/${productId}`, {
    method: "POST",
    headers: {
      Authorization: getToken() || "",
    },
  });
  if (response.ok) {
    return response;
  } else {
    throw new Error("Failed to Delete");
  }
};

export const getProductById = async (productId: any) => {
  // const response = await fetch(`${host}${lyrics}`);
  // return response;
  const response = await fetch(`${host}${products}/${productId}`, {
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

export const getAllProductCategories = async () => {
  // const response = await fetch(`${host}${lyrics}`);
  // return response;
  const response = await fetch(`${host}${productCategories}`, {
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

export const getProductCategoryById = async (categoryId: any) => {
  const response = await fetch(`${host}${productCategories}/${categoryId}`, {
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

export const addProductCategories = async (formData: any) => {
  const response = await fetch(`${host}${productCategories}`, {
    method: "POST",
    headers: {
      Authorization: getToken() || "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  if (response.ok) {
    return response;
  } else {
    throw new Error(data.message || "Failed to login");
  }
};

export const updateProductCategories = async ({ cat, editId }: any) => {
  const response = await fetch(`${host}${productCategories}/update/${editId}`, {
    method: "POST",
    headers: {
      Authorization: getToken() || "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cat),
  });
  const data = await response.json();
  if (response.ok) {
    return response;
  } else {
    throw new Error(data.message || "Failed to login");
  }
};

export const deleteProductCategories = async (productId: any) => {
  const response = await fetch(
    `${host}${productCategories}/delete/${productId}`,
    {
      method: "POST",
      headers: {
        Authorization: getToken() || "",
      },
    }
  );
  if (response.ok) {
    return response;
  } else {
    throw new Error("Failed to Delete");
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
