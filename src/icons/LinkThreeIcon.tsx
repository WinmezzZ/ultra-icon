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
const LinkThreeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect
        width={14}
        height={18}
        x={34.607}
        y={3.494}
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
        transform="rotate(45 34.607 3.494)"
      />
      <rect
        width={14}
        height={18}
        x={16.223}
        y={21.879}
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
        transform="rotate(45 16.223 21.879)"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M31.072 16.929 16.93 31.071"
      />
    </svg>
  );
};

LinkThreeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const LinkThreeIcon = withWrapper(LinkThreeIconComponent);
export default LinkThreeIcon;
