option={title:[{text:"总",subtext:"2019",left:"24.5%",top:"41%",textAlign:"center",textStyle:{fontSize:14},subtextStyle:{fontSize:22}},{text:"总",subtext:"2018",left:"74.5%",top:"41%",textAlign:"center",textStyle:{fontSize:14},subtextStyle:{fontSize:22}}],tooltip:{trigger:"item",formatter:e=>`${e.name.replace("_legend1","").replace("_legend2","")} : ${(e.value/1e8).toFixed(2)}亿 (${e.percent}%)`},legend:[{left:"13%",bottom:"10%",height:"10%",orient:"horizontal",width:"30%",data:["建筑业1_legend1","建筑业2_legend1","建筑业3_legend1","建筑业4_legend1"],formatter:e=>e.replace("_legend1","")},{right:"13%",bottom:"10%",height:"10%",orient:"horizontal",width:"30%",data:["建筑业1_legend2","建筑业2_legend2","建筑业3_legend2","建筑业4_legend2"],formatter:e=>e.replace("_legend2","")}],series:[{type:"pie",radius:[65,100],center:["25%","45%"],data:[{value:110000000011e-2,name:"建筑业1_legend1"},{value:220000000022e-2,name:"建筑业2_legend1"},{value:330000000033e-2,name:"建筑业3_legend1"},{value:440000000044e-2,name:"建筑业4_legend1"}],label:{formatter:e=>`${e.name.replace("_legend1","")}：${e.percent}%`}},{type:"pie",radius:[65,100],center:["75%","45%"],data:[{value:550000000055e-2,name:"建筑业1_legend2"},{value:660000000066e-2,name:"建筑业2_legend2"},{value:770000000077e-2,name:"建筑业3_legend2"},{value:880000000088e-2,name:"建筑业4_legend2"}],label:{formatter:e=>`${e.name.replace("_legend2","")}：${e.percent}%`}}]};