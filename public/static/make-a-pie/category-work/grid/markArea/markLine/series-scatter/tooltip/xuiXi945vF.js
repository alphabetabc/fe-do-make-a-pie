let marksData=[{value:[0,1e3],name:"数据2",count:2220},{value:[45,35],name:"数据3",count:4220},{value:[85,15],name:"数据4",count:5220}],markArea=[[{name:"第一象限",xAxis:50,yAxis:1e3,label:{position:["80%","-10%"]}},{yAxis:500}],[{name:"第二象限",yAxis:1e3,label:{position:["0%","-10%"]}},{xAxis:50,yAxis:500}],[{name:"第三象限",yAxis:500,label:{position:["0%","95%"]}},{xAxis:50,yAxis:0}],[{name:"第四象限",xAxis:50,yAxis:500,label:{position:["80%","95%"]}},{yAxis:0}]];option={tooltip:{trigger:"axis",axisPointer:{},backgroundColor:"rgba(245, 245, 245, 0.8)",borderWidth:1,borderColor:"#ccc",padding:10,formatter:function(e){return e.map(a=>a.name).join("<br/>")},textStyle:{color:"#000"}},grid:{left:"5%",right:"5%",bottom:"5%",top:"5%",containLabel:!0},xAxis:{name:"出勤率",nameTextStyle:{fontSize:12,color:"rgba(9,27,61,0.6)"},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:20,textStyle:{color:"rgba(9,27,61,0.6)"}},axisLine:{lineStyle:{color:"#DDDDDD"}}},yAxis:{boundaryGap:["0","10%"],name:"人均单量",nameTextStyle:{fontSize:12,color:"rgba(9,27,61,0.6)"},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{margin:20,showMaxLabel:!1,textStyle:{color:"rgba(9,27,61,0.6)"}},splitLine:{lineStyle:{type:"dashed",color:"rgba(9,27,61,0.1)"}}},series:{type:"scatter",label:{show:!0,position:"right",formatter:"{b}",textStyle:{fontSize:10,fontWeight:"400",color:"rgba(9,27,61,0.6)"}},itemStyle:{color:function(e){return("rgba("+Math.floor(Math.random()*240)+","+Math.floor(Math.random()*240)+","+Math.floor(Math.random()*240)+",.8)").substring()}},data:marksData,markLine:{animation:!1,lineStyle:{color:"rgba(9,27,61,0.2)",width:1,dashOffset:5,type:"solid"},label:{show:!1},symbol:["none","none"],silent:!0,data:[{xAxis:60},{yAxis:500}]},markArea:{silent:!0,itemStyle:{color:"transparent"},label:{fontSize:12,fontWeight:"400",color:"rgba(9,27,61,0.6)"},data:markArea}}},option.series.data=marksData.map(e=>({...e,symbolSize:e.count/100}));