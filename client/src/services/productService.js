import config from "../config/config";

const baseUrl = config.BASE_URL;

const url = '/db.json';

export const getAll = async () => {
    const response = fetch(baseUrl + url);
    const result = (await response).json();
    return result;
}