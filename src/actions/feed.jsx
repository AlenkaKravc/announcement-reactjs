import C from '../constans';


export const removeAd = ad_id =>
    ({
        type: C.DELETE_AD,
        ad_id: ad_id,
    });

export const addNewAd = (title,description,phone) => (
    {
        type: C.ADD_NEW_AD,
        title: title,
        description: description,
        phone: phone,
    });