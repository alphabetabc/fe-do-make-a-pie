option={xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"s1",data:[820,932,901,934,1290,1330,1320],type:"line",smooth:!0,lineStyle:{width:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:1,shadowOffsetY:1,shadowBlur:10},areaStyle:{}},{name:"s2",data:[420,232,501,534,790,630,820],type:"line",smooth:!0,lineStyle:{width:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:1,shadowOffsetY:1,shadowBlur:10},areaStyle:{}}]},setTimeout(function(){var s=myChart.getModel().getSeriesByIndex(0).getData().getVisual("color").substr(1),e="rgba("+parseInt("0x"+s.substr(0,2))+", "+parseInt("0x"+s.substr(2,2))+", "+parseInt("0x"+s.substr(4,2))+", 1)",r="rgba("+parseInt("0x"+s.substr(0,2))+", "+parseInt("0x"+s.substr(2,2))+", "+parseInt("0x"+s.substr(4,2))+", 0)",t=myChart.getModel().getSeriesByIndex(1).getData().getVisual("color").substr(1),a="rgba("+parseInt("0x"+t.substr(0,2))+", "+parseInt("0x"+t.substr(2,2))+", "+parseInt("0x"+t.substr(4,2))+", 1)",o="rgba("+parseInt("0x"+t.substr(0,2))+", "+parseInt("0x"+t.substr(2,2))+", "+parseInt("0x"+t.substr(4,2))+", 0)";myChart.setOption({series:[{name:"s1",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:e},{offset:1,color:r}]}}},{name:"s2",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:a},{offset:1,color:o}]}}}]})},10);