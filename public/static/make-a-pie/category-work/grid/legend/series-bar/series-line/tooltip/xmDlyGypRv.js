Array.prototype.remove=function(e){var o=this.indexOf(e);o>-1&&this.splice(o,1)};for(var obj={},text_data=["http://www.baidu.com","https://www.sogou.com","http://www.333.com","http://www.444.com","http://www.555.com","http://www.666.com","http://www.777.com","http://www.888.com","http://www.999.com","外部链接总计"],i=0;i<text_data.length;i++)i>2&&i<text_data.length-1?obj[text_data[i]]=!1:obj[text_data[i]]=!0;obj[text_data[text_data.length-1]]=!0,myChart&&myChart.clear(),myChart.setOption({tooltip:{trigger:"axis",backgroundColor:"rgba(255,255,255,0.8)",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(150,150,150,0.2)"}},textStyle:{color:"#666",fontSize:"14px"},extraCssText:'width:220px;height:200px;padding:0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);"',formatter:function(e){for(var o="",l=0;l<e.length;l++){var t=e[l].name,n=e[l].value;t.indexOf("/")<0&&(t>9?t=t+":00 - "+t+":59":t="0"+t+":00 - 0"+t+":59"),n>0?n=n:n="--",o+='<div style="height:26px;line-height:26px;overflow:hidden;padding:6px 8px;"><span style="float:left;max-width:160px;overflow:hidden;text-overflow: ellipsis;white-space: nowrap;"><span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+e[l].color+';"></span>'+e[l].seriesName+'</span><span style="float:right">'+n+"</span></div>"}var a='<div><div style="height:40px;line-height:40px;padding:0 8px;background:rgba(237,233,233,0.4)">'+t+'<span style="float:right;">'+$(".table-echarts ul.group li.cur").text()+"</span>"+o+"</div></div>";return a}},textStyle:{color:"rgb(120, 122, 125)"},color:["#4fa8f9","#6ec71e","#f56e6a","#fc8b40","#818af8","#31c9d7","#f35e7a","#ab7aee","#14d68b","#cde5ff"],grid:{top:30,bottom:70},legend:{bottom:1,itemGap:15,itemWidth:9,itemHeight:10,textStyle:{padding:[0,0,0,8]},formatter:function(e){return e.length>14?e.slice(0,14)+"...":e},selected:obj,data:text_data},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},axisLabel:{interval:2},axisLine:{lineStyle:{color:"#ddd"}},data:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]}],yAxis:[{type:"value",axisLine:{lineStyle:{color:"transparent"}},splitLine:{lineStyle:{color:"#eee"}}}],series:[{name:"http://www.baidu.com",type:"line",symbol:"circle",symbolSize:"5",data:[8,1,1,0,0,3,2,0,6,3,1,4,7,3,7,15,11,3,8,3,2,5,4,7]},{name:"https://www.sogou.com",type:"line",symbol:"circle",symbolSize:"5",data:[1,1,0,0,2,1,0,1,3,1,0,0,1,0,1,1,1,0,2,2,0,4,2,4]},{name:"http://www.333.com",type:"line",symbol:"circle",symbolSize:"5",data:[1,3,0,0,0,1,1,0,0,1,2,1,3,1,1,1,1,0,2,0,2,1,1,1]},{name:"http://www.444.com",type:"line",symbol:"circle",symbolSize:"5",data:[0,0,0,0,0,0,0,0,1,0,1,2,3,0,0,0,3,1,0,2,0,1,0,0]},{name:"http://www.555.com",type:"line",symbol:"circle",symbolSize:"5",data:[0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,2,0,1,1,2,0]},{name:"http://www.666.com",type:"line",symbol:"circle",symbolSize:"5",data:[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,0,2,0,0,1,0,0]},{name:"http://www.777.com",type:"line",symbol:"circle",symbolSize:"5",data:[2,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1]},{name:"http://www.888.com",type:"line",symbol:"circle",symbolSize:"5",data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0]},{name:"http://www.999.com",type:"line",symbol:"circle",symbolSize:"5",data:[0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0]},{name:"外部链接总计",type:"bar",barWidth:"60%",data:[14,6,1,0,2,5,4,1,11,8,6,7,15,5,11,21,21,6,17,7,7,14,9,14]}]});let lengthSelectedArr=["http://www.baidu.com","https://www.sogou.com","http://www.333.com"];lengthSelectedArr.reverse(),myChart.on("legendselectchanged",function(e){if(["外部链接总计"].includes(e.name))return!1;let o=[];console.log(201,e),e.selected[e.name]?(lengthSelectedArr.remove(e.name),lengthSelectedArr.unshift(e.name),lengthSelectedArr.length>3&&(lengthSelectedArr.length=3)):lengthSelectedArr.remove(e.name);let l=this.getOption();for(let t in e.selected)["外部链接总计"].includes(t)||(lengthSelectedArr.includes(t)?l.legend[0].selected[t]=!0:l.legend[0].selected[t]=!1),e.selected[t]&&!["外部链接总计"].includes(t)&&o.push(t);o.length<1&&(l.legend[0].selected[e.name]=!0,lengthSelectedArr.unshift(e.name)),this.setOption(l)}),window.onresize=()=>myChart?myChart.resize():"";
