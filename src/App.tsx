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
import ProjectList from "./screens/project-list";

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
        </div>
        <Route path="/canvas/canvasless" component={CanvasLess} />
        <Route path="/screens/project-list" component={ProjectList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
