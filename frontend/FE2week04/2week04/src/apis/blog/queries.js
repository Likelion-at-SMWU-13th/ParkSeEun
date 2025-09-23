import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, deletePost, readPost, updatePost } from "./axios";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: ({ title, content }) => {
      createPost({ title, content });
    },
  });
};

export const useReadComment = (postId) => {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => readPost(postId),
    enabled: !!postId,
    staleTime: 10 * 1000,
    gcTime: 60 * 1000,
  });
};

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: async ({ postId, title, content }) => {
      if (!postId) throw new Error("postId가 없습니다.");
      return updatePost(postId, { title, content });
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId) => deletePost(postId),
    onSuccess: () => {
      alert("댓글이 삭제되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["postList"] });
    },
    onError: (error) => {
      console.error("댓글 삭제 실패", error.message);
    },
  });
};
