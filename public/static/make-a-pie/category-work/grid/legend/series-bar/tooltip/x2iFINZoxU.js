for(var data=[],barname=["负荷有功(KW)","负荷无功(kVar)"],i=0;i<2;i++){for(var val=[],j=0;j<12;j++)val.push({name:"S"+j,value:getRandom(0,900)});data.push({name:barname[i],data:val})}let yAxisData=new Set,legendData=[];data.map(e=>{legendData.push(e.name),e.data.map(t=>{yAxisData.add(t.name)})}),yAxisData=[...yAxisData];function getRandom(e,t){return Math.floor(Math.random()*(t-e))+e}option={backgroundColor:"#00185a",tooltip:{show:!0,trigger:"axis",axisPointer:{type:"shadow"}},legend:{left:"center",top:12,itemWidth:10,itemHeight:10,itemGap:15,borderRadius:0,textStyle:{color:"#bfbfbe",fontSize:12},data:legendData},grid:[{left:"6%",width:"36%",containLabel:!0,bottom:20,top:40},{left:"52%",width:"0%",top:60,bottom:20},{right:"6%",width:"36%",containLabel:!0,bottom:20,top:40}],xAxis:[{type:"value",max:function(e){return e.max},position:"top",inverse:!0,axisLabel:{show:!0,color:"#009afe",margin:5},axisLine:{lineStyle:{color:"#464955"}},axisTick:{lineStyle:{color:"#464955"}},splitLine:{show:!1}},{gridIndex:1,show:!0},{max:function(e){return e.max},position:"top",gridIndex:2,type:"value",axisLabel:{show:!0,color:"#009afe",margin:5},axisLine:{lineStyle:{color:"#464955"}},axisTick:{lineStyle:{color:"#464955"}},splitLine:{show:!1}}],yAxis:[{type:"category",inverse:!0,data:yAxisData,position:"right",axisLabel:{show:!1},axisLine:{lineStyle:{color:"#464955"}},axisTick:{lineStyle:{color:"#464955"}}},{type:"category",inverse:!0,data:yAxisData,gridIndex:1,position:"center",axisLabel:{verticalAlign:"middle",align:"center",fontSize:12,color:"#bfbfbe"},axisLine:{show:!1},axisTick:{show:!1}},{type:"category",inverse:!0,data:yAxisData,gridIndex:2,position:"left",axisLabel:{show:!1},axisLine:{lineStyle:{color:"#464955"}},axisTick:{lineStyle:{color:"#464955"}}}],series:[{name:data[0].name,type:"bar",barWidth:"50%",itemStyle:{opacity:.8,color:{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"#5472d3"},{offset:1,color:"#009afe"}],global:!1}},data:data[0].data},{name:data[1].name,xAxisIndex:2,yAxisIndex:2,type:"bar",barWidth:"50%",itemStyle:{opacity:.8,color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#c50010"},{offset:1,color:"#fc4250"}],global:!1}},data:data[1].data}]};
