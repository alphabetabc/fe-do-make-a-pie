option={tooltip:{trigger:"axis",formatter(e){let l=e[0].name;for(let o=0;o<e.length;o++)l+="<br />"+e[o].seriesName+": "+e[o].value;return l},backgroundColor:"rgba(255, 68, 2, 0.1)",borderColor:"rgba(250, 193, 53, 1)",borderWidth:2},legend:{orient:"horizontal",top:"4",right:"84",itemWidth:22,itemHeight:7,itemGap:40,textStyle:{color:"#fff",fontSize:20,fontWeight:0},data:[{name:"平均值",icon:"rect"},{name:"月线",icon:"rect"}]},color:["#ff5a0c","#000"],xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"月线",data:[820,840,800,720,920,880,760],type:"line",symbol:"circle",symbolSize:18,showSymbol:!1,itemStyle:{color:function(e){let l=e.dataIndex,o="dowm",t={up:["rgba(89, 255, 128, 1)","rgba(89, 255, 128, 0.5)","rgba(89, 255, 128, 0.25)"],dowm:["rgba(255, 255, 255, .5)","rgba(235, 97, 0, 0.5)","rgba(235, 97, 0, 0.25)"]};return{type:"radial",x:.5,y:.5,r:.5,colorStops:[{offset:0,color:t[o][0]},{offset:.33,color:t[o][0]},{offset:.34,color:t[o][1]},{offset:.66,color:t[o][1]},{offset:.67,color:t[o][2]},{offset:1,color:t[o][2]}]}}},lineStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#FFC435"},{offset:1,color:"#FF4302"}],global:!1},width:4},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(235, 97, 0, 0.25)"},{offset:1,color:"rgba(235, 97, 0, 0)"}],global:!1}}},{name:"平均值",data:[820,820,820,820,820,820,820],type:"line",symbol:"circle",symbolSize:18,showSymbol:!1,tooltip:{show:!1},markPoint:{symbol:"rect",symbolSize:[22,7],symbolOffset:[660,0],label:{position:"right",formatter:"{c}",align:"left"},data:[{name:"平均值",type:"average"}]},itemStyle:{normal:{lineStyle:{width:1,type:"dashed"}}}}]};