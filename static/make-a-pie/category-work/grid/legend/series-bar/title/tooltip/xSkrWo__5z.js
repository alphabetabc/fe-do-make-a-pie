var colors=["#AEEEEE","#53868B"],xData=["餐饮服务食品安全监督检查通用规程","小餐饮","学校食堂日常监督检查","大中型餐饮（含专间）日常监督检查","日常监管餐饮服务简单版","小餐饮店","无专间库房普通小餐饮店","网络餐饮专项检查","秋季开学学校食品安全专项检查","餐饮服务食品安全监督检查通用规程"];option={title:{text:"检查模板使用次数",textStyle:{fontSize:"15"}},backgroundColor:"#fff",tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}},formatter:"{b}<br/>{a0}:{c0}"},grid:{top:"10%",bottom:"70%",right:"60%"},legend:{data:["检查模板使用次数"],align:"left",left:10,top:25},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"#000"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0,rotate:50,textStyle:{fontSize:12,color:"#000"},formatter:function(e){var t="",a=e.length,o=6,r=Math.ceil(a/o);if(a>o){var i="";i=e.substring(0,6),t=i+"..."}else t=e;return t}},data:xData}],yAxis:[{type:"value",name:"",axisLine:{lineStyle:{color:"#000"}},axisLabel:{formatter:"{value} ",textStyle:{fontSize:10}},position:"top"},{type:"value",name:"",position:"right",axisLine:{lineStyle:{color:"#000"}},axisLabel:{formatter:"{value} %",textStyle:{fontSize:15}}}],series:[{name:"检查模板使用次数",type:"bar",color:colors[0],barWidth:"30%",data:[31,28,28,24,21,20,17,13,9,4]}]};
