var requiedList=[{name:"硕士",value:110},{name:"博士",value:320},{name:"其他",value:840}],chartColor=[{colorStops:[{offset:0,color:"#ff6a6a"},{offset:1,color:"#fd4547"}]},{colorStops:[{offset:0,color:"#3f0fd2"},{offset:1,color:"#c24ff4"}]},{colorStops:[{offset:0,color:"#3eaec2"},{offset:1,color:"#63ecae"}]}],fontColor=["#ff9494","#007eff","#63ecae","#c24ff4"],requiedData=[],requiedSeries=[],sumVal=0;requiedList.forEach((l,t)=>{requiedData.push({name:l.name,textStyle:{color:fontColor[t]}}),sumVal+=l.value}),requiedList.forEach((l,t)=>{let a=[];requiedList.forEach((e,o)=>{o==t?a.push({value:e.value,name:e.name,label:{formatter:e.name+"  "+parseFloat(e.value/sumVal).toFixed(4)*100+"%",color:fontColor[o]}}):a.push({value:e.value,name:" ",itemStyle:{color:"rgba(0,0,0,0)"}})}),t!=requiedList.length-1?requiedSeries.push({name:"达标率",type:"pie",radius:["70%","75%"],startAngle:90,clockWise:!1,avoidLabelOverlap:!0,hoverAnimation:!1,silent:!0,center:"50%",label:{emphasis:{textStyle:{fontSize:"10",fontWeight:"bold"}}},data:a},{value:2,name:"111",type:"pie",radius:["70%","75%"],startAngle:90,clockWise:!1,avoidLabelOverlap:!0,hoverAnimation:!1,silent:!0,center:"50%",label:{emphasis:{show:!1,textStyle:{fontSize:"10",fontWeight:"bold"}}},itemStyle:{normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}}}):requiedSeries.push({name:"达标率",type:"pie",radius:["65%","70%"],startAngle:90,clockWise:!1,avoidLabelOverlap:!1,hoverAnimation:!1,silent:!0,center:"50%",label:{emphasis:{textStyle:{fontSize:"30",fontWeight:"bold"}}},data:a}),console.log(JSON.stringify(requiedSeries))}),option={legend:{orient:"vertical",x:"left",y:"center",selectedMode:!1,textStyle:{fontSize:14},data:requiedData},color:chartColor,graphic:[{type:"text",left:"center",top:"center",style:{text:"学历数",textAlign:"center",fill:"#000",width:30,height:30,fontSize:18,color:"#4d4f5c",fontFamily:"Microsoft YaHei"}}],series:requiedSeries};
