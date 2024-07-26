import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/util/http";
import { AxiosRes } from "../../util/http";
import { RootState } from "../index";

const initialState = {
  subject_tree: [], //课程结构
  active_two: {}, //二级选择高亮
};

export const get_subject_tree_async = createAsyncThunk(
  "/get/subject_tree",
  async (action, state) => {
    const res: AxiosRes = await axios.get("/api/subject/list");
    console.log(res,'res');
    
    return res.data.data;
  }
);

export const sujectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {},
    extraReducers: (builder) => {
      builder.addCase(get_subject_tree_async.fulfilled,(state,res)=>{
        state.subject_tree = res.payload
        console.log(state.subject_tree,'subject_tree');
        
      })
    },
});

export const select_subject_tree = (state:RootState)=>{
  return state.subject.subject_tree
}
export default sujectSlice.reducer;
