var data=[{value:261,name:"A关区"},{value:200,name:"B关区"},{value:180,name:"C关区"},{value:170,name:"D关区"},{value:160,name:"E关区"},{value:150,name:"F关区"},{value:140,name:"G关区"},{value:130,name:"H关区"},{value:120,name:"I关区"}],count_num=0;for(var m in data)count_num=count_num+data[m].value;option={backgroundColor:"#fff",title:{text:"“一带一路”沿线省区市关注领域",subtext:"",x:"center",top:"30",textStyle:{color:"#fff"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{type:"pie",radius:"55%",center:["50%","50%"],label:{formatter:"{b}+{d}%"},data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};