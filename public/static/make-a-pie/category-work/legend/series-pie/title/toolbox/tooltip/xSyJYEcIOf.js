var dataStyle={normal:{label:{show:!1},labelLine:{show:!1}}},placeHolderStyle={normal:{color:"rgba(0,0,0,0)",label:{show:!1},labelLine:{show:!1}},emphasis:{color:"rgba(0,0,0,0)"}},data=[{value:100,name:"中亚"},{value:80,name:"东盟"},{value:75,name:"南亚"},{value:71.4,name:"独联体"},{value:64.7,name:"中东"},{value:57.1,name:"其他国家"},{value:50,name:"中东欧"}],init_num=5,new_data=[],data_name=[];for(var m in data){var arr=null;arr={name:data[m].name,type:"pie",clockWise:!1,radius:[init_num,init_num=init_num+25],center:["50%","50%"],itemStyle:dataStyle,textStyle:{fontFamily:"微软雅黑",fontSize:"12px",color:"#fff",fontWeight:"normal"},data:[{value:data[m].value,name:data[m].name+" "+data[m].value+"%"},{value:100-data[m].value,name:"invisible",itemStyle:placeHolderStyle,textStyle:{fontFamily:"微软雅黑",fontSize:"12px",color:"#fff",fontWeight:"normal"}}]},new_data.push(arr),data_name.unshift(data[m].name+" "+data[m].value+"%")}option={backgroundColor:"#000",title:{text:"沿线地区及组织“一带一路”文件签署率",subtext:"纯属虚构",left:"50%",top:"50",textAlign:"center",textStyle:{color:"#fff",fontWeight:"normal",fontFamily:"宋体"}},tooltip:{show:!0,formatter:"{a} <br/>{b} : {c} ({d}%)",textStyle:{color:"#fff",fontWeight:"normal",fontFamily:"宋体"}},legend:{orient:"vertical",left:"10%",top:120,itemGap:12,data:data_name,textStyle:{fontFamily:"微软雅黑",fontSize:"12px",color:"#fff",fontWeight:"normal"}},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}},textStyle:{fontFamily:"微软雅黑",fontSize:"12px",color:"#fff",fontWeight:"normal"}},series:new_data};
