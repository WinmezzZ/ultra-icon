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

const UnlinkIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m25.893 16.03-7.779-7.778c-2.863-2.863-7.41-2.96-10.157-.213-2.746 2.746-2.65 7.293.214 10.157l7.778 7.778m15.967-3.904 7.778 7.779c2.864 2.864 3.235 7.274.214 10.157s-7.294 2.65-10.157-.214l-7.779-7.778m-.734-10.938-3.889-3.89M30.313 30.15l-3.889-3.889"
        />
      </svg>
    </span>
  );
};

UnlinkIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default UnlinkIcon;
