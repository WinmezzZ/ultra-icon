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
const CdIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <circle cx={24} cy={24} r={18} stroke="#000" strokeWidth={4} />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M13 24c0-6.075 4.925-11 11-11" />
      <circle cx={24} cy={24} r={5} fill="null" stroke="#000" strokeWidth={4} />
    </svg>
  );
};

CdIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CdIcon = withWrapper(CdIconComponent);
export default CdIcon;
