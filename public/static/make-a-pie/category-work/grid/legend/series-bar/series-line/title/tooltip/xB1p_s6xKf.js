var colors=["#AEEEEE","#53868B"],xData=["区局","南宁市局","柳州市局","桂林市局","梧州市局","北海市局","防城港市局","钦州市局","贵港市局","玉林市局","百色市局","贺州市局","河池市局","来宾市局","崇左市局"];option={title:{text:"人力投入情况",textStyle:{fontSize:"15"}},backgroundColor:"#fff",tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},legend:{top:30,left:30,textStyle:{color:"#000000"},data:["出动检查人次","检查企业次数"]},grid:{top:55,bottom:"50%",right:"50%"},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"#000"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0,rotate:40,textStyle:{fontSize:10,color:"#000"},formatter:function(e){var t="",a=e.length,o=5,i=Math.ceil(a/o);if(a>o){var l="";l=e.substring(0,4),t=l+"..."}else t=e;return t}},data:xData}],yAxis:[{type:"value",name:"",min:0,max:1200,position:"left",axisLine:{lineStyle:{color:"#000"}},axisLabel:{formatter:"{value} ",textStyle:{fontSize:10}}}],series:[{name:"出动检查人次",type:"bar",color:colors[0],barWidth:10,data:[756,627,998,797,978,947,717,993,620,845,855,741,738,864,952]},{name:"检查企业次数",color:colors[1],type:"line",itemStyle:{normal:{lineStyle:{width:3},opacity:.4}},data:[502,798,658,594,501,793,569,671,678,578,555,601,765,791,707]}]};