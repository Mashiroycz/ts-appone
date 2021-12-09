// import { TreeDemoJs } from "./treeDemoJs";
import { TreeDemoTs } from "./treeDemoTs";

const treeData = [
  {
    title: "f1",
    key: "dd",
  },
];

export const Demo1 = () => {
  return (
    <div>
      <div>Demo1</div>
      <div>1</div>
      <TreeDemoTs treeData={treeData} />
    </div>
  );
};
