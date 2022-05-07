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

const BadOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m35.911 6.456 5.37 19A2 2 0 0 1 39.356 28H27.875c-.704 0-1.224.654-1.066 1.34l.5 2.164c.458 1.985.605 4.03.436 6.06l-.092 1.103A5.02 5.02 0 0 1 26.2 41.8a4.096 4.096 0 0 1-2.896 1.2h-.24a1.809 1.809 0 0 1-1.58-.93l-2.659-4.785a12.962 12.962 0 0 0-5.124-5.084l-6.659-3.633A2 2 0 0 1 6 26.814V7a2 2 0 0 1 2-2h25.987a2 2 0 0 1 1.924 1.456Z"
        />
      </svg>
    </span>
  );
};

BadOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BadOneIcon;
