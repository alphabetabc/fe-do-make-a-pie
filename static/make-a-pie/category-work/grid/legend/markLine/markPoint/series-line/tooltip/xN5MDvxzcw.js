let data={title:["蒸发量111","降水量"],dataX:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dataY:[[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,11,22],[12,14.9,17,23.2,235.6,176.7,15.6,12.2,12.6,50,22,11]]};const calMax=a=>{let t=0;return a.forEach(e=>{t<e&&(t=e)}),Math.ceil(t/9.5)*10};let type="line",maxArray=[],list=data.dataY.map((a,t)=>(maxArray.push(calMax(data.dataY[t])),{name:data.title[t],type,data:data.dataY[t],markPoint:{},markLine:{}}));option={tooltip:{trigger:"axis"},color:["#4C84FF","#9A47FF","#FF884C","#13C2C2","#F04864","#FACC14","#2FC25B","#66B5FF"],legend:{orient:"horizontal",data:data.title,bottom:0},grid:{x:60,y:44,x2:60,y2:64},calculable:!0,xAxis:[{type:"category",data:data.dataX,lineStyle:{color:"#145617",width:1},padding:50,axisLabel:{interval:0}}],yAxis:[{type:"value",max:calMax(maxArray),interval:calMax(maxArray)/5,min:0}],series:list};