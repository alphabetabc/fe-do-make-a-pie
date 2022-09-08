var data=[{code:"10年以下楼龄",stock:"aaa",fundPost:"2230"},{code:"10-20年楼龄",stock:"bbb",fundPost:"1340"},{code:"20-30年楼龄",stock:"ccc",fundPost:"1678"},{code:"30年以上楼龄",stock:"ddd",fundPost:"1890"},{code:"危房",stock:"eee",fundPost:"1753"}];function contains(t,e){for(var o=t.length;o-=1;)if(t[o]==e)return o;return!1}var attackSourcesColor=[new echarts.graphic.LinearGradient(0,1,1,1,[{offset:0,color:"#EB3B5A"},{offset:1,color:"#FE9C5A"}]),new echarts.graphic.LinearGradient(0,1,1,1,[{offset:0,color:"#FA8231"},{offset:1,color:"#FFD14C"}]),new echarts.graphic.LinearGradient(0,1,1,1,[{offset:0,color:"#F7B731"},{offset:1,color:"#FFEE96"}]),new echarts.graphic.LinearGradient(0,1,1,1,[{offset:0,color:"#395CFE"},{offset:1,color:"#2EC7CF"}])],attackSourcesColor1=["#EB3B5A","#FA8231","#F7B731","#3860FC","#1089E7","#F57474","#56D0E3","#1089E7","#F57474","#1089E7","#F57474","#F57474"],attaData=[],attaName=[],topName=[];data.forEach((t,e)=>{attaData[e]=parseFloat(t.fundPost).toFixed(2),attaName[e]=t.stock,topName[e]=`${t.code} `});var salvProMax=[];for(let t=0;t<attaData.length;t++)salvProMax.push(attaData[0]);function attackSourcesDataFmt(t){var e=[];return t.forEach(function(o,a){let r={color:a>3?attackSourcesColor[3]:attackSourcesColor[a]};e.push({value:o,itemStyle:r})}),e}var option={backgroundColor:"#000",tooltip:{show:!1,backgroundColor:"rgba(3,169,244, 0.5)",textStyle:{fontSize:16}},color:["#F7B731"],legend:{pageIconSize:[12,12],itemWidth:20,itemHeight:10,textStyle:{fontSize:10,color:"#fff"},selectedMode:!1,data:["个人所得(亿元)"]},grid:{left:"5%",right:"2%",width:"80%",bottom:"2%",top:"8%",containLabel:!0},xAxis:{type:"value",splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},yAxis:[{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisPointer:{label:{show:!0}},pdaaing:[5,0,0,0],postion:"right",data:attaName,axisLabel:{margin:30,fontSize:10,align:"left",padding:[2,0,0,0],color:"#000",rich:{nt1:{color:"#fff",backgroundColor:attackSourcesColor1[0],width:13,height:13,fontSize:10,align:"center",borderRadius:100,lineHeight:"5",padding:[0,1,2,1]},nt2:{color:"#fff",backgroundColor:attackSourcesColor1[1],width:13,height:13,fontSize:10,align:"center",borderRadius:100,padding:[0,1,2,1]},nt3:{color:"#fff",backgroundColor:attackSourcesColor1[2],width:13,height:13,fontSize:10,align:"center",borderRadius:100,padding:[0,1,2,1]},nt:{color:"#fff",backgroundColor:attackSourcesColor1[3],width:13,height:13,fontSize:10,align:"center",lineHeight:3,borderRadius:100,padding:[0,1,2,1],lineHeight:5}},formatter:function(t,e){return e=contains(attaName,t)+1,e-1<3?["{nt"+e+"|"+e+"}"].join(`
`):["{nt|"+e+"}"].join(`
`)}}},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"#fff",fontSize:"10"}},data:attackSourcesDataFmt(attaName)},{type:"category",offset:-10,position:"left",axisLabel:{color:"#fff",fontSize:10},axisLine:{show:!1},inverse:!1,axisTick:{show:!1},axisLabel:{interval:0,color:["#fff"],align:"left",verticalAlign:"bottom",lineHeight:32,fontSize:10},data:topName}],series:[{zlevel:1,name:"个人所得(亿元)",type:"bar",barWidth:"15px",animationDuration:1500,data:attackSourcesDataFmt(attaData),align:"center",itemStyle:{normal:{barBorderRadius:10}},label:{show:!0,fontSize:10,color:"#fff",textBorderWidth:2,padding:[2,0,0,0]}},{name:"个人所得(亿元)",type:"bar",barWidth:15,barGap:"-100%",margin:"20",data:salvProMax,textStyle:{fontSize:10,color:"#fff"},itemStyle:{normal:{color:"#05325F",fontSize:10,barBorderRadius:30}}}]};