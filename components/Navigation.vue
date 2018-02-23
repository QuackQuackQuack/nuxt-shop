<template>
  <div class="topnav responsive">
    <a href="" class="logo">Vue Shoes Eshop</a>
    <nav>
      <ul>
        <li v-for="navigation in $store.state.initialData.navigation" :key="navigation.link">
          <a :href="navigation.link">{{navigation.content}}</a>
        </li>
      </ul>
    </nav>
    <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
  </div>
</template>