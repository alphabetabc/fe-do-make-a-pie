inputs={},inputs.xLabel=xLabelArr,inputs.name=["基本工资","假期津贴","加班津贴","其他津贴","销售达标提成","工会费","社保福利","员工制服","其他成本","其他固定成本","浮动成本"],inputs.data=[],inputs.data[0]=["-","-","-","-","-","-",5317.04,5317.04,5144.2,5144.2,5712.22,5712.22,5712.22,5712.22,5712.22,6285.16,6285.16,6285.16],inputs.data[1]=["-","-","-","-","-","-",186.1,1328.11,0,839.92,199.93,199.93,459,0,0,479.61,0,0],inputs.data[2]=["-","-","-","-","-","-",531.7,531.7,557.63,860.1,1057.33,1057.33,1057.33,1057.33,1057.33,891.48,1088.7,1088.7],inputs.data[3]=["-","-","-","-","-","-",110,110,106.33,106.33,119.17,119.17,119.17,119.17,119.17,89.83,89.83,89.83],inputs.data[4]=["-","-","-","-","-","-",149.37,149.37,100.97,100.97,120.86,120.86,120.86,120.86,120.86,175.17,175.17,175.17],inputs.data[5]=["-","-","-","-","-","-",106.34,106.34,102.88,102.88,114.24,114.24,114.24,114.24,114.24,125.7,125.7,125.7],inputs.data[6]=["-","-","-","-","-","-",1690.82,1690.82,1635.85,1635.85,1816.48,1816.48,1816.48,1816.48,1816.48,1998.68,1998.68,1998.68],inputs.data[7]=["-","-","-","-","-","-",302.5,302.5,292.42,292.42,327.71,327.71,327.71,327.71,327.71,247.04,247.04,247.04],inputs.data[8]=["-","-","-","-","-","-",165,165,159.5,159.5,178.75,178.75,178.75,178.75,178.75,134.75,134.75,134.75],inputs.data[9]=["-","-","-","-","-","-",573.84,573.84,554.8,554.8,620.7,620.7,620.7,620.7,620.7,507.49,507.49,507.49],inputs.data[10]=["-","-","-","-","-","-",977.17,2119.18,764.93,1907.32,1497.29,1497.29,1756.36,1297.36,1297.36,1636.09,1353.7,1353.7],option={dataZoom:[{type:"slider",show:!0}],title:{text:"预算成本",x:"5%",y:"3%"},xAxis:{type:"category",data:inputs.xLabel},yAxis:[{type:"value",axisLine:{symbol:["none","arrow"],symbolOffset:[0,10]}},{type:"value",axisLine:{symbol:["none","arrow"],symbolOffset:[0,10]}}],grid:{top:"15%",bottom:"17%",left:"5%",right:"5%"},tooltip:{show:!0,trigger:"axis",formatter:function(a){console.log(a),console.log(inputs);var e="<div><p>"+a[0].name+"</p></div>";for(let t=0;t<4;t++)e+=a[t].marker+" "+a[t].seriesName+"："+a[t].data+"<br>";return e+=a[6].marker+" "+a[6].seriesName+"："+a[6].data+"<br>",e+=a[10].marker+" "+a[10].seriesName+"："+a[10].data+"<br>",e+=a[9].marker+" "+a[9].seriesName+"：<br>",e+="&nbsp;&nbsp; "+a[5].seriesName+"："+a[5].data+"<br>",e+="&nbsp;&nbsp; "+a[7].seriesName+"："+a[7].data+"<br>",e+="&nbsp;&nbsp; "+a[8].seriesName+"："+a[8].data+"<br>",e}},legend:{x:"30%",y:"3%"},series:[{yAxisIndex:0,name:inputs.name[0],data:inputs.data[0],type:"line",itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}},{yAxisIndex:1,name:inputs.name[1],data:inputs.data[1],type:"bar",itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}},{yAxisIndex:1,name:inputs.name[2],data:inputs.data[2],type:"bar",itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}},{yAxisIndex:1,name:inputs.name[3],data:inputs.data[3],type:"bar",itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}},{yAxisIndex:1,name:inputs.name[4],data:inputs.data[4],type:"bar",itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}},{yAxisIndex:1,name:inputs.name[5],data:inputs.data[5],type:"bar",itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},showSymbol:!1,lineStyle:{width:0,color:"rgba(0, 0, 0, 0)"}},{yAxisIndex:0,name:inputs.name[6],data:inputs.data[6],type:"line",itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}},{yAxisIndex:0,name:inputs.name[7],data:inputs.data[7],type:"line",itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},showSymbol:!1,lineStyle:{width:0,color:"rgba(0, 0, 0, 0)"}},{yAxisIndex:0,name:inputs.name[8],data:inputs.data[8],type:"line",itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},showSymbol:!1,lineStyle:{width:0,color:"rgba(0, 0, 0, 0)"}},{yAxisIndex:1,name:inputs.name[9],data:inputs.data[9],type:"bar",itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}},{yAxisIndex:1,name:inputs.name[10],data:inputs.data[10],type:"bar",itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};
