var oldData=[{coffersName:"第一金库",denomination:"专用钞",currencyType:"完整券",amount:412.35},{coffersName:"第一金库",denomination:"专用钞",currencyType:"残损券",amount:452.35},{coffersName:"第一金库",denomination:"流通钞",currencyType:"完整券",amount:122.35},{coffersName:"第一金库",denomination:"流通钞",currencyType:"残损券",amount:90.35},{coffersName:"第二金库",denomination:"专用钞",currencyType:"完整券",amount:212.35},{coffersName:"第二金库",denomination:"专用钞",currencyType:"残损券",amount:452.35},{coffersName:"第二金库",denomination:"流通钞",currencyType:"完整券",amount:122.35},{coffersName:"第二金库",denomination:"流通钞",currencyType:"残损券",amount:567.35},{coffersName:"第三金库",denomination:"专用钞",currencyType:"完整券",amount:225.35},{coffersName:"第三金库",denomination:"专用钞",currencyType:"残损券",amount:34.35},{coffersName:"第三金库",denomination:"流通钞",currencyType:"完整券",amount:422.35},{coffersName:"第三金库",denomination:"流通钞",currencyType:"残损券",amount:910.35}],datavalue={source:[["product"],["专用钞(完整券)"],["流通钞(完整券)"],["流通钞(残损券)"],["专用钞(残损券)"]]},interDate=[["product"],["完整券"],["残损券"]],coffersArr=[];oldData.forEach(e=>{coffersArr.indexOf(e.coffersName)<0&&coffersArr.push(e.coffersName)});for(let e=0;e<coffersArr.length;e++)datavalue.source[0][e+1]=coffersArr[e],interDate[0][e+1]=coffersArr[e];for(let e=0;e<oldData.length;e++){for(let t=1;t<datavalue.source[0].length;t++)for(let o=1;o<datavalue.source.length;o++)datavalue.source[0][t]==oldData[e].coffersName&&datavalue.source[o][0].indexOf(oldData[e].denomination)!=-1&&datavalue.source[o][0].indexOf(oldData[e].currencyType)!=-1&&(datavalue.source[o][t]=oldData[e].amount);for(var m=1;m<interDate[0].length;m++)for(var n=1;n<interDate.length;n++)interDate[0][m]==oldData[e].coffersName&&interDate[n][0]==oldData[e].currencyType&&((interDate[n][m]=="undefined"||isNaN(interDate[n][m]))&&(interDate[n][m]=0),interDate[n][m]+=parseFloat(oldData[e].amount))}setTimeout(function(){option={title:{text:"券别库存统计",subtext:"单位：万元",left:"0"},legend:{right:"0",orient:"vertical"},tooltip:{trigger:"axis",showContent:!0,position:"outside"},dataset:datavalue,xAxis:{type:"category"},yAxis:{gridIndex:0},grid:{top:"55%"},series:[{type:"line",smooth:!0,seriesLayoutBy:"row"},{type:"line",smooth:!0,seriesLayoutBy:"row"},{type:"line",smooth:!0,seriesLayoutBy:"row"},{type:"line",smooth:!0,seriesLayoutBy:"row"},{name:"outer",type:"pie",id:"outer",radius:["30%","20%"],center:["50%","30%"],label:{position:"outside",formatter:function(e){return e.data[1]+"万元"}},labelLine:{show:!0,length:50},encode:{itemName:"product",value:1,tooltip:1}},{name:"inner",type:"pie",id:"inner",radius:[0,"15%"],center:["50%","30%"],label:{position:"inner",formatter:function(e){return e.data[0]}},data:interDate,encode:{itemName:"product",value:1,tooltip:1}}]},myChart.on("updateAxisPointer",function(e){var t=e.axesInfo[0];if(t){var o=t.value+1;myChart.setOption({series:[{id:"outer",label:{formatter:function(r){return r.data[o]+"万元"}},encode:{value:o,tooltip:o}},{id:"inner",label:{formatter:function(r){return r.data[0]}},encode:{value:o,tooltip:o}}]})}}),myChart.setOption(option)});