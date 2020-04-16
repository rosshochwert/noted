<template>
	<div>
		<div class="row animated fadeIn fast mt-3">
			<div class="col-12 text-center">
				<h2 class="font-weight-light">How long would you like us to play music for?</h2>
			</div>
		</div>
		<div class="row animated fadeIn fast mt-2">
			<div class="col text-center">
				<div class="card">
					<h2 class="font-weight-light">30 <br />mins</h2>
				</div>
			</div>

			<div class="col text-center">
				<div class="card">
					<h2 class="font-weight-light">15 <br />mins</h2>
				</div>
			</div>

			<div class="col text-center">
				<div class="card">
					<h2 class="font-weight-light">10 <br />mins</h2>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Sleep',
		data: function(){
			return {
				scrolled: false
			}
		}
	}
</script>