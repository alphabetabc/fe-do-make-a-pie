function generateData(l){var n=Math.random()*1e3,o=+new Date,t;function v(a){return t=a%30===0?Math.random()*700:t+Math.random()*500-250,n+=Math.random()*20-10,Math.max(0,Math.round(n+t)+3e3)}for(var m=[],e=[],r=0;r<l;r++){const a=echarts.format.formatTime("yyyy-MM-dd",o);m.push(a),e.push(v(r).toFixed(2)),o-=24*60*60*1e3}return{categoryData:m.reverse(),valueDataOne:e.reverse(),valueDataTwo:e.reverse().map(a=>a*1.1),valueDataThree:e.reverse().map(a=>a*1.5),valueData1:e.reverse().map(a=>a*.2),valueData2:e.reverse().map(a=>a*.3),valueData3:e.reverse().map(a=>a*.15),valueData4:e.reverse().map(a=>a*.26),valueData5:e.reverse().map(a=>a*.08),valueData6:e.reverse().map(a=>a*.12),valueData7:e.reverse().map(a=>a*.18),valueData8:e.reverse().map(a=>a*.17)}}var count=7,data=generateData(count),timeToday=echarts.format.formatTime("yyyy-MM-dd",new Date),timeTodayBefore7=echarts.format.formatTime("yyyy-MM-dd",new Date(Date.now()-24*60*60*1e3*7));option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{type:"scroll",data:[{name:"上岗人力",icon:"circle",textStyle:{color:"red"}},{name:"出单人力",icon:"circle",textStyle:{color:"red"}},{name:"在职人力",icon:"circle",textStyle:{color:"red"}},{name:"浙江分公司",icon:"triangle"},{name:"江苏分公司",icon:"triangle"},{name:"云南分公司",icon:"triangle"},{name:"安徽分部",icon:"triangle"},{name:"山西分公司",icon:"triangle"},{name:"上海分公司",icon:"triangle"},{name:"广州分公司",icon:"triangle"},{name:"河北分公司",icon:"triangle"}]},xAxis:[{type:"category",data:data.categoryData}],yAxis:[{type:"value"}],series:[{name:"上岗人力",type:"bar",data:data.valueDataOne},{name:"出单人力",type:"bar",data:data.valueDataTwo},{name:"在职人力",type:"bar",data:data.valueDataThree},{name:"浙江分公司",type:"bar",data:data.valueData1,stack:"上岗人力"},{name:"江苏分公司",type:"bar",data:data.valueData2,stack:"上岗人力"},{name:"云南分公司",type:"bar",data:data.valueData3,stack:"上岗人力"},{name:"安徽分部",type:"bar",data:data.valueData4,stack:"上岗人力"},{name:"山西分公司",type:"bar",data:data.valueData5,stack:"上岗人力"},{name:"上海分公司",type:"bar",data:data.valueData6,stack:"上岗人力"},{name:"广州分公司",type:"bar",data:data.valueData7,stack:"上岗人力"},{name:"河北分公司",type:"bar",data:data.valueData8,stack:"上岗人力"}]};