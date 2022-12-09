<template>
    <div class="Face surface-0 box border-round shadow-2">
    <!-- <div class="text-5xl font-bold text-100 text-indigo-400  text-center m-5 pt-3 uppercase">About Me</div> -->
    <div class="grid my-6 mx-0 md:mx-6 md:my-0  max-h-auto p-4 border-round">
        <div class="col-12 md:col-6 lg:col-6  my-auto  ">
                <div class=" text-700 text-center box border-round">
                    <section>
                        <div class="text-xl md:text-4xl text-4xl text-justify pb-2 text-indigo-400 font-bold">Who am i?</div>
                       <div class="md:text-xl text-justify text-900 font-bold">{{about['Introduction']}}</div>
            
            
                    </section>
                </div>
            
            
            </div>
            <div class="col-12 md:col-6 lg:col-6 md:inline-flex max-h-auto ">
                        <div class="justify-content-evenly align-content-evenly w-auto h-auto py-6 px-0 md:px-6 md:py-0 ">
                            <img src="@/assets/Dv.gif" class='shadow-8' alt="profile" style="width:100%;display: block;border-radius: 10%;" id="image" >
                        </div>
                    
            </div>
           
    </div>
    <div class="grid my-6 mx-0 md:mx-6 md:my-0  max-h-auto p-4 border-round">
      <div class="col-12 md:col-6 lg:col-6 md:inline-flex max-h-auto ">
                        <div class="justify-content-evenly align-content-evenly w-auto h-auto py-6 px-0 md:px-6 md:py-0 ">
                            <img src="@/assets/Dv2.gif" class='shadow-8' alt="profile" style="width:100%;display: block;border-radius: 10%;" id="image" >
                        </div>
                    
            </div>
        <div class="col-12 md:col-6 lg:col-6  my-auto  ">
            
                <div class=" text-700 text-center box border-round">
                    <section>
                        <div class="text-xl md:text-4xl text-justify pb-2 text-indigo-400 font-bold">What exactly i do?</div>
                       
                       <ul class="list-disc"  v-for="item in about.Roles">
                           <li class="text-left md:text-xl text-900 font-bold">
                              {{item}}
                           </li>
                       </ul>
            
            
                    </section>
                </div>
            
            
            </div>
            
           
    </div>
    </div>

</template>
<script>
  // @ is an alias to /src
  import { mapState } from 'vuex';
  export default {
    name: 'HomeView',
    computed:{
      ...mapState([
        'about',
        
      ])}
    
  }
  </script>


<style>
</style>