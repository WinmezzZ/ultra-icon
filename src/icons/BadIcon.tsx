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

const BadIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M9.948 28.807C13.869 37.681 21.933 41.19 28 44c2.632 1.22 3.328-3.717 2.277-6.69-.884-2.502-2.651-5.305-2.651-5.305h7.106a3.5 3.5 0 1 0 0-7.001h1.767a3.5 3.5 0 0 0 0-7.002h-3.535a3.5 3.5 0 0 0 0-7h-2.652A3.5 3.5 0 0 0 30.315 4H19.67c-3.094 0-7.071 1.803-9.723 6.804-2.542 4.794-2.652 12.002 0 18.003Z"
        />
      </svg>
    </span>
  );
};

BadIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BadIcon;
