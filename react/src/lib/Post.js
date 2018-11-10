import axios from 'axios';
import qs from 'qs';


const ReturnData = (return_data = [{}]) => {

    try {
    
        let data = {};

        if (return_data.status !== 200) {
            console.log('연결실패');
            data = {
                result: false,
                data: {},
                description: "네트워크 연결 실패."
            }
        } else {
            data = return_data.data;
        }

        return data;

    } catch (e) {
        console.log( e );
    }

}

const Post = async (url, ajax_data = {} ) => {

    const options = {
        method: 'POST',
        data: qs.stringify(ajax_data),
        url: url,
    };

    let list = await axios(options)
    
    return ReturnData(list);
}

export const callbackPost = async ( url, ajax_data = {}, method = "POST"  ) => {

    const options = {
        method: method,
        data: qs.stringify(ajax_data),
        url: url,
    };

    let list = await axios(options)
    list = ReturnData(list)
    return list;

}

export default Post;

