import url from "../../utils/axios";
import { logOutUser } from "./userSlice";

export const registerUserThunk = async (dbUrl, user, thunkAPI) => {
  try {
    const response = await url.post(dbUrl, user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (dbUrl, user, thunkAPI) => {
  try {
    const response = await url.post(dbUrl, user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (dbUrl, user, thunkAPI) => {
  try {
    const response = await url.put(dbUrl, user, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.response);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
