var option={backgroundColor:"black",color:["#fedd29","#eb6739","#1cd3d8"],textStyle:{color:"#FFFFFF",fontSize:"10px"},tooltip:{trigger:"axis",axisPointer:{type:"line"},formatter:function(a){var e=a[0].seriesName,r=a[1].seriesName,l=a[2].seriesName,s=a[0].data,t=a[1].data,n=a[2].data,o=s+t+n,p=a[0].name;return'<span style="color: #0a080b">总数&nbsp;&nbsp;&nbsp;<span style="font-size:20px;color: #0a080b"><strong>'+o+`</strong></span><span style="color: #0a080b">次</span><span class="test"><style>
.test{  border-bottom: 5px solid cyan; border-left: 5px solid transparent;border-right: 5px solid transparent;}
</style></span></br><span style="color: #BDBEC3">`+e+'&nbsp;&nbsp;&nbsp;</span><span style="font-size:20px;color: #0a080b"><strong>'+s+'</strong></span><span style="color: #0a080b">次</span></br><span style="color: #BDBEC3">'+r+'&nbsp;&nbsp;&nbsp;</span><span style="font-size:20px;color: #0a080b"><strong>'+t+'</strong></span><span style="color: #0a080b">次</span><br/><span style="color: #0a080b">'+p+"</span>"}},legend:{left:"1%",data:["故障","报警","巡检"],textStyle:{color:"white"}},grid:{top:"20%",left:"3%",right:"4%",bottom:"5%",containLabel:!0},yAxis:[{name:"(Min)",type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed"}}}],xAxis:[{show:!0,type:"category",boundaryGap:!0,data:["周一","周二","周三","周四","周五"],axisLine:{lineStyle:{}},axisTick:{show:!1},axisLabel:{interval:0,rotate:45,show:!0}}],series:[{name:"故障",type:"bar",stack:"总量",barWidth:"20px",data:[100,212,101,120,0]},{name:"报警",type:"bar",stack:"总量",barWidth:"20px",data:[0,232,251,10,0]},{name:"巡检",type:"bar",stack:"总量",barWidth:"20px",data:[0,232,231,134,190]}]};
