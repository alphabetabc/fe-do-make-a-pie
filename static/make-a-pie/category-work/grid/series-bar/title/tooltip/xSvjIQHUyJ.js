let yLabel=["0410","0405","0404","0407","0403","0402","0409","0408","0406","0410"],yData=[5,6,6,6,7,7,8,8,9,10],bgData=[];for(let e in yData)bgData.push(10);option={title:{text:"车辆故障 Top10",textStyle:{color:"#63C0FA",fontSize:"14",fontFamily:"PingFang",fontWeight:"400"},left:"center",top:"10"},grid:{left:"5%",right:"5%",bottom:"5%",top:"10%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return e[0].name+"<br/>"+e[0].seriesName+" : "+e[0].value+" <br/>"}},backgroundColor:"rgb(20,28,52)",xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,axisLabel:{show:!0,margin:15,textStyle:{color:"#BDC8DC"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:yLabel},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"#BDC8DC",fontSize:"12"}},data:yData}],series:[{name:"人数",type:"bar",zlevel:1,itemStyle:{normal:{barBorderRadius:[0,30,30,0],color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#5BBEFF"},{offset:1,color:"#148AF5"}]),shadowBlur:0,shadowColor:"rgba(87,220,222,0.7)"}},barWidth:20,data:yData},{name:"背景",type:"bar",barWidth:20,barGap:"-100%",data:bgData,itemStyle:{normal:{color:"#101B39",borderColor:"#293D49",barBorderRadius:[0,30,30,0]}}}]};