var days=[],data1=[],data2=[],data3=[],data4=[],lineData=[];function getRandomInt(a,t){return a=Math.ceil(a),t=Math.floor(t),Math.floor(Math.random()*(t-a))+a}for(var day,i=1;i<=90;i++)day=i,days.push("第"+day+"天"),data1.push(getRandomInt(1100,1189)),data2.push("-"),data3.push("-"),data4.push("-"),lineData.push(getRandomInt(1080,1154));for(var i=1;i<=90;i++)day=day+1,days.push("第"+day+"天"),data1.push("-"),data2.push(getRandomInt(1104,1144)),data3.push("-"),data4.push("-"),lineData.push(getRandomInt(1084,1138));for(var i=1;i<=90;i++)day=day+1,days.push("第"+day+"天"),data1.push("-"),data2.push("-"),data3.push(getRandomInt(1050,1151)),data4.push("-"),lineData.push(getRandomInt(1064,1128));for(var i=1;i<=90;i++)day=day+1,days.push("第"+day+"天"),data1.push("-"),data2.push("-"),data3.push("-"),data4.push(getRandomInt(1024,1120)),lineData.push(getRandomInt(0,1104));option={title:{text:" 某段区域bar相同  ",x:"center",textStyle:{color:"#fff"},backgroundColor:"#A9334C"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["一季度额度","二季度额度","三季度额度","四季度额度","2017年"],bottom:0},xAxis:[{type:"category",data:days}],yAxis:[{type:"value"}],series:[{name:"一季度额度",type:"bar",stack:"堆叠",data:data1},{name:"二季度额度",type:"bar",stack:"一季度",data:data2},{name:"三季度额度",type:"bar",stack:"堆叠",data:data3},{name:"四季度额度",type:"bar",stack:"堆叠",data:data4},{name:"2017年",type:"line",data:lineData}]};
