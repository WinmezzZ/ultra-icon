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

const WomanIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M32.485 24.485A11.962 11.962 0 0 0 36 16c0-6.627-5.373-12-12-12S12 9.373 12 16c0 3.314 1.343 6.314 3.515 8.485"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m6 44 1-5 11-8 6 6 6-6 11 8 1 5"
        />
        <path
          stroke="#000"
          strokeWidth={4}
          d="M12.993 21.007c.013-4.11.682-7.113 2.007-9.007 1.988-2.841 3.387-2.632 4.405-2.19 1.019.443 1.618 3.334 3.319 4.168 1.7.833 6.054.936 7.545 1.939 1.49 1.002 4.9 2.867 4.05 6.051"
        />
      </svg>
    </span>
  );
};

WomanIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default WomanIcon;
