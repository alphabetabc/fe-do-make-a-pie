for(var n=100,vData=[.1,1,10,100],xData=[],yOilData=new Array,yWaterData=new Array,i=0;i<=4;i++){yOilData[i]=new Array(i),yWaterData[i]=new Array(i);for(var j=0;j<n;j++)yOilData[i][j]=i,yWaterData[i][j]=i}for(var i=0;i<=4;i++)for(var v=vData[i],x=0;x<=n;x++){var R1=.92*v*x/31e-6,y1=5*x/Math.sqrt(R1),R2=1*v*x/1e-6,y2=5*x/Math.sqrt(R2);xData[x]=x,yOilData[i][x]=y1,yWaterData[i][x]=y2}option={tooltip:{trigger:"axis",axisPointer:{animation:!1}},legend:{data:["油 v=0.1","油 v=1","油 v=10","油 v=100","水 v=0.1","水 v=1","水 v=10","水 v=100"],x:"right",y:"top",padding:50},grid:[{left:100,right:100}],xAxis:{name:"x",type:"category",data:xData},yAxis:{name:"y",type:"value"},series:[{name:"油 v=0.1",data:yOilData[0],type:"line"},{name:"油 v=1",data:yOilData[1],type:"line"},{name:"油 v=10",data:yOilData[2],type:"line"},{name:"油 v=100",data:yOilData[3],type:"line"},{name:"水 v=0.1",data:yWaterData[0],type:"line"},{name:"水 v=1",data:yWaterData[1],type:"line"},{name:"水 v=10",data:yWaterData[2],type:"line"},{name:"水 v=100",data:yWaterData[3],type:"line"}]};
