var parentJson=null,parentInfo=[{cityName:"全国",level:"china",code:32e4}];getGeoJson(32e4);function getGeoJson(e){AMapUI.loadUI(["geo/DistrictExplorer"],a=>{var i=new a;i.loadAreaNode(e,function(t,o){if(t){console.error(t);return}let r=o.getSubFeatures();if(r.length>0)parentJson=r;else if(r.length===0&&(r=parentJson.filter(n=>{if(n.properties.adcode==e)return n}),r.length===0))return;getMapData(r)})})}function getMapData(e){let a=e.map(t=>{var o=parseInt(Math.random()*100);return{value:o,label:{color:o<50?"#000":"#fff"},name:t.properties.name,level:t.properties.level,cityCode:t.properties.adcode}}),i={};i.features=e,initChart(a,i)}function initChart(e,a){myChart.showLoading(),echarts.registerMap("Map",a);var i={tooltip:{trigger:"item",formatter:t=>{let o=t.value;return window.isNaN(o)&&(o=0),t.name+"<br><hr>数值 : "+o.toFixed(2)}},legend:{show:!1},visualMap:{type:"continuous",min:0,max:100,itemWidth:20,itemHeight:300,seriesIndex:[0,2],dimension:0,realtime:!1,left:"30%",top:"10%",orient:"horizontal",calculable:!0,inRange:{color:["#fff","#009999"],symbolSize:[100,100]},outOfRange:{color:["#eeeeee"],symbolSize:[100,100]}},series:[{name:"地图下钻",type:"map",map:"Map",aspectScale:1,zoom:1,showLegendSymbol:!1,top:"10%",label:{show:!0,fontSize:20,fontWeight:"bold",formatter:`{c}
{b}`},emphasis:{label:{show:!0},itemStyle:{areaColor:"#FFD181",borderColor:"#fff",borderWidth:1}},layoutCenter:["50%","50%"],layoutSize:"100%",markPoint:{symbol:"none"},data:e}]};myChart.setOption(i),myChart.hideLoading(),myChart.off("click"),myChart.on("click",echartsMapClick)}function echartsMapClick(e){console.log(e);let a=e.data;a.level==="city"&&getGeoJson(a.cityCode)}function getDetail(){var e={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"},{data:[120,200,150,80,70,110,130],type:"bar"}]};myChart.setOption(e)}