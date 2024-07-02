import url from "../../utils/axios";
import { clearValues } from "../job/jobSlice";
import { logOutUser } from "./userSlice";
import { clearAllJobState } from "../allJobs/allJobSlice";

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

export const clearStorThunk = async (message,thunkAPI) =>{
  try{
    thunkAPI.dispatch(logOutUser(message));
    thunkAPI.dispatch(clearAllJobState());
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  }catch(error){
    return Promise.reject();
  }
}