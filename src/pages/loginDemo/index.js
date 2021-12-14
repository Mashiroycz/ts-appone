import React, { useState, useEffect } from "react";
import { setCookie, getCookie } from "../../func/myCookie";
import { Button, Form, Input } from "antd";

const LoginDemo = () => {
  return (
    <div>
      <div>
        <span>用户名</span>
        <input type="text" />
      </div>
      <div>
        <span>密码</span>
        <input type="text" />
      </div>
      <Button>登录</Button>
    </div>
  );
};
