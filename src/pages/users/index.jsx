import { Fragment, useEffect, useReducer } from "react";
import { Table, Button, Input } from "antd";
import { usersList } from "../../api/service";
import { formatDate } from "../../util/tool";

const initState = {
  page: 1,
  data: [],
};

const reducer = function (state = initState, action) {
  if (action) {
    return { ...state, ...action };
  }
  return state;
};

function Adminuser() {
  const [state, dispatch] = useReducer(reducer, initState);
  const columns = [
    {
      title: "ID", // 表头名称
      dataIndex: "id", // 渲染数据的键，会把对应的value渲染到该表头下面
    },
    {
      title: "用户名",
      dataIndex: "username",
    },
    {
      title: "密码",
      dataIndex: "password",
    },
    {
      title: "角色",
      dataIndex: "role",
    },
    {
      title: "创建时间",
      dataIndex: "create_time",
      render(value, rowData) {
        // value是当前dataIndex对应的值,rowData是整行数据对象
        return formatDate(value, "YYYY-MM-DD hh:mm:ss");
      },
    },
  ];
  useEffect(function () {
    init();
  }, []);
  // 声明初始化的方法
  const init = () => {
    usersList({ page: 1, pageSize: 30 }, (res) => {
      console.log(res);
      dispatch({
        data: res.data[0].data,
      });
    });
  };
  const handleSearch = () => {};
  return (
    <Fragment>
      <p>
        <Input />
        <Button type="primary" onClick={handleSearch}>
          搜索
        </Button>
      </p>
      <Table rowKey="id" dataSource={state.data} columns={columns} />
    </Fragment>
  );
}

export default Adminuser;
