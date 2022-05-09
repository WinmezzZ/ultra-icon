/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const ChatQuoteLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h18zm-1 2H4v13.385L5.763 17H20V5zm-9.485 2.412.447.688c-1.668.903-1.639 2.352-1.639 2.664.155-.02.318-.024.48-.009a1.761 1.761 0 0 1 1.613 1.745 1.75 1.75 0 0 1-1.75 1.75c-.537 0-1.05-.245-1.374-.59-.515-.546-.792-1.16-.792-2.155 0-1.75 1.228-3.318 3.015-4.093zm5 0 .447.688c-1.668.903-1.639 2.352-1.639 2.664.155-.02.318-.024.48-.009a1.761 1.761 0 0 1 1.613 1.745 1.75 1.75 0 0 1-1.75 1.75c-.537 0-1.05-.245-1.374-.59-.515-.546-.792-1.16-.792-2.155 0-1.75 1.228-3.318 3.015-4.093z" />
    </svg>
  );
};

ChatQuoteLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ChatQuoteLineIcon = withWrapper(ChatQuoteLineIconComponent);
export default ChatQuoteLineIcon;
