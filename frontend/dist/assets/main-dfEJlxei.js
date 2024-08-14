import"./normalize-jCL-TTtM.js";var H={code:"es",week:{dow:1,doy:4},buttonText:{prev:"Ant",next:"Sig",today:"Hoy",year:"Año",month:"Mes",week:"Semana",day:"Día",list:"Agenda"},buttonHints:{prev:"$0 antes",next:"$0 siguiente",today(e){return e==="Día"?"Hoy":(e==="Semana"?"Esta":"Este")+" "+e.toLocaleLowerCase()}},viewHint(e){return"Vista "+(e==="Semana"?"de la":"del")+" "+e.toLocaleLowerCase()},weekText:"Sm",weekTextLong:"Semana",allDayText:"Todo el día",moreLinkText:"más",moreLinkHint(e){return`Mostrar ${e} eventos más`},noEventsText:"No hay eventos para mostrar",navLinkHint:"Ir al $0",closeHint:"Cerrar",timeHint:"La hora",eventHint:"Evento"};function T(e){const[t,r]=e.split("T"),[,a,l]=t.split("-"),[o,s]=r.split(":"),n=`${a}-${l}`,i=`${o}:${s}`;return{dayWithoutYear:n,timeWithoutSeconds:i,completeDate:e}}const y=`
  <div class="modal fade" id="dateClickModal" tabindex="-1" aria-labelledby="dateClickModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="dateClickModalLabel">Registrar cliente</h1>
          <button type="button" class="closeModal" data-bs-dismiss="modal" aria-label="Close">
            <i class="bi bi-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <form id="eventForm" >
            <label for="input-name">Nombre</label>
            <input type="text" name="inputName" id="input-name" class="input" required pattern="^[a-zA-Z\\s]{1,25}$">

            <label for="input-number">Teléfono</label>
            <input type="number" name="inputNumber" id="input-number" class="input" required pattern="^\\+?\\d{1,15}$">

            <label for="eventDate">Fecha</label>
            <input type="text" name="eventDate" id="eventDate" class="input" readonly>

            <label for="event-datetime">Horario</label>
            <input type="datetime" name="dateTime" id="event-datetime" class="input" placeholder="hh:mm" readonly>

            <div class="modal-footer">
              <button type="submit" id="saveTurn" class="btn btn-success">Guardar</button>
              <button id="closeModal" class="btn btn-danger btnCancel" data-bs-dismiss="modal">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
`,I=`
  <div class="modal fade" id="dateClickModalTurnContent" tabindex="-1" aria-labelledby="dateClickModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="dateClickModalLabel">Informacion de Turno</h1>
          <button type="button" class="closeModal" data-bs-dismiss="modal" aria-label="Close">
            <i class="bi bi-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <h2 id="infoName">Nombre y Apellido: <span id="spanName"></span> </h2>
          <h2 id="infoTel">Teléfono: <span id="spanTel"></span></h2>
          <h2 id="infoDay">Día: <span id="spanDay"></span></h2>
          <h2 id="infoStartTime">Inicio de Turno: <span id="spanStartTime"></span></h2>
          <h2 id="infoEndTime">Fin de Turno: <span id="spanEndTime"></span></h2>
          <div class="modal-footer modal-footer-calendar">
            <a id="contactWsp" class="btn btn-success" href="" target="_blank">
              <i class="bi bi-whatsapp"></i>
            </a>
            <button id="deleteTurn" class="btn btn-danger btnCancel" data-bs-dismiss="modal">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;function q(e){const t=document,r=new bootstrap.Modal(t.getElementById("dateClickModalTurnContent"));t.getElementById("infoName"),t.getElementById("infoTel"),t.getElementById("infoDay"),t.getElementById("infoStartTime"),t.getElementById("infoEndTime");const a=t.getElementById("spanName"),l=t.getElementById("spanTel"),o=t.getElementById("spanDay"),s=t.getElementById("spanStartTime"),n=t.getElementById("spanEndTime"),{dayWithoutYear:i,timeWithoutSeconds:m}=T(e.event.startStr),{timeWithoutSeconds:c}=T(e.event.endStr),p=e.event._def.title,u=e.event._def.extendedProps.telefono,d=i,b=m,g=c;a.innerHTML="",l.innerHTML="",o.innerHTML="",s.innerHTML="",n.innerHTML="",a.innerHTML+=`${p}`,l.innerHTML+=`${u}`,o.innerHTML+=`${d}`,s.innerHTML+=`${b}`,n.innerHTML+=`${g}`,r.show();const L=document.getElementById("deleteTurn"),f=document.getElementById("contactWsp");L.addEventListener("click",async E=>{E.preventDefault(),alert("sad")}),f.addEventListener("click",async E=>{E.preventDefault();const A=`Hola ${p} espero que te encuentres muy bien!, tenes un turno agendado para el dia ${d}, a las ${b}`,C=`https://api.whatsapp.com/send?phone=${u}&text=${encodeURIComponent(A)}`;f.href=C,window.open(C,"_blank")})}function D(e,t,r){const a=document,l=new bootstrap.Modal(a.getElementById("dateClickModal")),o=a.getElementById("eventDate"),s=a.getElementById("event-datetime"),{dayWithoutYear:n,timeWithoutSeconds:i,completeDate:m}=T(e.dateStr),c=a.getElementById("eventForm");c.inputName.value="",c.inputNumber.value="",o.value=n,s.value=i,l.show(),document.querySelector(".btnCancel").addEventListener("click",u=>{u.preventDefault(),bootstrap.Modal.getInstance(l._element).hide()}),N(c,m,r,l)}async function N(e,t,r,a){const l=document.querySelector(".modal-footer"),o=document.createElement("span");o.innerHTML="Error al crear el turno.",o.style.textAlign="center",o.style.width="100%",o.style.marginTop="1rem",o.style.marginBottom="0rem",o.style.paddingBottom="0rem",document.getElementById("input-name").addEventListener("input",function(s){const n=s.target;/^[a-zA-Z\s]{1,25}$/.test(n.value)?n.setCustomValidity(""):n.setCustomValidity("solo letras y espacios hasta 25 caracteres.")}),document.getElementById("input-number").addEventListener("input",function(s){const n=s.target;/^\+?\d{1,15}$/.test(n.value)?n.setCustomValidity(""):n.setCustomValidity("Solo numeros hasta 15 digitos.")}),e.addEventListener("submit",async s=>{s.preventDefault();const n=document.getElementById("input-name"),i=document.getElementById("input-number"),m=e.inputName.value.trim(),c=e.inputNumber.value.trim(),p=r.user.Id,u=t;n.checkValidity()&&i.checkValidity()?console.log("Formulario válido. Enviando datos..."):(n.reportValidity(),i.reportValidity());const d={Nombre:m,Telefono:c,Date:u,NroUsuario:p},b="https://peluqueria-invasion.vercel.app/turns",g={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)};(await fetch(b,g)).ok?(o.innerHTML="Turno creado correctamente",o.style.color="green",setTimeout(()=>{bootstrap.Modal.getInstance(a._element).hide(),window.location.reload()},1500)):o.style.color="red",l.appendChild(o)})}const x=document;let w=document.body;const B=async e=>await(await fetch(`https://peluqueria-invasion.vercel.app/turns/${e.user.Id}`)).json(),P=e=>{const[t,r]=e.split("T"),[a,l]=r.split(":");let o=a,s="";l==="00"?s="30":l==="30"&&(o=parseInt(o)+1,s="00"),o===9&&(o="09");const n=`${o}:${s}`;return`${t}T${n}`};async function v(e,t){const a=(await B(t)).map(s=>{const n=P(s.turns.Date);return{id:s.turns.Id,title:s.turns.Nombre,start:s.turns.Date,end:n,extendedProps:{telefono:s.turns.Telefono}}});let l=x.getElementById("calendar"),o=new FullCalendar.Calendar(l,{initialView:"timeGridWeek",timeZone:"America/Argentina/Cordoba",slotLabelFormat:{hour:"numeric",minute:"2-digit",omitZeroMinute:!1},slotLabelInterval:"00:30:00",slotDuration:"00:30:00",slotMinTime:"08:00:00",editable:!0,dayMaxEventRows:!0,views:{timeGrid:{dayMaxEventRows:6},dayGrid:{dayMaxEventRows:3}},allDaySlot:!1,headerToolbar:{left:"dayGridMonth,timeGridWeek,timeGridDay,myCustomButton",center:"title",right:"prev,next"},events:a,eventClick:function(s){w.insertAdjacentHTML("beforeend",I),q(s),document.querySelector(".modal").addEventListener("hidden.bs.modal",function(){this.remove()})},customButtons:{myCustomButton:{text:"boton personalizado",click:function(){alert("funcionalidad del boton personalizado")}}},dateClick:function(s){$(),w.insertAdjacentHTML("beforeend",e),D(s,o,t),document.querySelector(".modal").addEventListener("hidden.bs.modal",function(){this.remove()})},selectable:!1,locale:H});o.render()}const h='<div class="contenedorCalendario" id="calendar"></div>',R=e=>`
        <aside class="sidebar">
            <div class="sidebar-nav">
                <div class="btnHamburger">
                    <button class="hamburger hamburger--collapse" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div class="profile">
                    <img src="../../public/assets/icons/profile.svg" alt="Profile Icon" class="profile-icon">
                    <span class="profile-name">${e}</span>
                </div>
            </div>
            <nav class="menu">
                <ul>
                    <li>
                        <a href="#admin-calendar">
                            <img src="../../public/assets/icons/calendar.svg" alt="Administrar calendario" class="icon">Administrar Calendario
                        </a>
                    </li>
                    <li>
                        <a href="#cash-register">
                            <img src="../../public/assets/icons/cash-register.svg" alt="Ver caja" class="icon">
                            Seguimiento de caja
                        </a>
                    </li>
                    <li>
                        <a href="#share-calendar">
                            <img src="../../public/assets/icons/share.svg" alt="Compartir calendario" class="icon">
                            Compartir calendario
                        </a>
                    </li>
                    <li>
                        <a href="#manage-employees">
                            <img src="../../public/assets/icons/edit-user.svg" alt="Administrar empleados" class="icon">
                            Administrar empleados
                        </a>
                    </li>
                    <li>
                        <a href="#generate-table">
                            <img src="../../public/assets/icons/table.svg" alt="Generar tabla" class="icon">
                            Generar Tabla Turnos
                        </a>
                    </li>
                </ul>
                <div class="button-logout-container">
                    <button id="logout">
                        Cerrar Sesion
                    </button>
                </div>
            </nav>
        </aside>
    `,j=()=>{const e=document.querySelector(".btnHamburger button");e.removeEventListener("click",M),e.addEventListener("click",M)},M=e=>{e.currentTarget.classList.toggle("is-active")},k=async()=>{try{(await fetch("https://peluqueria-invasion.vercel.app/logout",{method:"POST",credentials:"include"})).ok&&(history.replaceState(null,"","/login.html"),history.pushState(null,"","/login.html"),window.location.href="/login.html")}catch(e){console.error(e)}};let O='<div class="manageEmployeesContainer"></div>';const V=`
  <div class="postEmployee">
    <h3>Administración de Empleados</h3>
    <p class="postEmployee-p">Puede agregar nuevos empleados o quitarlos, además de cambiar su nombre y contraseña.</p>
    <button type="button" class="postEmployee-btn">
      <img src="../../public/assets/icons/person-fill-add.svg">
      Agregar <br> Empleado
    </button>
  </div>
