var charts={cityList:["门禁1","门禁2","门禁3","门禁4","门禁5","门禁6","门禁7","门禁8","门禁9","门禁10"],cityData:[12,9,7,6,6,5,4,3,2,1]},top10CityList=charts.cityList,top10CityData=charts.cityData,color=["#FDD56A","#20D3AB","#49CCFF"],color1=["#FDD56A","#20D3AB","#49CCFF"],color2=["#FDD56A22","#20D3AB22","#49CCFF22"];let lineY=[],lineT=[];for(var i=0;i<charts.cityList.length;i++){var x=i;x>1&&(x=2);var data={name:charts.cityList[i],color:color[x],value:top10CityData[i],barGap:"-100%",itemStyle:{normal:{show:!0,borderWidth:2,shadowBlur:10,borderColor:color2[x],shadowColor:color[x],color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:color[x]},{offset:1,color:color1[x]}],!1),barBorderRadius:10}}},data1={color:color[x],value:top10CityData[i],barGap:"-100%",itemStyle:{color:"#00123500",barBorderRadius:10},label:{show:!0,formatter:"{a|"+top10CityData[i]+"次}",position:"right",color:color[x],distance:20,rich:{a:{color:color[x],borderColor:color[x],borderWidth:.5,padding:[1,10,1,10],height:18,align:"center",verticalAlign:"middle",backgroundColor:color2[x]}}}};lineY.push(data),lineT.push(data1)}option={title:{show:!1},tooltip:{trigger:"item",formatter:e=>e.seriesName==="total"?"":`${e.name}<br/>${e.value}`},grid:{borderWidth:0,top:"20px",left:"5%",right:"17%",bottom:"10%"},dataZoom:[{type:"slider",yAxisIndex:0,zoomLock:!0,width:10,height:"80%",handleSize:0,showDetail:!1,start:0,end:30},{type:"inside",id:"insideY",yAxisIndex:0,start:0,end:50,zoomOnMouseWheel:!1,moveOnMouseMove:!0,moveOnMouseWheel:!0}],color,yAxis:[{type:"category",inverse:!0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1,inside:!1},data:top10CityList},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,inside:!1,verticalAlign:"bottom",lineHeight:"20",textStyle:{color:"#fff",fontSize:"14",fontFamily:"PingFangSC-Regular"},formatter:function(e){return`${e}`}},splitArea:{show:!1},splitLine:{show:!1},data:top10CityData}],xAxis:{type:"value",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1}},series:[{name:"total",type:"bar",barGap:"-100%",barWidth:"15px",data:lineT,legendHoverLink:!1},{name:"bar",type:"bar",barWidth:"15px",data:lineY,label:{normal:{color:"#b3ccf8",show:!0,position:[0,"-20px"],formatter:function(e){let o="",t="";return e.dataIndex+1<10?o="0"+(e.dataIndex+1):o=e.dataIndex+1,e.dataIndex===0?t=`{color1|${o}} {color4|${e.name}}`:e.dataIndex===1?t=`{color2|${o}} {color4|${e.name}}`:t=`{color3|${o}} {color4|${e.name}}`,t},rich:{color1:{color:"#FDD56A",fontSize:"14",fontWeight:700},color2:{color:"#20D3AB",fontSize:"14",fontWeight:700},color3:{color:"#49CCFF",fontSize:"14",fontWeight:700},color4:{fontSize:"14",fontWeight:500,color:"#fff"}}}}}]};