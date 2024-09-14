<template>
    <div class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">

            <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />

            <!-- :its-mine="message.itsMine" :message="message.message" :image="message.image"  -->

        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';

interface Porps {
    messages: ChatMessage[];
}

defineProps<Porps>();

</script>