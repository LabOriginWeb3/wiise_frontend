import SelfFetch from './SelfFetch';
const selfFetch = new SelfFetch();
const BaseUrl = 'https://wiisetest.socialfi.io';

// export async function getTopicsApi(options) {
//     return await selfFetch.get(
//         `${BaseUrl}/api/v1/topics?page=${options.page || 1}&size=${options.size || 10
//         }`
//     );
// }

// export async function loginApi(options) {
//     return await selfFetch.post(`${BaseUrl}/api/login`, options);
// }

// export async function getUserInfoApi() {
//     return await selfFetch.get(`${BaseUrl}/api/getUserInfo`);
// }

// export async function putQrcodeApi(qrcode) {
//     return await selfFetch.put(`${BaseUrl}/api/v1/topics/${qrcode}`);
// }


export async function getLatestNumContents(options) {
    return await selfFetch.get(`${BaseUrl}/api/content/getTopNumContents/${options.from}/${options.to}`);
}

export async function getTransactionsByContentId(contentId) {
    return await selfFetch.get(`${BaseUrl}/api/transaction/getTransactionsByContentId/${contentId}`);
}

export async function getContentsByParentIdOrdered(contentId) {
    return await selfFetch.get(`${BaseUrl}/api/content/getContentsByParentIdOrdered/${contentId}`);
}