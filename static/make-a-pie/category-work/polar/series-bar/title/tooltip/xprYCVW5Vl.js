let namelist=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],percentList=[1,3,1,4,4,6,10,5,6,9,15,10,8,13,2,3];option={backgroundColor:"#fff",title:{text:"风频",top:10,subtext:"",x:"center",textStyle:{color:"#666"}},angleAxis:{type:"category",startAngle:101.24,splitLine:{show:!0,lineStyle:{color:"#9a9a9a",width:1}},axisLine:{show:!0,lineStyle:{color:"#333",width:3}},axisLabel:{show:!0,color:"#1c2383",fontWeight:"bold"},z:10,data:namelist},radiusAxis:{z:20,axisLabel:{show:!0,color:"#14b178",fontWeight:"bold",formatter:"{value} %"},splitLine:{show:!0,lineStyle:{color:"#054b07",width:1}},axisLine:{show:!0,lineStyle:{color:"#12510e",width:1}}},polar:{},tooltip:{trigger:"item",borderColor:"#12510e",borderWidth:1,textStyle:{color:"#fff",fontWeight:"bold"},axisPointer:{type:"cross"},formatter:"{b}: {c}%"},series:[{type:"bar",barWidth:"99%",data:percentList,coordinateSystem:"polar",showBackground:!0,backgroundStyle:{color:"#fff"},color:["#054b07"],itemStyle:{normal:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(189, 203, 203, 0.5)"},emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(105, 113, 113, 0.5)",opacity:.9}}}]};