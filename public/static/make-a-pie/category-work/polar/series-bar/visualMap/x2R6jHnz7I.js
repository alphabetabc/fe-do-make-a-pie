for(var xData=["日均交易量","日均交易金额"],yData=["70","75","76","80","95","75","76","90"],colorList=["yellow","skyblue"],index=-1,visualMapPiecesData=[],i=0;i<xData.length;i++)visualMapPiecesData.push({value:yData[i],label:xData[i],color:colorList[i]});option={angleAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},clockwise:!1},radiusAxis:{type:"category",z:100,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},polar:{},visualMap:{right:40,bottom:"0",orient:"horizontal",textStyle:{color:"#fff"},pieces:visualMapPiecesData,outOfRange:[{}]},series:[{type:"bar",data:yData,coordinateSystem:"polar",stack:"a",z:100,itemStyle:{normal:{color:function(a){return index=(index+1)%colorList.length,colorList[index]}}}},{type:"bar",data:[100,100,100,100,100,100,100,100],coordinateSystem:"polar",stack:"a",itemStyle:{normal:{color:"rgba(0,0,0,0.4)"}}}]};