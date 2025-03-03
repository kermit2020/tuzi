<template>
  <div class="nav">
    <template v-for="id1 in [1, 2, 3, 4]" :key="id1">
      <RouterLink :to="{ path: `/item/${id1}` }" class="page">{{ id1 }}</RouterLink>
    </template>
  </div>
</template>
<style>
.nav{
  /* position:absolute; */
  /* display:flex; */
  margin-top: 10px;
  text-align: center;
}
.page{
  
  
  margin: 0 10px;
  width:10px;
}
</style>
