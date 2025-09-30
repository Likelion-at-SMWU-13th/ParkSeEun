import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUser, readUser, updateUser, deleteUser } from "./axios";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: ({ username, password }) => {
      createUser({ username, password });
    },
    onSuccess: () => {
      alert("환영합니다.");
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, username }) => updateUser(userId, username),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myPage"] });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId) => deleteUser(userId),
    onSuccess: () => {
      alert("성공적으로 삭제되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const useReadUser = (userId) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => readUser(userId),
    enabled: !!userId,
    staleTime: 30 * 1000,
    gcTime: 600 * 1000,
    retry: 3,
  });
};
