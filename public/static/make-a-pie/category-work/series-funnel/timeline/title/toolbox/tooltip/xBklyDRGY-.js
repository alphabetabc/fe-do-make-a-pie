function varry(e,a,t){var l=[{value:e,name:""},{value:a,name:""},{value:t,name:""}];return l}function seriesvarry(e){var a=[{data:e},{data:e},{data:e},{data:e}];return a}var seriesd1=varry(3,6,9),seriesdata1=seriesvarry(seriesd1),seriesd2=varry(1,2,9),seriesdata2=seriesvarry(seriesd2),seriesd3=varry(7,8,9),seriesdata3=seriesvarry(seriesd3);option={baseOption:{color:["#5B8DFF","#41D5F2","#0BA1FC"],timeline:{axisType:"category",playInterval:"1000",autoPlay:"true",data:["正方形?","四角星?","八边形?"]},title:{text:"",subtext:"",left:"left",top:"10"},tooltip:{show:!1},gap:0,toolbox:{orient:"vertical",top:"center",feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},series:[{type:"funnel",width:"30%",height:"40%",left:"50%",top:"40%",sort:"descending",funnelAlign:"left",label:{normal:{show:!1}},labelLine:{normal:{show:!1}}},{type:"funnel",width:"30%",height:"40%",left:"20%",top:"40%",sort:"descending",funnelAlign:"right",label:{normal:{show:!1}},labelLine:{normal:{show:!1}}},{type:"funnel",width:"30%",height:"40%",left:"20%",top:"0%",sort:"ascending",funnelAlign:"right",label:{normal:{show:!1}},labelLine:{normal:{show:!1}}},{type:"funnel",width:"30%",height:"40%",left:"50%",top:"0%",sort:"ascending",funnelAlign:"left",label:{normal:{show:!1}},labelLine:{normal:{show:!1}}}]},options:[{series:seriesdata1},{series:seriesdata2},{series:seriesdata3}]};
