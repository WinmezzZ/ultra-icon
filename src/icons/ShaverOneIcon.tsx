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
const ShaverOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M36 14H12V6.02L16.474 4l4.245 2.02L24.193 4l3.474 2.02L31.912 4 36 6.02V14Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M12 14v19c0 15 24 15 24 0V14M20 35h8"
      />
      <circle cx={24} cy={25} r={4} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
};

ShaverOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ShaverOneIcon = withWrapper(ShaverOneIconComponent);
export default ShaverOneIcon;
