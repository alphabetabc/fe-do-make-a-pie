var datas=[{name:"男性",value:"180"},{name:"女性",value:"260"}],legendData=datas.map(function(e){return e.name});option={backgroundColor:"#0e4b86",color:["#0098ec","#ff5252"],title:{text:"评价次数性别分部",top:"46%",right:"2%",textStyle:{fontSize:16,color:"#fff"}},tooltip:{trigger:"item",formatter:function(e){return e.marker+e.name+"："+e.value+" ( "+e.percent+"% )"}},legend:{orient:"horizontal",top:"50%",right:"3%",itemWidth:15,itemHeight:15,data:legendData,itemGap:20,textStyle:{fontSize:14,color:"#fff"}},series:[{name:"评价次数性别分部",type:"pie",clockwise:!1,radius:"60%",center:["50%","50%"],data:datas,label:{normal:{position:"inner",fontSize:20,color:"#fff",formatter:`{c}
{d}%`},emphasis:{show:!0,textStyle:{fontSize:20,fontWeight:"bold"}}},labelLine:{normal:{}},itemStyle:{}}]};