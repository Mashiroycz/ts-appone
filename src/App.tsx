/*
 * @Descripttion:
 * @version:
 * @Author: yinchengzong
 * @Date: 2021-08-18 16:46:12
 * @LastEditors: yinchengzong
 * @LastEditTime: 2021-08-19 18:51:11
 */
import React from "react";
import { Button } from "antd";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CanvasLess from "./pages/canvas/canvas";
import Test from "./pages/test/index";
import ProjectList from "./screens/project-list";
import { Login } from "./screens/login";
import { Demo1 } from "./pages/test/demo1";
// import { TreeDemoJs } from "./pages/test/treeDemoJS";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/canvas/canvasless">
            <Button>跳转</Button>
          </Link>
          <Link to="/screens/project-list">
            <Button>项目列表</Button>
          </Link>
          <Link to="/screens/login">
            <Button>登录</Button>
          </Link>
          <Link to="/pages/test/demo1">
            <Button>Demo1</Button>
          </Link>
        </div>
        <Route path="/canvas/canvasless" component={Test} />
        <Route path="/screens/project-list" component={ProjectList} />
        <Route path="/screens/login" component={Login} />
        <Route path="/pages/test/demo1" component={Demo1} />
      </BrowserRouter>
    </div>
  );
}

export default App;
