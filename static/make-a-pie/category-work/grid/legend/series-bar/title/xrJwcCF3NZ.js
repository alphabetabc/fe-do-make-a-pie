var myData=["彝族","德昂族","哈尼族","傣族","壮族","苗族","傈僳族","拉祜族","佤族","纳西族","瑶族","景颇族","布依族","布朗族","阿昌族","独龙族"];option={backgroundColor:"#000",title:{text:"左右两边柱状对比图",x:"center",textStyle:{color:"#ffffff"}},legend:{data:["左边数据","右边数据"],bottom:10,center:!0,textStyle:{color:"#fff",textAlign:"center"},itemGap:80,itemWidth:0},grid:[{show:!1,left:"4%",top:60,bottom:60,containLabel:!0,width:"46%"},{show:!1,left:"50.5%",top:60,bottom:80,width:"0%"},{show:!1,right:"4%",top:60,bottom:60,containLabel:!0,width:"46%"}],xAxis:[{splitNumber:2,type:"value",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},position:"bottom",axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:12}},splitLine:{show:!0,lineStyle:{color:"#57617f",width:1,type:"solid"}}},{gridIndex:1,show:!1},{gridIndex:2,type:"value",axisLine:{show:!1},axisTick:{show:!1},position:"bottom",axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:12}},splitLine:{show:!0,lineStyle:{color:"#57617f",width:1,type:"solid"}}}],yAxis:[{type:"category",inverse:!0,position:"right",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},data:[]},{gridIndex:1,type:"category",inverse:!0,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0},data:myData.map(function(e){return{value:e,textStyle:{align:"center",color:"#ffffff",fontSize:12}}})},{gridIndex:2,type:"category",inverse:!0,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},data:[]}],series:[{name:"左边数据",type:"bar",barGap:20,barWidth:"80%",label:{normal:{show:!0,color:"red",position:"insideLeft",textStyle:{color:"#ffffff"}},emphasis:{show:!1}},itemStyle:{normal:{color:"#36c5e7",barBorderRadius:[8,0,0,8]},emphasis:{show:!1}},data:["6666","5700","5600","4000","2500","2400","2100","1700","1500","1000"]},{name:"右边数据",type:"bar",barGap:20,barWidth:"80%",xAxisIndex:2,yAxisIndex:2,label:{normal:{show:!0,color:"red",position:"insideRight",textStyle:{color:"#ffffff"}}},itemStyle:{normal:{color:"#e68b55",barBorderRadius:[0,8,8,0]},emphasis:{show:!1}},data:["6000","5700","5600","4000","2500","2400","2100","1700","1500","1000"]}]},myChart.on("click",function(e){console.log(e)});
