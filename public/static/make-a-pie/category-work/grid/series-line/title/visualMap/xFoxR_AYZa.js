for(var lines=[[[0,1,50],[.5,.4,50],[1,.2,50],[1.5,0,50]]],i=0;i<10;i++){for(var ps=[],b=1,j=0;j<lines[0].length;j++)ps.push([lines[0][j][0]*b,lines[0][j][1]*b,lines[0][j][2]*(i+2)]);lines.push(ps)}console.log(lines);for(var colors=["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"],pieces=[],base=lines[0][0][2],i=0;i<lines.length-1;i++){var opt={gt:base*i,lte:base*(i+1),color:colors[i]};pieces.push(opt)}var series=[];lines.forEach(function(a,e){var r={type:"line",smooth:!0,color:colors[e],stack:!0,symbolSize:0,areaStyle:{color:colors[e]},data:a};series.push(r)}),option={title:{text:"Awesome Chart"},visualMap:{top:10,right:10,pieces,outOfRange:{}},xAxis:{type:"category",max:1},yAxis:{max:5,min:0},series};
