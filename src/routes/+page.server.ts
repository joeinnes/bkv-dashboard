import { API_KEY } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const fetched = await fetch(
    `https://futar.bkk.hu/api/query/v1/ws/otp/api/where/vehicles-for-location.json?lon=19.055768&lat=47.490398&radius=100&version=3&key=${API_KEY}`
  );
  const { data } = await fetched.json();
  const { list } = data;

  return list;
}