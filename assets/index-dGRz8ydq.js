(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const R="modulepreload",J=function(t){return"/todo/"+t},I={},W=function(n,i,d){let e=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));e=Promise.all(i.map(r=>{if(r=J(r),r in I)return;I[r]=!0;const g=r.endsWith(".css"),u=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${u}`))return;const o=document.createElement("link");if(o.rel=g?"stylesheet":R,g||(o.as="script",o.crossOrigin=""),o.href=r,l&&o.setAttribute("nonce",l),document.head.appendChild(o),g)return new Promise((a,h)=>{o.addEventListener("load",a),o.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>n()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})};function _(t={}){const{immediate:n=!1,onNeedRefresh:i,onOfflineReady:d,onRegistered:e,onRegisteredSW:s,onRegisterError:l}=t;let r,g;const u=async(a=!0)=>{await g};async function o(){if("serviceWorker"in navigator){if(r=await W(()=>import("./workbox-window.prod.es5-D5gOYdM7.js"),[]).then(({Workbox:a})=>new a("/todo/sw.js",{scope:"/todo/",type:"classic"})).catch(a=>{l==null||l(a)}),!r)return;r.addEventListener("activated",a=>{(a.isUpdate||a.isExternal)&&window.location.reload()}),r.addEventListener("installed",a=>{a.isUpdate||d==null||d()}),r.register({immediate:n}).then(a=>{s?s("/todo/sw.js",a):e==null||e(a)}).catch(a=>{l==null||l(a)})}}return g=o(),u}function F(t){const n=t.querySelector("#pwa-toast"),i=n.querySelector(".message #toast-message"),d=n.querySelector("#pwa-close"),e=n.querySelector("#pwa-refresh");let s;const l=()=>s==null?void 0:s(!0);function r(a){if(a){requestAnimationFrame(()=>r(!1));return}n.classList.contains("refresh")&&e.removeEventListener("click",l),n.classList.remove("show","refresh")}function g(a){a||e.addEventListener("click",l),requestAnimationFrame(()=>{r(!1),a||n.classList.add("refresh"),n.classList.add("show")})}let u=!1;const o=60*60*1e3;window.addEventListener("load",()=>{d.addEventListener("click",()=>r(!0)),s=_({immediate:!0,onOfflineReady(){i.innerHTML="App ready to work offline",g(!0)},onNeedRefresh(){i.innerHTML="New content available, click on reload button to update",g(!1)},onRegisteredSW(a,h){var C;((C=h==null?void 0:h.active)==null?void 0:C.state)==="activated"?(u=!0,H(o,a,h)):h!=null&&h.installing&&h.installing.addEventListener("statechange",m=>{u=m.target.state==="activated",u&&H(o,a,h)})}})})}function H(t,n,i){setInterval(async()=>{if("onLine"in navigator&&!navigator.onLine)return;const d=await fetch(n,{cache:"no-store",headers:{cache:"no-store","cache-control":"no-cache"}});(d==null?void 0:d.status)===200&&await i.update()},t)}function N(){const t=document.querySelector("body"),n=document.querySelector("[data-toggle]");n.addEventListener("click",()=>{n.classList.toggle("toggle-dark"),t.classList.toggle("dark-mode")})}function U(){const t=new Date,n={weekday:"long"};return t.toLocaleDateString("en-US",n)}function j(){return new Date().toLocaleDateString()}const z=()=>`
    <nav>
      <div class="logo">TODO</div>
      <div class='toggle' data-toggle>
        <div></div>
      </div>
    </nav>
  `;function Y(){return`
    <section class="add-task">
      <div>
        <input type="text" id='titleInput' placeholder="Task title" />
        <input type="text" id='detailInput' placeholder="detail" />
      </div>
      <button id='addTaskBtn'>
        <span class="a"></span>
        <span class="b"></span>
      </button>
    </section>
    `}const G=()=>`
    <div class="calender bg-white max-w-80 max-h-80 py-5 px-[10px] rounded-xl">
      <div class="flex justify-between">
        <button class="decrement">
          <svg
            class="rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="20px"
            width="20px"
          >
            <path d="M16 12L10 18V6L16 12Z"></path>
          </svg>
        </button>
        <div
          class="currentMonth text-center hover:font-bold first-letter:font-bold font-medium text-[18px]"
        ></div>
        <button class="increment">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="20px"
            width="20px"
          >
            <path d="M16 12L10 18V6L16 12Z"></path>
          </svg>
        </button>
      </div>

      <table class="flex w-full h-full flex-col items-center gap-1">
        <tr class="flex gap-2 font-normal">
          <th>sun</th>
          <th>mon</th>
          <th>tue</th>
          <th>wed</th>
          <th>thu</th>
          <th>fri</th>
          <th>sat</th>
        </tr>
      </table>
    </div>
    `;function K(){const t=document.querySelector("table");document.querySelectorAll("th");const n=document.querySelector(".currentMonth"),i=document.querySelector(".increment"),d=document.querySelector(".decrement"),e=new Date,s=e.getFullYear(),l=e.getMonth();e.toLocaleString("default",{month:"long"});const r=e.getDate(),g=e.getDay();e.toLocaleString("default",{weekday:"short"});let u=s,o=l,a=r;h(),i.addEventListener("click",()=>{console.log("increament"),o==11?(o=0,u++):o++,C(),h()}),d.addEventListener("click",()=>{o==0?(o=11,u--):o--,C(),h()});function h(){const m=new Date(u,o,1);n.textContent=m.toLocaleString("default",{month:"long"});const y=m.getDate(),D=m.getDay(),P=new Date(u,o+1,0).getDate(),B=new Date(u,o,0).getDate();let b=[];const L=[];let w=y,M=!1;for(let c=1;c<=6;c++){const k=document.createElement("tr");k.classList.add("flex","gap-2");for(let f=0;f<7;f++){const p=document.createElement("td");p.classList.add("text-center"),c==1?f<D?(p.classList.add("previousMonth"),p.textContent=B-(D-f-1)):(p.textContent=w,p.classList.add("currentMonth"),w++):(w>P&&(w=y,M=!0),M?p.classList.add("nextMonth"):p.classList.add("currentMonth"),p.textContent=w,w++),k.appendChild(p)}b.push(k)}b.forEach(c=>{t.appendChild(c)});const E=document.querySelectorAll("th"),T=document.querySelectorAll(".currentMonth");s==u&&l==o?(E[g].style.color="red",T[r].classList.add("currentDate")):(E[g].style.color="inherit",T[r].classList.remove("curentDate")),document.querySelectorAll("td").forEach(c=>{c.addEventListener("mouseover",()=>{c.style.backgroundColor="#99a3c4ea",c.style.borderRadius="50%"}),c.addEventListener("mouseout",()=>{c.classList.contains("currentDate")?c.style.backgroundColor="#0641ff":(c.style.backgroundColor="inherit",c.style.borderRadius="0")}),c.addEventListener("click",()=>{if(c.classList.contains("currentMonth")){a=new Date(u,o,c.textContent).toDateString(),console.log(`SelectedDate = ${a}`);const f=document.querySelector(".currentDate");f&&(f.style.backgroundColor="inherit",f.style.color="inherit"),L.push(c),L.length==1||L.shift().classList.remove("selectedDate"),L[0].classList.add("selectedDate")}c.classList.contains("nextMonth")&&(o==11?(o=0,u++):o++,C(),h()),c.classList.contains("previousMonth")&&(o==0?(o=11,u--):o--,C(),h())})})}function C(){document.querySelectorAll("table>tr").forEach(y=>t.removeChild(y))}}const Q='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" id="tick" width="20px" height="20px"><path d="M15.48 28.62a1 1 0 0 1-.71-.29l-7.54-7.54a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l6.83 6.83L32.12 9.57a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L16.18 28.33a1 1 0 0 1-.7.29Z"></path></svg>',X='<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512" id="tick"><path d="M340.1 177.3L215.3 303l-47.2-47.2-17.8 17.8 56 56c2.5 2.5 5.9 4.5 8.9 4.5s6.3-2 8.8-4.4l133.7-134.4-17.6-18z"></path><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"></path></svg>',tt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20px" width='20px'><path d="M16.7574 2.99677L14.7574 4.99677H5V18.9968H19V9.23941L21 7.23941V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99677C3 3.44448 3.44772 2.99677 4 2.99677H16.7574ZM20.4853 2.09727L21.8995 3.51149L12.7071 12.7039L11.2954 12.7063L11.2929 11.2897L20.4853 2.09727Z"></path></svg>`,et='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor height="20px" width="20px""><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>',st='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path></svg>',nt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path></svg>',ot='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>',at='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path></svg>',lt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>',rt=t=>`
    <div class='taskCard'>
        <div class='taskContent'>
            <div class='content'>
                <h2 class='taskTitle'>${t.title}</h2>
                <p class='taskDetail'>${t.detail}</p>
            </div>
            <p class='startDate'>${t.date}</p>
        </div>
        <div class='icons'>
            <button data-index = ${t.index} class='icons markAsComplete'>
                <i >${X}</i>
            </button>
            <button data-index = ${t.index} class='icons edit'>
                <i>${tt}</i>
            </button>
            <button data-index = ${t.index} class='icons delete'>
                <i>${et}</i>
            </button>
        </div>
    </div>
    `,q=t=>`
    <div class='taskStatus ${t.type}'>
        <h1>${t.type} Task</h1>
        <strong>${t.data}</strong>
    </div>
    `,it=(t={data:"04"})=>`
    <div class='extraInfo'>
        <div class='totalTaskCreated'>
            <h1>Task Created</h1>
            <strong>${t.data}</strong>
        </div>
        <div class='socialMediaIconsParent'>
            <em>Contact Me</em>
            <div class='socialMediaIcons'>
                <i>${st}</i>
                <i>${nt}</i>
                <i>${ot}</i>
                <i>${at}</i>
                <i>${lt}</i>
            </div>
        </div>
    </div>
    `;let Z=localStorage.getItem("userName")?localStorage.getItem("userName"):prompt("Enter User Name.");localStorage.setItem("userName",Z);let ct=new Date,dt=ct.toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}),v=[],x=localStorage.getItem("completedTasks")?JSON.parse(localStorage.getItem("completedTasks")):[],$=localStorage.getItem("userTasks")?JSON.parse(localStorage.getItem("userTasks")).length:0;document.querySelector("#app").innerHTML=`
 ${z()}
 <h1 class='intro'>Hello,${Z}, Start Planning Today.</h1>
 <section class='main'>
    <div class='head'>
        <div class='todayWeekday'>
            ${U()}
        </div>
        ${Y()}
    </div>
    <div class='body'>
        <div class='left date'>
            <div class='localDate'>
                ${dt}
            </div>
            
            ${G()}
        </div>
        <div class='right todos'>
            <div class='top'>
                <div class='select'>
                    <select class='category'>
                        <option>Categort</option>
                    </select>
                    <select>
                        <option>prirority</option>
                    </select>
                </div>
                <div class='searchDiv'>
                    <input id='searchInput' type='text' placeholder='search' />
                    <i>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width='20px' height='20px'><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg></i>
                </div>
            </div>
            <div id='tasks'>
            </div>
        </div>
    </div>
    <footer>
        <div class='statusInfo'>
            ${q({type:"completed",data:x.length})}
            ${q({type:"pending",data:$})}
        </div>
        ${it({data:x.length+$})}
    </footer>
 </section>

`;const S=document.querySelector("#tasks"),ut=()=>{v.length==0?S.textContent="No Tasks":(S.innerHTML="",v.forEach((t,n)=>{S.innerHTML+=rt({title:t.title,detail:t.detail,date:t.createdDate,index:n})}))};function A(){v=localStorage.getItem("userTasks")?JSON.parse(localStorage.getItem("userTasks")):[],ut()}A();const ht=document.querySelectorAll(".delete");ht.forEach(t=>{t.addEventListener("click",()=>{v.splice(t.dataset.index,1),localStorage.setItem("userTasks",JSON.stringify(v)),location.reload()})});const gt=document.querySelectorAll(".markAsComplete");gt.forEach(t=>{t.addEventListener("click",()=>{console.log(t),x.push(v.splice(t.dataset.index,1)[0]),localStorage.setItem("completedTasks",JSON.stringify(x)),localStorage.setItem("userTasks",JSON.stringify(v)),document.querySelector(".taskStatus.completed strong").textContent=x.length,location.reload()})});const vt=document.querySelectorAll("button.edit");vt.forEach(t=>{t.addEventListener("click",()=>{const n=t.parentElement.parentElement,i=t.dataset.index;console.log({mainParent:n,datasetIndex:i});const d=t.querySelector("i"),e=n.querySelector(".taskTitle"),s=n.querySelector(".taskDetail");e.contentEditable="true",s.contentEditable="true",e.focus(),d.innerHTML=Q,t.addEventListener("click",()=>{const l=e.innerText,r=s.innerText;v[i].title=l,v[i].detail=r,localStorage.setItem("userTasks",JSON.stringify(v)),location.reload()})})});const pt=document.querySelector("button#addTaskBtn"),O=document.querySelector("input#titleInput"),V=document.querySelector("input#detailInput");pt.addEventListener("click",()=>{const t=O.value,n=V.value,i=j(),d={title:t,detail:n,createdDate:i};v.push(d),localStorage.setItem("userTasks",JSON.stringify(v)),O.value="",V.value="",A()});N();K();F(N);
