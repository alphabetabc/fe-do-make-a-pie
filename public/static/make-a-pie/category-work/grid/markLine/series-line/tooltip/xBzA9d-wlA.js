var data=[["01",85.11],["02",36.61],["03",27.26],["04",6.72],["05",36.37],["06",80.13],["07",20.88],["08",97.15]];let type=[],symbolArr=[];for(var dataa=[],i=0;i<data.length;i++)dataa.push(data[i][1]),type.push(data[i][1]);console.log(type),type.forEach(function(e,o){symbolArr[o]={value:dataa[o],symbolSize:e==97.15?13:0,itemStyle:{normal:{color:e==97.15?"#E4007F":"#1572E9",shadowBlur:50,shadowColor:"#333"}}}}),console.log(symbolArr),data.push(["",avg]);for(var sum=0,data3=[],i=0;i<data.length-1;i++)data3.push(data[i][1]),sum+=data[i][1];for(var avg=sum/data.length,data1=data,data2=[],i=0;i<data.length-2;i++)data2.push("");data2.push(data[data.length-2][1]),data2.push(data1[data1.length-2][1]),console.log(data3);for(var data4=[],i=0;i<data.length;i++)data4.push(data[i][0]);option={tooltip:{trigger:"axis",formatter:function(e){return e.length===1&&e[0].seriesName==="line1"?"明天<br/>"+e[0].data:e[0].axisValue+"日<br/>"+e[0].data}},xAxis:[{type:"category",name:"",data:data4,axisTick:{show:!1},splitLine:{show:!1},splitNumber:20}],yAxis:[{type:"value",axisTick:{show:!1},splitLine:{show:!1}},{type:"value",show:!1,axisTick:{show:!1},splitLine:{show:!1}}],grid:{top:90},series:[{name:"line",type:"line",symbol:"none",lineStyle:{color:"#ff7405"},data:data3,xAxisIndex:0,markLine:{symbol:["none","none"],label:{show:!1},data:[{xAxis:7}]}},{name:"line1",type:"line",symbolSize:1,lineStyle:{color:"#1260FF",type:"dashed"},data:data2,label:{show:!0,distance:4,position:["10","-10"],formatter:function(e){if(console.log(e),e.dataIndex==8){var o=e.value||0;return"{color1|"+o+"}"}},rich:{color1:{color:"#fff",backgroundColor:"black",borderColor:"#FAAE29",border:1,lineHeight:24,height:24,padding:[2,6,2,6],borderWidth:1,borderRadius:[3,3,3,3]}}},xAxisIndex:0,markLine:{lineStyle:{type:"solid",color:"red"},symbol:["none","none"],label:{show:!1},data:[{xAxis:8}]}},{label:{show:!1},type:"effectScatter",coordinateSystem:"cartesian2d",data:symbolArr,yAxisIndex:1,symbolSize:0,showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0}]};