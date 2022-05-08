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
const MicroscopeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M26 44c4.346-3.008 6.663-6.049 6.95-9.122.286-3.073-.642-5.366-2.784-6.878"
      />
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth={4}
        d="M27.655 28.223a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
        clipRule="evenodd"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m24.288 27-5.51 5.577-9.192-9.192L27.97 5l9.192 9.192-6.187 6.187"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m6.558 28.136 7.861 7.678M6 44h36" />
    </svg>
  );
};

MicroscopeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MicroscopeIcon = withWrapper(MicroscopeIconComponent);
export default MicroscopeIcon;
