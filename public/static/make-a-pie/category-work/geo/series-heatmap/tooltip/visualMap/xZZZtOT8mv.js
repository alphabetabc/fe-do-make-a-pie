let geoJson={type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[379578.425,3329963344e-3],[379626.441,3329987367e-3],[379642.444,3330003363e-3],[380130.421,3330451365e-3]]]}}]};echarts.registerMap("test",geoJson);let datas=[[379578.425,3329963344e-3,-.32642],[379626.441,3329987367e-3,-.095065],[379642.444,3330003363e-3,-.114679],[380130.421,3330451365e-3,-.662569]],areaData=[];datas.map(e=>{areaData.push(...new Array(10).fill(e))});let mapMax=Math.max(...datas.map(e=>e[2])),mapMin=Math.min(...datas.map(e=>e[2]));myChart.setOption({backgroundColor:"#050038",tooltip:{show:!0,trigger:"item",axisPointer:{type:"shadow"}},visualMap:{show:!0,color:["#b50097","#ff4601","#e8bc09","#fffc00","#00fa25","rgba(114, 245, 134, 0.1)"],min:-10,max:1,calculable:!0,textStyle:{color:"#7e7e7e",fontSize:12}},geo:{map:"test",roam:!0,zoom:1.01,itemStyle:{normal:{show:!0,areaColor:"rgba(0,0,0,0)",borderColor:"rgb(15, 163, 227)",borderWidth:"1",shadowColor:"rgba(63, 218, 255, 0.5)",shadowBlur:20},emphasis:{show:!0,areaColor:"#050038",borderColor:"#83BAFF"}}},series:[{mapType:"nanshan",top:"center",left:"center",width:"65%",height:"95%",name:"PM10",type:"heatmap",coordinateSystem:"geo",progressive:400,pointSize:20,blurSize:30,data:areaData,emphasis:{show:!1,itemStyle:{areaColor:"rgb(255,255,0,1)"}}}]});
