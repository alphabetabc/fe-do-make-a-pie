for(var cellphoneBrand=["水工作业","助航设施","水上活动","碍航物","航道变化","其他"],cellphoneBrand1=["中文"],cellphoneBrand2=["英文"],Chinese=[21,8,9,6,7,9],English=[3,3,2,5,1,0],data1=[],i=0;i<6;++i)data1.push({name:cellphoneBrand[i],label:{position:"inside",rotate:"tangential"},children:[{name:cellphoneBrand1[0],value:Chinese[i],label:{position:"inside",rotate:"tangential"}},{name:cellphoneBrand2[0],value:English[i],label:{position:"intside",rotate:"tangential"}}]});option={width:500,height:500,backgroundColor:"#0E2A43",color:["#4d59e6","#FF66CC","#FFCC33","#4eb2d4","#0472d9","#5c63c5","#C7E907","#3c13a8","#42947f"],title:{text:"通告发布情况统计",link:"",left:"40%",top:"10%",textStyle:{color:"#dddddd"}},tooltip:{trigger:"item",formatter:function(e,t,r){return e.name+" : "+e.data.value}},legend:{bottom:"10%",x:"center",textStyle:{color:"#fff"},data:["水工作业","助航设施","水上活动","碍航物","航道变化","其他"]},series:[{type:"sunburst",nodeClick:!1,levels:[{},{r0:"23%",r:"44%",label:{},itemStyle:{borderWidth:1,borderColor:"#42ced1"}},{r0:"50%",r:"60%",label:{},itemStyle:{borderWidth:1,borderColor:"#42b0d1",opacity:.8}},{r0:"60%",r:"66%",itemStyle:{borderWidth:1,borderColor:"#22bfb1",opacity:.6}}],data:data1}]};