function getVirtulData(e){return data=[["2018-01-01",14e3,1e4,40],["2018-07-01",14e3,1e4,40],["2018-07-02",14e3,400,40],["2018-07-03",14e3,400,40],["2018-07-04",14e3,400,40],["2018-07-05",14e3,400,40],["2018-07-06",14e3,400,40],["2018-07-07",14e3,400,40],["2018-07-08",14e3,400,40],["2018-07-09",14e3,400,40],["2018-07-10",14e3,400,40],["2018-07-11",14e3,400,40],["2018-07-12",14e3,400,40],["2018-07-13",14e3,400,40],["2018-07-14",14e3,400,40],["2018-07-15",14e3,400,40],["2018-07-16",14e3,400,40],["2018-07-17",14e3,400,40],["2018-07-18",14e3,400,40],["2018-07-19",14e3,400,40],["2018-07-20",14e3,400,40],["2018-07-21",14e3,400,40],["2018-07-22",14e3,400,40],["2018-07-23",14e3,400,40],["2018-07-24",14e3,400,40],["2018-07-25",14e3,400,40],["2018-07-26",14e3,400,40],["2018-08-03",14e3,444,40],["2018-09-03",14e3,30,40],["2018-10-01",14e3,14e3,40],["2018-10-03",14e3,30,40],["2018-11-03",14e3,14e3,40],["2018-12-03",14e3,60,1e4],["2018-12-31",14e3,30,14e3]],data}var data=getVirtulData(2018);option={backgroundColor:"#024",color:["#35C5F9","#FFD31C","#FF6F43"],tooltip:{trigger:"item",formatter:function(e){var t="";e.componentIndex==0?t=e.data[1]:e.componentIndex==1?t=e.data[2]:e.componentIndex==2&&(t=e.data[3]);var r="时间 "+e.data[0]+"</br>"+e.seriesName+" "+t;return r}},legend:{data:[{name:"流量(GB)",textStyle:{color:"#fff"}},{name:"话务量(Erl)",textStyle:{color:"#fff"}},{name:"用户数(个)",textStyle:{color:"#fff"}}]},calendar:[{left:"12%",top:"25%",right:"3%",bottom:"10%",range:["2018-01-01","2018-06-30"],splitLine:{show:!0,lineStyle:{color:"#016692",width:1,type:"solid"}},yearLabel:{formatter:"2018下半年"},monthLabel:{formatter:"{M}月",color:"#fff"},dayLabel:{nameMap:"cn",color:"#fff"},itemStyle:{color:"red",normal:{color:"#1A487C",borderWidth:1,borderColor:"#016692"}}}],series:[{name:"流量(GB)",type:"scatter",coordinateSystem:"calendar",calendarIndex:0,data:data.sort(function(e,t){return t[1]-e[1]}).slice(0,12),symbolSize:function(e){return e[1]/1e3},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,zlevel:1},{name:"话务量(Erl)",type:"scatter",coordinateSystem:"calendar",calendarIndex:0,data:data.sort(function(e,t){return t[2]-e[2]}).slice(0,12),symbolSize:function(e){return e[2]/1e3},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,zlevel:2},{name:"用户数(个)",type:"scatter",coordinateSystem:"calendar",calendarIndex:0,data:data.sort(function(e,t){return t[3]-e[3]}).slice(0,12),symbolSize:function(e){return e[3]/1e3},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,zlevel:3}]};
