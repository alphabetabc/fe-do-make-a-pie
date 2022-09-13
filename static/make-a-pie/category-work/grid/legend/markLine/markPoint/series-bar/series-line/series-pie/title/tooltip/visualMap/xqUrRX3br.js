var t1=rankData("温度",16),t2=rankData("冷通道温度",13),t3=rankData("热通道温度",18),obj={温度:{name:"温度",visualMap:!1,value:16,soName:t1.name,soValue:t1.value,lineData:lineData(t1.name)},冷通道温度:{name:"冷通道温度",visualMap:!1,value:13,soName:t2.name,soValue:t2.value,lineData:lineData(t2.name)},热通道温度:{name:"热通道温度",visualMap:!1,value:18,soName:t3.name,soValue:t3.value,lineData:lineData(t3.name)}};function rankData(e,a){for(var t=[],r=[],u=38,s=15,l=1;l<a+1;l++){var n=Math.floor(Math.random()*(u-s+1)+s),i="#85f585";n<=-10||n>=35?i="#ffff00":n>=30&&n<35?i="#648afa":n>-10&&n<30&&(i="#85f585"),r.push({value:n,name:e+l,visualMap:!1,itemStyle:{color:i}})}r.sort(function(m,o){return o.value-m.value});var f=r.slice(0,10);return $.each(f,function(m,o){t.push(o.name)}),{name:t.reverse(),value:f.reverse()}}function lineData(e){for(var a=new Object,t=0;t<e.length;t++)a[e[t]]=new Object,a[e[t]].seriesData=randomData();return a}function randomData(){for(var e=[],a=40,t=-20,r=0;r<24;r++)e.push(Math.floor(Math.random()*(a-t+1)+t));return e}function setCurOption(e,a){return{title:[{text:"温度类型数量统计",x:"25%",y:"3%",textAlign:"center",textBaseline:"middle",textStyle:{fontSize:20}},{text:e+"Top10",x:"75%",y:"2%",textAlign:"center",textBaseline:"middle",textStyle:{fontSize:20}},{text:a,x:"45%",y:"43%",textAlign:"center",textBaseline:"middle",textStyle:{fontSize:20}}],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:[{data:["温度","冷通道温度","热通道温度"],x:"left",orient:"vertical"}],grid:[{left:"48%",right:"5%",top:"5%",bottom:"65%",containLabel:!0},{gridindex:1,left:"0%",right:"5%",top:"50%",bottom:"5%",containLabel:!0}],visualMap:{show:!1,pieces:[{lte:-10,color:"#ffff00"},{gt:-10,lt:30,color:"#85f585"},{gte:30,lt:35,color:"#648afa"},{gte:35,color:"#ffff00"}]},xAxis:[{type:"value",boundaryGap:[0,.01]},{gridIndex:1,type:"category",boundaryGap:!1,data:["0时","1时","2时","3时","4时","5时","6时","7时","8时","9时","10时","11时","12时","13时","14时","15时","16时","17时","18时","19时","20时","21时","22时","23时"]}],yAxis:[{type:"category",data:obj[e].soName,axisLabel:{interval:0}},{gridIndex:1,type:"value"}],series:[{name:"数量",type:"pie",center:["25%","18%"],radius:["15%","20%"],label:{normal:{formatter:"{b} :{c} ({d}%)"}},data:[obj.温度,obj.冷通道温度,obj.热通道温度]},{name:"top10",type:"bar",label:{normal:{show:!0,position:"right",color:"#00cfff"}},data:obj[e].soValue},{xAxisIndex:1,yAxisIndex:1,name:a,type:"line",data:obj[e].lineData[a].seriesData,markPoint:{data:[{type:"max",name:"最大值",symbolSize:55},{type:"min",name:"最小值",symbolSize:50}]},markLine:{data:[{type:"average",name:"平均值"}]}}]}}var selName="冷通道温度";option=setCurOption(selName,obj[selName].soName[9]),myChart.on("click",function(e){if(console.log(e),e.seriesType==="pie"){selName=e.name,myChart.clear();var a=setCurOption(e.name,obj[e.name].soName[9]);myChart.setOption(a)}e.seriesType==="bar"&&myChart.setOption(setCurOption(selName,e.name))});
