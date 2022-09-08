options=[{title:{text:"射击标靶图示"},color:["#e47c74"],legend:[{data:["瞄准"],left:"45%",top:"10%",polarIndex:0},{data:["靶数"],right:"5%",top:"10%",polarIndex:1}],polar:[{center:["30%","52%"]},{center:["75%","52%"]}],tooltip:{trigger:"item",formatter:function(e){return e.value[0].toFixed(1)+" , "+Math.ceil(e.value[1]/30)+"点钟方向"},axisPointer:{}},angleAxis:[{polarIndex:0,type:"value",name:"123",min:1,max:13,startAngle:60,splitLine:{lineStyle:{color:["#666"]}},axisLine:{lineStyle:{}}},{polarIndex:1,type:"value",name:"123",min:1,max:13,startAngle:60,splitLine:{lineStyle:{color:["#666"]}},axisLine:{lineStyle:{}}}],radiusAxis:[{polarIndex:0,inverse:!0,name:"瞄准",nameLocation:"start",nameRotate:0,nameTextStyle:{padding:[10,10,50,-40],rotate:90},splitLine:{show:!1,lineStyle:{color:["#ffffff"],width:2}},splitArea:{show:!0,areaStyle:{color:["rgba(26,48,35,1.0)","rgba(26,48,35,0.9)"]}},max:11,min:6,axisLabel:{padding:[-0,15,-45,0],rotate:0,color:"#fff"},axisLine:{lineStyle:{color:"#666"}}},{polarIndex:1,inverse:!0,name:"靶数",nameLocation:"start",nameRotate:0,nameTextStyle:{padding:[10,10,50,-40],rotate:90},splitLine:{show:!1,lineStyle:{color:["#ffffff"],width:2}},splitArea:{show:!0,areaStyle:{color:["rgba(26,48,35,1.0)","rgba(26,48,35,0.9)"]}},max:11,min:6,axisLabel:{padding:[-0,15,-45,0],rotate:0,color:"#fff",formatter:function(e,t){return t===5&&(e=""),e}},axisLine:{lineStyle:{color:"#666"}}}],series:[{polarIndex:0,smooth:!0,coordinateSystem:"polar",name:"瞄准",type:"line",showSymbol:!1,data:[[9.064,101.188],[9.055,96.874],[8.953,92.631],[9.006,89.795],[8.903,90.355],[8.863,93.118],[8.83,96.662],[8.807,96.824],[8.762,98.093],[8.793,95.309],[8.763,89.542],[10.708,72.7],[8.682,78.173],[8.513,71.802],[8.459,69.701],[8.255,69.449],[8.227,70.2],[8.084,72.005],[8.033,73.163],[7.937,74.296],[7.924,72.919],[10.597,83.333],[7.731,72.247],[7.705,70.807],[7.557,68.828],[7.482,64.072],[7.532,64.112],[7.501,64.536],[7.637,67.776],[7.713,71.657],[7.819,72.66],[7.9,76.109],[8.018,79.82],[7.924,81.002],[7.909,81.853],[8.249,70.986],[8.015,78.088],[9.093,110.414],[9.252,87.242],[8.599,69.586],[8.697,68.479],[8.547,69.647],[8.699,69.316],[8.831,68.901],[8.896,68.613],[8.85,70.919],[8.847,74.544],[8.986,76.795]]},{polarIndex:1,coordinateSystem:"polar",name:"靶数",type:"scatter",showSymbol:!1,data:[[9.064,101.188],[9.055,96.874],[8.953,92.631],[9.006,89.795],[8.903,90.355],[8.863,93.118],[8.83,96.662],[8.807,96.824],[8.762,98.093],[8.793,95.309],[8.763,89.542],[10.708,72.7],[8.682,78.173],[8.513,71.802],[8.459,69.701],[8.255,69.449],[8.227,70.2],[8.084,72.005],[8.033,73.163],[7.937,74.296],[7.924,72.919],[10.597,83.333],[7.731,72.247],[7.705,70.807],[7.557,68.828],[7.482,64.072],[7.532,64.112],[7.501,64.536],[7.637,67.776],[7.713,71.657],[7.819,72.66],[7.9,76.109],[8.018,79.82],[7.924,81.002],[7.909,81.853],[8.249,70.986],[8.015,78.088],[9.093,110.414],[9.252,87.242],[8.599,69.586],[8.697,68.479],[8.547,69.647],[8.699,69.316],[8.831,68.901],[8.896,68.613],[8.85,70.919],[8.847,74.544],[8.986,76.795]]}],animationDuration:2e3},{backgroundColor:"rgba(255, 255, 255, 0.81)",title:{},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{},grid:[{x:"3%",y:"4%",width:"95%",height:"65%"},{x:"3%",y:"75%",width:"95%",height:"15%"}],xAxis:[{gridIndex:0,show:!1,data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},{gridIndex:1,show:!0,data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}],yAxis:[{type:"value",gridIndex:0,axisLabel:{formatter:"{value}"}},{gridIndex:1,max:1,splitLine:{show:!0}}],series:[{name:"检查企业数",type:"line",itemStyle:{normal:{color:"#01949B"}},xAxisIndex:0,yAxisIndex:0,data:[.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4]},{name:"完成整改企业数",type:"line",itemStyle:{normal:{color:"#EBA954"}},xAxisIndex:0,yAxisIndex:0,data:[2.2,2.2,2.1,2.1,2.1,2.1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1.9,1.9,1.9,1.9,1.9,1.9,1.9,1.9,1.9,1.9,2,2,2,2,2.1,2.1,2.1,2.1,2.1,2.1,2.1,2.1,2.1,2.1,2.1,2.1,2.1,2.1,2.1,2.1,2.1,2.1,2,2,2,2,2,2.1]},{name:"违法违规企业数",type:"line",itemStyle:{normal:{color:"#C23531"}},xAxisIndex:0,yAxisIndex:0,data:[4.4,4.4,4.4,4.4,4.4,4.4,4.4,4.4,4.4,4.4,4.4,4.4,4.4,4.4,4.4,4.4,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.2,4.2,4.2,4.2,4.2,4.2,4.2,4.2,4.2,4.2,4.2,4.2,4.2,4.2,4.1,4.1,4.1,4.1,4.1,4.1,4.1,4.1,4.1,4.1,4.1,4.1,4.1,4.1]},{name:"违法违规企业数",type:"line",itemStyle:{normal:{color:"#C23531"}},xAxisIndex:0,yAxisIndex:0,data:[1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1]},{name:"激发",type:"line",stack:"总量",showSymbol:!1,data:[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],xAxisIndex:1,yAxisIndex:1}]}];
