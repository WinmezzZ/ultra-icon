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
const AlignTextCenterOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <rect
        width={36}
        height={36}
        x={6}
        y={6}
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={3}
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M30 24H18m16-9H14m20 18H14" />
    </svg>
  );
};

AlignTextCenterOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AlignTextCenterOneIcon = withWrapper(AlignTextCenterOneIconComponent);
export default AlignTextCenterOneIcon;
