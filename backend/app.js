// Importamos dependencias.
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Importamos componentes.
import { config } from "./app/config/config.js";
import { dbStart } from "./app/database/db.js";  // Modificado para importar el nuevo setup
import routesSession from "./app/routes/rSession.js";
import routesUser from "./app/routes/rUser-drizzle.js";
import routesTurn from "./app/routes/rTurn-drizzle.js";
import { verifyToken } from "./app/middlewares/auth.js";

// Iniciamos la aplicación con express.
const app = express();

// Middlewares.
app.use(express.json());
// app.use(cors({
//     origin: "https://peluqueria-invasion-front.vercel.app",
//     credentials: true
// }));
/*
app.use(cors({
    origin: "https://peluqueria-invasion-front.vercel.app",
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: "Content-Type,Authorization"
}));
*/
app.use(cookieParser());

// app.options('*', cors());

const allowedOrigins = ['https://peluqueria-invasion-front.vercel.app', 
                        'https://peluqueria-invasion-front-git-main-facundo-andreans-projects.vercel.app', 
                        'https://peluqueria-invasion-front-rbsnpmbvv-facundo-andreans-projects.vercel.app',
                       'http://localhost:5173'];

const corsOptions = {
  origin: function (origin, callback) {
    // Verificar si el origen está en la lista de permitidos
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Permitir el envío de cookies y credenciales
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
  allowedHeaders: 'Content-Type,Authorization', // Encabezados permitidos
  optionsSuccessStatus: 204 // Establecer el código de estado para OPTIONS preflight
};

// Usa CORS con las opciones configuradas
app.use(cors(corsOptions));

// Iniciamos la base de datos.
dbStart();

// Endpoints.
app.use(routesSession);

app.get('https://peluqueria-invasion-front.vercel.app/verify-token', verifyToken, (req, res) => {
    const user = req.user;
    res.send({ user });
});

app.use(routesTurn);
app.use(routesUser);

// Levantamos el puerto.
app.listen(config.port, () => {
    console.log(`
        Servidor iniciado en https://peluqueria-invasion-front.vercel.app
    `);
});

export default app;
