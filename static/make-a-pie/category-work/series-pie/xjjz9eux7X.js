for(var getsjjg=["专职教师","管理人员","教辅人员","工勤人员","外聘人员"],getsjjgrs=[30,24,22,14,10],syjgdata=[],i=0;i<getsjjg.length;i++)syjgdata.push({name:getsjjg[i],value:getsjjgrs[i]});var colorList=["#4BE77B","#0981FC","#DF208C","#41EFFF","#F7E35C"];option={backgroundColor:"#000",series:{itemStyle:{normal:{color:function(e){return colorList[e.dataIndex]},borderWidth:5,borderColor:"#082455"}},type:"pie",radius:["30%","53%"],center:["center","center"],labelLine:{normal:{length:50,length2:100}},label:{normal:{formatter:e=>`{radius|●}
{percent|`+e.percent.toFixed(0)+`%}

{name|`+e.name+"}",padding:[0,-100,0,-100],rich:{radius:{padding:[-37,90,0,90]},name:{fontSize:12,color:"#7594BA",padding:[0,30,0,40]},percent:{fontSize:14,color:"#31C2FF",padding:[0,30,0,40]}}}},data:syjgdata}};
