app.title="环形图";var optionColor=["#3AA1FF","#36CBCB","#4ECB73","#FBD437","#F2637B"];function getData(e){return[{value:335,name:"Ailiaili",itemStyle:{color:e}},{value:310,name:"Bilibili",itemStyle:{color:e}},{value:234,name:"Cilicili",itemStyle:{color:e}},{value:135,name:"Dilidili",itemStyle:{color:e}},{value:1548,name:"Eilieili",itemStyle:{color:e}}]}option={color:optionColor,backgroundColor:"#fff",tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:getData().map(e=>e.name)},series:[{name:"外圈",type:"pie",radius:["50%","70%"],label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},itemStyle:{normal:{borderWidth:5,borderColor:"#fff"}},labelLine:{normal:{show:!1}},data:getData().map(e=>({value:e.value,name:e.name}))},{name:"内圈",type:"pie",radius:["48%","49%"],hoverAnimation:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:getData("transparent")}]},myChart.setOption(option),myChart.on("mouseover",function(e){option.series[1].data[e.dataIndex].itemStyle.color=optionColor[e.dataIndex],myChart.setOption(option)}),myChart.on("mouseout",function(e){option.series[1].data=getData("transparent"),myChart.setOption(option)});
