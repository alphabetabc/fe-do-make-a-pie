for(var coors1=[[100,220],[200,182],[300,191],[400,234],[500,290],[600,330],[700,310]],coors2=[[100,420],[200,382],[300,391],[400,434],[500,490],[600,530],[700,510]],coors3=[[100,620],[200,582],[300,591],[400,634],[500,690],[600,730],[700,710]],coors=[coors1,coors2,coors3],optionSeries=[],legendData=[],renderLoop=function(o,t){var a=function(c,r){var l=echarts.util.map(o[t],function(n,p){var s=r.coord([n[0],n[1]]);return s});return{type:"polyline",shape:{points:l},style:{fill:null,stroke:r.visual("color"),lineWidth:2}}},e=t+1;legendData.push({name:"Polyline"+e},{name:"EffectScatter"+e}),optionSeries.push({type:"custom",name:"Polyline"+e,renderItem:a,encode:{x:0,y:1},data:[[1,0]]},{type:"effectScatter",name:"EffectScatter"+e,symbol:"circle",symbolSize:10,data:o[t]})},i=0;i<coors.length;i++)renderLoop(coors,i);option={title:{text:"Polyline Chart with scatters"},legend:{data:legendData,left:0,top:50},grid:{top:100},xAxis:{min:0,max:1e3},yAxis:{min:0,max:1e3},tooltip:{},series:optionSeries},console.log(optionSeries);