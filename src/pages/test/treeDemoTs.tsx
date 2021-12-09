interface TreeNode {
  title: string;
  children?: TreeNode[];
  key: string;
}

interface TreeDemoTsProps {
  treeData: TreeNode[];
  backColor?: string;
}

export const TreeDemoTs = (props: TreeDemoTsProps) => {
  return (
    <div>
      {props.treeData.map((item: TreeNode) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};
