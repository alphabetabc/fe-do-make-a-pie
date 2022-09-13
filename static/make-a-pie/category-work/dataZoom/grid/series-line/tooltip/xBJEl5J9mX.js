let changeDate=["2017-03","2017-04","2017-05","2017-06","2017-07","2017-08","2017-09","2017-10","2017-11","2017-12","2018-01","2018-02","2018-03","2018-04","2018-05","2018-06","2018-07"],costData=[{startDate:"2017-03-01",endDate:"2017-03-31",cost:9e5,costState:"已确认",count:88},{startDate:"2017-04-01",endDate:"2017-04-30",cost:3e5,costState:"已确认",count:88},{startDate:"2017-05-01",endDate:"2017-05-31",cost:85e4,costState:"已确认",count:88},{startDate:"2017-06-01",endDate:"2017-06-15",cost:8e5,costState:"已确认",count:88},{startDate:"2017-06-16",endDate:"2017-06-30",cost:1e6,costState:"已确认",count:88},{startDate:"2017-07-01",endDate:"2017-07-04",cost:11e5,costState:"已确认",count:99},{startDate:"2017-07-05",endDate:"2017-07-21",costState:"已确认",cost:88e4,count:99},{startDate:"2017-08-01",endDate:"2017-08-31",costState:"已确认",cost:12e4,count:99},{startDate:"2017-09-01",endDate:"2017-09-30",cost:3e5,costState:"已确认",count:99},{startDate:"2017-10-01",endDate:"2017-10-20",cost:7e5,costState:"已确认",count:99},{startDate:"2017-10-21",endDate:"2017-11-15",cost:7e5,costState:"已确认",count:99},{startDate:"2017-11-16",endDate:"2017-11-20",cost:8e5,costState:"已确认",count:99},{startDate:"2017-12-01",endDate:"2017-12-31",cost:6e5,costState:"已确认",count:99},{startDate:"2018-01-01",endDate:"2018-01-31",cost:5e5,costState:"已确认",count:99},{startDate:"2018-02-01",endDate:"2018-02-28",cost:3e5,costState:"已确认",count:99},{startDate:"2018-03-01",endDate:"2018-03-31",cost:9e5,costState:"已确认",count:99},{startDate:"2018-04-01",endDate:"2018-04-30",cost:3e5,costState:"已确认",count:99},{startDate:"2018-05-01",endDate:"2018-05-31",cost:85e4,costState:"已确认",count:99},{startDate:"2018-06-01",endDate:"2018-06-15",cost:8e5,costState:"已确认",count:99},{startDate:"2018-06-16",endDate:"2018-06-30",cost:85e4,costState:"已确认",count:99},{startDate:"2018-07-01",endDate:"2018-07-04",cost:11e5,costState:"未确认",count:99},{startDate:"2018-07-05",endDate:"2018-07-21",cost:88e4,costState:"未确认",count:99}];function getMinusDays(t,e){var o=t.split("-"),a=new Date(o[0],o[1]-1,o[2]),s=e.split("-"),l=new Date(s[0],s[1]-1,s[2]),c=a.getTime(),i=l.getTime(),n=1e3*60*60*24,r=Math.floor((i-c)/n),d=Math.abs(r);return d}function addDays(t,e){var o=t.split("-"),a=new Date(o[0],o[1]-1,o[2]);return a.setDate(a.getDate()+e),a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()}let cost=[];for(let t=0;t<costData.length;t++){let e=addDays(costData[t].startDate,getMinusDays(costData[t].startDate,costData[t].endDate)/2);cost.push({name:costData[t].startDate+" ~ "+costData[t].endDate,value:[e,costData[t].cost]})}let costChange={changeDate,cost,minDate:costData[0].startDate.slice(0,7)+"-01",maxDate:costData[costData.length-1].endDate.slice(0,7)+"-31",dashLastStart:2},monthCount=costChange.changeDate.length,data=costChange.cost,chartData={xAxisNames:costChange.changeDate,seriesData:data,axisLabelFormatter:"{value}w",name:"费用",seriesDash:!0,dashStart:data.length-costChange.dashLastStart,minDate:costChange.minDate,maxDate:costChange.maxDate,scrollLen:Math.ceil(100-12/this.monthCount*100),showScroll:this.monthCount>12,bottom:this.monthCount>12?50:0},seriesData=[];if(console.log(chartData.seriesData),chartData.seriesDash){let t=chartData.seriesData.length,e=[];for(let o=0;o<t;o++)e.push({name:"-",value:[]});seriesData=[{name:chartData.name,symbol:"circle",symbolSize:12,type:"line",smooth:!1,data:chartData.seriesData.slice(0,chartData.dashStart).concat(e.slice(0,t-chartData.dashStart))},{name:chartData.name,symbol:"emptyCircle",symbolSize:6,type:"line",smooth:!1,data:chartData.seriesData.slice(0,chartData.dashStart).concat(e.slice(0,t-chartData.dashStart))},{name:chartData.name,symbol:"circle",symbolSize:12,type:"line",smooth:!1,itemStyle:{normal:{color:"#95EBE1",lineStyle:{width:2,type:"dashed"}}},data:e.slice(0,chartData.dashStart-1).concat(chartData.seriesData.slice(chartData.dashStart-1,t))},{name:chartData.name,symbol:"circle",symbolSize:6,type:"line",smooth:!1,itemStyle:{normal:{lineStyle:{width:2,type:"dotted"}}},data:e.slice(0,chartData.dashStart-1).concat(chartData.seriesData.slice(chartData.dashStart-1,t))},{name:chartData.name,symbol:"circle",symbolSize:12,type:"line",smooth:!1,data:e.slice(0,chartData.dashStart-1).concat(chartData.seriesData.slice(chartData.dashStart-1,chartData.dashStart)).concat(e.slice(0,t-chartData.dashStart))},{name:chartData.name,symbol:"emptyCircle",symbolSize:6,type:"line",smooth:!1,data:e.slice(0,chartData.dashStart-1).concat(chartData.seriesData.slice(chartData.dashStart-1,chartData.dashStart)).concat(e.slice(0,t-chartData.dashStart))}]}else seriesData=[{name:chartData.name,symbol:"circle",symbolSize:12,type:"line",data:chartData.seriesData},{name:chartData.name,symbol:"emptyCircle",symbolSize:6,type:"line",data:chartData.seriesData}];let xAxisNames1=[];for(let t=0;t<chartData.seriesData.length;t++)xAxisNames1.push("-");option={color:"#28BBAB",backgroundColor:"#404a59",tooltip:{backgroundColor:"rgba(46, 126, 139, 0.90)",padding:[10,20,10,8],textStyle:{fontSize:12,lineHeight:24},trigger:"axis",axisPointer:{type:"line",lineStyle:{type:"dashed",color:"#28BBAB"}},formatter:function(t,e,o){for(var a="",s={},l=0;l<t.length;l++){var c=t[l],i=c.name,n=c.seriesName,r=c.value;r.length!==0&&(s[n]&&s[n][0]===r[0]&&s[n][1]===r[1]||(a+=i,a+="<br/><div>",a+=n+"："+r[1],a+="</div>",s[n]=r))}return a}},grid:{left:40,right:14,bottom:80,top:20},dataZoom:[{type:"slider",zoomLock:!0,show:!0,labelFormatter:()=>"",realtime:!0,start:30,filterMode:"none",end:100,throttle:0,dataBackground:{lineStyle:{opacity:0},areaStyle:{opacity:0}},handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2},xAxisIndex:0}],xAxis:[{type:"time",min:chartData.minDate,max:chartData.maxDate,interval:3600*24*1e3,data:xAxisNames1,splitLine:{show:!1},axisLine:{show:!1},axisLabel:{color:"#ADB9C7",formatter:function(t){let e=new Date(t);if(e.getDate()===16){let a=e.getFullYear(),s=e.getMonth()+1;return s=s<=9?"0"+s:s,a+"-"+s}else return""}},axisTick:{show:!1},axisPointer:{triggerTooltip:!0}}],yAxis:{type:"value",axisLine:{show:!1,lineStyle:{color:"#999"}},axisTick:{show:!1},splitLine:{lineStyle:{color:"#999"}},axisLabel:{color:"#ADB9C7",formatter:function(t){return chartData.axisLabelFormatter==="{value}w"?parseInt(t,10)/1e4+"w":t}}},series:seriesData};
