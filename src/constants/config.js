export const SERVER_HOST = 'localhost';
export const SERVER_PORT = 8888;
export const SERVER_PROTOCOLE = 'http';
export const DEV = true;

export const baseUrl = () => {
    if (DEV){
        return '/api/';
    } else{
        return `${SERVER_PROTOCOLE}://${SERVER_HOST}:${SERVER_PORT}/api/`;
    }
}

 
