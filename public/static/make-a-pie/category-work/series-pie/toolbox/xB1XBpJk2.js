option={toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,title:"数据视图",readOnly:!0,lang:["数据视图","关闭","刷新"],optionToContent:function(r){for(var d=r.series[0].data,t=r.series[0].data,a='<table border="1px" align="center" cellspacing="0" cellpadding="0" style="width:400px;text-align:center;background:#ccccccc"><tbody><tr style="background:#1e90ff"><td width="70px">机构名称</td><td width="70px">标识器与标识钉总和</td></tr>',e=0,n=t.length;e<n;e++)a+="<tr><td>"+t[e].name+"</td><td>"+t[e].value+"</td></tr>";return a+="</tbody></table>",a}}}},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]}]};