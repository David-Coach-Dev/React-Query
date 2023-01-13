import { GITHUB_BASE_URL, GITHUB_TOKEN } from '@/config';
import axios from 'axios';

export const githubApi = axios.create({
  baseURL: `${GITHUB_BASE_URL}`,
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});