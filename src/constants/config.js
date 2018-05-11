export const SERVER_HOST = 'localhost';
export const SERVER_PORT = 5555;
export const SERVER_PROTOCOLE = 'http';
export const DEV = true;

export const baseUrl = () => {
    if (DEV){
        return '/server/api/';
    } else{
        return `${SERVER_PROTOCOLE}://${SERVER_HOST}:${SERVER_PORT}/server/api/`;
    }
}

 
