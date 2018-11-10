import Routes from './Routes';
import Server, { NodeServerURL, iFamilyURL }  from './Server';


export const reactRouterList = Routes;

export const ServerAPI = Server;

export default {
    node : NodeServerURL,
    ifamily : iFamilyURL
};