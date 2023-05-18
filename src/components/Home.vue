<template>
  <div id="china_map_box">
    <!-- echart中国地图 -->
    <div id="china_map"></div>

    <!-- 下方是公告页面 -->
    <!-- <el-card class="card">
      <div slot="header">
        <span>最新公告</span>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="title"
          label="公告标题">
        </el-table-column>
        <el-table-column
          prop="publisher"
          label="发布者"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布时间"
          width="180">
        </el-table-column>
        <el-table-column
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope)" type="primary" size="mini">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card> -->
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts/js/china.js";
export default {
  data() {
    return {
      //echart 配制option
      options: {
        tooltip: {
          triggerOn: "mousemove", //mousemove、click
          padding: 8,
          borderWidth: 1,
          borderColor: "#409eff",
          backgroundColor: "rgba(255,255,255,0.7)",
          textStyle: {
            color: "#000000",
            fontSize: 13,
          },
          formatter: function (e, t, n) {
            let data = e.data;
            //模拟数据
            data.specialImportant = (Math.random() * 1000) | 0;
            data.import = (Math.random() * 100) | 0;
            data.compare = (Math.random() * 100) | 0;
            data.common = (Math.random() * 100) | 0;
            data.specail = (Math.random() * 100) | 0;

            let context = `
               <div>
                   <p><b style="font-size:15px;">${data.name}</b>(现有在校生)</p>
                   <p class="tooltip_style"><span class="tooltip_left">现有在校总人数</span><span class="tooltip_right">${data.value}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">大一人数</span><span class="tooltip_right">${data.specialImportant}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">大二人数</span><span class="tooltip_right">${data.import}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">大三人数</span><span class="tooltip_right">${data.compare}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">大四人数</span><span class="tooltip_right">${data.common}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">大五（医学院大五或专升本第二年）人数</span><span class="tooltip_right">${data.specail}</span></p>
               </div>
            `;
            return context;
          },
        },
        visualMap: {
          show: true,
          left: 26,
          bottom: 40,
          showLabel: true,
          pieces: [
            {
              gte: 100,
              label: ">= 1000",
              color: "#1f307b",
            },
            {
              gte: 500,
              lt: 999,
              label: "500 - 999",
              color: "#3c57ce",
            },
            {
              gte: 100,
              lt: 499,
              label: "100 - 499",
              color: "#6f83db",
            },
            {
              gte: 10,
              lt: 99,
              label: "10 - 99",
              color: "#9face7",
            },
            {
              lt: 10,
              label: "<10",
              color: "#bcc5ee",
            },
          ],
        },
        geo: {
          map: "china",
          scaleLimit: {
            min: 1,
            max: 2,
          },
          zoom: 1,
          top: 120,
          label: {
            normal: {
              show: true,
              fontSize: "14",
              color: "rgba(0,0,0,0.7)",
            },
          },
          itemStyle: {
            normal: {
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: "#f2d5ad",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0,
            },
          },
        },
        series: [
          {
            name: "突发事件",
            type: "map",
            geoIndex: 0,
            data: [],
          },
        ],
      },
      //echart data
      dataList: [
        {
          name: "南海诸岛",
          value: 100,
          eventTotal: 100,
          specialImportant: 10,
          import: 10,
          compare: 10,
          common: 40,
          specail: 20,
        },
        {
          name: "北京",
          value: 50,
        },
        {
          name: "天津",
          value: 130,
        },
        {
          name: "上海",
          value: 100,
        },
        {
          name: "重庆",
          value: 324,
        },
        {
          name: "河北",
          value: 130,
        },
        {
          name: "河南",
          value: 830,
        },
        {
          name: "云南",
          value: 110,
        },
        {
          name: "辽宁",
          value: 199,
        },
        {
          name: "黑龙江",
          value: 216,
        },
        {
          name: "湖南",
          value: 690,
        },
        {
          name: "安徽",
          value: 361,
        },
        {
          name: "山东",
          value: 302,
        },
        {
          name: "新疆",
          value: 60,
        },
        {
          name: "江苏",
          value: 210,
        },
        {
          name: "浙江",
          value: 104,
        },
        {
          name: "江西",
          value: 200,
        },
        {
          name: "湖北",
          value: 2000,
        },
        {
          name: "广西",
          value: 33,
        },
        {
          name: "甘肃",
          value: 7,
        },
        {
          name: "山西",
          value: 5,
        },
        {
          name: "内蒙古",
          value: 200,
        },
        {
          name: "陕西",
          value: 22,
        },
        {
          name: "吉林",
          value: 4,
        },
        {
          name: "福建",
          value: 18,
        },
        {
          name: "贵州",
          value: 400,
        },
        {
          name: "广东",
          value: 98,
        },
        {
          name: "青海",
          value: 1,
        },
        {
          name: "西藏",
          value: 100,
        },
        {
          name: "四川",
          value: 350,
        },
        {
          name: "宁夏",
          value: 4,
        },
        {
          name: "海南",
          value: 22,
        },
        {
          name: "台湾",
          value: 3,
        },
        {
          name: "香港",
          value: 5,
        },
        {
          name: "澳门",
          value: 555,
        },
      ],
    };
  },
  methods: {
    //初始化中国地图
    initEchartMap() {
      let mapDiv = document.getElementById("china_map");
      let myChart = echarts.init(mapDiv);
      myChart.setOption(this.options);
    },
    //修改echart配制
    setEchartOption() {
      this.options.series[0]["data"] = this.dataList;
    },
  },
  created() {
    this.setEchartOption();
  },
  mounted() {
    this.$nextTick(() => {
      this.initEchartMap();
    });
  },
};

// export default {
//   data() {
//     return {
//       tableData: [{
//         title: '我校教师在第七届全国计算机类课程实验教学案例设计竞赛中获二等奖',
//         publisher: '管理员',
//         date: '2022-11-19'
//       },
//       {
//         title: '高校召开2023年度预算编制工作会议',
//         publisher: '管理员',
//         date: '2022-11-19'
//       },
//       {
//         title: '我校召开四届一次教职工代表暨工会会员代表大会',
//         publisher: '管理员',
//         date: '2022-06-27'
//       },]
//     }
//   },
//   methods: {
//     handleClick(scope) {
//       switch (scope.$index) {
//         case 0:
//           window.open("https://www.jcut.edu.cn/info/1053/10704.htm")
//           break;
//         case 1:
//           window.open("https://www.jcut.edu.cn/info/1053/10703.htm")
//           break;
//         case 2:
//           window.open("https://www.jcut.edu.cn/info/1053/10183.htm")
//           break;
//         default:
//           return false
//           break;
//       }
//     }
//   },
// }
</script>

<style scoped>
#china_map_box {
  height: 100%;
  position: relative;
}
#china_map_box #china_map {
  height: 100%;
}
#china_map_box .china_map_logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
}
#china_map .tooltip_style {
  line-height: 1.7;
  overflow: hidden;
}
#china_map .tooltip_left {
  float: left;
}
#china_map .tooltip_right {
  float: right;
}
</style>

