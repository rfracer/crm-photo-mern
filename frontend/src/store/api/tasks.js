import { baseApi } from './base';

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => 'tasks',
      providesTags: ['Tasks'],
      transformResponse: (response) => response.data,
    }),
    getTask: builder.query({
      query: (id) => ({ url: `tasks/${id}` }),
      transformResponse: (response) => response.data,
      providesTags: ['Tasks'],
    }),
    addTask: builder.mutation({
      query: (body) => ({
        url: 'tasks',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Tasks'],
    }),
    updateTask: builder.mutation({
      query: ({ id, updated }) => ({
        url: `tasks/${id}`,
        method: 'PUT',
        body: updated,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ['Tasks'],
    }),
    removeTask: builder.mutation({
      query: (id) => ({
        url: `tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useRemoveTaskMutation,
} = tasksApi;
