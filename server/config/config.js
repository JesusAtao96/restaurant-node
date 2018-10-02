// Puerto
//process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Vencimiento del Token
// 60 segundos
// 60 minutos 
// 24 horas
// 30 dias
process.env.TOKEN_EXPIRATION = '48h';

// SEED de autenticación
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// Base de datos
let urlDB;

if(process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/restaurant';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// Google Client ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '297605043339-epodk1tohieqso9nqcdgu7eukgk6mlrh.apps.googleusercontent.com';

// Facebook Client ID y secret
process.env.FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID || '2268545880030357';
process.env.FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET || 'bf306ea82968f3cca5f4581c91079692';