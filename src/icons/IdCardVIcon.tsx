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
const IdCardVIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect width={32} height={40} x={8} y={4} stroke="#000" strokeLinejoin="round" strokeWidth={4} rx={2} />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M24 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M30 25a6 6 0 0 0-12 0m0 6h12m-12 6h7"
      />
    </svg>
  );
};

IdCardVIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const IdCardVIcon = withWrapper(IdCardVIconComponent);
export default IdCardVIcon;
