for(var getname=["名称1名称1名称1","名称2","名称3","名称4","名称5"],getvalue=[1,2,3,4,5],getbl=[10,20,30,40,50],data=[],colorList=[{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#81BDFF"},{offset:1,color:"#3294FF"}]},{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#48D59D"},{offset:1,color:"#6FF3C1"}]},{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#FEAE5B"},{offset:1,color:"#FECB84"}]},{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#A1ADFF"},{offset:1,color:"#9586F3"}]},{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#FF7E7C"},{offset:1,color:"#FF6061"}]}],allValue=0,percent=[],i=0;i<getvalue.length;i++)allValue+=getvalue[i];for(var i=0;i<getvalue.length;i++)percent.push((getvalue[i]/allValue*100).toFixed(2));for(var i=0;i<getname.length;i++)data.push({name:getname[i],value:getvalue[i],label:{color:"#595959"},itemStyle:{normal:{color:colorList[i]}}});option={tooltip:{trigger:"item",formatter:"{b} <br/>{d}%"},legend:{type:"scroll",orient:"vertical",icon:"circle",height:"88%",right:"15%",top:"center",itemWidth:18,itemHeight:18,data:getname,formatter:function(e){for(var o=0;o<getname.length;o++)if(e==data[o].name)return"{name|}"+e+"{num|}"+getvalue[o]+"万元{percent|}"+percent[o]+"%"},textStyle:{rich:{name:{fontSize:15,fontWeight:400,height:35,padding:[0,0,0,4],color:"#595959"},num:{fontSize:15,fontWeight:400,height:35,padding:[0,0,0,30],color:"#595959"},percent:{fontSize:15,fontWeight:400,height:35,padding:[0,0,0,15],color:"#595959"}}}},series:[{type:"pie",radius:["32%","50%"],center:["25%","50%"],itemStyle:{normal:{}},label:{show:!0,position:"outside",formatter:`{d}%

`,fontFamily:"MicrosoftYaHei",fontSize:15,align:"center",verticalAlign:"left",padding:[0,-50]},labelLine:{show:"true",length:30,length2:50,lineStyle:{color:"#C9C9C9"}},data,avoidLabelOverlap:!0,stillShowZeroSum:!1,left:50}]};