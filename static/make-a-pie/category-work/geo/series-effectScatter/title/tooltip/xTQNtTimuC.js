var uploadedDataURL="/asset/get/s/data-1591428766582-F1T8HaJu8.json";$.getJSON(uploadedDataURL,function(e){echarts.registerMap("tengzhou",e),myChart.hideLoading();var o=[{name:"和家园",value:[117.185391,35.110089]},{name:"翔宇经典",value:[117.175861,35.115679]}];option={backgroundColor:"transparent",title:{top:0,subtext:"",x:"center",textStyle:{color:"#ccc"}},tooltip:{showContent:!0,showDelay:0,hideDelay:0,transitionDuration:0,enterable:!0,backgroundColor:"#FA8C16",textStyle:{color:"#fff"},formatter:function(t){var r=t.name;return r}},geo:{map:"tengzhou",aspectScale:1,zoom:1.1,roam:!0,label:{normal:{show:!0,formatter:"{b}",textStyle:{color:"#FFF",fontSize:20}},emphasis:{textStyle:{color:"#fff"}}},itemStyle:{normal:{borderColor:"#00FFFF",borderWidth:2,areaColor:"#00B2ED"},emphasis:{areaColor:"#2AB8FF",borderWidth:0,color:"green",label:{show:!1}}}},series:[{name:"Top 5",type:"effectScatter",coordinateSystem:"geo",data:o,symbolSize:function(t){return 15},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"top",show:!0}},itemStyle:{color:"#fff",normal:{color:"#00FFFF",shadowBlur:20,shadowColor:"#00FFFF"}},zlevel:1}]},myChart.setOption(option)}),myChart.on("click",function(e){console.log(e);var o=e.seriesIndex,t=e.dataIndex;option.series[o].itemStyle={color:function(r){return t===r.dataIndex?"#FA8C16":"#fff"}},myChart.setOption(option)});
