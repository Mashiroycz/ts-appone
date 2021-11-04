import { useEffect, useState } from "react";
import SearchPanel from "./search-panel";
import * as miu from "../../utils/index";
import List from "./list";

const apiUrl = process.env.React_APP_API_URL;

const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const debounceParams = miu.useDebounce(param, 1000);

  const [users, setUsers] = useState([]);

  const [list, setList] = useState([]);

  //在param改变的时候去调用接口
  useEffect(() => {
    let data = {
      name: debounceParams.name,
      personId: debounceParams.personId,
    };
    fetch(`${apiUrl}/projects?${miu.formatData(miu.cleanObject(data))}`).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debounceParams]);

  miu.useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};

export default ProjectListScreen;
