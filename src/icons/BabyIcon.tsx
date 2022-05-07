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

const BabyIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={4}
          d="M24 43.6c8.432 0 15.56-6.681 17.894-14.35C42.418 27.525 46 27.525 46 23.8c0-3.726-3.616-3.94-4.201-5.752C39.372 10.535 32.32 4 24 4 15.675 4 8.62 10.54 6.197 18.06 5.615 19.87 2 20.01 2 23.8s3.592 3.79 4.135 5.542C8.497 36.964 15.602 43.6 24 43.6Z"
          clipRule="evenodd"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M41.799 18.048C39.372 10.535 32.32 4 24 4" />
        <path
          fill="#fff"
          stroke="#333"
          d="M19.1 21.6c0 .826-.224 1.551-.56 2.056-.339.508-.752.744-1.14.744-.388 0-.8-.236-1.14-.744-.336-.505-.56-1.23-.56-2.056 0-.827.224-1.552.56-2.056.34-.508.752-.744 1.14-.744.389 0 .801.236 1.14.744.336.504.56 1.23.56 2.056Zm13.2 0c0 .826-.224 1.551-.56 2.056-.339.508-.752.744-1.14.744-.388 0-.801-.236-1.14-.744-.336-.505-.56-1.23-.56-2.056 0-.827.224-1.552.56-2.056.339-.508.752-.744 1.14-.744.388 0 .801.236 1.14.744.336.504.56 1.23.56 2.056Z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M18.498 31.75c1.93 1.3 3.768 1.95 5.511 1.95 1.742 0 3.469-.649 5.18-1.946"
          clipRule="evenodd"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeWidth={4}
          d="M18.498 31.75c1.93 1.3 3.768 1.95 5.511 1.95 1.742 0 3.469-.649 5.18-1.946"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M31.728 6.2c.268 1.934-.321 3.346-1.769 4.239-1.447.892-3.799 1.31-7.055 1.254"
        />
      </svg>
    </span>
  );
};

BabyIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BabyIcon;
