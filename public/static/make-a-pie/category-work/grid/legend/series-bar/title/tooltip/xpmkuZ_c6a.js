var colorList=["#f36c6c","#e6cf4e","#20d180","#0093ff"],datas=[{value:36,name:"系列一纵坐标文字加长显示占位符测试test测试test测试test"},{value:54,name:"系列二纵坐标文字加长显示占位符测试test测试test测试test"},{value:29,name:"系列三纵坐标文字加长显示占位符测试test测试test测试test"},{value:25,name:"系列四纵坐标文字加长显示占位符测试test测试test测试test"},{value:55,name:"系列五纵坐标文字加长显示占位符测试test测试test测试test"}];let maxArr=new Array(datas.length).fill(100);var option={backgroundColor:"#031038",title:{text:"场景调用Top5",top:"3%",left:"2%",textStyle:{color:"#ADB0BE",fontSize:25,fontFamily:"Adobe Heiti Std",fontWeight:"bolder"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1},grid:{left:"20%",top:"13%",bottom:"10%",right:"5%"},xAxis:{show:!1,type:"value"},yAxis:[{offset:55,type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisPointer:{label:{show:!0,margin:30}},data:datas.map(e=>e.name),axisLabel:{margin:100,fontSize:20,align:"left",color:"#fff",rich:{a1:{color:"#fff",backgroundColor:colorList[0],width:40,height:40,align:"center",borderRadius:2,fontSize:20},a2:{color:"#fff",backgroundColor:colorList[1],width:40,height:40,align:"center",borderRadius:2,fontSize:20},a3:{color:"#fff",backgroundColor:colorList[2],width:40,height:40,align:"center",borderRadius:2,fontSize:20},a4:{color:"#fff",backgroundColor:colorList[2],width:40,height:40,align:"center",borderRadius:2,fontSize:20},b:{color:"#fff",backgroundColor:colorList[3],width:40,height:40,align:"center",borderRadius:2,fontSize:20}},formatter:function(e){return e.length>5?e.substring(0,5)+"...":e}}},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,data:datas.map(e=>e.value),axisLabel:{show:!0,fontSize:20,color:"#fff",formatter:"{value}"}}],series:[{z:2,name:"value",type:"bar",barWidth:20,zlevel:1,data:datas.map((e,t)=>({value:e.value,itemStyle:{normal:{barBorderRadius:30,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0099FF"},{offset:1,color:"#0033FF"}])}}})),label:{show:!1,position:"right",color:"#333333",fontSize:14,offset:[10,0]}}]};
