var uploadedDataURL="/asset/get/s/data-1606874759613-JTEfY7Bl9.json";data=[{fromName:"合肥",toName:"上海",count:"1",amount:"89999",coords:[[118.8062,31.9208],[119.4543,25.9222]]},{fromName:"拉萨",toName:"上海",count:"1",amount:"89999",coords:[[127.9688,45.368],[119.4543,25.9222]]},{fromName:"吉林",toName:"上海",count:"1",amount:"89999",coords:[[110.3467,41.4899],[119.4543,25.9222]]},{fromName:"吉林",toName:"上海",count:"1",amount:"89999",coords:[[125.8154,44.2584],[119.4543,25.9222]]},{fromName:"吉林",toName:"上海",count:"1",amount:"89999",coords:[[116.4551,40.2539],[119.4543,25.9222]]},{fromName:"吉林",toName:"上海",count:"1",amount:"89999",coords:[[123.1238,42.1216],[119.4543,25.9222]]},{fromName:"吉林",toName:"上海",count:"1",amount:"89999",coords:[[114.4995,38.1006],[119.4543,25.9222]]},{fromName:"吉林",toName:"上海",count:"1",amount:"89999",coords:[[117.4219,39.4189],[119.4543,25.9222]]}],$.get(uploadedDataURL,function(o){echarts.registerMap("china",o),console.log(o),option={geo:{map:"china",show:!0,roam:!1,label:{emphasis:{show:!1}},aspectScale:1,layoutSize:"100%",itemStyle:{normal:{opacity:1},emphasis:{label:{show:!0,opacity:0}}}},series:[{name:"",type:"lines",zlevel:2,tooltip:{show:!1},effect:{show:!0,period:3,trailLength:.4,symbol:"arrow",symbolSize:5},lineStyle:{normal:{color:"#FFCE8F",width:2,opacity:.8,curveness:.3},emphasis:{width:3,opacity:.5}},data}]},myChart.setOption(option)});
