var labelRight={normal:{position:"right"}};option={title:{text:"交错正负轴标签",subtext:"From ExcelHome",sublink:"http://e.weibo.com/1341556070/AjwF2AgQm"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){return e[0].value==1?str="异常":e[0].value==-1&&(str="正常"),str=e[0].name+"：<br>"+str,str}},grid:{top:80,bottom:30},xAxis:{type:"category",axisLine:{lineStyle:{color:"#619bc1",width:3,type:"solid"}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},data:["7时","8时","9时","10时","11时","12时","13时","14时","15时","16时"]},yAxis:{min:-2,max:2,nameLocation:"end",type:"value",position:"left",axisLabel:{show:!0,interval:5,formatter:function(e,t){var i="";return e==2?i="异常":e==-2&&(i="正常"),i}},axisTick:{show:!1},splitLine:{show:!1}},series:[{name:"状态",type:"bar",stack:"总量",label:{show:!1,normal:{show:!0,formatter:function(e){var t="";return e.value==1?t="异常":e.value==-1&&(t="正常"),t}}},data:[{value:-1,itemStyle:{color:"green"}},-1,1,-1,-1,1,1,1,1,-1]}]};
