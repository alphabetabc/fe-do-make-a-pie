for(var oneData=["材料A1","材料A2","材料B1","材料B2","材料C1","材料C2"],secendData=["部件A","部件B","部件C"],lastData=["成品1","成品2"],sourceData=["材料A1","材料A2","材料B1","材料B2","材料C1","材料C2","材料A1","部件A","部件A","部件B","部件B","部件C","材料C2"],targetData=["部件A","部件A","部件B","部件B","部件C",null,"部件B","成品1","成品2","成品1","成品2","成品2","成品2"],description=["加工A1","加工A2","加工B1","加工B2","加工C1","加工C2","合成A1","组装","组装","组装","组装","组装","镶嵌"],legendData=["材料","部件","产品"],links=[],data1=[],data2=[],data3=[],layout="none",i=0;i<oneData.length;i++)data1.push({name:oneData[i],symbolSize:[30,20],x:0,y:i*(100/oneData.length),category:0,linkTargetName:"部件A"});for(var i=0;i<secendData.length;i++)data2.push({name:secendData[i],symbolSize:[30,20],x:30,y:i*(100/secendData.length),category:1});for(var i=0;i<lastData.length;i++)data3.push({name:lastData[i],symbolSize:[30,20],x:60,y:i*(100/lastData.length),value:[60,i*(100/lastData.length)],category:2});for(var i=0;i<sourceData.length;i++)links.push({source:sourceData[i],label:{show:!0,formatter:"{c}"},value:description[i]===null?"":description[i],target:targetData[i]===null?"":targetData[i]});var datalist=data1.concat(data2,data3);option={title:{text:"层级结构图",subtext:"Default layout",top:"bottom",left:"right"},tooltip:{},legend:[{data:legendData}],animationDuration:1500,animationEasingUpdate:"quinticInOut",series:[{name:"层级结构图",type:"graph",layout,draggable:!0,focusNodeAdjacency:!0,roam:!0,edgeSymbol:["circle","arrow"],edgeSymbolSize:[0,30],scaleLimit:{min:.5,max:9},label:{normal:{position:"bottom",show:!0,textStyle:{fontSize:12}}},lineStyle:{color:"source",curveness:.3},data:datalist,links,categories:[{name:"材料"},{name:"部件"},{name:"产品"}]}]};
