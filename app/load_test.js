import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 150,
    duration: '30s'
};

export default function (){
    let res = http.get('http://rickandmortyapi.com/api/character?page=2');
    check(res, {
        'is status 200': (r) => r.status ===200
    });
};
