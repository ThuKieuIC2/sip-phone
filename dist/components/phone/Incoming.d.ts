import * as React from 'react';
import { Invitation } from 'sip.js';
interface Props {
    session: Invitation;
    acceptCall: Function;
    declineCall: Function;
}
declare class Incoming extends React.Component<Props> {
    componentDidMount(): void;
    handleAccept(): void;
    handleDecline(): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof Incoming, Pick<React.ClassAttributes<Incoming> & Props, "session" | "ref" | "key">>;
export default _default;
