option={toolbox:{feature:{dataView:{show:!0,readOnly:!1,optionToContent:function(r){console.log(e);for(var e=r.xAxis[0].data,o=r.series,a='<table class="box" style="width:100%;text-align:center"><tbody><tr><td>时间</td><td>'+o[0].name+"</td></tr>",t=0,s=e.length;t<s;t++)a+="<tr><td>"+e[t]+"</td><td>"+o[0].data[t]+"</td></tr>";return a+="</tbody></table>",a}},magicType:{show:!0,type:["line","bar"]},saveAsImage:{show:!0},restore:{show:!0}}},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"标题1",data:[120,200,150,80,70,110,130],type:"bar"}]};
