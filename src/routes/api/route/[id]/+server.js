import { API_KEY } from '$env/static/private';

/** @type {import('../$types').RequestHandler} */
export async function GET({ params }) {
    const fetched = await fetch(
				`https://futar.bkk.hu/api/query/v1/ws/otp/api/where/route-details.json?routeId=${params.id}&key=${API_KEY}`
    );
    const json = await fetched.json();
    return new Response(JSON.stringify(json));
};