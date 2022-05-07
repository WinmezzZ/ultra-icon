/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const defaultProps = {
  size: 24,
};

const StorageCardOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M33 4H15v8h18V4Z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M14.588 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4.588"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m27 20-8 8.001h10.004l-8.004 8"
        />
        <path
          fill="#fff"
          fillOpacity={0.01}
          d="M0 0v-1h-1v1h1Zm48 0h1v-1h-1v1Zm0 48v1h1v-1h-1ZM0 48h-1v1h1v-1ZM0 1h48v-2H0v2Zm47-1v48h2V0h-2Zm1 47H0v2h48v-2ZM1 48V0h-2v48h2Z"
        />
      </svg>
    </span>
  );
};

StorageCardOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default StorageCardOneIcon;
