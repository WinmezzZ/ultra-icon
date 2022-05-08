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
const BitcoinIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <circle
        cx={24}
        cy={24}
        r={20}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <path fill="null" d="M20 16h7a4 4 0 0 1 0 8h-7v-8Z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20 16v8h7a4 4 0 0 0 4-4v0a4 4 0 0 0-4-4h-2m-5 0h-4m4 0v-4m0 4h5m0 0v-4"
      />
      <path fill="null" d="M20 24h9a4 4 0 0 1 0 8h-9v-8Z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20 32v-8h9a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-4m-5 0v4m0-4h-4 9m-5 0h5m0 0v4"
      />
    </svg>
  );
};

BitcoinIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BitcoinIcon = withWrapper(BitcoinIconComponent);
export default BitcoinIcon;
