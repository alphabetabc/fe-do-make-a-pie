let myicon="image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg2NDg1MzkzMjI2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ3MzUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI2Ljc0Mjg1NyAwIDAgMjI2Ljc0Mjg1NyAwIDUxMnMyMjYuNzQyODU3IDUxMiA1MTIgNTEyIDUxMi0yMjYuNzQyODU3IDUxMi01MTItMjI2Ljc0Mjg1Ny01MTItNTEyLTUxMnogbTAgODc3LjcxNDI4NmMtMjA0LjggMC0zNjUuNzE0Mjg2LTE2MC45MTQyODYtMzY1LjcxNDI4Ni0zNjUuNzE0Mjg2czE2MC45MTQyODYtMzY1LjcxNDI4NiAzNjUuNzE0Mjg2LTM2NS43MTQyODYgMzY1LjcxNDI4NiAxNjAuOTE0Mjg2IDM2NS43MTQyODYgMzY1LjcxNDI4Ni0xNjAuOTE0Mjg2IDM2NS43MTQyODYtMzY1LjcxNDI4NiAzNjUuNzE0Mjg2eiIgZmlsbD0iIzRBQkRDRiIgcC1pZD0iNDczNiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS0zNjUuNzE0Mjg2IDBhMzY1LjcxNDI4NiAzNjUuNzE0Mjg2IDAgMSAwIDczMS40Mjg1NzIgMCAzNjUuNzE0Mjg2IDM2NS43MTQyODYgMCAxIDAtNzMxLjQyODU3MiAwWiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNDczNyI+PC9wYXRoPjwvc3ZnPg==",startValue="",endValue="",start="",end="";option={backgroundColor:"#fff",legend:{data:["雨量"],itemHeight:2,itemWidth:15,borderRadius:5,textStyle:{color:"#3C4353",fontSize:12}},graphic:[{type:"text",left:81,bottom:9,style:{text:"2020-09-15 00:00:00",textAlign:"center",fill:"#838A9D",fontSize:12}},{type:"text",right:53,bottom:9,style:{text:"2020-09-15 00:00:00",textAlign:"center",fill:"#838A9D",fontSize:12}}],dataZoom:[{type:"slider",xAxisIndex:0,filterMode:"filter",height:4,bottom:35,handleSize:"400%",handleIcon:myicon,handleStyle:{color:"#46C7DC"},backgroundColor:"#F0F2F5",fillerColor:"#46C7DC",borderColor:"transparent",textStyle:{color:"transparent"},dataBackground:{areaStyle:{opacity:0},lineStyle:{opacity:0}}},{type:"slider",yAxisIndex:0,filterMode:"none",left:45,handleSize:"400%",width:4,handleIcon:myicon,handleStyle:{color:"#46C7DC"},backgroundColor:"#F0F2F5",fillerColor:"#46C7DC",borderColor:"transparent",textStyle:{color:"transparent"},dataBackground:{areaStyle:{opacity:0},lineStyle:{opacity:0}}}],tooltip:{position:"top",padding:[13,16],formatter(t){return"2020-09-15 20:00:00<br>"+'<span style="width: 15px;height: 2px;background: #648EED;border-radius: 4px;display:inline-block;margin-bottom:3px;margin-right:7px;"></span>'+"雨量："+t.value},textStyle:{align:"center"}},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisLine:{lineStyle:{color:"#3C4353"}},axisLabel:{show:!1,formatter:function(t,e){return t==start||t==end?(console.log(t,e),t):""}}}],yAxis:[{name:"雨量mm",nameTextStyle:{color:"#3C4353",fontSize:12},type:"value",minInterval:2.5,splitNumber:10,axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:"rgba(221, 226, 238, 0.5)"}},axisLabel:{show:!0,textStyle:{color:"#838A9D",fontSize:12}},axisLine:{lineStyle:{color:"#DDE2EE"}}}],series:[{name:"雨量",data:[9,7.2,11,15,22,3.3,.2],type:"bar",barWidth:18,showBackground:!1,itemStyle:{normal:{color:"#648EED"}}}]},myChart.setOption(option);let option2=myChart.getModel().option;startValue=option2.dataZoom[0].startValue,endValue=option2.dataZoom[0].endValue,start=option2.xAxis[0].data[startValue],end=option2.xAxis[0].data[endValue],console.log("开始值="+start),console.log("结束值="+end),myChart.on("dataZoom",function(t){let e=myChart.getModel().option;startValue=e.dataZoom[0].startValue,endValue=e.dataZoom[0].endValue,start=e.xAxis[0].data[startValue],end=e.xAxis[0].data[endValue],console.log("开始值="+start),console.log("结束值="+end),option.graphic[0].style.text=start,option.graphic[1].style.text=end,myChart.setOption(option)});