
export const GET_PHARMACIES = 'GET_PHARMACIES';

export const getPharmacies = (currentPage) => {
  let API_URL =
    `https://www.maiia.com/api/pat-public/hcd?limit=10&locality=75001-PARIS&page=${currentPage}&speciality.shortName=pharmacie`;
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_PHARMACIES,
          payload: json.items
        });
      } else {
        console.log('Unable to fetch!');
      }
    }
  } catch (error) {
    console.log(error);
  }
}
