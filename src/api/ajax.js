/*封装ajax函数，使用的是axios的库。用来发送请求和接受数据
封装的意义是：为了方便多次调用*/
import axios from "axios";
export default function ajax(url, data={}, type="GET") {
    //封装一个promise的目的是，为了使使用ajax函数之后，得到的数据是response.data而不是response
    return new Promise((resolve, reject) => {
        // 前端设置是否带cookie
        axios.defaults.withCredentials = true;
        let promise;
        if (type === "GET") {
            //GET请求方式。采用传统的url加？&形式，所以需要对参数进行拼接
            //类似这种：http://localhost:3000/sendcode?phone=1371 6962779
            let dataParam = "";  //拼接参数保存所在的变量
            for (let key in data) { //可以使用Object.key()获得自身可枚举属性，通过forEach()进行遍历
                if (data.hasOwnProperty(key)) {
                    dataParam += key + "=" + data[key] + "&";
                }
            }
            if (dataParam !== "") {//dataParam为key1=value1&...keyn=valuen&
                //去掉最后一个&以及和url拼接
                dataParam = dataParam.substring(0, dataParam.lastIndexOf("&"));
                url += "?" + dataParam;
            }
            promise = axios.get(url);
        } else {
            //post请求方式
            promise = axios.post(url, data);
        }
        promise.then(function (response) {
            resolve(response.data); //成功之后将response.data传给new Promise实例
        }).catch(error => { //失败
            reject(error);
        })
    });
}
