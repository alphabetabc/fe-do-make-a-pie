for(var xAxisData=[],data1=[],data2=[],i=0;i<10;i++)data1.push((Math.random()*2).toFixed(2)),data2.push(-Math.random().toFixed(2));var itemStyle={normal:{},emphasis:{barBorderWidth:1,shadowBlur:10,shadowOffsetX:0,shadowOffsetY:0,shadowColor:"rgba(0,0,0,0.5)"}};option={title:{text:"奖金统计"},backgroundColor:"#fff",legend:{y:"bottom",data:["进","出"]},toolbox:{show:!0,feature:{restore:{show:!0},magicType:{show:!0,type:["line","bar","stack","tiled"]}}},tooltip:{formatter:function(e){return console.log(e),e.value<0?e.name+"<br/>助学金额:"+-e.value:e.name+"<br/>助学人数:"+e.value}},xAxis:{data:xAxisData,name:"入学年份",silent:!1,type:"category",data:["2010","2011","2012","2013","2014","2015","2016"]},legend:{data:["人数","金额"],y:"bottom"},yAxis:[{inverse:!0,name:"人数",splitArea:{show:!1},axisLabel:{formatter:function(e){return e<0?-e:e}}},{inverse:!0,name:"金额:(万元)",position:"left",nameLocation:"start",splitArea:{show:!1}}],grid:{},series:[{name:"人数",type:"bar",stack:"one",itemStyle,data:[1300,2e3,2500,3800,5500,6e3,4e3]},{name:"金额",type:"bar",stack:"one",itemStyle,data:[-2e3,-2500,-2900,-4500,-5900,-7e3,-6e3]}]};