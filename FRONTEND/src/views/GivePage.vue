<template>
	<section class="p-10 lg:pt-30 lg:w-[60%] md:mx-auto">
		<div v-bind="getAOSAttributes({ type: 'fade' })">
			<Image imageSrc="src/assets/images/PLACEHOLDER IMAGE.jpeg" classList="rounded-md" />
		</div>
	</section>
	<section class="px-10 pb-10 lg:w-[80%] md:mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-5">
		<div v-bind="getAOSAttributes()">
			<h1 class="text-lg lg:text-xl italic font-semibold text-center md:leading-loose">“Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over, shall men give into your bosom. For with the same measure that ye mete withal it shall be measured to you again.” <br> (Luke 6:38).</h1>
		</div>
		<div v-bind="getAOSAttributes({ delay: 300 })">
			<div class="border-1 border-gray-400 relative p-4 mt-3 grid grid-cols-1 gap-5">
				<div class="absolute right-[-25px] top-[-22px]">
					<FontAwesomeIcon
        				:icon="['fas', 'credit-card']"
        				class="text-5xl text-purple-950"
      				/>	
				</div>
				<h1 class="uppercase font-semibold">Direct Bank Transfer</h1>
				<div>
					<h1 class="text-gray-700 font-semibold">Bank Name:</h1>
					<h2 class="text-gray-700 uppercase">First Bank Of Nigeria</h2>
				</div>
				<div>
					<h1 class="text-gray-700 font-semibold">Account Number:</h1>
					<h2 class="text-gray-700 tracking-wider" ref="accountNumberRef">
						2021432882
						<FontAwesomeIcon
							:class="[copied ? 'text-purple-900' : '']"
							class="ml-1 cursor-pointer"
	        				:icon="copied ? ['fas', 'check-circle'] : ['fas', 'copy']"
	        				@click="copyToClipboard"
	      				/>
	      				<span class="text-purple-900 ml-1 font-semibold italic" v-if="copied">copied</span>
	      			</h2>
				</div>
				<div>
					<h1 class="text-gray-700 font-semibold">Account Name:</h1>
					<h2 class="uppercase text-gray-700">Foursquare Gospel Church Ikate</h2>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from "vue";
import Image from "../components/Image.vue";
import { getAOSAttributes } from "../utils/animation.js";

const accountNumberRef = ref(null);
const copied = ref(false);

const copyToClipboard = () => {
  navigator.clipboard.writeText(accountNumberRef.value.innerText).then(() => {
    copied.value = true;
    setTimeout(() => {
    	copied.value = false;
    }, 5000);
  }).catch(err => {
    console.error("Failed to copy text", err);
    copied.value = false;
  });
}
</script>