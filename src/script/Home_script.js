import API from '../graphQL'

export const announcement = async(cb) => {
    const LOGIN = `
    query {
        announcementAllBanner {
            id,
            title,
            description,
            image,
            link,
            seq,
            type
        }
    }`;
    const result = await API.request(LOGIN);
    var respone;
    if (typeof result === 'object') {
        respone = {
            banner: result.announcementAllBanner
        }
    } else {
       respone = {
           banner: []
       }
    }
    getFeeds(cb ,respone)
}

export const getFeeds = async(cb, banner) => {
    const LOGIN = `
    query {
        announcementAll {
            id,
            title,
            description,
            image,
            link,
            seq,
            type
        }
    }`;
    const result = await API.request(LOGIN);
    var respone = banner
    if (typeof result === 'object') {
        respone.feeds = result.announcementAll
    } else {
       respone.feeds = []
    }
    cb(respone)
}

export default {
    announcement,
}