(()=>{var t={deaths:["death","life","sugar","ur mom","ur dad","rusty ford fiesta","capitalism","queer","pasta","carbs","facebook","cheese","plastic","catgirl","barbie","frequent","pesticide","steve"],destroyers:["destroyer","hugger","kisser","puncher","crusher","consumer","frequenter","taker","licker","miner","crafter","digger","investigator","perpetrator"],worlds:["worlds","women","men","cuties","metabolisms","will to live","ur mom","ur dad","hope","microwave meals","cheese","faces","trees","capitalism","plastic","blocks","crafts","mines","holes","crimes","dance"],lewd:{deaths:["twink","cock","tentacle dildo"],destroyers:["fucker","fister"],worlds:["asses","cocks","twinks","drugs","brothels"]}};var r=!1,l=!1,s=function(e){return e[Math.floor(Math.random()*e.length)]};function c(e){document.getElementById("answer").textContent=e}var w="",u="",f="";function m(){let e=t.deaths,o=t.destroyers,n=t.worlds;l?(e=t.lewd.deaths,o=t.lewd.destroyers,n=t.lewd.worlds):r&&(e=t.deaths.concat(t.lewd.deaths),o=t.destroyers.concat(t.lewd.destroyers),n=t.worlds.concat(t.lewd.worlds));let d=s(e);for(;d===w;)d=s(e);w=d;let a=s(o);for(;a===u;)a=s(o);u=a;let i=s(n);for(;i===f;)i=s(n);return f=i,"I am become ".concat(d,", ").concat(a," of ").concat(i)}function h(e){e=encodeURIComponent(e);let o=window.prompt("Enter your Mastodon domain","mastodon.social");if(o===""||o===null)return;let n="https://".concat(o,"/share?text=").concat(e);window.open(n,"_blank")}window.addEventListener("load",function(){document.getElementById("lewd-toggle").addEventListener("change",()=>{r=!r,c(m())}),document.getElementById("lewd-only-toggle").addEventListener("change",()=>{l=!l,l&&(r=!0,document.getElementById("lewd-toggle").checked=!0),c(m())}),this.document.getElementById("share").addEventListener("click",()=>{let e='"'.concat(document.getElementById("answer").textContent,'"\n\nhttps://childishgiant.github.io/iambecome');h(e)}),document.getElementById("answer").addEventListener("click",()=>{c(m())}),document.getElementById("lewd-toggle").checked=r,document.getElementById("lewd-only-toggle").checked=l,c(m())});})();
//# sourceMappingURL=index.js.map
