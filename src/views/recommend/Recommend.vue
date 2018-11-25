<template>
    <div>
        推荐内容
    </div>
</template>
<script>
import {getRecommend} from '../../api/recommend.js'
import {ERR_OK} from '../../api/config.js'
export default {
    created(){
        this._getRecommend()
    },
    methods:{
        _getRecommend(){
            getRecommend().then((res)=>{
                if(res.code === ERR_OK){
                    console.log(res.data.slider)
                }
            })
        }
    }
}
</script>
