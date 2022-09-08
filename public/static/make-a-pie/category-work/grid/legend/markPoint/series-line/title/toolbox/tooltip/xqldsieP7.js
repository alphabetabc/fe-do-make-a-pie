option={title:{text:""},grid:{x:40,y:100,x2:40,y2:50,borderWidth:1},tooltip:{trigger:"axis",formatter:function(l){var e=l[0].name;return!isNaN(l[0].value)&&l[0].value!=0&&(e+="<br/>  日注气量: "+-l[0].value+"万方"),!isNaN(l[1].value)&&l[1].value!=0&&(e+="<br/>  日采气量: "+l[1].value+"万方"),!isNaN(l[2].value)&&l[2].value!=0&&(e+="<br/>  累注气量: "+l[2].value+"亿方"),!isNaN(l[3].value)&&l[3].value!=0&&(e+="<br/>  累采气量: "+l[3].value+"亿方"),e}},legend:{x:"center",y:"bottom",padding:[0,0,0,0],show:!1,textStyle:{fontSize:10,fontFamily:"SimHei",color:"#333"},data:["日注气量(万方)","日采气量(万方)","累注气量(亿方)","累采气量(亿方)"]},toolbox:{show:!0,right:"20",feature:{mark:{show:!1},dataView:{show:!1,readOnly:!1},magicType:{show:!1,type:["line","bar","stack","tiled"]},restore:{show:!1},saveAsImage:{show:!1}}},calculable:!0,xAxis:[{splitLine:{show:!1},splitArea:{show:!1},type:"category",boundaryGap:!1,axisTick:{show:!1},axisLabel:{formatter:function(l){return echarts.format.formatTime("yyyy-MM",l)},textStyle:{fontSize:10,fontFamily:"SimHei",color:"#333"}},data:["2016-10-16","2016-10-17","2016-10-18","2016-10-19","2016-10-20","2016-10-21","2016-10-22","2016-10-23","2016-10-24","2016-10-25","2016-10-26","2016-10-27","2016-10-28","2016-10-29","2016-10-30","2016-10-31","2016-11-01","2016-11-02","2016-11-03","2016-11-04","2016-11-05","2016-11-06","2016-11-07","2016-11-08","2016-11-09","2016-11-10","2016-11-11","2016-11-12","2016-11-13","2016-11-14","2016-11-15","2016-11-16","2016-11-17","2016-11-18","2016-11-19","2016-11-20","2016-11-21","2016-11-22","2016-11-23","2016-11-24","2016-11-25","2016-11-26","2016-11-27","2016-11-28","2016-11-29","2016-11-30","2016-12-01","2016-12-02","2016-12-03","2016-12-04","2016-12-05","2016-12-06","2016-12-07","2016-12-08","2016-12-09","2016-12-10","2016-12-11","2016-12-12","2016-12-13","2016-12-14","2016-12-15","2016-12-16","2016-12-17","2016-12-18","2016-12-19","2016-12-20","2016-12-21","2016-12-22","2016-12-23","2016-12-24","2016-12-25","2016-12-26","2016-12-27","2016-12-28","2016-12-29","2016-12-30","2016-12-31","2017-01-01","2017-01-02","2017-01-03","2017-01-04","2017-01-05","2017-01-06","2017-01-07","2017-01-08","2017-01-09","2017-01-10","2017-01-11","2017-01-12","2017-01-13","2017-01-14","2017-01-15","2017-01-16","2017-01-17","2017-01-18","2017-01-19","2017-01-20","2017-01-21","2017-01-22","2017-01-23"]}],yAxis:[{type:"value",name:"日注(采)气量",splitLine:{show:!1},splitArea:{show:!1},nameTextStyle:{padding:[0,0,0,0],fontSize:10,fontFamily:"SimHei",color:"#333"},axisLabel:{formatter:"{value} ",textStyle:{fontSize:10,fontFamily:"SimHei",color:"#333"}}},{type:"value",name:"累注(采)气量",splitLine:{show:!1},splitArea:{show:!1},nameTextStyle:{padding:[0,0,0,0],fontSize:10,fontFamily:"SimHei",color:"#333"},axisLabel:{formatter:"{value} ",textStyle:{fontSize:10,fontFamily:"SimHei",color:"#333"}}}],series:[{name:"日注气量(万方)",type:"line",smooth:!0,symbolSize:0,yAxisIndex:0,markPoint:{symbol:"diamond",symbolOffset:["0%","50%"],symbolSize:10,label:{textStyle:{fontSize:15,fontFamily:"SimHei",color:"#000000"}},data:[{type:"min",name:"最小值",symbolSize:10}]},itemStyle:{normal:{color:"#EB6E19",areaStyle:{type:"default",color:"#EB6E19"}}},data:[-1358,-1353,-1336,-1305,-1308,-465,-448,-360,-313,-424,-432,-485,-215,-378,-249,-247,-326,-65,-75,-253,-230,-98,-97,-71,-52,-101,-2,0,-10,-1,0,-4,0,-7,-7,-5,-3,-4,-4,0,-6,null,null,-2,null,null,null,-43,-57,-110,-234,-422,-598,-554,-449,-420,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},{name:"日采气量(万方)",type:"line",smooth:!0,symbolSize:0,yAxisIndex:0,markPoint:{symbol:"diamond",symbolOffset:["0%","-50%"],symbolSize:10,label:{textStyle:{fontSize:15,fontFamily:"SimHei",color:"#000000"}},data:[{type:"max",name:"最大值",symbolSize:10}]},itemStyle:{normal:{color:"#FFC000",areaStyle:{type:"default",color:"#FFC000"}}},data:[20,19,0,23,25,23,7,2,9,31,7,70,9,12,0,0,9,14,7,0,3,12,10,37,2,1,34,267,389,867,1340,1685,1857,2004,2742,3085,3219,3437,3774,4194,4754,5374,5276,5598,5665,5725,5889,5936,6126,6137,5668,5463,5232,4989,4784,4611,4654,4727,4712,4739,4865,4567,4482,4602,4652,4785,4359,4375,4140,4071,4290,4458,4563,4675,5105,5193,5055,5074,4736,4529,5069,5291,5574,5631,5807,5749,5739,5761,5966,6122,6211,6244,6209,6167,6250,6337,6295,6341,6306,6163]},{name:"累注气量(亿方)",type:"line",symbolSize:0,yAxisIndex:1,itemStyle:{normal:{color:"#FF7F50"}},data:[-405.39,-405.53,-405.66,-405.79,-405.92,-405.97,-406.01,-406.05,-406.08,-406.12,-406.17,-406.21,-406.24,-406.27,-406.3,-406.32,-406.36,-406.36,-406.37,-406.4,-406.42,-406.43,-406.44,-406.44,-406.45,-406.46,-406.46,-406.46,-406.46,-406.46,-406.46,-406.46,-406.46,-406.46,-406.46,-406.46,-406.46,-406.46,-406.46,-406.46,-406.47,-406.47,-406.47,-406.47,-406.47,-406.47,-406.47,-406.47,-406.48,-406.49,-406.51,-406.55,-406.61,-406.67,-406.71,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75,-406.75]},{name:"累采气量(亿方)",type:"line",symbolSize:0,yAxisIndex:1,itemStyle:{normal:{color:"#3A5FCD"}},data:[218.89,218.89,218.89,218.89,218.89,218.9,218.9,218.9,218.9,218.9,218.9,218.91,218.91,218.91,218.91,218.91,218.91,218.91,218.91,218.91,218.91,218.92,218.92,218.92,218.92,218.92,218.92,218.95,218.99,219.08,219.21,219.38,219.56,219.76,220.04,220.35,220.67,221.01,221.39,221.81,222.28,222.82,223.35,223.91,224.48,225.05,225.64,226.23,226.84,227.46,228.02,228.57,229.09,229.59,230.07,230.53,231,231.47,231.94,232.42,232.9,233.36,233.81,234.27,234.73,235.21,235.65,236.08,236.5,236.91,237.33,237.78,238.24,238.7,239.21,239.73,240.24,240.75,241.22,241.67,242.18,242.71,243.27,243.83,244.41,244.99,245.56,246.14,246.73,247.34,247.97,248.59,249.21,249.83,250.45,251.09,251.72,252.35,252.98,253.6]}]};
