var classData=[{name:"1班",value:"100"},{name:"2班",value:"60"},{name:"3班",value:"80"},{name:"4班",value:"130"},{name:"5班",value:"45"},{name:"6班",value:"190"},{name:"7班",value:"210"},{name:"8班",value:"300"},{name:"9班",value:"110"},{name:"10班",value:"99"}],legendData=classData.map(function(e){return e.name});option={title:{text:"评价次数班级分布",top:"30%",right:"1%",textStyle:{fontSize:16,color:"#333"}},tooltip:{trigger:"item",formatter:function(e){return e.marker+e.name+"<br/>"+e.value+" ("+e.percent+"%)"}},legend:{type:"scroll",orient:"vertical",top:"35%",right:"5%",itemWidth:14,itemHeight:14,height:260,data:legendData,itemGap:15,textStyle:{fontSize:14,color:"#333"},pageButtonItemGap:10,pageButtonGap:10,pageIconInactiveColor:"orange",pageIconColor:"red",pageIconSize:[15,30],pageTextStyle:{color:"#333",fontSize:16}},series:[{name:"",type:"pie",center:["40%","50%"],radius:["50%","80%"],label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"},formatter:function(e){return e.name+`
`+e.value+" ("+e.percent+"%)"}}},labelLine:{normal:{show:!1}},data:classData}]};
