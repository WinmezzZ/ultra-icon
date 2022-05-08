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
const CloseRemindIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m7 6.5 34 38" />
      <path fill="#000" d="M24 2a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M17.07 38a7.002 7.002 0 0 0 13.858 0H17.07ZM30 38H6s5.57-4.641 5.976-17.5M42 38s-6-5-6-19c0-6.627-5.373-12-12-12-2.54 0-4.896.79-6.836 2.136"
      />
    </svg>
  );
};

CloseRemindIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CloseRemindIcon = withWrapper(CloseRemindIconComponent);
export default CloseRemindIcon;
