const Foo = () => Promise.resolve({ 
	<template>
	  <el-row :gutter="10">
	  	<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
	  		<div class="foo">
	  			<h1>vuex Test</h1>
	  			Clicked: {{ getCount }} times
	  			<el-button type="primary" @click="increment">+</el-button>
	  			<el-button type="primary" @click="decrement">-</el-button>
	  		</div>
	  	</el-col>
	  </el-row>
	</template>

	<script>
		import { mapGetters, mapActions } from 'vuex'

		export default {
		  computed: {
		    ...mapGetters([
		      'getCount'
		      // ...
		    ])
		  },
		  methods: {
		    ...mapActions([
		      'increment',
		      'decrement'
		    ])
		  }
		}
	</script>

	<!-- Add "scoped" attribute to limit CSS to this component only -->
	<style scoped>

	</style>

})
