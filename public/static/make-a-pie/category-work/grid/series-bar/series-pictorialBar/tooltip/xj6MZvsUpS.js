var maxData=400,myData=["大栅栏","天安门","故宫","景山","北海公园","后海","什刹海","西单","玉渊潭","中央电视塔","东单","王府井","南锣鼓巷","工体","潘家园","琉璃厂"],databeast=[389,259,262,324,232,176,196,214,133,370,268,360,185,392,392,153];let color="#00c7dc",splitLine="#11263e",fontSize=30;option={backgroundColor:"#030115",tooltip:{show:!0,textStyle:{fontSize}},grid:{bottom:"5%"},xAxis:{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,margin:8,textStyle:{color:"#fff",fontSize}},data:myData},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},position:"center",axisLabel:{show:!0,color,fontSize},splitLine:{show:!0,lineStyle:{color:splitLine,width:1,type:"solid"}}},series:[{type:"bar",barWidth:"50%",barGap:"-100%",data:databeast,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(45,218,244,.8)"},{offset:1,color:"rgba(23,74,141,.8)"}]),barBorderRadius:[30,30,0,0]}},zlevel:9},{type:"pictorialBar",tooltip:{show:!1},itemStyle:{normal:{color:"rgba(12,41,107,.9)"}},label:{normal:{show:!1,formatter:function(t){return t.value},position:"top",textStyle:{color:"rgba(2,191,138,1)",fontSize:0}}},animationDuration:0,symbolRepeat:"fixed",symbolMargin:"60%",symbol:"rect",symbolSize:[50,8],symbolBoundingData:400,data:databeast,z:1,animationEasing:"elasticOut",animationDelay:function(t,a){return a.index*30}}]};