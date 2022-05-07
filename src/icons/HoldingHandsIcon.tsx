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

const HoldingHandsIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="m4.46 12.84 17.775-3.778a2 2 0 0 1 1.506.28l8.098 5.259a2 2 0 0 0 1.505.279l4.08-.868a2 2 0 0 1 2.373 1.541l.624 2.934a2 2 0 0 1-1.54 2.373l-7.016 1.49a2 2 0 0 1-1.505-.278l-8.099-5.26a2 2 0 0 0-1.505-.279l-3.102.66M43.54 33.16l-17.775 3.778a2 2 0 0 1-1.505-.28l-8.1-5.259a2 2 0 0 0-1.504-.279l-4.08.868a2 2 0 0 1-2.373-1.54l-.624-2.935a2 2 0 0 1 1.54-2.372l7.016-1.491a2 2 0 0 1 1.505.279l8.099 5.259a2 2 0 0 0 1.505.279l3.102-.66"
        />
      </svg>
    </span>
  );
};

HoldingHandsIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HoldingHandsIcon;
