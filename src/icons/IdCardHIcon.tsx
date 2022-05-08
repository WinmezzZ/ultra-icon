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
const IdCardHIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect width={40} height={32} x={4} y={8} stroke="#000" strokeLinejoin="round" strokeWidth={4} rx={2} />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M17 25a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M23 31a6 6 0 0 0-12 0m17-11h8m-6 8h6"
      />
    </svg>
  );
};

IdCardHIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const IdCardHIcon = withWrapper(IdCardHIconComponent);
export default IdCardHIcon;
