for(var getname=["优秀","合格","基本合格","不合格"],getvalue=[4,2,2,3],data=[],sum=0,i=0;i<getname.length;i++)sum=sum+getvalue[i],data.push({name:getname[i],value:getvalue[i]});var colorList=["#1890FF","#B9A9FF","#12DDA1","#FFB026"],colorList1=["#1183ED","#A793FF","#00CF92","#EF9D0F"],colorList2=["#1890FF","#B9A9FF","#12DDA1","#FFB026"];return option={tooltip:{trigger:"item",show:!1},legend:{type:"scroll",orient:"vertical",height:"88%",right:"20%",top:"center",icon:"circle",itemWidth:18,itemHeight:18,itemGap:20,data:getname,formatter:function(e){for(var t=0;t<getname.length;t++)if(e==data[t].name)return"{name|"+e+"}{value|"+getvalue[t]+"次}{rate|"+(data[t].value/sum*100).toFixed(0)+"%}"},textStyle:{rich:{name:{fontSize:16,fontWeight:400,width:50,height:35,padding:[0,0,0,10],color:"#666666"},value:{fontSize:16,fontWeight:400,width:50,height:35,padding:[0,0,0,20],color:"#333333"},rate:{fontSize:16,fontWeight:500,height:35,width:55,align:"left",color:"#666666"}}}},series:[{type:"pie",radius:["35%","55%"],center:["25%","50%"],itemStyle:{normal:{color:function(e){return colorList1[e.dataIndex]}}},label:{fontSize:13,color:"#333",formatter:function(e){return e.name+"{per"+e.dataIndex+"|"+e.percent.toFixed(0)+"%}"},rich:{per0:{padding:[0,0,0,5],fontSize:16,fontWeight:"bold",color:"#1890FF"},per1:{padding:[0,0,0,5],fontSize:16,fontWeight:"bold",color:"#B9A9FF"},per2:{padding:[0,0,0,5],fontSize:16,fontWeight:"bold",color:"#12DDA1"},per3:{padding:[0,0,0,5],fontSize:16,fontWeight:"bold",color:"#FFB026"}}},labelLine:{show:!0,length:20,length2:50},data},{type:"pie",radius:["30%","40%"],center:["25%","50%"],itemStyle:{normal:{color:function(e){return colorList1[e.dataIndex]}}},label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data}]},option;
