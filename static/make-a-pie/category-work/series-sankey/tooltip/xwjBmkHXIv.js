let data1=[{name:"F14"},{name:"F19"}],data2=[{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"},{name:"6"},{name:"7"},{name:"8"}],data3=[{name:"A"},{name:"B"},{name:"C"},{name:"D"},{name:"E"},{name:"F"}],color1="#2979e6",color2="#2fd9ff",color3="#c22fd9";data1.map((e,a)=>{e.depth=0,a==0?e.itemStyle={normal:{color:color1}}:e.itemStyle={normal:{color:color2}}}),data2.map((e,a)=>{e.depth=1,e.itemStyle={normal:{color:color2}}}),data3.map((e,a)=>{e.depth=2,e.itemStyle={normal:{color:color3}}});let data=data1.concat(data2,data3);option={tooltip:{trigger:"item",formatter:"{b} :{c}"},series:{type:"sankey",layout:"none",draggable:!1,data,lineStyle:{normal:{color:"#1a1a1a",opacity:"0.1"}},links:[{source:"F14",target:"1",value:1},{source:"F14",target:"2",value:1},{source:"F14",target:"3",value:2},{source:"F14",target:"4",value:2},{source:"F19",target:"5",value:5},{source:"F19",target:"6",value:1},{source:"F19",target:"7",value:5},{source:"F19",target:"8",value:5},{source:"2",target:"A",value:1},{source:"2",target:"B",value:2},{source:"2",target:"C",value:1},{source:"2",target:"D",value:1},{source:"2",target:"E",value:1},{source:"2",target:"F",value:2}]}};
