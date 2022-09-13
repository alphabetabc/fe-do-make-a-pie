option={legend:{data:["3-11岁任务数","3-11岁全程接种量","60岁任务数","60岁全程接种量","80岁任务数","80岁全程接种量","完成率"]},xAxis:{type:"category",data:["街道1","街道2","街道3","街道4","街道5","街道6","街道7"]},yAxis:[{type:"value"},{type:"value",name:"%",nameTextStyle:{color:"#ccc",padding:[0,0,10,-30]},splitNumber:5,splitLine:{show:!0,lineStyle:{type:"dashed",width:1,color:["#566471","#566471"]}},axisLabel:{show:!0,textStyle:{fontSize:12}}}],tooltip:{trigger:"axis",axisPointer:{type:"shadow"},textStyle:{color:"#fff",align:"left",fontSize:14},axisLine:{show:!0,lineStyle:{color:"#000"}},backgroundColor:"rgba(0,0,0,0.8)",formatter:function(t){console.log(t);let a=t[0].name+"<br />";return console.log(a),t.forEach(e=>{console.log(e.seriesName),e.value&&(e.seriesName.indexOf("岁全程接种量")!=-1?a+=`<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background-color: ${e.color}
                                    "></span>
                                         ${e.seriesName}
                                         :
                                       ${e.value}人  <br/>
                                         &nbsp; &nbsp;  全程完成率
                                       : ${e.value/100}%
                                        <br/><br/>`:e.seriesName.indexOf("岁任务数")!=-1?a+=`<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background-color: ${e.color}
                                    "></span>
                                         ${e.seriesName}
                                         :
                                       ${e.value}人
                                        <br/>`:a+=`<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background-color: ${e.color}
                                    "></span>
                                        ${e.seriesName}
                                        :
                                      ${e.value}%
                                        <br/>`)}),a}},series:[{name:"3-11岁任务数",data:[150,230,224,218,135,147,260],stack:"BB",type:"bar"},{name:"3-11岁全程接种量",data:[150,230,224,218,135,147,260],stack:"BB",type:"bar"},{name:"60岁任务数",data:[150,230,224,218,135,147,260],stack:"AA",type:"bar"},{name:"60岁全程接种量",data:[880,30,124,118,35,47,160],stack:"AA",type:"bar"},{name:"80岁任务数",data:[660,30,124,118,35,47,160],stack:"Ad",type:"bar"},{name:"80岁全程接种量",data:[880,30,124,118,35,47,160],stack:"Ad",type:"bar"},{name:"完成率",data:[50,130,124,18,35,47,160],yAxisIndex:1,type:"line",markLine:{symbol:"none",itemStyle:{normal:{lineStyle:{type:"dotted"}}},data:[{type:"average",name:"Avg%"}]},itemStyle:{normal:{lineStyle:{width:2,type:"solid"}}}}]};
