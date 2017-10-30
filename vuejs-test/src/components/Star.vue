<template>
    <button type="button" class="btn btn-default btn-lg" @click="alert">
        <span class="glyphicon glyphicon-star" aria-hidden="true">{{message}}</span>
    </button>
</template>

<script>
export default {
    name: 'star',
    data() {
        return {
            message: "Star Button"
        }
    },
    methods: {
        alert: function() {
            alert("click start button");
        }
    }
}
</script>