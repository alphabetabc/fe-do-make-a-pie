for(var getsjjg=["普通教师","专任教师"],getsjjgrs=[40,60],getzrjs=[40,60],syjgdata=[],i=0;i<getsjjg.length;i++)syjgdata.push({name:getsjjg[i],value:getsjjgrs[i]});var rich={name:{color:"#666666",fontSize:14,padding:[8,30,0,30],fontWeight:"400",align:"left"},value:{color:"#333",fontSize:15,padding:[0,30,8,30],fontWeight:"500",align:"left"},percent:{color:"#FFF",align:"right",fontSize:15,fontWeight:"500"},hr:{borderColor:"#DFDFDF",width:"100%",borderWidth:1,height:0},cir:{fontSize:26}},colorList=["#FFB93E","transparent"],colorList1=["#FF821D","transparent"];option={backgroundColor:"#fff",legend:{show:!1,data:["青年专任教师","专任教师"],right:"2%",top:"2%",icon:"circle",itemWidth:16,itemHeight:16,textStyle:{color:"#666666",fontSize:13,padding:[2,0,0,0]}},series:[{name:"专任教师",itemStyle:{normal:{color:function(e){return colorList[e.dataIndex]}}},type:"pie",radius:["0%","52%"],center:["50%","50%"],startAngle:70,label:{show:!1},data:getzrjs,z:0},{name:"青年专任教师",itemStyle:{normal:{color:function(e){return colorList1[e.dataIndex]}}},type:"pie",radius:["0%","40%"],center:["50%","50%"],startAngle:70,label:{show:!1},data:getzrjs,z:1},{itemStyle:{normal:{color:"#FFF7E9"}},type:"pie",silent:!0,radius:["0%","57%"],center:["50%","50%"],label:{show:!1},hoverAnimation:!1,data:syjgdata,z:-1},{itemStyle:{normal:{color:"#FFE2AF"}},type:"pie",silent:!0,radius:["0%","47%"],center:["50%","50%"],label:{show:!1},hoverAnimation:!1,data:syjgdata,z:-1}]};
