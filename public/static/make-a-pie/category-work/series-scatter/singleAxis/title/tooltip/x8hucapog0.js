let seriesData={"c207620e-aa8f-4f4d-849b-455a39915e65":[[0,3,701,"c207620e-aa8f-4f4d-849b-455a39915e65"],[1,4530,700,"c207620e-aa8f-4f4d-849b-455a39915e65"],[2,2,696,"c207620e-aa8f-4f4d-849b-455a39915e65"],[3,16627,700,"c207620e-aa8f-4f4d-849b-455a39915e65"],[4,480,691,"c207620e-aa8f-4f4d-849b-455a39915e65"],[5,1184,696,"c207620e-aa8f-4f4d-849b-455a39915e65"],[6,244,700,"c207620e-aa8f-4f4d-849b-455a39915e65"]],"08b97216-23e3-442d-a2a3-443595eea9d5":[[0,3,701,"08b97216-23e3-442d-a2a3-443595eea9d5"],[1,1,700,"08b97216-23e3-442d-a2a3-443595eea9d5"],[2,7261,697,"08b97216-23e3-442d-a2a3-443595eea9d5"],[3,5,700,"08b97216-23e3-442d-a2a3-443595eea9d5"]]},xAxisData={"c207620e-aa8f-4f4d-849b-455a39915e65":["10:04","10:30","12:00","12:35","17:13","17:22","17:50"],"08b97216-23e3-442d-a2a3-443595eea9d5":["10:24:07","10:25","10:27","12:41"]},inRangeData=[701,700,696,691,697],_colors=["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],colors={};inRangeData.forEach((a,e)=>{colors[a]=_colors[e]});let newTitle=[],singleAxisData=[];Object.keys(xAxisData).forEach((a,e)=>{console.log(a,e),newTitle.push({textBaseline:"middle",top:(e+.5)*100/7+"%",text:"Person "+e}),singleAxisData.push({left:150,type:"category",boundaryGap:!1,top:e*100/7+5+"%",height:100/7-10+"%",axisLabel:{},data:xAxisData[a]})});let newSeries=[];Object.keys(seriesData).forEach((a,e)=>{newSeries.push({singleAxisIndex:e,coordinateSystem:"singleAxis",type:"scatter",name:e>0?"701":"700",data:seriesData[a],itemStyle:{color:l=>{let t=l.data;return console.log(t,t.length,colors[t[t.length-2]]),colors[t[t.length-2]]}},symbolSize:function(l){return l[1]>10?l[1]/1e3:l[1]*10}})}),option={tooltip:{},title:newTitle,singleAxis:singleAxisData,series:newSeries};