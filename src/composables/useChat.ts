import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const onMessage = (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      message: text,
      itsMine: true,
    });
  };
  return {
    // Properties
    messages,
    // Messages
    onMessage,
  };
};

/**
 * 
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
 */
