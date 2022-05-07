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

const NinePointsConnectedIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m26.829 37.172 10.343-10.344m-16 0L10.829 37.172m16-16 10.343-10.344M10.829 21.172l10.343-10.344"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm16 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm16 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-16 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-16 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0-16a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm16 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        />
      </svg>
    </span>
  );
};

NinePointsConnectedIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default NinePointsConnectedIcon;
