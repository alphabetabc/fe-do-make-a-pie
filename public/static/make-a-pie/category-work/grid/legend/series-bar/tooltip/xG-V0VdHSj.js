let tdata=[{code:"公安机关",stock:"19785",fundPost:"19785"},{code:"住房和城乡建筑部门",stock:"16064",fundPost:"16064"},{code:"教育管理部门",stock:"14319",fundPost:"14319"},{code:"交通部门",stock:"13100",fundPost:"13100"},{code:"其他",stock:"12054",fundPost:"12054"}];function contains(e,o){for(var t=e.length;t-=1;)if(e[t]==o)return t;return!1}var attackSourcesColor=[new echarts.graphic.LinearGradient(0,1,1,1,[{offset:0,color:"#EB3B5A"},{offset:1,color:"#FE9C5A"}]),new echarts.graphic.LinearGradient(0,1,1,1,[{offset:0,color:"#FA8231"},{offset:1,color:"#FFD14C"}]),new echarts.graphic.LinearGradient(0,1,1,1,[{offset:0,color:"#F7B731"},{offset:1,color:"#FFEE96"}]),new echarts.graphic.LinearGradient(0,1,1,1,[{offset:0,color:"#395CFE"},{offset:1,color:"#2EC7CF"}])],attackSourcesColor1=["#EB3B5A","#FA8231","#F7B731","#3860FC","#1089E7","#F57474","#56D0E3","#1089E7","#F57474","#1089E7","#F57474","#F57474"],attaData=[],attaName=[],topName=[];tdata.forEach((e,o)=>{attaData[o]=parseFloat(e.fundPost).toFixed(2),attaName[o]=e.stock,topName[o]=`${e.code} ${e.stock}`});var salvProMax=[];for(let e=0;e<attaData.length;e++)salvProMax.push(attaData[0]);function attackSourcesDataFmt(e){var o=[];return e.forEach(function(t,a){let r={color:a>3?attackSourcesColor[3]:attackSourcesColor[a]};o.push({value:t,itemStyle:r})}),o}option={backgroundColor:"#000",tooltip:{show:!1,backgroundColor:"rgba(3,169,244, 0.5)",textStyle:{fontSize:16}},color:["#F7B731"],legend:{show:!1,pageIconSize:[12,12],itemWidth:20,itemHeight:10,textStyle:{fontSize:10,color:"#fff"},selectedMode:!1},grid:{left:"5%",right:"2%",width:"80%",bottom:"2%",top:"8%",containLabel:!0},xAxis:{type:"value",splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},yAxis:[{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisPointer:{label:{show:!0}},pdaaing:[5,0,0,0],postion:"right",data:attaName,axisLabel:{show:!1,margin:30,fontSize:10,align:"left",padding:[2,0,0,0],color:"#000",rich:{nt1:{color:"#fff",backgroundColor:attackSourcesColor1[0],width:13,height:13,fontSize:10,align:"center",borderRadius:100,lineHeight:"5",padding:[0,1,2,1]},nt2:{color:"#fff",backgroundColor:attackSourcesColor1[1],width:13,height:13,fontSize:10,align:"center",borderRadius:100,padding:[0,1,2,1]},nt3:{color:"#fff",backgroundColor:attackSourcesColor1[2],width:13,height:13,fontSize:10,align:"center",borderRadius:100,padding:[0,1,2,1]},nt:{color:"#fff",backgroundColor:attackSourcesColor1[3],width:13,height:13,fontSize:10,align:"center",borderRadius:100,padding:[0,1,2,1],lineHeight:5}},formatter:function(e,o){return o=contains(attaName,e)+1,o-1<3?["{nt"+o+"|"+o+"}"].join(`
`):["{nt|"+o+"}"].join(`
`)}}},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"#fff",fontSize:"20"}},data:attackSourcesDataFmt(attaName)},{type:"category",offset:10,position:"left",axisLine:{show:!1},inverse:!0,axisTick:{show:!1},axisLabel:{show:!0,interval:0,color:["#fff"],lineHeight:32,fontSize:10},data:topName}],series:[{zlevel:1,name:"",type:"bar",barWidth:"26px",animationDuration:1500,data:attackSourcesDataFmt(attaData),align:"center",itemStyle:{normal:{barBorderRadius:13}},label:{show:!1,fontSize:10,color:"#fff",textBorderWidth:2,padding:[2,0,0,0]}},{name:"",type:"bar",barWidth:26,barGap:"-100%",margin:"20",data:salvProMax,textStyle:{fontSize:10,color:"#fff"},itemStyle:{normal:{color:"#142831",fontSize:10}}}]};