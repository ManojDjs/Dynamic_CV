<template>

<div class="surface-section px-4 py-8 md:px-6 lg:px-8 bg-teal-200">
    <div class="text-700 text-center">
        <div class="text-blue-600 font-bold mb-3"><i class="pi pi-github"></i>&nbsp;POWERED BY @ManojDjs</div>
        
        <div class="card">
    <div class="flex justify-content-center flex-wrap card-container mb-4">
        <div class="flex align-items-center justify-content-center lg:text-3xl text-2xl  text-indigo-200 font-bold  border-round m-4">Years of Experience 4</div>
        <div class="flex align-items-center justify-content-center  lg:text-3xl text-2xl text-indigo-200 font-bold  border-round m-4">Projects {{repo_c}}</div>
        <div class="flex align-items-center justify-content-center   lg:text-3xl text-2xl text-indigo-200 font-bold border-round m-4">Positive feed back 92%</div>
    </div>
</div>
<div class="text-900 font-bold text-5xl mb-4">Join Me For Colloboration</div>

        <Button label="Join Now" icon="pi pi-megaphone" class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" @click="scroll('landing')"></Button>
    </div>
</div>
</template>
<script>

import { mapState } from 'vuex';
import axios from 'axios'
export default{

    data(){
        return{
            "username":'ManojDjs',
            "status": "success",
            "message": "retrieved",
            "repo_c": 40

        }
    },
    methods:{
        get_git(){
            this.username=='ManojDjs'
            console.log(this.username)
            axios.get(this.social.Git+this.social.Git_user
            ).then(resp=>{
                console.log(resp.data)
                this.repo_c=resp.data['public_repos']
        })},
   scroll(id) {  
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      })
    }
    

    },
    created(){
        this.get_git()
     },
     computed:{
      ...mapState([
        'leetcode',
        'social'
        
      ])}

}
</script>