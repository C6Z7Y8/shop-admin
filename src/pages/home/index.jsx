import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons"; // 引入字体图标
import { Card, Col, Row, Statistic } from "antd";
import { Fragment, useEffect, useReducer } from "react";
import * as echarts from "echarts";
import { getOrdersEchartData } from "../../api/service";
import styles from "./index.module.scss";

const initState = {
  orderCount: 0,
  totalPrice: 0,
  userCount: 0,
  eChartData: [],
  myChart: {}, // echart实例
};

const reducer = function (state = initState, action) {
  if (action) {
    return { ...state, ...action };
  }
  return state;
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(function () {
    getOrdersEchartData((res) => {
      let myChart = echarts.init(document.getElementById("main"));
      myChart.setOption = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {},
          },
        ],
      };
      dispatch({
        type: "aa",
        orderCount: res.data[1].data[0].total,
        totalPrice: res.data[2].data[0].total,
        userCount: res.data[3].data[0].total,
        eChartsData: [{}],
        myChart: myChart, // 第一次渲染完成就初始化echart对象。
      });
    });
  }, []);
  // useEffect(
  //   function () {
  //     // echart实例的setOption方法可以按图标配置显示图标。
  //     state.myChart.setOption({
  //       xAxis: {
  //         type: "category",
  //         boundaryGap: false,
  //         data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //       },
  //       yAxis: {
  //         type: "value",
  //       },
  //       series: [
  //         {
  //           data: [820, 932, 901, 934, 1290, 1330, 1320],
  //           type: "line",
  //           areaStyle: {},
  //         },
  //       ],
  //     });
  //   },
  //   [state.eChartData]
  // );
  return (
    <Fragment>
      <div className={styles.statistic}>
        <Row gutter={24}>
          <Col span={8}>
            <Card>
              <Statistic
                title="订单数量"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="单"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="销售额"
                value={state.totalPrice}
                precision={2}
                valueStyle={{
                  color: "#cf1322",
                }}
                prefix={<ArrowDownOutlined />}
                suffix="元"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="会员数量"
                value={state.userCount}
                precision={2}
                valueStyle={{
                  color: "#cf1322",
                }}
                prefix={<ArrowDownOutlined />}
                suffix="人"
              />
            </Card>
          </Col>
        </Row>
      </div>
      <div id="main" className={styles.echart}></div>
    </Fragment>
  );
};

export default Home;
