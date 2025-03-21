import axios from "axios";

const MILLA_BASE = "https://milla.grupopakatnamu.com";
// const MILLA_BASE = "http://127.0.0.1:8000";
const MILLA_URL = "/libro-reclamaciones";
const API_URL = "/api";
const BASE_PATH = "/libroreclamaciones"

const api = axios.create({ baseURL: MILLA_BASE + API_URL + MILLA_URL });
const apiMilla = axios.create({ baseURL: MILLA_BASE + API_URL });

export { MILLA_BASE, MILLA_URL, BASE_PATH, api, apiMilla };
