option={color:["#367DA2"],title:{text:"推荐配置视图",left:"center",textStyle:{fontSize:14,fontWeight:"normal"}},legend:{bottom:"0%",data:["配置比例"]},xAxis:[{type:"category",axisLine:{onZero:!1},axisTick:{show:!1},inverse:!0,data:["国内固定权益","海外固定权益","大商品","货币","国内权益","海外权益","对冲投资","另类投资"]}],yAxis:[{type:"value",splitNumber:4,max:80,min:0,interval:20,axisLabel:{formatter:function(t){return t.toFixed(2)+"%"}},axisLine:{show:!1},axisTick:{show:!1}}],grid:{left:"0%",right:"4%",bottom:"10%",top:"15%",containLabel:!0},tooltip:{trigger:"axis",padding:0,extraCssText:"box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);",axisPointer:{type:"line"},backgroundColor:"rgba(255,255,255,0)",show:!0,formatter:function(t){var a="";return $(t).each(function(i,e){if(e.componentType==="series"&&e.dataIndex>=0){var o=myChart.getOption().color,n=o[i%o.length];e.value&&e.value!=="-"&&(a+='<br /> <div style="display:inline-block;width:10px;height:10px;border-radius:5px;background:'+n+';"></div>&emsp;'+e.seriesName+":&emsp;"+e.value)}}),a?'<div style="background:#fff;padding:15px;color:#999;border-radius:5px;">'+(t[0]?t[0].name:t.seriesName)+a+"</div>":""}},series:[{name:"销量",type:"bar",barWidth:"45%",label:{normal:{show:!0,position:"top",formatter:function(t){var a=0;return echarts.util.each(myChart.getOption().series[0].data,function(i,e){i&&(a+=i)}),(t.data/a*100).toFixed(2)+"%"}}},data:[5,null,null,null,15,68,null,null]}]};