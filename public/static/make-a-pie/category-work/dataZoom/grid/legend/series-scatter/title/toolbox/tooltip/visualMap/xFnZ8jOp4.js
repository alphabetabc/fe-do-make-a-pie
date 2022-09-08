var bzMap={data:Array(),get:function(t){return this.data[t]},set:function(t,e){this.data[t]=e}};bzMap.set("1","高血压"),bzMap.set("2","糖尿病"),bzMap.set("3","高血脂"),bzMap.set("4","哮喘"),bzMap.set("5","冠心病"),bzMap.set("6","慢性肾炎"),bzMap.set("7","重症精神病"),bzMap.set("8","小儿哮喘"),bzMap.set("9","湿疹"),bzMap.set("10","过敏性鼻炎"),bzMap.set("11","先心病"),bzMap.set("12","癫痫"),bzMap.set("13","发育迟缓"),bzMap.set("14","儿童肥胖"),bzMap.set("15","小儿厌食症");var option={title:{text:"重点病种综合统计",subtext:"不同年龄段按颜色区分",textStyle:{fontSize:14,fontWeight:"bolder",color:"#333"}},tooltip:{trigger:"axis",axisPointer:{show:!0,type:"cross",lineStyle:{type:"dashed",width:1}}},toolbox:{show:!1,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},grid:{x:"25",x2:"10",y2:"65"},dataZoom:{show:!0,start:0,end:100},legend:{data:["男性","女性"]},dataRange:{min:0,max:100,orient:"horizontal",y:30,x:"center",color:["lightgreen","orange"],splitNumber:5,formatter:function(t,e){return t+"-"+e+"岁"}},xAxis:[{type:"category",axisLabel:{formatter:function(t){return bzMap.get(t)}},data:function(){for(var t=[],e=0;e++<15;)t.push(e);return t}()}],yAxis:[{type:"value"}],animation:!1,series:[{name:"男性",type:"scatter",tooltip:{trigger:"item",formatter:function(t){return"病种："+bzMap.get(t.value[0])+"<br/>总数："+t.value[2]+"人<br/>分布："+t.seriesName+"人群，年龄"+t.value[2]+"岁"},axisPointer:{show:!0}},symbolSize:function(t){return Math.round(t[2]/10)},data:function(){for(var t=[],e=0,r;e++<15;)t.push([e,(Math.random()*30).toFixed(0)-0,(Math.random()*100).toFixed(0)-0]);return t}()},{name:"女性",type:"scatter",tooltip:{trigger:"item",formatter:function(t){return"病种："+bzMap.get(t.value[0])+"<br/>总数："+t.value[2]+"人<br/>分布："+t.seriesName+"人群，年龄"+t.value[2]+"岁"},axisPointer:{show:!0}},symbolSize:function(t){return Math.round(t[2]/10)},data:function(){for(var t=[],e=0,r;e++<15;)t.push([e,(Math.random()*30).toFixed(0)-0,(Math.random()*100).toFixed(0)-0]);return t}()}]};
