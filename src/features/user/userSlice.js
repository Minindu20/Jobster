import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";
import { registerUserThunk ,loginUserThunk ,updateUserThunk,clearStorThunk} from "./userThunk";
const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    console.log(`Register user ${JSON.stringify(user)}`);
    return registerUserThunk("/auth/register",user,thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    console.log(`Login user ${JSON.stringify(user)}`);
    return loginUserThunk("/auth/login",user,thunkAPI);
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',async(user,thunkAPI)=>{
   return updateUserThunk('/auth/update',user,thunkAPI);
  }
)

export const clearStore = createAsyncThunk('user/clearStore',clearStorThunk);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
    toggleSidebar:(state)=>{
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logOutUser:(state)=>{
      state.user = null;
      state.isSidebarOpen=false;
      removeUserFromLocalStorage();
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello There ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(`oops ${payload}`);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello There ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(`oops ${payload}`);
      })
      .addCase(updateUser.pending,(state)=>{
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled,(state,{payload})=>{
        state.isLoading = false;
        const {user} = payload;
        state.user = user;
        addUserToLocalStorage(payload);
        toast.success('User Updated');
      }).addCase(updateUser.rejected,(state,{payload})=>{
        state.isLoading = false;
        toast.error(`oops ${payload}`);
      }).addCase(clearStore.rejected,()=>{
        toast.error('There was an Eroor');
      })
  }
});
export const {toggleSidebar,logOutUser} = userSlice.actions;
export default userSlice.reducer;
