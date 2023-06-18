// Đây là file input của hệ thống và muốn viết gì trong đây thì viết
// Với react, file chạy chính được render đưa vào body script chính là index.js
// Cách tạo ra 1 component và hiểu về export -- import
// Phân biệt export default và export thông thường
// State trong react thực sự là gì
// Mỗi lần state thay đổi thì cả hàm Counter sẽ chạy lại
// state chạy lần sau luôn nhớ về trạng thái trước đấy của nó (closure)
// Có 1 component root App
// Các component con
// 1. Truyền data từ con lên cha
// 2. Truyền data từ cha xuống con
// truyền data từ cha cho con -> truyền tham số trong function
// truyền từ con lên cha -> dùng callback ở thằng con

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
