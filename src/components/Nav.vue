<template>
  <Menubar class="fixed w-full z-2 bg-indigo-800" :model="items">
    <template #start>
      <span
        class="
          inline-flex
          border-circle
          align-items-center
          justify-content-center
          bg-yellow-50
          m-3
        "
        style="width: 40px; height: 40px"
        ><i class="pi pi-cog pi-spin  text-indigo-900" style="font-size: 2rem"></i></span
      ><span class="text-900 font-bold text-3xl md:text-3xl">DE</span>
    </template>

    <template #end> 
      
     <Avatar image="https://avatars.githubusercontent.com/u/22208973?v=4" size="large" shape="circle" class="border-cyan-50 surface-overlay border-1 border-circle"/>
     
    </template>
  </Menubar>
  
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
					label:'Home',
					icon:'pi pi-fw pi-home',
					to:'/'
				
                },
                {
					label:'Work',
					icon:'pi pi-fw pi-briefcase',
					to:'/about'
					
                },
				
                {
					label:'Projects',
					icon:'pi pi-fw pi-bolt',
					
				}
			]
					
        
    }
}
}
</script>
<style>
.p-menuitem-content{
	text-align: center
}
.p-menuitem-content{
	display: inline-block;
}
</style>