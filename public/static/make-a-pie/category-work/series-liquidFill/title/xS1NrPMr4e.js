option={title:{text:"水波晃动的效果"},series:[{type:"liquidFill",data:[.5,{value:.5,phase:Math.PI}],phase:0,period:4e3,waveLength:"100%",animationDurationUpdate:2e3}]},setInterval(function(){myChart.setOption({series:[{amplitude:Math.random()*40}]})},2e3);