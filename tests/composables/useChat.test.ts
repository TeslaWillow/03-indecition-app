import { useChat } from '@/composables/useChat';
import { describe, expect, test, vi } from 'vitest';

describe('useChat', () => {
  test('Add message correctly when onMessage is called', async () => {
    const text = 'Hola mundo';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(1);
    expect(messages.value[0].itsMine).toBe(true);
    expect(messages.value[0].message).toBe(text);
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
  });

  test('Do nothing if text is empty', async () => {
    const text = '';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(0);
  });

  test('Get her response correctly when message ends w/ ?', async () => {
    const text = 'any?';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    await new Promise((s) => setTimeout(s, 2000));

    const [myMessage, theirMessage] = messages.value;

    expect(messages.value.length).toBe(2);
    expect(theirMessage.itsMine).toBe(false);
    expect(myMessage.itsMine).toBe(true);
    expect(theirMessage).toEqual({
      id: expect.any(Number),
      image: expect.any(String),
      message: expect.any(String),
      itsMine: false,
    });
  });

  test('Mock response - fetch api', async () => {
    const mockResponse = { answer: 'yes', image: 'example.jpg' };

    (window as any).fetch = vi.fn(async () => ({
      // return implicito
      json: async () => mockResponse, // añadir .json al fetch
    }));

    const text = '¿Quieres comida?';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    await new Promise((s) => setTimeout(s, 1600));

    const [, theirMessage] = messages.value;

    expect(theirMessage).toEqual({
      id: expect.any(Number),
      image: mockResponse.image,
      message: mockResponse.answer,
      itsMine: false,
    });
  });
});