`,W=`
  <div class="modal fade" id="postEmployee" tabindex="-1" aria-labelledby="postEmployeeLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="postEmployeeLabel">Registrar empleado</h1>
          <button type="button" class="closeModal" data-bs-dismiss="modal" aria-label="Close">
           <i class="bi bi-x"></i>
          </button>
        </div>
        <div class="modal-body">

          <form id="formPOSTEmployee">
            <label for="username">Usuario</label>
            <input type="text" id="username" name="Nombre" class="input" required>

            <label for="password">Constraseña</label>
            <input type="password" id="password" name="Contrasena" class="input" required>

            <label for="rol">Rol</label>
            <input type="text" id="rol" class="input" name="Rol" value="Empleado" readonly>
            
            <div class="modal-footer">
              <button type="submit" class="btn btn-success btnPost">Registrar</button>
              <button class="btn btn-danger btnCancel" data-bs-dismiss="modal">Cancelar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
`,F=e=>{let t="";return e.forEach((r,a)=>{a>0&&(t+=`
        <tr key=${r.Id}>
          <td scope="row">${r.Id}</td>
          <td>${r.Nombre}</td>
          <td>${r.Contrasena}</td>
          <td>${r.Rol}</td>
          <td>
            <button class="table-btns modify">
              <i class="bi bi-pencil-fill" key=${r.Id}></i>
            </button>
            <button class="table-btns delete">
              <i class="bi bi-trash-fill"></i>
            </button>
          </td>
        </tr>
      `)}),t},G=async()=>{try{const e=await fetch("https://peluqueria-invasion.vercel.app/users");if(!e.ok)alert("Hubo algun error en obtener los usuarios.");else{const t=await e.json();return t.length>1?`
          <div class="table-container">
            <table class="table-light">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">USUARIO</th>
                  <th scope="col">CONTRASEÑA</th>
                  <th scope="col">ROL</th>
                  <th scope="col">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                ${F(t)}
              </tbody>
            </table>
          </div>
        `:'<p class="empty">No hay empleados registrados.</p>'}}catch(e){console.log(e)}},U=e=>{e.addEventListener("click",()=>{document.querySelector("#postEmployeeLabel").textContent="Registrar empleado",document.querySelector(".btnPost").textContent="Registrar";const t=document.querySelector("#formPOSTEmployee");t.setAttribute("data-mode","create"),t.removeAttribute("data-id")})},_=(e,t,r)=>{const a=document.createElement("span");a.innerHTML="Error al crear el usuario.",a.style.textAlign="center",a.style.width="100%",a.style.marginTop="1rem",a.style.marginBottom="0rem",a.style.paddingBottom="0rem",e.addEventListener("submit",l=>{l.preventDefault();const o=e.getAttribute("data-mode"),s=e.getAttribute("data-id"),n=e.Nombre.value,i=e.Contrasena.value,m=e.Rol.value,c={Nombre:n,Contrasena:i,Rol:m};let p="https://peluqueria-invasion.vercel.app/register",u="POST";o==="update"&&(p=`https://peluqueria-invasion.vercel.app/users/${s}`,u="PUT"),fetch(p,{method:u,headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then(d=>d.json()).then(d=>{d.error!==void 0?(a.innerHTML=`${d.error}`||"Usuario o contraseña inválidos.",a.style.color="red"):(a.innerHTML=o==="create"?"¡Usuario creado correctamente!":"¡Usuario actualizado correctamente!",a.style.color="green",setTimeout(()=>{bootstrap.Modal.getInstance(t._element).hide(),window.location.reload()},1500)),r.appendChild(a)}).catch(d=>{console.log("Error del servidor:",d)})})},z=(e,t,r)=>{e.addEventListener("click",a=>{a.preventDefault(),t.Contrasena.value="",t.Nombre.value="",bootstrap.Modal.getInstance(r._element).hide()})},Z=(e,t)=>{e.forEach(r=>{r.addEventListener("click",async a=>{const l=a.currentTarget.getAttribute("key"),s=await(await fetch(`https://peluqueria-invasion.vercel.app/users/${l}`)).json();document.querySelector("#postEmployeeLabel").textContent="Actualizar empleado",document.querySelector(".btnPost").textContent="Actualizar";const n=document.querySelector("#formPOSTEmployee");n.setAttribute("data-mode","update"),n.setAttribute("data-id",l),n.Contrasena.value="",n.Nombre.value=s.Nombre,n.Contrasena.placeholder="Contraseña",n.Rol.value=s.Rol,t.show()})})},Y=e=>{e.forEach(t=>{t.addEventListener("click",async r=>{const a=r.currentTarget.closest("tr").getAttribute("key"),o=await(await fetch(`https://peluqueria-invasion.vercel.app/users/${a}`)).json();if(console.log(o),confirm(`¿Estás seguro que quieres eliminar al empleado ${o.Nombre}?`)){const n=await fetch(`https://peluqueria-invasion.vercel.app/users/${a}`,{method:"DELETE"});console.log(n),n.ok?window.location.reload():alert("Error al eliminar el usuario.")}})})},J=async e=>{const t=e.user.Nombre,r=window.location.hash;switch(app.innerHTML="",app.innerHTML+=R(t),r){case"#admin-calendar":app.innerHTML+=h,v(y,e);break;case"#cash-register":break;case"#share-calendar":break;case"#manage-employees":app.innerHTML+=O;let l=document.querySelector(".manageEmployeesContainer");l.insertAdjacentHTML("beforeend",V);const o=await G();o&&l.insertAdjacentHTML("beforeend",o),l.insertAdjacentHTML("beforeend",W);const s=document.querySelector(".postEmployee-btn");s.setAttribute("data-bs-toggle","modal"),s.setAttribute("data-bs-target","#postEmployee");const n=new bootstrap.Modal(document.getElementById("postEmployee"));U(s);const i=document.querySelector("#formPOSTEmployee"),m=document.querySelector(".modal-footer");_(i,n,m);const c=document.querySelector(".btnCancel");z(c,i,n);const p=document.querySelectorAll(".modify i");Z(p,n);const u=document.querySelectorAll(".delete i");Y(u);break;case"#generate-table":break;default:app.innerHTML+=h,v(y,e);break}j(),document.querySelector("#logout").addEventListener("click",k)},K=e=>`
        <aside class="sidebar">
            <div class="sidebar-nav">
                <div class="btnHamburger">
                    <button class="hamburger hamburger--collapse" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div class="profile">
                    <img src="../../public/assets/icons/profile.svg" alt="Profile Icon" class="profile-icon">
                    <span class="profile-name">${e}</span>
                </div>
            </div>
            <nav class="menu">
                <ul>
                    <li>
                        <a href="#admin-calendar">
                            <img src="../../public/assets/icons/calendar.svg" alt="Administrar calendario" class="icon">
                            Administrar Calendario
                        </a>
                    </li>
                    <li>
                        <a href="#share-calendar">
                            <img src="../../public/assets/icons/share.svg" alt="Compartir calendario" class="icon">
                            Compartir calendario
                        </a>
                    </li>
                    <li>
                        <a href="#generate-table">
                            <img src="../../public/assets/icons/table.svg" alt="Generar tabla" class="icon">
                            Generar Tabla Turnos
                        </a>
                    </li>
                </ul>
                <div class="button-logout-container">
                    <button id="logout">
                        Cerrar Sesion
                    </button>
                </div>
            </nav>
        </aside>
    `,Q=()=>{const e=document.querySelector(".btnHamburger button");e.removeEventListener("click",S),e.addEventListener("click",S)},S=e=>{e.currentTarget.classList.toggle("is-active")},X=async e=>{const t=e.user.Nombre,r=window.location.hash;switch(app.innerHTML="",app.innerHTML+=K(t),r){case"#admin-calendar":app.innerHTML+=h,v(y,e);break;case"#share-calendar":break;case"#generate-table":break;default:app.innerHTML+=h,v(y,e);break}Q(),document.querySelector("#logout").addEventListener("click",k)};async function $(){try{const e=await fetch("https://peluqueria-invasion.vercel.app/verify-token",{credentials:"include"});if(!e.ok||e.status===401)window.location.href="/login.html";else{const t=await e.json();t.user.Rol==="Empleado"?X(t):t.user.Rol==="Admin"&&J(t)}}catch{window.location.href="/login.html"}}document.addEventListener("DOMContentLoaded",()=>{$()});window.addEventListener("popstate",()=>{$()});
