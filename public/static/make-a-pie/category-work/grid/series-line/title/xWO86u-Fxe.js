let sData=[{name:"徐汇区",value:4},{name:"金山区",value:22},{name:"嘉定区",value:12.67},{name:"浦东新区",value:19},{name:"闵行区",value:7.52},{name:"松江区",value:8},{name:"长宁区",value:17.92},{name:"宝山区",value:5.96},{name:"静安区",value:5.99}],angle=0,data=[],color=["#35D2FD","#F56B3C","#F2A936","#D8F754","#76F738","#40C02D","#6AE8FE","#389AFD","#285BF5"];for(var i=0;i<sData.length;i++)data.push({value:sData[i].value,name:sData[i].name,itemStyle:{normal:{borderWidth:6,borderColor:color[i]}}},{value:1,name:"",itemStyle:{normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}}});function _pieDashed(){let t=[];for(var e=0;e<100;e++)e%2===0?t.push({name:(e+1).toString(),value:25,itemStyle:{normal:{color:"rgb(126,190,255)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}}):t.push({name:(e+1).toString(),value:25,itemStyle:{normal:{color:"rgba(0,0,0,0)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}});return t}let labelData=[];for(var i=0;i<100;++i)labelData.push({value:1,name:i,itemStyle:{normal:{color:"rgba(0,209,228,0)"}}});for(var i=0;i<labelData.length;++i)(labelData[i].name>=25&&labelData[i].name<50||labelData[i].name>=75&&labelData[i].name<100)&&(labelData[i].name%2===0?labelData[i].itemStyle={normal:{color:"rgb(126,190,255)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}:labelData[i].itemStyle={normal:{color:"rgba(0,0,0,0)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}});let seriesOption=[{name:"",type:"pie",clockWise:!0,radius:["64%","67%"],hoverAnimation:!1,itemStyle:{normal:{label:{show:!0,position:"outside",color:"#ddd",formatter:function(t){for(var e=0,a=0,r=0;r<sData.length;r++)a+=sData[r].value;return e=(t.value/a*100).toFixed(2),t.name!==""?t.name+`

`+e+"%":""}},labelLine:{show:!0,color:"#00ffff"}}},data},{name:"第三层环",type:"pie",z:1,tooltip:{show:!1},center:["50%","50%"],radius:["74%","76%"],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{borderWidth:5,shadowBlur:10,borderColor:"rgba(53,139,255,.3)",shadowColor:"rgba(53,139,255,.3)",color:"rgba(30,84,120,.95)"},emphasis:{color:"rgba(30,84,120,.95)"}},label:{show:!1},data:[100]},{name:"第二层环",type:"pie",z:1,tooltip:{show:!1},center:["50%","50%"],radius:["54%","56%"],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{borderWidth:5,shadowBlur:15,shadowColor:"rgba(98,200,249,.3)",color:"rgba(98,200,249,.95)"},emphasis:{color:"rgba(98,200,249,.95)"}},label:{show:!1},data:[100]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(t,e){return{type:"arc",shape:{cx:e.getWidth()/2,cy:e.getHeight()/2,r:Math.min(e.getWidth(),e.getHeight())/2*.5,startAngle:(275+-angle)*Math.PI/180,endAngle:(0+-angle)*Math.PI/180},style:{stroke:"#4CA9DD",fill:"transparent",lineWidth:1.5},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(t,e){return{type:"arc",shape:{cx:e.getWidth()/2,cy:e.getHeight()/2,r:Math.min(e.getWidth(),e.getHeight())/2*.5,startAngle:(90+-angle)*Math.PI/180,endAngle:(180+-angle)*Math.PI/180},style:{stroke:"#4CA9DD",fill:"transparent",lineWidth:1.5},silent:!0}},data:[0]},{hoverAnimation:!1,type:"pie",z:2,data:labelData,radius:["50%","49%"],zlevel:-2,label:{normal:{show:!1}}},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(t,e){let a=e.getWidth()/2-10,r=.245*e.getHeight(),l=a,o=r+10,n=a+10,s=r+5;return{type:"path",shape:{d:"M"+a+" "+r+" L"+l+" "+o+" L"+n+" "+s+"  Z"},style:{stroke:"#4CA9DD",fill:"#4CA9DD"},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(t,e){let a=e.getWidth()/2+5,r=.745*e.getHeight(),l=a+10,o=r-6,n=a+10,s=r+5;return{type:"path",shape:{d:"M"+a+" "+r+" L"+l+" "+o+" L"+n+" "+s+"  Z"},style:{stroke:"#4CA9DD",fill:"#4CA9DD"},silent:!0}},data:[0]}];option={backgroundColor:"#0A2E5D",color,series:seriesOption};
