import { User } from "./search-panel";

interface Project{
  id: string;
  name: string;
  personId :string;
  pin: boolean;
  organization: string;
}

interface ListProps{
  list: Project[];
  users: User[];
}
const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project: any) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>{users.find((user) => user.id === project.personId)?.name || "default"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
