import originJsonp from 'jsonp' 

export default function jsonp(url,data,option){
    url +=(url.indexOf('?') <0 ?'?':'&') +param(data)
    return new Promise((resolve,reject)=>{
        originJsonp(url,option,(err,data)=>{
            if(err){
                reject(err)
                return;
            }else{
                resolve(data)
            }
        })
    })
}

function param(data){
    return Object.keys(data).map(item=>{
       item !==undefined?item:''
       return item+'='+encodeURIComponent(data[item])
        }).join('&')
}