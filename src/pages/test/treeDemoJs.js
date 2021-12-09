export const TreeDemoJs = (props) => {
  return (
    <div>
      {props.treeData.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};
