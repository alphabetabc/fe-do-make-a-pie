var uploadedDataURL="/asset/get/s/data-1576655009916-by_DuGU2.json";myChart.showLoading();var data=[];$.getJSON(uploadedDataURL,function(o){echarts.registerMap("广东",o),data=o.features.map(e=>({value:(Math.random()*1e3).toFixed(2),name:e.properties.name})),myChart.hideLoading(),option={tooltip:{backgroundColor:"rgba(0,0,0,0)",trigger:"item"},legend:{show:!1},series:[{tooltip:{trigger:"item",formatter:function(e){var t="";return t='<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666"><div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">'+e.data.name+'</div><div style="text-align:center;color:#494949;padding:8px 6px"><span style="font-size:18px;font-weight:bold;">'+e.data.value+" </span></div></div>",t}},name:"广东省数据",type:"map",map:"广东",aspectScale:1,zoom:.65,showLegendSymbol:!1,label:{show:!0,color:"#fff",fontSize:10},itemStyle:{areaColor:"#0E95F1",borderColor:"#e9e9e9",borderWidth:1,shadowColor:"#0E95F1",shadowBlur:20},emphasis:{label:{show:!0,color:"#fff",fontSize:10},itemStyle:{areaColor:"#FFD181",borderColor:"#fff",borderWidth:1}},layoutCenter:["50%","50%"],layoutSize:"160%",markPoint:{symbol:"none"},data}]},myChart.setOption(option),showTips("广州市")}),myChart.on("globalout",()=>{setTimeout(()=>{showTips("广州市")},5e3)});function showTips(o){data.forEach((e,t)=>{e.name.includes(o)&&(myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t}),myChart.dispatchAction({type:"mapSelect",seriesIndex:0,dataIndex:t}))})}