var xData=function(){var t=["新福利","溢通公司","南沙巴士","从化分公司","花都恒通","二巴一分","二巴二分","番禺片区","佛广集团","客运旅包"];return t}(),data=[16,11,8,14,17,16,11,8,14,17],filterData=function(){const t=Math.max(...data),a=[],e=[];return data.forEach(o=>{o===t?(a.push(0),e.push(o)):(a.push(o),e.push(0))}),{notMaxData:a,maxData:e}};option={backgroundColor:"RGBA(7, 28, 51, 1)",legend:{data:["投诉频次","最高"],right:"10%",top:20,itemWidth:60,itemHeight:30,type:"plain",textStyle:{color:"RGBA(154, 209, 253, 1)",fontSize:30}},tooltip:{show:!1,trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}},formatter:function(t){return t[0].marker+":"+t[0].seriesName+(t[0].value+t[1].value)}},grid:{borderWidth:0,top:110,bottom:95,textStyle:{color:"#fff"}},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"rgba(255,255,255,.5)"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0,color:"rgba(255,255,255,0.7)",fontSize:18},data:xData}],yAxis:[{type:"value",splitLine:{show:!0,lineStyle:{type:"dashed",color:"RGBA(3, 75, 97, 1)"}},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,color:"rgba(255,255,255,0.5)",fontSize:20},splitArea:{show:!1}}],series:[{name:"投诉频次",type:"bar",stack:"1",barMaxWidth:35,barGap:"10%",label:{show:!0,color:"#fff",position:"top",fontSize:15,formatter:t=>filterData().maxData[t.dataIndex]===0?t.data:""},itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 214, 255, 0.6)"},{offset:1,color:"rgba(83, 14, 224, 0.15)"}],global:!1},opacity:1}},data:filterData().notMaxData},{name:"最高",type:"bar",stack:"1",barMaxWidth:35,barGap:"10%",label:{show:!0,color:"#fff",position:"top",fontSize:15,formatter:t=>t.data!==0?t.data:""},itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(191,0,253, 1)"},{offset:1,color:"rgba(83,14,224, 0.2)"}],global:!1},opacity:1}},data:filterData().maxData}]};
