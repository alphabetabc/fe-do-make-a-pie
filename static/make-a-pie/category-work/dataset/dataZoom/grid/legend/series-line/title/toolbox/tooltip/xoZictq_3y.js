let x=(Math.random()*100).toFixed(0),data=[["Time",0,2,3,4,5,6,7,8,9,10],["MeasuredValue",(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0)],["CMAQ",(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0)],["OPAQ",(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0)]],title="空气质量AQI",SymbolType=["triangle","circle","emptyCircle"],color=["#000","red","blue"],name=["实测值","CMAQ","OPAQ"],series=[],source=[];data.map(t=>{source.push(t)}),SymbolType.map((t,a)=>{series.push({name:name[a],type:"line",symbol:t,symbolSize:10,color:color[a],seriesLayoutBy:"row"})}),option={title:{text:title},tooltip:{trigger:"axis"},legend:{},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:1,end:100}],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},dataset:{source},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:source[0]},yAxis:{type:"value"},series};
