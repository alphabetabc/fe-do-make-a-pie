var uploadedDataURL="/asset/get/s/data-1520166901794-HJRxuDtOG.json";myChart.showLoading();var data=[];$.getJSON(uploadedDataURL,function(a){echarts.registerMap("广东",a),data=a.features.map(o=>({value:(Math.random()*1e3).toFixed(2),name:o.properties.name})),myChart.hideLoading(),option={backgroundColor:"#404a59",tooltip:{backgroundColor:"rgba(0,0,0,0)",trigger:"item"},legend:{show:!1},series:[{tooltip:{trigger:"item",formatter:function(o){var e="";return e='<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666"><div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">'+o.data.name+'</div><div style="text-align:center;color:#494949;padding:8px 6px"><span style="font-size:18px;font-weight:bold;">测试设备：'+o.data.value+" </span></div></div>",e}},name:"广东省数据",type:"map",map:"广东",zoom:.65,showLegendSymbol:!0,label:{show:!0,color:"#fff",fontSize:10},itemStyle:{normal:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10}},emphasis:{itemStyle:{areaColor:"#FFD181",borderColor:"#404a59",borderWidth:1}},layoutCenter:["50%","50%"],layoutSize:"160%",markPoint:{symbol:"none"},data}]},myChart.setOption(option),showTips("广州市")});