import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Alice", status: "Working", tasks: [] },
  { id: 2, name: "Bob", status: "Break", tasks: [] },
  { id: 3, name: "Charlie", status: "Offline", tasks: [] },
  { id: 4, name: "David", status: "Meeting", tasks: [] },
];

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    updateStatus(state, action) {
      const { id, status } = action.payload;
      const member = state.find((m) => m.id === id);
      if (member) member.status = status;
    },
    assignTask(state, action) {
      const { id, task } = action.payload;
      const member = state.find((m) => m.id === id);
      if (member) member.tasks.push(task);
    },
  },
});

export const { updateStatus, assignTask } = membersSlice.actions;
export default membersSlice.reducer;
