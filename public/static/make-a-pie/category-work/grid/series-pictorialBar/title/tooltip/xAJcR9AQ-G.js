var person_full="image:///asset/get/s/data-1592477780351-Yg2ojekAW.png",person="image:///asset/get/s/data-1592477852477-C1j75Abg1.png";option={backgroundColor:"#003366",title:{text:"杭州前后端人员占比",left:"center",y:50,textStyle:{color:"#68d8fe",fontSize:20}},grid:{left:"10%",right:"10%",top:"25%",bottom:"25%",width:"80%"},tooltip:{trigger:"item",textStyle:{fontSize:14},formatter:"{b0}:{c0}"},xAxis:{splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}},yAxis:[{type:"category",inverse:!0,data:["前端","后端"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#fff",fontSize:18}}},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"#ffffff",fontSize:18}},data:["80%","70%"]}],series:[{type:"pictorialBar",barWidth:100,symbol:person_full,symbolRepeat:"fixed",symbolMargin:0,symbolClip:!0,symbolSize:50,data:[8e3,7e3],z:2},{type:"pictorialBar",barWidth:100,itemStyle:{normal:{opacity:.3}},label:{normal:{show:!1}},animationDuration:0,symbolRepeat:"fixed",symbolMargin:0,symbol:person,symbolSize:50,data:[1e4,1e4],z:1}]};