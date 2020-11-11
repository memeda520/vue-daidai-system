<template>
  <div class="map">
    <div id="egisContainer"></div>
  </div>
</template>

<script>
let electricAnimationHightLine;
export default {
  data() {
    return {};
  },
  mounted() {
    let key = "9874acd812563f61a7fab126a6db9023";
    let sn = "a118728ce08f3baf971f1d682986cc08";
    let _this = this;
    _this.initMap();
  
  },
  methods: {
    initMap() {
      let _this = this;
   
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFpZGFpYmciLCJhIjoiY2tkaTRkOXczMDFnNjJ0bnRydW43bTRhcyJ9.T9IoPdrcmdkXDH4ZAKi3aw';
    let map = new mapboxgl.Map({
        container:'egisContainer',
        style:'mapbox://styles/mapbox/streets-v11',
        center:[117.4508158070837, 24.511440531252028],
        zoom: 8.7751979
    })
      window.MAP = map;
      // window.MAP.id = get_uuid();
      MAP.on("load", function(loadEvent) {
        
        _this.showmap();
        _this.lineshow2();
      });
    },
    showmap() {
      let datalist = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                [117.66827313601942, 24.77473298869687],
                [117.85925042120914, 24.733926242735905],
                [117.67950709397161, 24.623097611732973],
                [117.82554854735247, 24.542831326567352],
                [117.59926453717082, 24.46689594865751],
                [117.80629033372031, 24.3821447443774],
                [117.55432870536009, 24.300262042787836],
                [117.81591944053542, 24.186123058192038],
                [117.71212349887696, 24.169728910111274],
              ],
            },
            properties: { id: "drawPolylineId_16050613335562" },
          },
        ],
      };
      const features = [];
      // console.log(line)
      const allLine = datalist.features[0].geometry.coordinates;
      const startPoint = allLine[0]; // [startLnglat.lng, startLnglat.lat];
      //判断潮流走向
      //起始点到线路第一个点的距离
      const firstLength = turf.length(
        turf.lineString([startPoint, allLine[0]])
      );
      //起始点到线路最后一个点的距离
      const lastLength = turf.length(
        turf.lineString([startPoint, allLine[allLine.length - 1]])
      );
      if (firstLength > lastLength) {
        console.log("倒序");
        //如果进入判断则将线路坐标倒序
        allLine.reverse();
      }
      const obj = {
        name: "",
        coordinateSystem: "GLMap",
        type: "lines",
        zlevel: 3, //线的优先级
        polyline: true,
        animation: false,
        // effect: {
        //   show: true, //是否显示标识
        //   constantSpeed: 100, //速度越大越快
        //   symbol: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z', //标识类型
        //   symbolSize: 50, //标识大小
        //   trailLength: 0,
        //    trailLength:0.1,
        // },
        effect: {
          show: true,
          trailWidth: 1,
          trailOpacity: 1,
          trailLength: 0.8,
          constantSpeed: 100,
          color: "#5cfbff",
        },
        blendMode: "lighter",
        lineStyle: {
          normal: {
            color: "#FF0000",
            width: 2,
            opacity: 0.1,
            curveness: 0.2, //线的平滑度
          },
        },

        data: [
          {
            coords: allLine,
          },
        ],
      };
      features.push(obj);
      console.log(features);
      let flowDirectionShowEchartLayer = new EchartsLayer(MAP);
      flowDirectionShowEchartLayer.chart.setOption({
        GLMap: {
          roam: true,
        },
        series: features,
      });
    },
    //第二种
    lineshow2() {
      let geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                [117.19644690202216, 24.630391994721776],
                [117.14669651680572, 24.531151947416177],
                [117.0712685134124, 24.368988595777523],
                [117.14990621907799, 24.336823361289035],
                [117.26385064973738, 24.408452933850967],
                [117.27187490541729, 24.550130386555026],
                [117.27508460768962, 24.62163868405419],
                [117.29755252359405, 24.691647994423235],
                [117.19484205088685, 24.463974441453416],
              ],
            },
          },
        ],
      };

      if (electricAnimationHightLine) {
        // console.log(gdHightLines)
        electricAnimationHightLine.remove();
        electricAnimationHightLine = null;
      }
      var colorreds = {
        1: "rgba(92,251,255,1)",
        0.5: "rgba(92,251,255,0.9)",
        0.49: "rgba(92,251,255,0.8)",
        0: "rgba(92,251,255,0.7)",
      };
      var optionLow = {
        model: "1",
        color: colorreds,
        speed: 1,
        speedratio: 1.5,
        minzoom: 0,
        maxzoom: 20,
        isignorezoom: true,
        pointradius: 1.9,
        pointsize: 20,
        linelength: 10,
        linewidth: 2,
        backgroundcolor: "red",
        backgroundopacity: 1,
        backgroundwidth: 2,
      };

      electricAnimationHightLine = new Animation.ElectricAnimationM(
        MAP,
        geojson,
        optionLow
      );
      // console.log(electricAnimationHightLine)
      electricAnimationHightLine && electricAnimationHightLine.start();
    },
  },
};
</script>

<style lang="scss">
.map {
  width: 100%;
  height: 100%;
  #egisContainer {
    width: 100%;
    height: 100%;
  }
}
</style>
