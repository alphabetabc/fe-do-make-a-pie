for(var colors=["#1cd389","#668eff","#ffc751","#ff6e73","#8683e6","#9692ff"],lineargroup=[{value:100,name:"目标",oriname:"意向",number:98756},{value:80,name:"方案率",oriname:"方案",number:88756},{value:60,name:"商務率",oriname:"商務",number:78756},{value:40,name:"成交率",oriname:"即將成交",number:68756},{value:20,name:"贏單率",oriname:"贏單",number:58756}],data1=[],data2=[],i=0;i<lineargroup.length;i++){var obj1={value:lineargroup[i].value,num:lineargroup[i].number,name:lineargroup[i].oriname},obj2={value:lineargroup[i].value,name:lineargroup[i].name,itemStyle:{opacity:0}};data1.push(obj1),data2.push(obj2)}var option={color:colors,series:[{top:0,type:"funnel",height:"400",gap:0,minSize:150,left:"20%",width:"60%",label:{show:!0,position:"inside",fontSize:"14",formatter:function(e){var a=e.name+`{aa|}
`+e.data.num;return a},rich:{aa:{padding:[8,0,6,0]}}},data:data1},{top:0,type:"funnel",height:"400",gap:-1,minSize:150,left:"20%",width:"60%",z:2,label:{normal:{color:"#333",position:"right",formatter:function(e){var a="{aa|"+e.name+`}
{bb|`+e.percent+"%}";return a},rich:{aa:{align:"center",color:"#666",fontSize:"12",lineHeight:"30"},bb:{align:"center",color:"#333",fontSize:"22"}}}},labelLine:{show:!1},data:data2}]};
