var xData=["李白","李元芳","曹操","刘禅","项羽","后羿","鲁班","芈月","程咬金","关羽","刘备","张飞","杨戬","吕布","诸葛亮","干将莫邪"],yData=["攻击力","法强","防御","血量","难度","攻速","暴击","移速"];function random(a,t){return Math.round(Math.random()*Math.abs(t-a)+Math.min(a,t))}for(var seriesData=[],i=0;i<yData.length;i++){for(var data=[],j=0;j<xData.length;j++)data.push([i,j]);seriesData.push(data)}for(let a=0;a<seriesData.length;a++)seriesData[a]=seriesData[a].map(function(t){return[t[1],t[0],random(1,10)]}),seriesData[a]={name:yData[a],type:"heatmap",data:seriesData[a]};var colorData=["#ffffff","#e8192f","#d6664d","#B9044E","#f0ba2e","#d3ce2b","#169A7f","#0b6573","#1BB3c8"];option={title:{text:"数据分析"},tooltip:{trigger:"axis",axisPointer:{type:"line"}},xAxis:{name:"英雄",type:"category",data:xData},yAxis:{name:"属性",type:"category",data:yData},visualMap:{color:colorData,min:1,max:10,calculable:!0,orient:"vertical",left:"left",bottom:"15%"},series:seriesData,label:{normal:{show:!0}},itemStyle:{emphasis:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}}};
