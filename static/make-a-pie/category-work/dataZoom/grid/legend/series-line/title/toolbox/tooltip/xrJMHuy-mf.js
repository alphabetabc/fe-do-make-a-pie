var timeData=["2016/1/1","2016/1/2","2016/1/3","2016/1/4","2016/1/5","2016/1/6","2016/1/7","2016/1/8","2016/1/9","2016/1/10","2016/1/11","2016/1/12","2016/1/13","2016/1/14","2016/1/15","2016/1/16","2016/1/17","2016/1/18","2016/1/19","2016/1/20","2016/1/21","2016/1/22","2016/1/23","2016/1/24","2016/1/25","2016/1/26","2016/1/27","2016/1/28","2016/1/29","2016/1/30","2016/1/31","2016/2/1","2016/2/2","2016/2/3","2016/2/4","2016/2/5","2016/2/6","2016/2/7","2016/2/8","2016/2/9","2016/2/10","2016/2/11","2016/2/12","2016/2/13","2016/2/14","2016/2/15","2016/2/16","2016/2/17","2016/2/18","2016/2/19","2016/2/20","2016/2/21","2016/2/22","2016/2/23","2016/2/24","2016/2/25","2016/2/26","2016/2/27","2016/2/28","2016/2/29","2016/3/1","2016/3/2","2016/3/3","2016/3/4","2016/3/5","2016/3/6","2016/3/7","2016/3/8","2016/3/9","2016/3/10","2016/3/11","2016/3/12","2016/3/13","2016/3/14","2016/3/15","2016/3/16","2016/3/17","2016/3/18","2016/3/19","2016/3/20","2016/3/21","2016/3/22","2016/3/23","2016/3/24","2016/3/25","2016/3/26","2016/3/27","2016/3/28","2016/3/29","2016/3/30","2016/3/31","2016/4/1","2016/4/2","2016/4/3","2016/4/4","2016/4/5","2016/4/6","2016/4/7","2016/4/8","2016/4/9","2016/4/10","2016/4/11","2016/4/12","2016/4/13","2016/4/14","2016/4/15","2016/4/16","2016/4/17","2016/4/18","2016/4/19","2016/4/20","2016/4/21","2016/4/22","2016/4/23","2016/4/24","2016/4/25","2016/4/26","2016/4/27","2016/4/28","2016/4/29","2016/4/30","2016/5/1","2016/5/2","2016/5/3","2016/5/4","2016/5/5","2016/5/6","2016/5/7","2016/5/8","2016/5/9","2016/5/10","2016/5/11","2016/5/12","2016/5/13","2016/5/14","2016/5/15","2016/5/16","2016/5/17","2016/5/18","2016/5/19","2016/5/20","2016/5/21","2016/5/22","2016/5/23","2016/5/24","2016/5/25","2016/5/26","2016/5/27","2016/5/28","2016/5/29","2016/5/30","2016/5/31","2016/6/1","2016/6/2","2016/6/3","2016/6/4","2016/6/5","2016/6/6","2016/6/7","2016/6/8","2016/6/9","2016/6/10","2016/6/11","2016/6/12","2016/6/13","2016/6/14","2016/6/15","2016/6/16","2016/6/17","2016/6/18","2016/6/19","2016/6/20","2016/6/21","2016/6/22","2016/6/23","2016/6/24","2016/6/25","2016/6/26","2016/6/27","2016/6/28","2016/6/29","2016/6/30","2016/7/1","2016/7/2","2016/7/3","2016/7/4","2016/7/5","2016/7/6","2016/7/7","2016/7/8","2016/7/9","2016/7/10","2016/7/11","2016/7/12","2016/7/13","2016/7/14","2016/7/15","2016/7/16","2016/7/17","2016/7/18","2016/7/19","2016/7/20","2016/7/21","2016/7/22","2016/7/23","2016/7/24","2016/7/25","2016/7/26","2016/7/27","2016/7/28","2016/7/29","2016/7/30","2016/7/31","2016/8/1","2016/8/2","2016/8/3","2016/8/4","2016/8/5","2016/8/6","2016/8/7","2016/8/8","2016/8/9","2016/8/10","2016/8/11","2016/8/12","2016/8/13","2016/8/14","2016/8/15","2016/8/16","2016/8/17","2016/8/18","2016/8/19","2016/8/20","2016/8/21","2016/8/22","2016/8/23","2016/8/24","2016/8/25","2016/8/26","2016/8/27","2016/8/28","2016/8/29","2016/8/30","2016/8/31","2016/9/1","2016/9/2","2016/9/3","2016/9/4","2016/9/5","2016/9/6","2016/9/7","2016/9/8","2016/9/9","2016/9/10","2016/9/11","2016/9/12","2016/9/13","2016/9/14","2016/9/15","2016/9/16","2016/9/17","2016/9/18","2016/9/19","2016/9/20","2016/9/21","2016/9/22","2016/9/23","2016/9/24","2016/9/25","2016/9/26","2016/9/27","2016/9/28","2016/9/29","2016/9/30","2016/10/1","2016/10/2","2016/10/3","2016/10/4","2016/10/5","2016/10/6","2016/10/7","2016/10/8","2016/10/9","2016/10/10","2016/10/11","2016/10/12","2016/10/13","2016/10/14","2016/10/15","2016/10/16","2016/10/17","2016/10/18","2016/10/19","2016/10/20","2016/10/21","2016/10/22","2016/10/23","2016/10/24","2016/10/25","2016/10/26","2016/10/27","2016/10/28","2016/10/29","2016/10/30","2016/10/31","2016/11/1","2016/11/2","2016/11/3","2016/11/4","2016/11/5","2016/11/6","2016/11/7","2016/11/8","2016/11/9","2016/11/10","2016/11/11","2016/11/12","2016/11/13","2016/11/14","2016/11/15","2016/11/16","2016/11/17","2016/11/18","2016/11/19","2016/11/20","2016/11/21","2016/11/22","2016/11/23","2016/11/24","2016/11/25","2016/11/26","2016/11/27","2016/11/28","2016/11/29","2016/11/30","2016/12/1","2016/12/2","2016/12/3","2016/12/4","2016/12/5","2016/12/6","2016/12/7","2016/12/8","2016/12/9","2016/12/10","2016/12/11","2016/12/12","2016/12/13","2016/12/14","2016/12/15","2016/12/16","2016/12/17","2016/12/18","2016/12/19","2016/12/20","2016/12/21","2016/12/22","2016/12/23","2016/12/24","2016/12/25","2016/12/26","2016/12/27","2016/12/28","2016/12/29","2016/12/30","2016/12/31"];timeData=timeData.map(function(e){return e.replace("2016/","")}),option={title:{text:"资金流量关系图",subtext:"数据来自模拟数据",x:"center"},tooltip:{trigger:"axis",axisPointer:{animation:!1}},legend:{data:["流入","流出"],x:"left"},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},axisPointer:{link:{xAxisIndex:"all"}},dataZoom:[{show:!0,realtime:!0,start:30,end:70,xAxisIndex:[0,1]},{type:"inside",realtime:!0,start:30,end:70,xAxisIndex:[0,1]}],grid:[{left:50,right:50,height:"35%"},{left:50,right:50,top:"55%",height:"35%"}],xAxis:[{type:"category",boundaryGap:!1,axisLine:{onZero:!0},data:timeData},{gridIndex:1,type:"category",boundaryGap:!1,axisLine:{onZero:!0},data:timeData,position:"top"}],yAxis:[{name:"流入(万元)",type:"value"},{gridIndex:1,name:"流出(万元)",type:"value",inverse:!0}],series:[{name:"流入",type:"line",smooth:!0,symbolSize:8,hoverAnimation:!1,data:[24.7,14,12.4,1.7,5.9,0,8.6,9.5,9.3,6.2,4.5,3,8.3,9.2,14.7,0,12.7,21.9,0,0,24.2,13.6,9.8,0,2.8,9.9,11.8,10.8,4.9,4,9,2.2,1.6,0,2.7,14.5,21.6,17.4,14.5,3.1,.4,7.9,10.5,9.3,13.2,11.6,0,8.6,21.3,16.7,2.2,21.5,53.5,18.9,10.3,12.2,0,28.6,4.6,8.8,2.7,12.1,10.8,0,1.5,0,3.1,5.3,14.9,8.1,0,7.4,6.8,8.2,4.4,4.5,15.5,0,1.8,19.2,0,7.8,0,22.5,24.2,9,5.3,7.7,0,11.9,14.1,17.9,17.2,3.4,17.9,10,10.2,8.1,1,5.6,5.6,13.9,2.1,24.5,22.3,7.4,15.2,6.4,25.7,13.8,9.1,0,0,4.8,.8,1,13.2,16.4,5.4,.5,11.9,0,21.5,4.3,0,5.4,30.2,0,9.3,24.2,0,14.3,12.3,12.3,11,5.8,7.5,18.2,14,2.9,15.2,5,9.9,14.5,12.4,16.3,9.7,0,.1,0,0,2.6,0,5.1,19.9,13,0,0,0,6.2,0,2.8,5.3,5,13.4,0,7,5,16.4,10.4,10,4.5,2.9,0,2.7,7,0,34.1,8.1,9.1,.3,16.9,17.9,0,19.1,11.3,3.9,.1,3,4.1,22.2,4.4,11.5,12.3,5.1,0,3.8,0,11.5,11.9,9.5,0,0,0,14.4,5.7,9.4,11.7,11.6,14.9,6.4,0,24.4,11.8,0,7.9,8.3,13.4,8.7,12.8,9.7,.8,0,8.2,0,14.7,11.2,11.1,9.4,.1,2.2,9.2,7.7,0,20.3,8.2,4.5,7,19.1,12.4,2,11.9,17.3,.7,14.4,17.5,15.2,14,16.9,5.7,7.3,2,12.3,6.2,5.3,9.5,0,21.7,11.1,14,0,19.8,34.9,0,2.8,1.5,9.4,3.5,25.8,3.8,8,0,4.9,13,0,33,2,15.9,1.1,18.4,5,2.3,12.2,6.5,10.2,22,8.4,1.4,10.3,18.4,14.4,0,11.6,9.3,7.4,8.4,6.4,11.4,8.7,8.5,14.3,0,0,8.1,0,18.1,14,18.8,0,10.9,2.3,6.9,2.3,7.7,23.6,9.5,8.8,11.5,0,0,10.8,25.6,0,10.4,0,11,18.4,10.3,7.8,5.6,.9,19.7,14.4,5.8,0,7.1,14.9,8.9,9.4,7.9,12.1,0,3,1.8,3.5,6.2,14.5,7.8,13.6,5.7,12.8,20.1,3.2,0,22.6,25.7,7,.1,19.9,2.3,8.8,8.8,13,.6,16.1,0]},{name:"流出",type:"line",smooth:!0,xAxisIndex:1,yAxisIndex:1,symbolSize:8,hoverAnimation:!1,data:[3,9.9,6.8,18.8,14.5,0,16.6,17.9,8.6,0,22.8,20.1,7.2,14.3,7,20.1,19.4,0,7.1,.2,0,8.9,4.2,27.9,17.2,3,6.6,0,15.7,3.7,4,11.5,10.8,0,22.7,18,18.3,7.2,24.3,8.9,8.4,5.9,8.6,2.9,17.7,0,8.1,.2,8.1,0,12.8,7.3,4.5,6.9,3.9,10.6,1.5,0,2.1,13.2,17.9,10,2.8,2.7,17.2,0,22.6,24.1,7,23.8,18.4,26.3,10.8,5.2,0,2.2,27.3,21,8.6,9.5,0,1.9,12.3,0,2.1,21.4,17.2,29.4,6.9,10.1,11,17,24.1,8.3,0,1.6,8.3,.8,3.8,5.8,22.3,8.8,13.2,5.6,1.2,18.3,7,17.1,15.9,1.3,16.4,10.9,19.7,14,8.3,9.5,6.5,13.3,6.9,8.5,9.4,5,10.6,12.1,15.5,3.9,15.1,8.3,5,6.9,13.6,13.3,0,17,9.1,0,22.6,0,14.4,1.6,19.6,3.3,17.8,0,10.6,10.7,0,11.1,.6,8.3,0,4.4,4.4,9,1.9,0,6.7,8.9,23.5,28,12.4,0,11.6,21.1,9.1,10.4,13.2,9.7,18.7,5.8,4.1,0,0,24.3,0,7.1,13.1,12.6,4.6,14.5,.9,14.7,2.2,26,1.9,20.2,8.2,9.2,4.8,5.2,27.4,9,0,29.6,18.4,19.5,9,2.7,8,9,0,21.4,11.7,9.3,11.1,2.9,6.3,33.5,5.7,11.9,12.4,0,8.6,20.9,10.2,3.7,0,22.9,16,9.6,4.2,26,6.8,.7,3.6,11.5,11,6.3,31.5,4.8,.6,10.8,2.5,31.2,3.9,2.8,10.5,3.4,12.5,0,5.7,8.4,4,2.8,13.2,2.3,0,2,18.4,2.9,9.1,5.2,11.1,5.4,10,13.9,22.2,2,3.8,26.2,3.8,3.2,22.7,6.2,20.7,4.9,7.7,9.3,0,5.2,4.8,7.9,8.6,8.1,6.6,1.6,8.6,2.2,.9,13.7,0,8.6,17.8,7.3,11.4,18.6,1.3,4.1,50.9,20.7,33.7,9.5,5.6,11.3,26.3,16.3,15.9,15.6,20.1,39.5,7.7,13.9,7.2,1.4,7.4,17.1,23.6,1.2,8.1,18.8,0,0,4.5,10.2,8.7,21.9,18.3,9.3,12.6,10.8,9.8,7.7,9.6,12.2,2.4,17.1,12.7,6.9,16.3,14.9,7.2,13.9,0,6.2,13.4,10.1,9.5,7.6,0,7.2,11.8,4.3,5.1,8.4,23.2,16.2,11.5,0,3.5,20.5,9.1,7.1,15.9,3.8,9.1,0,7.8,18.3,8.3,9.5,10.3,14.9,26.3,17.7,0,0]}]};