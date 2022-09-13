let overWeight=[{code:"111",stock:"frv",overWeightNum:"41.8308"},{code:"222",stock:"工rgre银",overWeightNum:"35.7686"},{code:"333",stock:"股割让给份",overWeightNum:"30.6345"},{code:"444",stock:"精热个人的密",overWeightNum:"29.7876"},{code:"555",stock:"东割让给方",overWeightNum:"24.207"},{code:"666",stock:"过热如果富",overWeightNum:"24.695"},{code:"777",stock:"thrt能",overWeightNum:"21.1411"},{code:"888",stock:"传媒",overWeightNum:"16.531"},{code:"999",stock:"股份",overWeightNum:"15.9554"},{code:"112",stock:"风格的",overWeightNum:"15.8416"}],underWeight=[{code:"211",stock:"石膏板",underweightNum:"58.6204"},{code:"222",stock:"Erebus",underweightNum:"36.0593"},{code:"233",stock:"二哥",underweightNum:"30.3707"},{code:"244",stock:"我让我爸",underweightNum:"28.8139"},{code:"255",stock:"uol",underweightNum:"26.8439"},{code:"266",stock:"违法",underweightNum:"26"},{code:"277",stock:"访问",underweightNum:"25.7525"},{code:"288",stock:"为给我吧",underweightNum:"25.4942"},{code:"299",stock:"二哥冯如杯",underweightNum:"24.5708"},{code:"300",stock:"热个人",underweightNum:"24.8275"}],overData=[],underData=[];overWeight.forEach((e,t)=>{overData[t]={},overData[t].value=parseFloat(e.overWeightNum).toFixed(2),overData[t].label=[e.code,e.stock].join(" ")}),underWeight.forEach((e,t)=>{underData[t]={},underData[t].value=parseFloat(e.underweightNum).toFixed(2),underData[t].label=[e.code,e.stock].join(" ")});let data={etc:{name:"增张",data:overData},notEtc:{name:"减少",data:underData}};function contains(e,t){for(var o=e.length;o-=1;)if(e[o]==t)return o;return!1}let legendData=[data.etc.name,data.notEtc.name],yAxisDataN=data.etc.data.map(e=>e.label),yAxisDataV=data.notEtc.data.map(e=>e.label),yAxisLabelN=data.etc.data.map(e=>e.value).sort((e,t)=>e-t),yAxisLabelV=data.notEtc.data.map(e=>e.value).sort((e,t)=>e-t),rankData=data.etc.data.map((e,t)=>t),top=60,bottom=10;var labelSetting={label:"16",yLabel:"16"},attackSourcesColor=["#EB3B5A","#FA8231","#F7B731","#2D5CAF","#1089E7","#F57474","#56D0E3","#1089E7","#F57474","#1089E7","#F57474","#F57474"],option={title:{text:"",x:"center",textStyle:{color:"#fff",fontSize:22}},backgroundColor:"#000",legend:{left:"center",itemGap:100,top:10,itemWidth:0,itemHeight:0,y:"center",borderRadius:0,inactiveColor:"#FFF",formatter:e=>e==data.etc.name?"{a|"+e+"}":"{b|"+e+"}",textStyle:{rich:{a:{padding:[3,10,5,10],align:"center",fontSize:10,backgroundColor:"#EB5252",color:"#fff"},b:{padding:[4,10,5,10],align:"center",fontSize:10,backgroundColor:"#4AB57D",color:"#fff"}}},data:legendData},grid:[{right:"55%",width:"40%",containLabel:!1,bottom,top},{left:"51%",width:0,top,bottom},{left:"55%",width:"40%",containLabel:!1,bottom,top}],xAxis:[{type:"value",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},{gridIndex:1,show:!1},{gridIndex:2,type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}}],yAxis:[{offset:-10,position:"right",axisLabel:{lineHeight:56,color:"#fff",fontSize:labelSetting.yLabel,fontSize:10},axisLine:{show:!1},type:"category",inverse:!1,axisTick:{show:!1},axisLabel:{interval:0,shadowOffsetX:"-10px",color:["#fff"],align:"right",verticalAlign:"bottom",lineHeight:30,fontSize:10,formatter:function(e,t){return yAxisDataN[t]}},data:yAxisDataN.reverse()},{gridIndex:1,position:"",type:"category",inverse:!0,axisLabel:{show:!0,margin:0,color:"#fff",fontSize:10,postion:"right",rich:{nt1:{color:"#fff",backgroundColor:attackSourcesColor[0],width:15,height:15,fontSize:10,align:"center",borderRadius:100},nt2:{color:"#fff",backgroundColor:attackSourcesColor[1],width:15,height:15,fontSize:10,align:"center",borderRadius:100},nt3:{color:"#fff",backgroundColor:attackSourcesColor[2],width:15,height:15,fontSize:10,align:"center",borderRadius:100},nt:{color:"#fff",backgroundColor:attackSourcesColor[3],width:15,height:15,fontSize:10,align:"center",lineHeight:3,borderRadius:100}},formatter:function(e,t){return t=contains(yAxisDataV,e)+1,t-1<3?["{nt"+t+"|"+t+"}"].join(`
`):["{nt|"+t+"}"].join(`
`)}},axisTick:{show:!1},axisLine:{show:!1},axisPointer:{label:{show:!0,margin:30}},data:yAxisDataV},{offset:-10,gridIndex:2,position:"left",axisLabel:{color:"#fff",fontSize:labelSetting.yLabel,fontSize:10},axisLine:{show:!1},inverse:!1,axisTick:{show:!1},axisLabel:{interval:0,color:["#fff"],align:"left",verticalAlign:"bottom",lineHeight:30,fontSize:10,formatter:function(e,t){return yAxisDataV[t]}},data:yAxisDataV.reverse()}],series:[{name:legendData[0],type:"bar",barWidth:"15",barMinHeight:"50",lineHeight:"3",label:{show:!0,fontSize:labelSetting.label,lineHeight:56,distance:10,color:"#fff",fontSize:10,width:"15",align:"center",lineHeight:"8",padding:[2,0,0,0]},itemStyle:{color:"#298bf6",normal:{barBorderRadius:30,color:new echarts.graphic.LinearGradient(0,1,1,1,[{offset:0,color:"#FE9C5A"},{offset:1,color:"#EB3B5A"}])}},data:yAxisLabelN},{type:"bar",barWidth:"15",barMinHeight:"50",label:{show:!0,fontSize:labelSetting.label,distance:10,color:"#fff",fontSize:10,padding:[2,0,0,0]},xAxisIndex:2,yAxisIndex:2,name:legendData[1],itemStyle:{color:"#4AB57D",normal:{barBorderRadius:30,color:new echarts.graphic.LinearGradient(0,1,1,1,[{offset:0,color:"#4AB57D"},{offset:1,color:"#C7DA5B"},{offset:1,color:"#3A5EC5"},{offset:1,color:"#068749"}])}},data:yAxisLabelV}]};