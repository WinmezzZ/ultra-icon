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

const ConcernIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M10.858 9.858A19.937 19.937 0 0 0 5 24a19.937 19.937 0 0 0 5.858 14.142m28.284 0A19.937 19.937 0 0 0 45 24a19.937 19.937 0 0 0-5.858-14.142M34.9 33.9A13.956 13.956 0 0 0 39 24a13.96 13.96 0 0 0-4.1-9.9m-19.8 0A13.956 13.956 0 0 0 11 24a13.96 13.96 0 0 0 4.1 9.9"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={3.5}
          d="M28.182 20C30.29 20 32 21.612 32 23.6c0 2.588-2.546 4.8-3.818 6-.849.8-1.91 1.6-3.182 2.4-1.273-.8-2.333-1.6-3.182-2.4-1.273-1.2-3.818-3.412-3.818-6 0-1.988 1.71-3.6 3.818-3.6 1.328 0 2.498.64 3.182 1.61.684-.97 1.854-1.61 3.182-1.61Z"
        />
      </svg>
    </span>
  );
};

ConcernIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ConcernIcon;
