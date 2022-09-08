var months=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dwArr=[23,27,28,30,34,36,39,41,45,46,56,60],zgArr=[1500,1700,1750,1800,1850,1900,1910,1941,1980,2e3,2100,2200],jeArr=[3500,3600,4200,4800,5500,6500,4900,3500,5400,5500,6500,7e3],colors=["#FD2446","#248EFD","#C916F2","#6669B1"],option={color:colors,title:{text:"ECharts 入门示例"},tooltip:{},legend:{data:["销量"]},xAxis:{data:months},yAxis:{},toolbox:{show:!0,orient:"horizontal",showTitle:!0,feature:{magicType:{type:["line","bar"]},dataView:{show:!0,title:"某地区单位人数金额统计",readOnly:!1,optionToContent:function(i){var n="序号",s="月份",d=i.toolbox[0].feature.dataView,e='<div style="position:absolute;top: 5px;left: 0px;right: 0px;line-height: 1.4em;text-align:center;font-size:14px;">'+d.title+"</div>";return e+=getTable(i,n,s),e}},saveAsImage:{type:"png",show:!0,title:"保存为图片"},restore:{show:!0}}},series:[{name:"单位数",type:"bar",barMaxWidth:"20%",label:{normal:{show:!0,position:"top"}},data:dwArr},{name:"职工数",type:"bar",barMaxWidth:"20%",label:{normal:{show:!0,position:"top"}},data:zgArr},{name:"平均工资",type:"bar",barMaxWidth:"20%",label:{normal:{show:!0,position:"top"}},data:jeArr}]};function getTable(i,n,s){for(var d=i.xAxis[0].data,e=i.series,h=0,o=new Array,t=0;t<e.length;t++)o[t]=0;for(var r='<div><table class="bordered"><thead><tr><th>'+n+"</th><th>"+s+"</th>",t=0;t<e.length;t++)r+="<th>"+e[t].name+"</th>";r+="</tr></thead><tbody>";for(var t=0,v=d.length;t<v;t++){h+=1;for(var a=0;a<e.length;a++)e[a].data[t]?o[a]+=Number(e[a].data[t]):o[a]+=Number(0);r+="<tr><td>"+h+"</td><td>"+d[t]+"</td>";for(var l=0;l<e.length;l++)e[l].data[t]?r+="<td>"+e[l].data[t]+"</td>":r+="<td>"+0+"</td>";r+="</tr>"}r+="<tr><td>"+(h+1)+"</td><td>合计</td>";for(var a=0;a<e.length;a++)String(o[a]).indexOf(".")>-1?r+="<td>"+Number(o[a]).toFixed(2)+"</td>":r+="<td>"+Number(o[a])+"</td>";return r+="</tr></tbody></table></div>",r}
