export const SERVER_HOST = 'polyglot-tv.com';
export const SERVER_PORT = 80;
export const SERVER_PROTOCOLE = 'http';
export const DEV = false;

export const baseUrl = () => {
    if (DEV){
        return '/server/api/';
    } else{
        return `${SERVER_PROTOCOLE}://${SERVER_HOST}:${SERVER_PORT}/server/api/`;
    }
}

 
