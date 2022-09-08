var cellSize=[80,80],pieRadius=30,mydata=[[10,2,0,12],[0,1,0,23],[0,2,0,22],[0,2,1.5,20.5],[0,3,1.5,19.5],[10,1,1.5,11.5],[0,2,1.5,20.5],[10,2,0,12],[0,1,0,23],[0,4,0,20],[0,2,1.5,20.5],[0,1,1.5,21.5],[9,2,1.5,11.5],[0,5,1.5,17.5],[10,1,0,13],[0,5,0,19],[0,1,0,23],[0,1,1.5,21.5],[0,5,1.5,17.5],[9,2,1.5,11.5],[0,1,1.5,21.5],[9,1,0,14],[0,1,0,23],[0,3,0,21],[0,1,1.5,21.5],[0,4,1.5,18.5],[10,2,1.5,10.5],[0,4,1.5,18.5],[10,1,0,11],[0,4,0,20],[0,12,0,12]];function getVirtulData(){for(var t=+echarts.number.parseDate("2017-12-01"),r=+echarts.number.parseDate("2018-01-01"),n=3600*24*1e3,e=[],a=t;a<r;a+=n)e.push([echarts.format.formatTime("yyyy-MM-dd",a),Math.floor(Math.random()*1e4)]);return e}function getPieSeries(t,r){return echarts.util.map(t,function(n,e){var a=r.convertToPixel("calendar",n);return{id:e+"pie",type:"pie",center:a,label:{normal:{formatter:"{c}",position:"inside"}},radius:pieRadius,data:[{name:"实习",value:mydata[e][0]},{name:"其余外出",value:mydata[e][1]},{name:"上课",value:mydata[e][2]},{name:"寝室",value:mydata[e][3]}]}})}function getPieSeriesUpdate(t,r){return echarts.util.map(t,function(n,e){var a=r.convertToPixel("calendar",n);return{id:e+"pie",center:a}})}var scatterData=getVirtulData();if(option={tooltip:{},title:{text:"2017年12月每天各项活动占比",left:"center"},legend:{data:["实习","其余外出","上课","寝室"],bottom:20},calendar:{top:"middle",left:"center",orient:"vertical",cellSize,yearLabel:{show:!1,textStyle:{fontSize:30}},dayLabel:{margin:20,firstDay:1,nameMap:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},monthLabel:{show:!1},range:["2017-12"]},series:[{id:"label",type:"scatter",coordinateSystem:"calendar",symbolSize:1,label:{normal:{show:!0,formatter:function(t){return echarts.format.formatTime("dd",t.value[0])},offset:[-cellSize[0]/2+10,-cellSize[1]/2+10],textStyle:{color:"#000",fontSize:14}}},data:scatterData}]},!app.inNode){var pieInitialized;setTimeout(function(){pieInitialized=!0,myChart.setOption({series:getPieSeries(scatterData,myChart)})},10),app.onresize=function(){pieInitialized&&myChart.setOption({series:getPieSeriesUpdate(scatterData,myChart)})}}