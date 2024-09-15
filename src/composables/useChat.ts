import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no-response';
import { ref } from 'vue';

export const getHerResponse = async () => {
  // https://yesno.wtf/api
  const resp = await fetch('https://yesno.wtf/api');
  const data = (await resp.json()) as YesNoResponse;

  return data;
};

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const onMessage = async (text: string) => {
    if (text.length <= 0) return;

    messages.value.push({
      id: new Date().getTime(),
      message: text,
      itsMine: true,
    });

    // Evaluate if msg ends with ?
    if (!text.endsWith('?')) return;

    await sleep(1.5);

    const { answer, image } = await getHerResponse();
    messages.value.push({
      id: new Date().getTime(),
      message: answer,
      itsMine: false,
      image: image,
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
