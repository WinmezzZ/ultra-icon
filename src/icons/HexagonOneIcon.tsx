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

const HexagonOneIcon = (p: SVGComponentProps) => {
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
          stroke="#000"
          strokeWidth={4}
          d="m23.029 43.46-16-8.889A2 2 0 0 1 6 32.824V15.177a2 2 0 0 1 1.029-1.748l16-8.89a2 2 0 0 1 1.942 0l16 8.89A2 2 0 0 1 42 15.176v17.646a2 2 0 0 1-1.029 1.748l-16 8.89a2 2 0 0 1-1.942 0Z"
        />
      </svg>
    </span>
  );
};

HexagonOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HexagonOneIcon;
