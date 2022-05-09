/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const ChatPollFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h18zm-8 4h-2v8h2V7zm4 2h-2v6h2V9zm-8 2H7v4h2v-4z" />
    </svg>
  );
};

ChatPollFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ChatPollFillIcon = withWrapper(ChatPollFillIconComponent);
export default ChatPollFillIcon;
