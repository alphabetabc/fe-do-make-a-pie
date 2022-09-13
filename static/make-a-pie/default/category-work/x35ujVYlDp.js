var url="/asset/get/s/data-1633576469660-moV7oBMfi.xlsx",historyData={RDC:[{name:"雀巢东莞仓_广东省东莞市茶山镇南社管理区南塘路顺联雀巢仓库、 ",value:["113.891100","23.069608"]}],PLANT:[{name:"银鹭华中基地_湖北省汉川市经济开发区北桥工业园平章大道6号",value:["113.855130","30.668830"]},{name:"银鹭华南基地_福建省厦门市翔安区厦门银鹭高科技园区",value:["118.248034","24.618544"]}],FDC:[{name:"菜鸟长沙仓_长沙市岳麓区金桥路与金南路交汇处西北角丰树长沙物流园2期5栋2层",value:["112.847458","28.240797"]},{name:"菜鸟东莞仓_东莞市石排镇安博物流园",value:["113.987607","23.087460"]},{name:"菜鸟佛山仓_广东省佛山市顺德区陈村镇国通大道西4号仓库8号2楼",value:["113.196227","22.997675"]}],HMJS:[{name:"盒马集市_湖南省长沙市雨花区东山路与牛角冲路交汇处宝湾物流园一层",value:["113.029763","28.147310"]},{name:"盒马_广东省东莞市新兴路一巷20号增益供应链仓储物流(东莞)有限公司",value:["113.678908","22.784200"]},{name:"盒马_广州市佛山三水乐平万纬物流园2号库（中心仓内）",value:["113.084459","23.339947"]}],MTYX:[{name:"美团优选_长沙市开福区湘江北路与兴旺路交界处，（普洛斯斜对面，橙色房子",value:["112.927590","28.333358"]},{name:"美团_广东省东莞市常平镇环常北路四纵路1号常平汽车站，张锦涛：13076718017",value:["114.022741","22.993038"]},{name:"美团_广州市南沙区榄核镇民生工业区蔡新路349号洛德加印刷厂，邵中奇，13652928660",value:["113.338112","22.833173"]},{name:"美团_佛山市南海区丹灶镇西城村普洛斯丹灶物流园A4栋",value:["112.893994","23.029095"]},{name:"美团_广东省惠州市惠阳区秋长镇秋宝路新丰家具厂2号门仓库，陈林，18682413980",value:["114.409070","22.792365"]},{name:"美团_广东省汕头市濠江区柏亚临港物流产业园C1，蔡佳慧，13790847775",value:["116.726973","23.286079"]},{name:"美团_湛江市坡头区官渡镇石门村委会东岸村华思园产业园内，谢崇拍，13265166568",value:["110.427592","21.375944"]},{name:"美团_广东省潮州市潮安区东山湖特色产业基地中兴大道莱芙家纺生产基地，左明亮，18620141135",value:["116.593172","23.492102"]}],DDMC:[{name:"多多买菜_长沙万纬长沙雨花物流园1-2-02",value:["112.938814","28.228209"]},{name:"多多_广东东莞市大岭山镇大岭山镇连平畔山北街7号 恒路物流",value:["113.802957","22.928483"]},{name:"多多_广东省佛山市三水区乐平镇大岗村委桥头村厂房",value:["112.940956","23.272955"]},{name:"多多_广东省佛山市顺德区盛龙路佛山安得物流园",value:["113.090976","22.919368"]},{name:"多多_惠州市惠阳区沙田镇花塘村第一产业园",value:["114.574907","22.882396"]},{name:"多多买菜_广东省茂名市电白区粤西农批市场东门对面胜大物流园",value:["110.980912","21.588065"]},{name:"多多_广东汕头市金平区鮀江街道大学路66号通用物流园新四期第三栋（多多买菜汕头仓）",value:["116.664894","23.386356"]}],SHT:[{name:"十荟团_湖南省长沙市开福区冯蔡东路与开福大道交叉口西侧 万纬长沙开福园区1号仓库",value:["112.991839","28.284956"]},{name:"十荟团_广东省惠州市博罗县宇培惠州物流园十荟团",value:["114.289496","23.172899"]}],XSYX:[{name:"兴盛优选_湖南省长沙市望城区普瑞大道1888号高星物流园",value:["112.834790","28.306634"]},{name:"兴盛优选_番禺市化龙",value:["113.355504","22.952572"]},{name:"兴盛优选_揭阳市榕城",value:["116.372831","23.549993"]}],JXPP:[{name:"京喜拼拼_广东省东莞市沙田镇穗丰年路3号第一产业虎门港物流园",value:["113.619839","22.851724"]},{name:"京喜拼拼_广东省广州市创展大道11号广州君建汽车零部件产业园-6号库-京喜拼拼广州中心仓",value:["113.264434","23.129162"]},{name:"京喜拼拼_广东省揭阳市揭东区云路镇云宝大道易商物流园区二期二层C5,C7,C8",value:["116.460196","23.580047"]}]};function GetLegendData(l,a,n){return new Promise(function(t,c){let r=new XMLHttpRequest;r.open("GET",l,!0),r.responseType="arraybuffer",r.onload=async function(v){let f=new Uint8Array(r.response),m=XLSX.read(f,{type:"array"}),p=m.Sheets[a],y=XLSX.utils.sheet_to_json(p),u={};for(let e of y){if(e.type===void 0||e.address===void 0||e.name===void 0)continue;let s=GetLocationInHistory(e.name,e.type);if(s!==void 0){u[e.type]===void 0&&(u[e.type]=[]),u[e.type].push(s);continue}let i=await GetLocation(e.address);if(Array.isArray(i.geocodes)&&i.geocodes.length>0){u[e.type]===void 0&&(u[e.type]=[]),historyData[e.type]===void 0&&(historyData[e.type]=[]);let o={};o.name=e.name,o.value=i.geocodes[0].location.split(","),u[e.type].push(o),historyData[e.type].push(o)}}let d={};pathSheet=m.Sheets[n];let _=XLSX.utils.sheet_to_json(pathSheet);for(let e of _){if(e.name===void 0||e.name_1===void 0||e.path_type===void 0)continue;let s=GetLocationInHistory(e.name),i=GetLocationInHistory(e.name_1);if(s!==void 0&&i!==void 0){d[e.path_type]===void 0&&(d[e.path_type]=[]);let o={};o.coords=[],o.coords.push(s.value),o.coords.push(i.value),d[e.path_type].push(o)}}t([u,d])},r.send()})}function GetLocation(l){return new Promise(function(a,n){$.getJSON("https://restapi.amap.com/v3/geocode/geo",{address:l,key:"a4adb59a0bcb93ca8b65973c1dad4ca3"},function(t){a(t)})})}function GetLocationInHistory(l,a){if(a===void 0){for(key in historyData)for(let n of historyData[key])if(n.name==l)return n}else if(historyData[a]!==void 0){for(let n of historyData[a])if(n.name==l)return n}}GetLegendData(url,"upload to python","path").then(l=>{let[a,n]=l;console.log(`var historyData = ${JSON.stringify(historyData)}`),console.log(`

`);let t="";for(key in a)t+=`var ${key}_ARR = ${JSON.stringify(a[key])}
`;t+=`
`;for(key in n)t+=`var ${key}_PATH = ${JSON.stringify(n[key])}
`;console.log(t),console.log(`

`),t="";for(key in a)t+=`{
      name: "${key}",
      type: 'scatter',
      coordinateSystem: 'geo',
      data: ${key}_ARR,
      symbol: ${key}_icon,
      symbolSize: function (val) {
          return 20;
      },
      label: {
          normal: {
              show: false,
              formatter: function (params) {
                  // console.log(params);
                  return params.name;
              },
              position: 'right',
              color: '#69A4D9',
              fontSize: '8',
          },
          emphasis: {
              show: false,
          },
      },
      itemStyle: {
          normal: {
              color: '#4bbbb2',
              borderWidth: 2,
              borderColor: '#b4dccd',
          },
      },
  },`;console.log(t)});
