<template>
	<div :style="{ height: calculatedHeight }">
		<p v-html="formattedString" class="mb-2"></p>
		<span v-show="text.length > maxChars">
			<a :href="link" id="readmore" v-show="!isReadMore" v-on:click="triggerReadMore($event, true)">{{moreStr}}</a>
			<a :href="link" id="readmore" v-show="isReadMore" v-on:click="triggerReadMore($event, false)">{{lessStr}}</a>
		</span>
	</div>
</template>

<script>
export default {
  props: {
    moreStr: {
      type: String,
      default: "Lire la suite"
    },
    lessStr: {
      type: String,
      default: "Lire moins"
    },
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: "#"
    },
    maxChars: {
      type: Number,
      default: 100
    },
    height: {
      type: String,
      default: 100
    },
  },
  data() {
    return {
      isReadMore: false,
    };
  },
  computed: {
    formattedString() {
      var val_container = this.text;
      if (!this.isReadMore && this.text.length > this.maxChars) {
        val_container = val_container.substring(0, this.maxChars) + "...";
      }
      return val_container;
    },
    calculatedHeight () {
       if (!this.isReadMore && this.text.length > this.maxChars) {
           return this.height
       }
       return '100%'
    }
  },
  methods: {
    triggerReadMore(e, b) {
      if (this.link == "#") {
        e.preventDefault();
      }
      if (this.lessStr !== null || this.lessStr !== "") this.isReadMore = b;
    }
  }
};
</script>