var uploadedDataURL="/asset/get/s/data-1520061248047-S1dripwOz.json";$.getJSON(uploadedDataURL,function(e){for(console.log(e),lines=[],n=0;n<e.lines.length;n++)lines.push([e.stations[e.lines[n][0]].slice(1),e.stations[e.lines[n][1]].slice(1)]);myChart.setOption(option={backgroundColor:"#rgba(0,0,0,0)",geo:{map:"china",silent:!0,itemStyle:{borderColor:"#rgba(0,0,0,0)",color:"#rgba(0,0,0,0)"},zoom:1.5},series:[{type:"lines",coordinateSystem:"geo",data:lines,large:!0,lineStyle:{color:"#FFF",opacity:.1,width:.5,curveness:.1},blendMode:"lighter"}]})});