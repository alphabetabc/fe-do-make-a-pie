for(var getname=["国家级高层次研究团队","省级好层次研究团队","教育部创新团队"],getvalue=[35,45,30],getbl=[35,45,30],data=[],i=0;i<getname.length;i++)data.push({name:getname[i],value:getvalue[i]});var colorList=[{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#81BEFF"},{offset:1,color:"#3295FF"}]},{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#48D69E"},{offset:1,color:"#70F3C2"}]},{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#FEAE5C"},{offset:1,color:"#FECC84"}]},{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#A1AEFF"},{offset:1,color:"#9686F3"}]},{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#FECAFF"},{offset:1,color:"#D47FE6"}]},{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#7EEAE6"},{offset:1,color:"#1ABBB5"}]}];option={tooltip:{trigger:"item",formatter:"{b}占比: {c}%"},legend:{type:"scroll",orient:"vertical",height:"88%",left:"50%",top:"center",itemWidth:18,itemHeight:18,data:getname,formatter:function(o){for(var t=0;t<getname.length;t++)if(o==data[t].name)return"{name|"+o+"}{rate|"+getbl[t].toFixed(2)+"%}"},textStyle:{rich:{name:{fontSize:15,fontWeight:400,width:230,height:35,padding:[0,0,0,5],color:"#999"},rate:{fontSize:15,fontWeight:500,height:35,width:40,align:"right",color:"#656565"}}}},series:[{type:"pie",radius:["40%","60%"],center:["25%","50%"],itemStyle:{normal:{color:function(o){return colorList[o.dataIndex]}}},label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data}]};