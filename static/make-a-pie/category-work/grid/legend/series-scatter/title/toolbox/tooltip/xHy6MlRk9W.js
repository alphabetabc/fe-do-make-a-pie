var week=new Date().getDay(),a=0,classDatas1=[{value:["8:30-9:10","周一",`英语
1栋306`]},{value:["9:20-10:00","周一",`高数
12栋110`]},{value:["10:20-11:00","周一",`C语言
10栋603`]},{value:["11:10-11:50","周二",`马克思主义概论
10栋501`]},{value:["11:10-11:50","周三",`体育
12栋106`]},{value:["14:30-15:10","周三",`C语言
10栋603`]},{value:["16:20-17:00","周四",`高数
12栋110`]},{value:["17:10-17:50","周四",`毛邓论
10栋312`]},{value:["15:20-16:00","周五",`心理学
3栋201`]}],classDatas2=[{value:["8:30-9:10","周一",`英语
1栋306`]},{value:["9:20-10:00","周一",`体育
12栋106`]},{value:["10:20-11:00","周二",`C语言
10栋301`]},{value:["11:10-11:50","周二",`马克思主义概论
10栋501`]},{value:["11:10-11:50","周三",`计算机基础
10栋412`]},{value:["14:30-15:10","周三",`毛邓论
10栋312`]},{value:["16:20-17:00","周四",`高数
12栋110`]},{value:["17:10-17:50","周四",`毛邓论
10栋312`]},{value:["14:30-15:10","周五",`C语言
6栋301`]},{value:["15:20-16:00","周五",`心理学
10栋201`]}];switch(week){case 1:a="周一";break;case 2:a="周二";break;case 3:a="周三";break;case 4:a="周四";break;case 5:a="周五";break;default:}for(var i=0;i<classDatas1.length;i++)a==classDatas1[i].value[1]&&(classDatas1[i].symbolSize=40,classDatas1[i].symbolOffset=[0,"-10%"],classDatas1[i].itemStyle={normal:{color:"#FF83FA"}});for(var i=0;i<classDatas2.length;i++)a==classDatas2[i].value[1]&&(classDatas2[i].symbolSize=40,classDatas2[i].symbolOffset=[0,"-10%"],classDatas2[i].itemStyle={normal:{color:"#FF83FA"}});var ydata=[{value:"周一"},{value:"周二"},{value:"周三"},{value:"周四"},{value:"周五"},""];week==0&&(week=6);function sparea(){var e={color:["#F0F8FF","#F0F8FF","#F0F8FF","#F0F8FF","#F0F8FF"]};return e.color[week-1]="#feeeed",e}var spareas=sparea();ydata[week-1].textStyle={color:"#FF1493"},option={backgroundColor:"RGB(240, 248, 255)",title:{text:"XX专业大一课程表",subtext:"数据虚构"},legend:{top:20,right:80,selectedMode:"single",data:["单周","双周"],inactiveColor:"#9FB6CD",textStyle:{color:"#6495ED"}},grid:{},toolbox:{feature:{saveAsImage:{}}},tooltip:{show:!0,formatter:"{c}",hideDelay:300},xAxis:{type:"category",data:["","8:30-9:10","9:20-10:00","10:20-11:00","11:10-11:50","14:30-15:10","15:20-16:00","16:20-17:00","17:10-17:50","19:10-20:50"],boundaryGap:!1,splitLine:{},axisLabel:{interval:0,rotate:30}},yAxis:{type:"category",boundaryGap:!1,splitLine:{show:!0},splitArea:{show:!0,areaStyle:spareas},axisLine:{show:!1},data:ydata},series:[{name:"单周",type:"scatter",symbol:"pin",symbolSize:20,label:{normal:{show:!0,position:"top",rotate:0,backgroundColor:"rgb(224,255,255)",borderColor:"#aaa",fontWeight:100,borderWidth:1,borderRadius:4,formatter:function(e){return`{a|${e.data.value[2]}}`},rich:{a:{align:"center",color:"#1E90FF",fontSize:12,textShadowBlur:0,textBorderColor:"#1E90EF",textBorderWidth:1}}},emphasis:{show:!0,backgroundColor:"rgb(224,255,255)",borderColor:"#aaa",fontWeight:200,borderWidth:2,borderRadius:4,formatter:function(e){return`{a|${e.data.value[2]}}`},rich:{a:{align:"center",color:"#1E90FF",fontSize:18,textShadowBlur:0,textBorderColor:"#9F79EE",textBorderWidth:0}}}},itemStyle:{normal:{color:"#f58f98"}},coordinateSystem:"cartesian2d",data:classDatas1},{name:"双周",type:"scatter",symbol:"pin",symbolSize:20,label:{normal:{show:!0,rotate:0,position:"top",backgroundColor:"rgb(224,255,255)",borderColor:"#aaa",borderWidth:1,borderRadius:4,fontWeight:100,formatter:function(e){return`{a|${e.data.value[2]}}`},rich:{a:{align:"center",color:"#1E90FF",fontSize:12,textShadowBlur:0,textBorderColor:"#1E90FF",textBorderWidth:0}}},emphasis:{show:!0,backgroundColor:"rgb(224,255,255)",borderColor:"#aaa",fontWeight:200,borderWidth:2,borderRadius:4,formatter:function(e){return`{a|${e.data.value[2]}}`},rich:{a:{align:"center",color:"#1E90FF",fontSize:18,textShadowBlur:0,textBorderColor:"#9F79EE",textBorderWidth:0}}}},itemStyle:{normal:{color:"#f58f98"}},coordinateSystem:"cartesian2d",data:classDatas2}]};
