export type MessageType = 'IA' | 'User';

export interface Dialog {
   text: string;
   // Component: ((props: any) => ReactElement )| null,
   component: string | null;
   type: MessageType;
}
