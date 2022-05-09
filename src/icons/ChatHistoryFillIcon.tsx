/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const ChatHistoryFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.957 9.957 0 0 1-4.708-1.175L2 22l1.176-5.29A9.966 9.966 0 0 1 2 12C2 6.477 6.477 2 12 2zm1 5h-2v7h6v-2h-4V7z" />
    </svg>
  );
};

ChatHistoryFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ChatHistoryFillIcon = withWrapper(ChatHistoryFillIconComponent);
export default ChatHistoryFillIcon;
