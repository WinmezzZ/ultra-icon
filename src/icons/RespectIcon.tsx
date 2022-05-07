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

const RespectIcon = (p: SVGComponentProps) => {
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M44 42H31l-2.956-13.793a2.002 2.002 0 0 1-.044-.419V15l-7.43-5.964a1.962 1.962 0 0 1 2.19-3.24L32 11l3.947 14.803c.035.131.084.258.144.38L44 42Zm-8-16-8 2"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m19.379 25.52.064.054a2 2 0 0 0 3-.508L24 22.463V17.77L20.32 15l-6.36.846-4.145 8.096c-.05.096-.092.197-.125.3L4 42h11.96V29L17 24.087 17.5 22H19l-.304 1.617a2 2 0 0 0 .683 1.904ZM10 25l6 3"
        />
      </svg>
    </span>
  );
};

RespectIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default RespectIcon;
