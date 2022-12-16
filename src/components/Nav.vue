<template>
  <Menubar class=" fixed w-full z-2 bg-indigo-800">
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
        ><i class="pi pi-cog pi-spin text-xl text-bluegray-600"></i></span
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
					label:'File',
					icon:'pi pi-fw pi-file',
					items:[
						{
							label:'New',
							icon:'pi pi-fw pi-plus',
							items:[
								{
									label:'Bookmark',
									icon:'pi pi-fw pi-bookmark'
								},
								{
									label:'Video',
									icon:'pi pi-fw pi-video'
								}
							]
						},
						{
							label:'Delete',
							icon:'pi pi-fw pi-trash'
						},
						{
							separator:true
						},
						{
							label:'Export',
							icon:'pi pi-fw pi-external-link'
						}
					]
                },
                {
					label:'Edit',
					icon:'pi pi-fw pi-pencil',
					items:[
						{
							label:'Left',
							icon:'pi pi-fw pi-align-left'
						},
						{
							label:'Right',
							icon:'pi pi-fw pi-align-right'
						},
						{
							label:'Center',
							icon:'pi pi-fw pi-align-center'
						},
						{
							label:'Justify',
							icon:'pi pi-fw pi-align-justify'
						}
					]
                },
                {
					label:'Users',
					icon:'pi pi-fw pi-user',
					items:[
						{
							label:'New',
							icon:'pi pi-fw pi-user-plus',

						},
						{
							label:'Delete',
							icon:'pi pi-fw pi-user-minus',

						},
						{
							label:'Search',
							icon:'pi pi-fw pi-users',
							items:[
								{
									label:'Filter',
									icon:'pi pi-fw pi-filter',
									items:[
										{
											label:'Print',
											icon:'pi pi-fw pi-print'
										}
									]
								},
								{
									icon:'pi pi-fw pi-bars',
									label:'List'
								}
							]
						}
					]
                },
                {
					label:'Events',
					icon:'pi pi-fw pi-calendar',
					items:[
						{
							label:'Edit',
							icon:'pi pi-fw pi-pencil',
							items:[
								{
									label:'Save',
									icon:'pi pi-fw pi-calendar-plus'
								},
								{
									label:'Delete',
									icon:'pi pi-fw pi-calendar-minus'
								}
							]
						},
						{
							label:'Archieve',
							icon:'pi pi-fw pi-calendar-times',
							items:[
								{
									label:'Remove',
									icon:'pi pi-fw pi-calendar-minus'
								}
							]
						}
					]
                },
                {
					label:'Quit',
					icon:'pi pi-fw pi-power-off'
                }
            ]
        }
    }
}
</script>