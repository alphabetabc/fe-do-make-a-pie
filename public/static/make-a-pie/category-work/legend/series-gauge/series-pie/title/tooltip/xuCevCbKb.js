let all=1e4,bAll=2e3,cAll=4e3,x=1e3,y=4/5*1e3,a=1/5*1e3,b=bAll/all*y,c=(cAll-bAll)/all*y,d=y-b-c;option={backgroundColor:"#091438",legend:{orient:"vertical",x:"left",data:["其他("+bAll+")","本市("+cAll+")"],textStyle:{color:"#fff"}},title:{show:!0,text:[`{b|在线人数
}`,`{a|${bAll+cAll}} `].join(""),padding:20,backgroundColor:"#f00",borderRadius:10,textStyle:{rich:{a:{color:"#fff",fontSize:62,height:100},b:{color:"#fff",fontSize:26,lineHeight:65}}},left:"center",top:"center"},tooltip:{show:!1},series:[{type:"pie",startAngle:306,radius:["65%","60%"],center:["50%","50%"],legendHoverLink:!1,hoverAnimation:!1,avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:a,itemStyle:{normal:{color:"#091438"},emphasis:{color:"#091438"}}},{value:b,name:"其他("+bAll+")",itemStyle:{normal:{color:"#da2b80"},emphasis:{color:"#da2b80"}}},{value:c,name:"本市("+cAll+")",itemStyle:{normal:{color:"#ffa600"},emphasis:{color:"#ffa600"}}},{value:d,itemStyle:{normal:{color:"#00fef7"},emphasis:{color:"#00fef7"}}}]},{name:"",type:"pie",radius:["0%","55%"],center:["50%","50%"],silent:!0,labelLine:{normal:{show:!1}},data:[{value:100,itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#006cd5"},{offset:.5,color:"#35c4f8"},{offset:1,color:"#006cd5"}],global:!1}}}]},{name:"刻度",type:"gauge",radius:"85%",min:0,max:cAll>1e4?1e5:1e4,splitNumber:10,startAngle:234,endAngle:-54,axisLine:{show:!0,lineStyle:{width:1,color:[[1,"rgba(0,0,0,0)"]]}},axisLabel:{show:!0,color:"#4d5bd1",distance:25,formatter:function(e){return e/1e4+"w"}},axisTick:{show:!0,splitNumber:10,lineStyle:{width:1},length:-8},splitLine:{show:!0,length:-20,lineStyle:{color:"#fff"}},detail:{show:!1},pointer:{show:!1}}]};