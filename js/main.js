(()=>{"use strict";const e=[{label:"Clash",value:"clash"},{label:"Clash新参数",value:"clash&new_name=true"},{label:"ClashR",value:"clashr"},{label:"ClashR新参数",value:"clashr&new_name=true"},{label:"Surge2",value:"surge&ver=2"},{label:"Surge3",value:"surge&ver=3"},{label:"Surge4",value:"surge&ver=4"},{label:"Quantumult",value:"quan"},{label:"QuantumultX",value:"quanx"},{label:"Surfboard",value:"surfboard"},{label:"V2Ray",value:"v2ray"},{label:"SS",value:"ss"},{label:"SSR",value:"ssr"},{label:"SSD",value:"ssd"},{label:"SSAndroid",value:"sssub"},{label:"Loon",value:"loon"}],l=[{label:"localhost:25500(自建本地服务-推荐)",value:"http://localhost:25500/sub?"},{label:"api.sy2233.top(自建-云端)",value:"https://api.sy2233.top/sub?"},{label:"sub.id9.cc(品云提供-稳定)",value:"https://sub.id9.cc/sub?"},{label:"sub.xeton.dev(subconverter作者提供-稳定)",value:"https://sub.xeton.dev/sub?"},{label:"api.dler.io(lhie1提供-稳定)",value:"https://api.dler.io/sub?"},{label:"sub.maoxiongnet.com(猫熊提供-稳定)",value:"https://sub.maoxiongnet.com/sub?"}],n=[{label:"ACL4SSR",options:[{label:"ACL4SSR_Online 默认版 分组比较全(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"},{label:"ACL4SSR_Online_AdblockPlus 更多去广告(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"},{label:"ACL4SSR_Online_MultiCountry 多国分组(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_MultiCountry.ini"},{label:"ACL4SSR_Online_NoAuto 无自动测速(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"},{label:"ACL4SSR_Online_NoReject 无广告拦截规则(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"},{label:"ACL4SSR_Online_Mini 精简版(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"},{label:"ACL4SSR_Online_Mini_AdblockPlus.ini 精简版 更多去广告(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"},{label:"ACL4SSR_Online_Mini_NoAuto.ini 精简版 不带自动测速(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"},{label:"ACL4SSR_Online_Mini_Fallback.ini 精简版 带故障转移(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"},{label:"ACL4SSR_Online_Mini_MultiMode.ini 精简版 自动测速、故障转移、负载均衡(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"},{label:"ACL4SSR_Online_Mini_MultiCountry.ini 精简版 带港美日国家(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini"},{label:"ACL4SSR_Online_Full 全分组 重度用户使用(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"},{label:"ACL4SSR_Online_Full_MultiMode.ini 全分组 多模式 重度用户使用(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"},{label:"ACL4SSR_Online_Full_NoAuto.ini 全分组 无自动测速 重度用户使用(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"},{label:"ACL4SSR_Online_Full_AdblockPlus 全分组 重度用户使用 更多去广告(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"},{label:"ACL4SSR_Online_Full_Netflix 全分组 重度用户使用 奈飞全量(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"},{label:"ACL4SSR_Online_Full_Google 全分组 重度用户使用 谷歌细分(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Google.ini"},{label:"ACL4SSR 本地 默认版 分组比较全",value:"config/ACL4SSR.ini"},{label:"ACL4SSR_Mini 本地 精简版",value:"config/ACL4SSR_Mini.ini"},{label:"ACL4SSR_Mini_NoAuto.ini 本地 精简版+无自动测速",value:"config/ACL4SSR_Mini_NoAuto.ini"},{label:"ACL4SSR_Mini_Fallback.ini 本地 精简版+fallback",value:"config/ACL4SSR_Mini_Fallback.ini"},{label:"ACL4SSR_BackCN 本地 回国",value:"config/ACL4SSR_BackCN.ini"},{label:"ACL4SSR_NoApple 本地 无苹果分流",value:"config/ACL4SSR_NoApple.ini"},{label:"ACL4SSR_NoAuto 本地 无自动测速 ",value:"config/ACL4SSR_NoAuto.ini"},{label:"ACL4SSR_NoAuto_NoApple 本地 无自动测速&无苹果分流",value:"config/ACL4SSR_NoAuto_NoApple.ini"},{label:"ACL4SSR_NoMicrosoft 本地 无微软分流",value:"config/ACL4SSR_NoMicrosoft.ini"},{label:"ACL4SSR_WithGFW 本地 GFW列表",value:"config/ACL4SSR_WithGFW.ini"}]},{label:"universal",options:[{label:"No-Urltest",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/no-urltest.ini"},{label:"Urltest",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/urltest.ini"}]},{label:"customized",options:[{label:"Nirvana",value:"https://raw.githubusercontent.com/Mazetsz/ACL4SSR/master/Clash/config/V2rayPro.ini"},{label:"V2Pro",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/V2Pro.ini"},{label:"史迪仔-自动测速",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Stitch.ini"},{label:"史迪仔-负载均衡",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Stitch-Balance.ini"},{label:"Maying",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/maying.ini"},{label:"Ytoo",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ytoo.ini"},{label:"FlowerCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/flowercloud.ini"},{label:"NyanCAT",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nyancat.ini"},{label:"Nexitally",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nexitally.ini"},{label:"SoCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/socloud.ini"},{label:"ARK",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ark.ini"},{label:"ssrCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ssrcloud.ini"}]},{label:"Special",options:[{label:"NeteaseUnblock(仅规则，No-Urltest)",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini"},{label:"Basic(仅GEOIP CN + Final)",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/basic.ini"}]}];let i="";function t(e){const l=e.backend;let n=e.url;n=encodeURIComponent(n.replace(/(\n|\r|\n\r)/g,"|"));let t=`${l}&url=${n}&target=${e.target}`;var a;e.config&&(t+=`&config=${encodeURIComponent(e.config)}`),e.include&&(t+=`&include=${encodeURIComponent(e.include)}`),e.exclude&&(t+=`&wxclude=${encodeURIComponent(e.exclude)}`),e.name&&(t+=`&filename=${encodeURIComponent(e.name)}`),t+=`&emoji=${e.emoji||"false"}&append_type=${e.append_type||"false"}&append_info=${e.append_info||"false"}&scv=${e.scv||"false"}&udp=${e.udp||"false"}&list=${e.list||"false"}&sort=${e.sort||"false"}&fdn=${e.fdn||"false"}&insert=${e.insert||"false"}`,i=t,$("#result").val(i),a=i,navigator.clipboard.writeText(a).then((()=>{layui.layer.msg("复制成功~",{icon:1})}),(()=>{layui.layer.msg("复制失败, 请手动选择复制",{icon:2})}))}layui.use(["form"],(()=>{const a=layui.form;let o="";e.forEach((e=>{o+=`<option value="${e.value}">${e.label}</option>`})),$("#targetSelecter").append(o),o="",n.forEach((e=>{let l="";e.options.forEach((e=>{l+=`<option value="${e.value}">${e.label}</option>`})),o+=`<optgroup label="${e.label}">${l}</optgroup>`})),$("#configSelecter").append(o),o="",l.forEach((e=>{o+=`<option value="${e.value}">${e.label}</option>`})),$("#backendSelecter").append(o),a.render("select","optionsForm"),a.on("submit(generate)",(e=>{t(e.field)})),$("#importToClash").on("click",(()=>{if(!i)return layui.layer.msg("未生成新的订阅链接",{icon:2});const e=`clash://install-config?url=${encodeURIComponent(i)}`;window.open(e)}))}))})();