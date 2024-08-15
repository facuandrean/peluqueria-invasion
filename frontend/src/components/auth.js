import renderIndexAdmin from "./indexAdminView.js";
import renderIndexEmployee from "./indexEmployeeView.js";

export default async function checkAuthentication() {

    try {
        
        const response = await fetch('https://peluqueria-invasion-back.vercel.app/verify-token', { credentials: 'include' });

        if (!response.ok || response.status === 401) {
            window.location.href = '/login.html';
        } else {

            // Leemos el cuerpo de la respuesta, en el cual recibimos el usuario logueado.
            const data = await response.json(); 

            if (data.user.Rol === "Empleado") {
                await renderIndexEmployee(data);
            } else if (data.user.Rol === "Admin") {
                await renderIndexAdmin(data);
            }
            
        } 

    } catch (error) {
        window.location.href = '/login.html';
    };

};
