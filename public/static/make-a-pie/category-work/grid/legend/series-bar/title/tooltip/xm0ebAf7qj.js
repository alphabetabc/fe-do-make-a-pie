var option={title:{text:"产品进度表",link:"https://docs.qq.com/sheet/DUkhwZ1hqakxkZmt2?c=P9A0A0",show:!0,left:"center",textStyle:{color:"5588dd"}},legend:{y:"bottom",data:["计划时间","实际时间"]},grid:{containLabel:!0,left:2},xAxis:{type:"time"},yAxis:{data:["任务一","任务二","任务三","任务四","任务五","任务六","任务七"]},tooltip:{trigger:"axis",formatter:function(e){var o=e[0].name+"</br>",t=e[0].data,a=e[1].data,n=e[2].data,r=e[3].data;return t=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),a=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate(),n=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate(),r=r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate(),o+=e[0].seriesName+"~"+e[1].seriesName+":</br>"+t+"~"+a+"</br>",o+=e[2].seriesName+"~"+e[3].seriesName+":</br>"+n+"~"+r+"</br>",console.log(e[0]),o}},series:[{name:"计划开始时间",type:"bar",stack:"test1",itemStyle:{normal:{color:"rgba(0,0,0,0)"}},data:[new Date("2015/09/2"),new Date("2015/09/15"),new Date("2015/09/15"),new Date("2015/10/03"),new Date("2015/10/04"),new Date("2015/10/05"),new Date("2015/10/06")]},{name:"计划时间",type:"bar",stack:"test1",itemStyle:{normal:{color:"#F98563"}},data:[new Date("2015/09/12"),new Date("2015/09/20"),new Date("2015/09/25"),new Date("2015/10/05"),new Date("2015/10/07"),new Date("2015/10/09"),new Date("2015/10/12")]},{name:"实际开始时间",type:"bar",stack:"test2",itemStyle:{normal:{color:"rgba(0,0,0,0)"}},data:[new Date("2015/09/2"),new Date("2015/09/15"),new Date("2015/09/15"),new Date("2015/10/03"),new Date("2015/10/04"),new Date("2015/10/05"),new Date("2015/10/06")]},{name:"实际时间",type:"bar",stack:"test2",itemStyle:{normal:{color:"#A2E068"}},data:[new Date("2015/09/6"),new Date("2015/09/20"),new Date("2015/09/27"),new Date("2015/10/11"),new Date("2015/10/16"),new Date("2015/10/18"),new Date("2015/10/17")]}]};
