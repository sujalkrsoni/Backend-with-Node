import axiosInstance from "./axiosInstance";

export const AddToCartApi = async (courseId) => {
  console.log("getting course id :", courseId)
  const { data } = await axiosInstance.post("/cart", {courseId, quantity : 1});

  return data;
};


export const GetCartApi = async (courseId) => {
  console.log("getting course id :", courseId)
  const { data } = await axiosInstance.get("/cart");
  return data;
};
