for(var xname=["总费用","教育学院","生物学院","外国语学院","工程学院"],value1=[0,70,35,20,0],value2=[150,80,70,35,20],colorList=[],i=0;i<=xname.length;i++)i===0?colorList[i]={x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#5CC0FF"},{offset:1,color:"#5998FF"}]}:colorList[i]={x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#00D0BF"},{offset:1,color:"#05C399"}]};option={grid:{top:40,bottom:40,left:60,right:20},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){var o;return e[1].value!="-"?o=e[1]:o=e[2],o.name+"投入金额 : "+o.value+"万元"}},xAxis:{data:xname,axisLabel:{margin:10,color:"#656565",textStyle:{fontSize:13}},axisLine:{lineStyle:{color:"#333333"}},axisTick:{show:!1}},yAxis:{type:"value",name:"万元",nameTextStyle:{color:"#666666",fontSize:13,padding:[0,0,0,30]},axisLabel:{color:"#656565",textStyle:{fontSize:13}},axisLine:{lineStyle:{color:"#333333"}},axisTick:{show:!1},splitLine:{lineStyle:{color:"#D1D1D1"}}},series:[{type:"bar",stack:"投入金额",barWidth:"20",itemStyle:{color:"rgba(0,0,0,0)"},data:value1},{type:"bar",stack:"投入金额",barWidth:"20",label:{show:!1},itemStyle:{color:function(e){return colorList[e.dataIndex]},barBorderRadius:4},data:value2}]};
