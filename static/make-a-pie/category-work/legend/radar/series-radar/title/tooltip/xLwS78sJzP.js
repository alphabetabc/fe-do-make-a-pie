option={title:{text:"基础雷达图"},tooltip:{},legend:{data:["预算分配（Allocated Budget）","实际开销（Actual Spending）"]},radar:{name:{formatter:function(a,e){return console.log(e),e.name=="销售（sales）"?"{green|"+e.name+"}":"{yellow|"+e.name+"}"},lineHeight:20,rich:{yellow:{padding:[10,10],backgroundColor:"#ff5722",color:"#FFDC00",fontSize:14,align:"center"},green:{padding:[10,10],backgroundColor:"#449933",fontSize:14,align:"center"}}},indicator:[{name:"销售（sales）",max:6500,color:"#ab9175"},{name:"管理（Administration）",max:16e3},{name:"信息技术（Information Techology）",max:3e4},{name:"客服（Customer Support）",max:38e3},{name:"研发（Development）",max:52e3},{name:"市场（Marketing）",max:25e3}]},series:[{name:"预算 vs 开销（Budget vs spending）",type:"radar",data:[{value:[4300,1e4,28e3,35e3,5e4,19e3],name:"预算分配（Allocated Budget）"},{value:[5e3,14e3,28e3,31e3,42e3,21e3],name:"实际开销（Actual Spending）"}]}]};
