/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const MessageUnreadIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M44 16v20H29l-5 5-5-5H4V6h30"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M23 20h2.003m7.998 0H35m-21.999 0H15" />
      <circle cx={43} cy={7} r={3} fill="#000" />
    </svg>
  );
};

MessageUnreadIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MessageUnreadIcon = withWrapper(MessageUnreadIconComponent);
export default MessageUnreadIcon;
