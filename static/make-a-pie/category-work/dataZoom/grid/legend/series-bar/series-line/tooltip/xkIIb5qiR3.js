for(var dateData=["2019-06-01","2019-06-02","2019-06-03","2019-06-04","2019-06-05","2019-06-06","2019-06-07"],dataD=[22,34,44,15,15,22,16,24,23,20,8,9],chooseDate="2019-06-04",len,i=0;i<dateData.length;i++)if(chooseDate==dateData[i]){len=i;break}for(var newDataD=[],j=0;j<len;j++)newDataD.push(dataD[j]);for(var k=len;k<dataD.length;k++){var data2={};data2.value=dataD[k],data2.itemStyle={normal:{color:"#fff",borderType:"dashed",barBorderColor:"red",barBorderWidth:3,barBorderRadius:0}},newDataD.push(data2),data2={}}var d=[11,4.9,7,23.2,25.6,76.7,11.6,16.2,32.6,20,{itemStyle:{normal:{color:"#fff",borderType:"dashed"}},value:21},{value:22,itemStyle:{normal:{color:"#fff",borderType:"dashed"}}}],seriesData=[{name:"蒸发量",type:"bar",itemStyle:{normal:{color:"blue",barBorderColor:"blue",barBorderWidth:3,barBorderRadius:0,borderType:"solid"}},data:d},{name:"降水量",type:"bar",data:newDataD},{name:"平均温度",type:"line",smooth:!0,yAxisIndex:1,itemStyle:{normal:{color:"#000",lineStyle:{type:"solid",width:2}}},data:[1100,1202,1303,1405,1300,1020,2030,2340,2300,"-","-","-"]},{name:"平均温度",type:"line",smooth:!0,yAxisIndex:1,itemStyle:{normal:{color:"#000",lineStyle:{type:"dotted",width:2}}},data:["-","-","-","-","-","-","-","-",2300,1005,1200,602]}];option={tooltip:{show:!0,trigger:"axis",axisPointer:{crossStyle:{}},formatter:function(l,h,y){console.log(l,"params");for(var t="",b={},a=0;a<l.length;a++){var o=l[a],f=o.name,r=o.seriesName,e=o.value,n=o.color;if(r=="蒸发量"?n="blue":r=="降水量"&&(n="red"),e!="-"&&b[r]!=e){if(a===0&&(t+=f+"<br/>"),t+="<div>",t+='<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+n+';"></span>',r=="平均温度"){var s="";e=e+"",e.length>3?s=e.slice(0,2)+":"+e.slice(-2):s="0"+e.slice(0,1)+":"+e.slice(-2),t+=r+"："+s}else t+=r+"："+e;t+="</div>",b[r]=e}}return t}},grid:{bottom:"20%",left:30,right:30,containLabel:!0},legend:{bottom:"10%",data:["蒸发量","降水量","平均温度"]},xAxis:[{axisLabel:{},type:"category",axisLine:{show:!0},data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisPointer:{},splitLine:{show:!1},axisTick:{show:!1,alignWithLabel:!0},boundaryGap:!0}],yAxis:[{type:"value",name:"水量",axisLabel:{formatter:"{value} ml"},splitLine:{show:!1}},{type:"value",name:"温度",axisLabel:{formatter:"{value} °C"},splitLine:{show:!1},axisTick:{show:!1}}],series:seriesData,dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:1,end:100,bottom:"0"},{bottom:"10%",type:"inside",xAxisIndex:[0],start:1,end:35}]};