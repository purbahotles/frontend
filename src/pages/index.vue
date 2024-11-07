<template>
</template>

<script setup >
// Define a redirect to /login
import { useRouter } from 'vue-router';

const router = useRouter();
router.push('/login');
</script>
