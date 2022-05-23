import {getAllProduct} from "../services/getProducts"

export const getProducts = (slug) => {
    return async (dispatch) => {
        const { data } = await getAllProduct(slug);
        // const data = [
        //     {
        //         "id": 1,
        //         "user": {
        //             "phone": "09930731973",
        //             "id": 1
        //         },
        //         "image": "http://192.168.100.11:5000/media/shops/Math1_D4S1258b_nQVfnDP.png",
        //         "name": "shop",
        //         "slug": "shop1",
        //         "created": "2022-05-14T17:47:31.285644",
        //         "modified": "2022-05-14T17:47:31.442744",
        //         "description": "asd",
        //         "is_verify": false,
        //         "priority": 0,
        //         "instagram_link": null,
        //         "telegram_link": null,
        //         "website_link": null,
        //         "whatsapp_link": null,
        //         "evidence": null,
        //         "rating": "0.0",
        //         "is_ban": false,
        //         "admins": [
        //             1
        //         ]
        //     },
        //     {
        //         "id": 2,
        //         "user": {
        //             "phone": "09930731973",
        //             "id": 1
        //         },
        //         "image": "http://192.168.100.11:5000/media/shops/01623838.jpg",
        //         "name": "sad",
        //         "slug": "4aa2932a-dde8-4f19-a39a-37080429fd14",
        //         "created": "2022-05-14T17:48:00.540001",
        //         "modified": "2022-05-14T17:48:00.577873",
        //         "description": "asdassad",
        //         "is_verify": false,
        //         "priority": 0,
        //         "instagram_link": "https://www.instagram.com/asd/",
        //         "telegram_link": "https://t.me/asda",
        //         "website_link": "asd",
        //         "whatsapp_link": "https://wa.me/assd",
        //         "evidence": null,
        //         "rating": "0.0",
        //         "is_ban": false,
        //         "admins": []
        //     }
        // ];
        console.log(data);
        await dispatch({ type: "GET_PRODUCTS_LIST", payload: data });
    };
};
