function getRandom(e){return Math.floor(Math.random()*e)}function getMax(e,t){for(var a=0,o=e.length,l=0;l<o;l++){var n=e[l][t];a<n&&(a=n)}return a}var ageData=[{name:"90后",value:getRandom(6e3)},{name:"80后",value:getRandom(6e3)},{name:"70后",value:getRandom(6e3)},{name:"60后",value:getRandom(6e3)},{name:"其他",value:getRandom(6e3)}],ages=[],colorArr=["#ffd74a","#34f6cb","#d88856","#88a8ff","#6665ff"],len=ageData.length,max=parseInt(getMax(ageData,"value")*1.2*100)/100;ages=ageData.map(function(e){return{name:e.name,value:100}}),ages.push({name:"",value:100*len,itemStyle:{color:"transparent"}});for(var i=0;i<5;i++)ageData.push({value:0});option={backgroundColor:"#188eee",tooltip:{formatter:"{b}: {c}件"},grid:{top:"75%",left:"35%",right:"35%",height:2},xAxis:[{type:"value",min:-max,max,axisTick:{show:!1},boundaryGap:!0,axisLine:{show:!1,lineStyle:{color:"#035de4",width:2}},splitLine:{show:!1},showMinLabel:!1,showMaxLabel:!1,axisLabel:{textStyle:{color:"#fff",fontSize:12},formatter:function(e,t){return Math.abs(e)}}}],yAxis:[{show:!1}],series:[{type:"pie",startAngle:180,radius:[63,180],center:["50%","75%"],roseType:"area",color:colorArr,labelLine:{normal:{show:!1}},label:{normal:{show:!1}},data:ageData},{type:"pie",startAngle:180,endAngle:0,hoverAnimation:!1,radius:[194,247],center:["50%","75%"],itemStyle:{color:"#2c25b2"},silent:!0,label:{normal:{position:"inner",textStyle:{color:"#fff",fontSize:18,fontWeight:"bold"}}},data:ages},{type:"gauge",radius:249,center:["50%","75%"],startAngle:180,endAngle:0,splitNumber:5,axisLine:{lineStyle:{width:1,color:[[1,"#0a5ba6"]]}},splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},detail:{show:!1},pointer:{show:!1}}]};
