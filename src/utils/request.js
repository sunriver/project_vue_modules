import axios from "axios";
import { notification } from "ant-design-vue";
function request(options) {
    let req = axios(options)
        .then(res => {
            console.log("[request]" + res);
            return res;
        })
        .catch(error => {
            const {
                response: { status, statusText }
            } = error;
            notification.error( {
                // eslint-disable-next-line no-unused-vars
                message: h => (
                    <div>
                        请求错误 <span>{status}</span> : {options.url}
                    </div>
                ),
                description: statusText,
                });

        });
    return req;
}

export default request;