import axios from "react";

export const createPost = async (payload) => {
  const { data } = await axios.post(`/api/posts`, payload);
  return data;
};

export const readPost = async (postId) => {
  const { data } = await axios.get(`/api/posts/${postId}`);
  return data;
};

export const updatePost = async (postId, payload) => {
  const { data } = await axios.put(`/api/posts/${postId}`, payload);
  return data;
};

export const deletePost = async (postId) => {
  const { data } = await axios.delete(`/api/posts/${postId}`);
  return data;
};
