let Datas=[23,58,65,98],name=["严重","高危","中危","低危"],color=["#d98986","#f3b77b","#f8c955","#82b4a3"],series=[],max=eval(Datas.join("+"));Datas.forEach((e,a)=>{console.log(max);let o;e>0?o={name:name[a],type:"bar",stack:"总量",barWidth:"15%",label:{normal:{show:!0,position:"inside",textStyle:{color:"#fff",fontSize:"14"}}},itemStyle:{normal:{color:color[a]}},data:[e]}:o={name:name[a],type:"bar",stack:"总量",barWidth:"15%",label:{normal:{show:!1,position:"inside",textStyle:{color:"#fff",fontSize:"14"}}},itemStyle:{normal:{color:color[a]}},data:[e]},series.push(o)}),option={xAxis:{type:"value",max,show:!1},yAxis:{type:"category",show:!1,data:[""]},series};