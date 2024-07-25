import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/util/http";
import { AxiosRes } from "../../util/http";
// import { RootState } from "../index";

const initialState = {
  subject_tree: [], //课程结构
  active_two: {}, //二级选择高亮
};

export const get_subject_tree_async = createAsyncThunk(
  "/get/subject_tree",
  async (action, state) => {
    const res: AxiosRes = await axios.get("/api/subject");
    return res.data.data;
  }
);

export const sujectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder;
  //   },
});

export default sujectSlice.reducer;
