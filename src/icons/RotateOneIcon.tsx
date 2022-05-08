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
const RotateOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M44 24c0-11.046-8.954-20-20-20S4 12.954 4 24s8.954 20 20 20c6.957 0 13.084-3.552 16.667-8.94M44 24H30"
      />
      <circle cx={24} cy={24} r={6} fill="null" stroke="#000" strokeWidth={4} />
    </svg>
  );
};

RotateOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RotateOneIcon = withWrapper(RotateOneIconComponent);
export default RotateOneIcon;
