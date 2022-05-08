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
const VialIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M30 33V4H18v28.968M30 14h-5m5 6h-5"
        />
        <path
          fill="null"
          fillRule="nonzero"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M18 33v4.699C18 41.179 20.686 44 24 44s6-2.821 6-6.301v-4.635L18 33Z"
        />
      </g>
    </svg>
  );
};

VialIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const VialIcon = withWrapper(VialIconComponent);
export default VialIcon;
