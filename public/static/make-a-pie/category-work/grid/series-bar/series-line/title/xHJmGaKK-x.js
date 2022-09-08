var N_POINT=20,grids=[],xAxes=[],yAxes=[],series=[],titles=[],count=0,data=[],legends=[],colors=["#EE8262","#B5C334","#FCCE10","#E87C25","#B4EEB4","#FE8463","#9BCA63","#FAD860","#F3A43B","#60C0DD","#D7504B","#C6E579","#F4E001","#F0805A","#26C0C0","#E87C25","#FCCE10","#C1232B","#B5C334","#72D871"],easingFuncs=[{name:"北京",value:35664,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"bar"},{name:"天津",value:5446,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"line"},{name:"上海",value:35664,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"bar"},{name:"杭州",value:35664,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"line"},{name:"黑龙江",value:35664,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"bar"},{name:"新疆",value:35664,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"bar"},{name:"大连",value:35664,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"bar"},{name:"青岛",value:43555,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"line"},{name:"湖南",value:13322,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"bar"},{name:"山西",value:5454,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"line"},{name:"陕西",value:657,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"line"},{name:"甘肃",value:35664,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"bar"},{name:"四川",value:35664,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"line"},{name:"云南",value:35664,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"bar"},{name:"西藏",value:35664,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"line"},{name:"海南",value:35664,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"bar"},{name:"江西",value:35664,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"line"},{name:"福建",value:35664,xdata:["周一","周二","周三","周四","周五"],ydata:[23,45,12,32,11],type:"bar"}];echarts.util.each(easingFuncs,function(a,e){grids.push({show:!1,containLabel:!1,borderWidth:0,borderColor:"#fff"}),xAxes.push({type:"category",show:!0,name:"日",nameGap:"1",nameTextStyle:{color:"#fff"},gridIndex:count,axisLabel:{show:!0,interval:0,textStyle:{color:"#fff",fontSize:14}},axisTick:{show:!1},data:a.xdata}),yAxes.push({type:"value",show:!0,min:.001,axisLabel:{show:!1},splitLine:{show:!0,lineStyle:{width:.2}},nameGap:"1",axisTick:{show:!1},name:a.name,nameTextStyle:{color:"#fff",fontSize:14},gridIndex:count}),series.push({name:a.name,type:a.type,xAxisIndex:count,yAxisIndex:count,data:a.ydata,showSymbol:!1,lineStyle:{normal:{color:colors[count],width:2}},animationEasing:a.name,animationDuration:1e3}),titles.push({show:!1,textAlign:"left",text:a.value,textStyle:{fontSize:16,color:"yellow",fontWeight:"normal"}}),count++});var rowNumber=Math.floor(Math.sqrt(count))-1;echarts.util.each(grids,function(a,e){a.left=e%rowNumber/rowNumber*100+3+"%",a.top=Math.floor(e/rowNumber)/rowNumber*50+4+"%",a.width=1/rowNumber*92-5+"%",a.height=1/rowNumber*25+"%",titles[e].left=parseFloat(a.left)+parseFloat(a.width)/2+"%",titles[e].top=parseFloat(a.top)-3.5+"%"}),option={title:titles,grid:grids,xAxis:xAxes,yAxis:yAxes,series},myChart.setOption(option);
