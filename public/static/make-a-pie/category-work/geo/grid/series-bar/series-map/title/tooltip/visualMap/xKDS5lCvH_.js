let title="",dataValue=[{city:"四川",value:5,color:"#DE1F14",num:"319"},{city:"云南",value:4,color:"#EF5854",num:"257"},{city:"贵州",value:3,color:"#F3807C",num:"212"},{city:"西藏",value:2,color:"#F8ADAB",num:"22"},{city:"重庆",value:1,color:"#FBD3D2",num:"12"}],colorRange=["#fff"],max=dataValue.length;var data=[{name:"北京",value:0},{name:"天津",value:0},{name:"上海",value:0},{name:"重庆",value:0},{name:"河北",value:0},{name:"河南",value:0},{name:"云南",value:0},{name:"辽宁",value:0},{name:"黑龙江",value:0},{name:"湖南",value:0},{name:"安徽",value:0},{name:"山东",value:0},{name:"新疆",value:0},{name:"江苏",value:0},{name:"浙江",value:0},{name:"江西",value:0},{name:"湖北",value:0},{name:"广西",value:0},{name:"甘肃",value:0},{name:"山西",value:0},{name:"内蒙古",value:0},{name:"陕西",value:0},{name:"吉林",value:0},{name:"福建",value:0},{name:"贵州",value:0},{name:"广东",value:0},{name:"青海",value:0},{name:"西藏",value:0},{name:"四川",value:0},{name:"宁夏",value:0},{name:"海南",value:0},{name:"台湾",value:0},{name:"香港",value:0},{name:"澳门",value:0}];let barData=[],yData=[];dataValue.forEach(a=>{colorRange[a.value]=a.color,data.find(e=>{e.name===a.city&&(e.value=a.value,e.num=a.num,e.color=a.color)}),yData.push(a.city+" "+a.num+" "),a.value=a.num,barData.push(a)});var option={backgroundColor:"#fff",title:[{show:!0,text:title,textStyle:{color:"#2D3E53",fontSize:18},top:10}],tooltip:{show:!0,formatter:function(a){return a.name+"："+a.data.num}},visualMap:{type:"continuous",orient:"horizontal",itemWidth:10,itemHeight:0,showLabel:!0,seriesIndex:[0],min:0,max,inRange:{color:colorRange},textStyle:{color:"#7B93A7"},bottom:30,left:"left"},grid:{right:10,top:200,bottom:200,width:"20%"},xAxis:{show:!1},yAxis:{type:"category",inverse:!0,nameGap:16,axisLine:{show:!1,lineStyle:{color:"#ddd"}},axisTick:{show:!1,lineStyle:{color:"#ddd"}},axisLabel:{interval:0,margin:85,textStyle:{color:"#455A74",align:"left",fontSize:14}},data:yData},geo:{roam:!0,map:"china",left:"left",right:"300",layoutSize:"80%",label:{emphasis:{show:!1}},itemStyle:{emphasis:{areaColor:"transparent"},normal:{borderColor:"#ccc"}}},series:[{name:"mapSer",type:"map",roam:!1,geoIndex:0,label:{show:!1},data},{name:"barSer",type:"bar",roam:!1,visualMap:!1,zlevel:2,center:["83%","20%"],barMaxWidth:8,barGap:.4,itemStyle:{normal:{color:function(a){return a.data.color},barBorderRadius:15}},data:barData}]};
