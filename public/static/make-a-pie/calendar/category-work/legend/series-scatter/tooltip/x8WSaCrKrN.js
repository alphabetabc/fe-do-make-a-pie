var data,times_e,yearName;data=[["2019-01-15",35.27,5,0],["2019-02-02",35.27,100,117],["2019-02-27",384.11,100,99],["2019-02-27",384.11,100,99],["2019-02-28",384.11,100,99],["2019-03-01",384.11,100,99],["2019-03-02",384.11,100,99],["2019-03-03",384.11,100,99],["2019-03-04",384.11,100,99],["2019-03-04",384.11,100,99],["2019-03-05",384.11,100,99],["2019-03-06",384.11,100,99],["2019-03-07",384.11,100,99]],times_e=["2019-01-01","2019-06-30"],yearName="2019上半年",option={color:["#35C5F9","#FFD31C","#FF6F43","red"],tooltip:{trigger:"item",formatter:function(e){var t="";e.componentIndex==0?t=e.data[1]:e.componentIndex==1?t=e.data[2]:e.componentIndex==2&&(t=e.data[3]);var r="时间 : "+e.data[0]+"</br>"+e.seriesName+" : "+t;return r}},legend:{data:[{name:"流量(GB)",textStyle:{color:"#485377"}},{name:"话务量(Erl)",textStyle:{color:"#485377"}},{name:"用户数(个)",textStyle:{color:"#485377"}},{name:"工单",textStyle:{color:"#485377"}}],selected:{"流量(GB)":!0,"话务量(Erl)":!1,"用户数(个)":!1,工单:!0}},calendar:[{left:"12%",top:"25%",right:"3%",bottom:"10%",range:times_e,splitLine:{show:!0,lineStyle:{color:"#C8CADF",width:1,type:"solid"}},yearLabel:{textStyle:{color:"#041241"},formatter:yearName},monthLabel:{formatter:"{M}月",color:"#485377"},dayLabel:{nameMap:"cn",color:"#485377"},itemStyle:{color:"red",normal:{color:"#E8ECF5",borderWidth:1,borderColor:"#C8CADF"}}}],series:[{name:"流量(GB)",type:"scatter",coordinateSystem:"calendar",calendarIndex:0,data:data.sort(function(e,t){return t[1]-e[1]}).slice(0,200),symbolSize:function(e){return 12},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,zlevel:2},{name:"话务量(Erl)",type:"scatter",coordinateSystem:"calendar",calendarIndex:0,data:data.sort(function(e,t){return t[2]-e[2]}).slice(0,200),symbolSize:function(e){return 11},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,zlevel:3},{name:"用户数(个)",type:"scatter",coordinateSystem:"calendar",calendarIndex:0,data:data.sort(function(e,t){return t[3]-e[3]}).slice(0,200),symbolSize:function(e){return 9},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,zlevel:4},{name:"工单",type:"scatter",coordinateSystem:"calendar",calendarIndex:0,data:data.sort(function(e,t){return t[4]-e[4]}).slice(0,200),symbolSize:function(e){return 16},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,zlevel:1}]};