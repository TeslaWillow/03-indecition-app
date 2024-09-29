<template>
    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">

            <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />

            <!-- :its-mine="message.itsMine" :message="message.message" :image="message.image"  -->

        </div>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, ref, watchEffect } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';

interface Props {
    messages: ChatMessage[];
}

const { messages } = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);

// Estar pendiente de los cambios en los props.
watchEffect(async () => {
    console.log("Mensajes: " + messages.length);
    await nextTick();
    if (!(chatRef.value?.scrollTo instanceof Function)) { return; }

    chatRef.value?.scrollTo({
        top: chatRef.value.scrollHeight,
        behavior: 'smooth',
    });
});


</script>