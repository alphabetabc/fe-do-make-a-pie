const myShape={x:0,y:0,width:13},InclinedRoofBar=echarts.graphic.extendShape({shape:myShape,buildPath:function(t,e){const o=e.xAxisPoint,r=[e.x,e.y],a=[e.x-17,e.y-10],n=[o[0]-17,o[1]],i=[o[0],o[1]];t.moveTo(r[0],r[1]).lineTo(a[0],a[1]).lineTo(n[0],n[1]).lineTo(i[0],i[1]).closePath()}});echarts.graphic.registerShape("InclinedRoofBar",InclinedRoofBar),option={backgroundColor:"#1e3756",color:["#b27e44"],tooltip:{show:!0,trigger:"axis",axisPointer:{type:"shadow"},confine:!0,textStyle:{fontSize:14},formatter:t=>{var e=t[0];return this.workType=e.name,e.name+" : <br/>"+e.value}},legend:{top:5,itemWidth:16,itemHeight:8,left:"center",padding:0,textStyle:{color:"#fff",fontSize:14,padding:[2,0,0,0]},data:["demo"]},grid:{containLabel:!0,left:0,bottom:0,width:"100%",height:"85%"},xAxis:{type:"category",axisLine:{show:!0,lineStyle:{width:1,color:"rgb(255, 255, 255, 0.5)"}},axisLabel:{show:!0,interval:0,rotate:30,textStyle:{color:"#fff",fontSize:12}},splitLine:{show:!1,lineStyle:{color:"rgb(255, 255, 255, 0.3)",type:"dashed",width:1}},axisTick:{show:!1},data:[],zlevel:10},yAxis:{type:"value",name:"",min:0,axisTick:{show:!1},axisLabel:{textStyle:{color:"#fff",fontSize:12}},splitLine:{show:!0,lineStyle:{color:"rgb(255, 255, 255, 0.3)",type:"dashed",width:.7}},axisLine:{show:!1,lineStyle:{color:"rgb(52, 113, 250)"}},nameTextStyle:{color:"#fff",fontSize:16}},series:[{type:"custom",name:"demo",itemStyle:{borderColor:"#b27e44",borderWidth:1,color:"#b27e44",normal:{borderWidth:1}},renderItem:(t,e)=>{const o=e.coord([e.value(0),e.value(1)]),r=e.coord([e.value(0),0]);return{type:"InclinedRoofBar",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0]+10,y:o[1],xAxisPoint:[r[0]+10,r[1]]},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FFA042"},{offset:1,color:"rgba(0,0,0,0)"}]),stroke:"#b27e44"}}},data:[]},{type:"bar",label:{normal:{show:!0,position:"right",fontSize:14,offset:[15,0]}},showBackground:!1,barWidth:14,itemStyle:{color:"transparent"},tooltip:{show:!1},data:[]}]};const{xAxis,series}=option;seriesData=[{workmode:"text1",censusCount:29},{workmode:"text2",censusCount:80},{workmode:"text3",censusCount:34},{workmode:"text4",censusCount:27},{workmode:"text5",censusCount:55}],xAxis.data=seriesData.map(t=>t.workmode),series[0].data=seriesData.map(t=>t.censusCount);
