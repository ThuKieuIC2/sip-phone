/// <reference types="react" />
import { SipConfig, SipCredentials, PhoneConfig } from './models';
interface Props {
    width: number;
    height: number;
    name: string;
    phoneConfig: PhoneConfig;
    sipCredentials: SipCredentials;
    sipConfig: SipConfig;
    containerStyle: any;
}
export declare const phoneStore: import("redux").Store<import("redux-persist/es/persistReducer").PersistPartial, import("redux").Action<any>> & {
    dispatch: unknown;
};
export declare const ReactSipPhone: ({ name, width, height, phoneConfig, sipConfig, sipCredentials, containerStyle }: Props) => JSX.Element;
export {};
