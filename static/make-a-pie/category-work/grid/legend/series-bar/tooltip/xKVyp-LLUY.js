var data=[91,82,73,61,54,46],yAxis=["北京市","天津市","河北省","吉林省","辽宁省","内蒙古"];option={backgroundColor:"#000",tooltip:{textStyle:{fontSize:16},formatter:function(o){return`${o.name} : ${o.data}万人`}},legend:{selectedMode:!1,show:!1},grid:{left:"2%",right:"5%",bottom:"5%",top:5,containLabel:!0},xAxis:[{type:"value",show:!1}],yAxis:[{splitLine:{show:!1},axisLine:{show:!1},type:"category",inverse:!0,axisTick:{show:!1},data:yAxis,axisLabel:{show:!0,textStyle:{color:"#ffffff"},formatter:(o,t)=>{var e=0;return e=t+1,t===0?"{no1|TOP"+e+"}{data|"+o+"}":t===1?"{no2|TOP"+e+"}{data|"+o+"}":t===2?"{no3|TOP"+e+"}{data|"+o+"}":t===3?"{no4|TOP"+e+"}{data|"+o+"}":t===4?"{no5|TOP"+e+"}{data|"+o+"}":t===5?"{no6|TOP"+e+"}{data|"+o+"}":o},rich:{no1:{color:"#EF5525",fontSize:14},data:{color:"#fff",fontSize:14},no2:{color:"#EFAF25",fontSize:14},no3:{color:"#D0EF25",fontSize:14},no4:{color:"#26EFC2",fontSize:14},no5:{color:"#2BE4FF",fontSize:14},no6:{color:"#2BE4FF",fontSize:14}}}}],series:[{name:"标准化",type:"bar",barWidth:10,label:{show:!0,position:"right",color:"#fff",fontSize:14,distance:5},itemStyle:{barBorderRadius:[20,20,20,20],color:new echarts.graphic.LinearGradient(0,0,1,0,["#4C67EB","#00F6FF"].map((o,t)=>({color:o,offset:t})))},data}]};