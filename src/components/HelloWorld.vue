<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <div class="hello">
      <h3> Your Weather Projecta Creators:</h3>
      </div>
      <ul>
        <li v-for="creator in creators">
          {{creator.firstname}} {{creator.lastname}}
        </li>
      </ul>
    </div>
    <div class="hello">
    <ul>
    <li><router-link to="oneDay">{{ onedaymsg }}</router-link></h2></li>
    <li><router-link to="./HelloWorld">{{ tendaymsg }}</router-link></h2></li>
    </ul>
    </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Weather Projecta',
      onedaymsg: 'Click for your One Day Forecast!',
      tendaymsg: 'Click for your Ten Day Forecast!',
      creators: [
        {firstname: 'Joanthan', lastname: 'Guest'},
        {firstname: 'Jennifer', lastname: 'Guest'},
        {firstname: 'Violet', lastname: 'Guest'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
