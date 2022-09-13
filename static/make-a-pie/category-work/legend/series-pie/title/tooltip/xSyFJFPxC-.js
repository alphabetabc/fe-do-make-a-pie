option={title:{text:"告警类型统计"},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"horizontal",x:"right",y:"30",data:["CDN告警","EPG性能告警","网络质量告警","视频质量告警","家庭网络问题"]},series:[{name:"访问来源",type:"pie",radius:["30%","45%"],avoidLabelOverlap:!0,roseType:!1,label:{normal:{show:!0,position:"outside",formatter:`{b}
{d}% 
{c}个`},emphasis:{show:!0,textStyle:{fontWeight:"bold"}}},labelLine:{normal:{show:!0}},data:[{value:335,name:"CDN告警"},{value:310,name:"EPG性能告警"},{value:234,name:"网络质量告警"},{value:135,name:"视频质量告警"},{value:1548,name:"家庭网络问题"}]}]};
