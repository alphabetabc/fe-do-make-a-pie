Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var s in t)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length==1?t[s]:("00"+t[s]).substr((""+t[s]).length)));return e};let dataX=[],dataY=[];function points(e,t,s){let n=1800;if(e===t)for(let o=0;o<n;o++){let l=e+.001,a=e-.001,i=new Date(s.getTime()+o).Format("yyyy-MM-dd hh:mm:ss");dataX.push(i),dataY.push(Math.round((Math.random()*(l-a+.5)+a)*100)/100)}else{let o=(t-e)/(n-1),l=Math.abs(e-t)*.001;for(let a=0;a<n;a++){let i=o*(a-1)+e,r=i+l,h=i-l,d=new Date(s.getTime()+a*1e3).Format("yyyy-MM-dd hh:mm:ss");dataX.push(d),dataY.push(Math.round((Math.random()*(r-h+.5)+h)*100)/100)}}}let jsonData=[],nowDate=new Date("2021-12-01 00:00:00");for(let e=0;e<48;e++)jsonData.push({load:Math.round((Math.random()*(30-20+.5)+20)*100)/100,date:new Date(nowDate.getTime()+e*30*60*1e3).Format("yyyy-MM-dd hh:mm:ss")});if(jsonData.length>1){for(let e=1;e<jsonData.length;e++)points(jsonData[e-1].load,jsonData[e].load,new Date(jsonData[e-1].date));dataX.push(jsonData[jsonData.length-1].date),dataY.push(jsonData[jsonData.length-1].load)}option={color:["#22DCB8","#F47100"],tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"},lineStyle:{type:"dashed"}}},legend:{icon:"rect",show:!0,right:0,top:25},xAxis:{type:"category",data:dataX,splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},yAxis:{type:"value",axisLabel:{color:"#999",textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:"#F3F4F4",type:"dashed"}},axisTick:{show:!1},axisLine:{show:!1}},dataZoom:[{type:"inside",start:0,end:10},{start:0,end:10}],series:[{name:"数据",type:"line",smooth:!0,symbol:"none",data:dataY}]};
