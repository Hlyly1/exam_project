import { get_subject_tree_async } from "@/store/slice/subject";
import style from "./index.module.css";
import { TreeSelect } from "antd";
import { TreeSelectProps, Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
function SubjectAdd() {
  const treeData = [
    {
      value: "parent 1",
      title: "parent 1",
      children: [
        {
          value: "parent 1-0",
          title: "parent 1-0",
          children: [
            {
              value: "leaf1",
              title: "leaf1",
            },
            {
              value: "leaf2",
              title: "leaf2",
            },
            {
              value: "leaf3",
              title: "leaf3",
            },
            {
              value: "leaf4",
              title: "leaf4",
            },
            {
              value: "leaf5",
              title: "leaf5",
            },
            {
              value: "leaf6",
              title: "leaf6",
            },
          ],
        },
        {
          value: "parent 1-1",
          title: "parent 1-1",
          children: [
            {
              value: "leaf11",
              title: <b style={{ color: "#08c" }}>leaf11</b>,
            },
          ],
        },
      ],
    },
  ];
  const [value, setValue] = useState<string>();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(get_subject_tree_async());
  }, []);
  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const onPopupScroll: TreeSelectProps["onPopupScroll"] = (e) => {
    console.log("onPopupScroll", e);
  };
  return (
    <div className={style.subjectAdd}>
      <div className={style.top}>
        <div className={style.top_wrap}></div>
        <div className={style.top_left}>基础网络技术</div>
        <div className={style.top_right}>
          <TreeSelect
            showSearch
            style={{ width: "100%" }}
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={onChange}
            treeData={treeData}
            onPopupScroll={onPopupScroll}
          />
        </div>
        <div className={style.button}>
          <Button type="primary">确定</Button>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.left}>
          <h1>left</h1>
          <h1>left</h1>
          <h1>left</h1>
          <h1>left</h1>
          <h1>left</h1>
          <h1>left</h1>
          <h1>left</h1>
          <h1>left</h1>
          <h1>left</h1>
          <h1>left</h1>
          <h1>left</h1>
          <h1>left</h1>
          <h1>left</h1>
        </div>
        <div className={style.right}>
          <h1>right</h1>
          <h1>right</h1>
          <h1>right</h1>
          <h1>right</h1>
          <h1>right</h1>
          <h1>right</h1>
          <h1>right</h1>
        </div>
      </div>
    </div>
  );
}
export default SubjectAdd;
