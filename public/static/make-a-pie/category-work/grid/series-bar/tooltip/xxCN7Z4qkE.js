function setLabelStyle(o){let t={};return o=="left"?t={b:{fontSize:16,padding:[40,20,0,10],align:"left"}}:t={name:{fontSize:16,padding:[0,2,0,0],color:"#060C11"}},xData.forEach((l,e)=>{o=="left"?t["a"+e]={color:"#fff",backgroundColor:colors[e][0],width:28,height:28,lineHeight:28,fontSize:16,align:"center",borderRadius:5,padding:[0,1,2,1]}:t["value"+e]={color:colors[e][0],fontSize:20}}),t}var{xData,yData,colors,labelTitle,companyName}={colors:[["#E64E25","#FCBCAB"],["#40BECD","#C5F1F6"]],labelTitle:"点击量",xData:["基础训练：基础体能","基础训练：基础射击"],yData:[{value:16223,itemStyle:{color:{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"#E64E25"},{offset:1,color:"#FCBCAB"}]}}},{value:163,itemStyle:{color:{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"#f64E25"},{offset:1,color:"#0CBCAB"}]}}}]};option={grid:{left:"70",top:"30",bottom:"10",right:"150"},tooltip:{show:!0,formatter:"{b}"},xAxis:{name:"",show:!1},yAxis:{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},nameLocation:"center",axisLabel:{margin:40,fontSize:14,align:"left",color:"#333",rich:setLabelStyle("left"),formatter:function(o,t){let l=t,e=t+1,a="";return o.length>20?a=o.substring(0,20)+"...":a=o,`{a${l}|${e}}{b| ${a}}`}},data:xData},series:[{type:"bar",barWidth:"14",barCategoryGap:50,label:{show:!0,fontSize:14,position:"right",formatter:function(o,t){let{value:l,dataIndex:e}=o;return labelTitle?companyName?`${labelTitle}:{value${e}| ${l}}{value${e}|${companyName}}`:`${labelTitle}:{value${e}| ${l}}`:""},rich:setLabelStyle("right")},data:yData}]};
