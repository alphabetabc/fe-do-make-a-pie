let total=100,count=60;option={backgroundColor:"#082751",title:{text:"{a|"+count+"}{b|db}",x:"center",y:"center",textStyle:{rich:{a:{color:"red",fontSize:40,fontWeight:"normal",fontFamily:"led"},b:{color:"#fff",padding:[-20,0,0,8],fontSize:15}}}},tooltip:{trigger:"item",formatter:function(e){if(e.name=="实时数据"){var t=`${e.name}:${e.percent}%`;return t}else{var a=`${e.name}:${e.data.total/2}`;return a}}},calculable:!0,series:[{name:"噪音扬尘情况",type:"pie",labelLine:{show:!1},radius:[60,90],center:["50%","50%"],data:[{name:"实时数据",value:count,label:{show:!1},itemStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#FF575D"},{offset:1,color:"#D66AFF"}])}},{total:total*2,name:"超标标准",value:total*2-count,itemStyle:{color:"transparent"}}]},{name:"数据比例",type:"pie",labelLine:{show:!1},label:{show:!1},radius:[65,80],center:["50%","50%"],data:[{value:count,name:"实时数据",itemStyle:{color:"transparent"}},{name:"超标标准",total:total*2,value:total*2-count,itemStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#1248DB"},{offset:1,color:"#0982DC"}])}}]}]};