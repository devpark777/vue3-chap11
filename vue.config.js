// const target = 'http://localhost:8090';
// SpringBoot으로 vueServer 구현했음 : 8090

/*
module.exports = {
   devServer : {
    //    port : 8090,
       proxy : {
           '^/api' : {
               target : 'http://localhost:8090',
               changeOigin : true
           }
       }
   }
}
*/
const target = 'http://localhost:8090';
// const target = 'http://192.168.0.3:8090';
module.exports = {
    devServer : {
        port : 8080, //요청하는 클라이언트쪽 port
        proxy : {
            '^/api' : {
                target,
                changeOigin : true
            }
        }
    }
 }
 
