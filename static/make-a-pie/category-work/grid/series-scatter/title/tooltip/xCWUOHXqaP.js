option={title:{text:"散点柱状图测试",textStyle:{color:"#fff"}},backgroundColor:"#1D324B",tooltip:{trigger:"item",formatter:function(t){var e=t.name+"<br/> 从"+t.value[1]+"时开始,在线时长为"+Math.round(60*t.value[2]/16)+"分钟";return e}},xAxis:{data:["01-06(周一)","01-07(周二)","01-08(周三)","01-09(周四)","01-10(周五)","01-11(周六)","01-12(周日)"],axisLine:{lineStyle:{color:"#7F8EA2"}},splitLine:{lineStyle:{type:"dashed",color:"#7F8EA2"},show:!0}},grid:{top:"7%",left:"2%",right:"1%",bottom:"1%",containLabel:!0},yAxis:{min:0,max:24,splitNumber:24,scale:!0,axisLine:{lineStyle:{color:"#7F8EA2"}},splitLine:{lineStyle:{type:"dashed",color:"#7F8EA2"},show:!0}},series:[{symbolSize:function(t){return[40,t[2]]},hoverAnimation:!1,symbolOffset:["5%","-50%"],data:[["01-07(周二)","4",11],["01-07(周二)","9",101],["01-08(周三)","0",161],["01-08(周三)","9",51]],type:"scatter",symbol:"rect",itemStyle:{normal:{opacity:1,color:"#42B6F6"}}}]};
