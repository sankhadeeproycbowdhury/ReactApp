(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(2),o=t.n(r);t(12),t(13);function c(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/about"},e.aboutText)),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Projects"),n.a.createElement("ul",{className:"dropdown-menu"},n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"/"},"Action")),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"/"},"Another action")),n.a.createElement("li",null,n.a.createElement("hr",{className:"dropdown-divider"})),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"/"},"Something else here"))))),n.a.createElement("div",{className:"form-check form-switch mx-3 text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"DarkMode")))))}function s(e){const[a,t]=Object(l.useState)("Enter text here"),r=e=>e.split(" ").filter(e=>""!==e).length;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h3",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{rows:15,className:"form-control",onChange:e=>{t(e.target.value)},id:"myBox",style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},value:a})),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{const l=a.toUpperCase();t(l),e.showAlert("Converted to UpperCase!","success")}},"Convert UpperCase"),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{const l=a.toLocaleLowerCase();t(l),e.showAlert("Converted to LowerCase!","success")}},"Convert LowerCase"),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{t("")}},"Clear Text")),n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h3",null,"Your Text Summery:"),n.a.createElement("p",null,r(a)," Words, ",a.length," Characters"),n.a.createElement("p",null,.008*r(a)," Minutes to Read"),n.a.createElement("h3",null,"Preview"),n.a.createElement("p",null,a.length>0?a:"Enter Something to Preview here")))}c.defaultProps={title:"StarEX",aboutText:"About org."};var m=function(e){return e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},e.alert.message)};var i=function(){const[e,a]=Object(l.useState)("light"),[t,r]=Object(l.useState)(null),o=(e,a)=>{r({message:e,type:a}),setTimeout(()=>{r(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{title:"TextUtils",aboutText:"About TextUtils",mode:e,toggleMode:()=>{"light"===e?(a("dark"),document.body.style.backgroundColor="#042743",o("DarkMode is Enabled","success")):(a("light"),document.body.style.backgroundColor="white",o("LightMode is Enabled","success"))}}),n.a.createElement(m,{alert:t}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(s,{heading:"Enter the Text to be analyzed",showAlert:o,mode:e})))};var d=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:r,getTTFB:o}=a;t(e),l(e),n(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null))),d()},3:function(e,a,t){e.exports=t(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.5ad53ed9.chunk.js.map