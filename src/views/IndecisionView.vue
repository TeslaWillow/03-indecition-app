<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">

        <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
            <span>La ley</span>
        </div>

        <!-- CHAT MESSAGES BOX -->
        <ChatMessages :messages="messages" />
        <!-- #CHAT MESSAGES BOX -->

        <!-- MESSAGE BOX -->
        <MessageBox @send-message="onMessage($event)" />
        <!-- #MESSAGE BOX -->

    </div>
</template>

<script lang="ts" setup>
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';


const messages = ref<ChatMessage[]>([
    {
        id: new Date().getTime(),
        message: 'Hoy hay tarea?',
        itsMine: true,
    },
    {
        id: new Date().getTime() + 1,
        message: 'NO',
        itsMine: false,
        image: 'https://yesno.wtf/assets/no/13-755222c98795431aa2e7d453ab1e75a1.gif',
    },
]);

const onMessage = (text: string) => {
    messages.value.push({
        id: new Date().getTime(),
        message: text,
        itsMine: true,
    });
};

</script>