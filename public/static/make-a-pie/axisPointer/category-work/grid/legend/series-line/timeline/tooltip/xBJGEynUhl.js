var xvalue_24h=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24h"],yarn_data_obj={xValueList:xvalue_24h,queueNameList:["billbd","billqueue","default","dzqd"],"2017-01-28":{billbd:[.45,.43,.5,.55,.58,.62,.83,.39,.56,.67,.5,.34,.5,.67,.58,.29,.46,.23,.47,.46,.38,.56,.48,.36],billqueue:[.38,.31,.32,.32,.64,.66,.86,.47,.52,.75,.52,.56,.54,.6,.46,.63,.54,.51,.58,.64,.6,.45,.36,.67],default:[.46,.32,.53,.58,.86,.68,.85,.73,.69,.71,.91,.74,.6,.5,.39,.67,.55,.49,.65,.45,.64,.47,.63,.64],dzqd:[.6,.51,.52,.53,.64,.84,.65,.68,.63,.47,.72,.6,.65,.74,.66,.65,.71,.59,.65,.77,.52,.53,.58,.53]},"2017-01-29":{billbd:[14.1,33.9,36,47.1,39,25.1,14.9,8.24,0,0,0,0,21.6,1.36,0,0,0,0,0,0,0,0,0,0],billqueue:[7.19,8.23,5.86,6.54,5.28,3.56,3.2,4.13,4.75,7.74,7.92,8.54,8.15,8.75,8.31,7.65,8.59,8.62,7.97,8.99,8.02,9.61,8.74,7.44],default:[.01,6.92,9.11,9.6,9.44,9.67,9.72,9.75,9.73,9.78,9.97,9.96,9.89,9.78,9.7,10,9.62,9.24,9.28,7.02,9.99,6.4,5.39,4.71]},"2017-01-30":{billqueue:[8.1,7.36,8.51,7.51,5.05,3.06,3.48,3.74,5.16,10.2,12.5,9.89,9.52,9.8,10.1,9.46,9.35,9.79,9.25,8.81,8.86,9.6,8.81,8.69],default:[2.73,2.37,2.38,1.99,1.76,2.17,4.59,2.37,4.19,6.31,4.9,5.3,5.11,5.26,4.66,4.92,6.24,5.95,5.33,5.44,5.04,4.7,4.94,3.28]},"2017-01-31":{billbd:[.45,.43,.5,.55,.58,.62,.83,.39,.56,.67,.5,.34,.5,.67,.58,.29,.46,.23,.47,.46,.38,.56,.48,.36],default:[.46,.32,.53,.58,.86,.68,.85,.73,.69,.71,.91,.74,.6,.5,.39,.67,.55,.49,.65,.45,.64,.47,.63,.64],dzqd:[.6,.51,.52,.53,.64,.84,.65,.68,.63,.47,.72,.6,.65,.74,.66,.65,.71,.59,.65,.77,.52,.53,.58,.53]},"2017-02-01":{billbd:[14.1,33.9,36,47.1,39,25.1,14.9,8.24,0,0,0,0,21.6,1.36,0,0,0,0,0,0,0,0,0,0]},"2017-02-02":{billqueue:[8.1,7.36,8.51,7.51,5.05,3.06,3.48,3.74,5.16,10.2,12.5,9.89,9.52,9.8,10.1,9.46,9.35,9.79,9.25,8.81,8.86,9.6,8.81,8.69],default:[2.73,2.37,2.38,1.99,1.76,2.17,4.59,2.37,4.19,6.31,4.9,5.3,5.11,5.26,4.66,4.92,6.24,5.95,5.33,5.44,5.04,4.7,4.94,3.28],billbd:[.45,.43,.5,.55,.58,.62,.83,.39,.56,.67,.5,.34,.5,.67,.58,.29,.46,.23,.47,.46,.38,.56,.48,.36],dzqd:[.6,.51,.52,.53,.64,.84,.65,.68,.63,.47,.72,.6,.65,.74,.66,.65,.71,.59,.65,.77,.52,.53,.58,.53]},"2017-02-03":{billqueue:[2.73,21.3,41.6,17.2,19.9,1.6,2.1,2.54,2.78,3.62,4.41,4.09,3.83,4.47,4.2,3.94,3.8,3.58,3.19,4.3,3.69,3.52,3.02,3.3],default:[1.51,28.7,.94,1.44,18.6,1.63,1.56,1.91,2.45,3.87,3.24,4.9,4.61,4.1,4.17,3.85,4.17,3.46,3.46,3.55,3.5,4.13,2.58,2.28],billbd:[1.33,4.68,1.31,1.1,13.9,1.1,1.16,1.67,2.64,2.86,3,3.21,4.14,4.07,3.68,3.11,3.41,3.25,3.32,3.07,3.92,3.05,2.18,3.24],dzqd:[3.23,3.15,2.9,1.81,2.11,2.43,5.59,3.09,4.09,6.14,5.33,6.05,5.71,6.22,6.56,4.75,5.27,6.02,5.22,5.77,6.19,5.68,4.33,5.48]}},dateArr=[];for(key in yarn_data_obj)key==="xValueList"||key==="queueNameList"||dateArr.push(key);var colorConsArr_hdfs=["#ffca67","#ff60a2","#bf64ff","#6c65fb","#93dffc","#fb915f","#4fc277","#3e94fe","#ff9cc5","#c46100","#9de369"],option={baseOption:{backgroundColor:"rgba(7,14,28,1)",tooltip:{trigger:"axis"},color:[],legend:{itemGap:14,right:"16%",top:"2%",data:[]},grid:{left:"1.5%",right:"3%",bottom:"12%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!0,data:xvalue_24h,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#454e72"},margin:15},splitLine:{lineStyle:{color:"#1d203b"}}}],yAxis:[{name:"单位（个）",nameGap:20,nameTextStyle:{color:"#454e72",fontSize:12},type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#303765"},margin:20},splitLine:{lineStyle:{color:"#1d203b"}}}],timeline:{axisType:"category",autoPlay:!1,playInterval:3e3,symbol:"circle",inverse:!1,rewind:!0,symbolSize:5,checkpointStyle:{symbol:"circle",symbolSize:7,color:"#aed2ff",borderColor:"#aed2ff"},left:"1%",width:"90%",height:"36",lineStyle:{color:"#454e72"},label:{normal:{textStyle:{color:"#aed2ff",fontSize:14}},position:15,formatter:function(e,l){return e.replace(/-/g,".")}},data:dateArr},series:[]},options:[]};option.baseOption.legend=function(){for(var e=[],l=0;l<yarn_data_obj.queueNameList.length;l++)e.push({name:yarn_data_obj.queueNameList[l],icon:"circle",textStyle:{fontWeight:"bold",fontSize:"14px",color:"#454e72"}});return e}();for(var i=0;i<dateArr.length;i++)for(var options=[],i=0;i<dateArr.length;i++){for(var item=[],j=0;j<Object.keys(yarn_data_obj[dateArr[i]]).length;j++){var dataItem=yarn_data_obj[dateArr[i]],nameList=Object.keys(yarn_data_obj[dateArr[i]]);item.push({name:nameList[j],type:"line",stack:"总量",areaStyle:{normal:{color:colorConsArr_hdfs[j],opacity:1}},lineStyle:{normal:{color:colorConsArr_hdfs[j],width:0}},symbol:"none",smooth:!0,data:dataItem[nameList[j]]})}option.options.push({series:item})}myChart.setOption(option);
