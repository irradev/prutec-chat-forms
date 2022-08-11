export type MessageType = 'IA' | 'User' | 'UI';

export interface Dialog {
   text: string | null;
   component: string | null;
   type: MessageType;
}
