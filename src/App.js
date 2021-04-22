import React, { useState, useEffect, useReducer } from "react";
import RouterHandle from "@/routes/routeHandle";
import Icons from "@/component/ux/Icons/index";

import _ from "lodash";

import "./App.scss";

const uxList = [
  {
    title: "基础组件",
    list: [
      {
        name: "Popup 弹出层",
        path: "/popup",
      },
    ],
  },

  {
    title: "导航组件",
    list: [
      {
        name: "Tab 标签栏",
        path: "/tab",
      },
    ],
  },

  {
    title: "展示组件",
    list: [
      {
        name: "Swiper 轮播",
        path: "/swiper",
      },
    ],
  },

  {
    title: "拖拽组件",
    list: [
      {
        name: "Drag 拖拽",
        path: "/drag",
      },
    ],
  },
];

function App() {

  const RouteNav = RouterHandle()


  const navigateTo = (path) => {
    console.log(path);
    RouteNav.go(path)
  }



  const uxNav = uxList.map((e, idx) => (
    <section className="n-ux-nav" key={idx}>
      <div className="n-ux-nav__title">{e.title}</div>
        {
          e.list.map((v, id) => (
            <div className="n-ux-nav__group" key={id}>
              <div className="n-ux-nav__item" onClick={() => navigateTo(v.path)}>
                <span className="item-ux__title">{v.name}</span>
                <Icons name={"arrow"} color={"#333"} />
              </div>
            </div>
          ))
        }
    </section>
  ));

  return (
    <div className="n-ux_home">
      <h1 className="n-ux__title">H5-component-library</h1>
      <h4 className="n-ux__desc">移动端 react-component-library</h4>

      {uxNav}

    </div>
  );
}

export default App;
