import { baseApi } from './base';

export interface Task {
  _id?: string;
  // eslint-disable-next-line no-restricted-globals
  name: string;
  priority: 'low' | 'medium' | 'high';
  checked: boolean;
}

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => 'tasks',
      providesTags: ['Tasks'],
      transformResponse: (response: { data: Task[] }) => response.data,
    }),
    getTask: builder.query({
      query: (id) => ({ url: `tasks/${id}` }),
      transformResponse: (response: { data: Task }) => response.data,
      providesTags: ['Tasks'],
    }),
    addTask: builder.mutation<
      // eslint-disable-next-line no-restricted-globals
      { status: number; data: Task; message: string },
      Task
    >({
      query: (body) => ({
        url: 'tasks',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Tasks'],
    }),
    updateTask: builder.mutation<Task, { id: string; updated: Partial<Task> }>({
      query: ({ id, updated }) => ({
        url: `tasks/${id}`,
        method: 'PUT',
        body: updated,
      }),
      transformResponse: (response: { data: Task }) => response.data,
      invalidatesTags: ['Tasks'],
    }),
    removeTask: builder.mutation<void, string>({
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
