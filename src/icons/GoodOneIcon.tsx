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

const GoodOneIcon = (p: SVGComponentProps) => {
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
          d="m35.911 41.544 5.37-19A2 2 0 0 0 39.356 20H27.875a1.094 1.094 0 0 1-1.066-1.34l.5-2.164c.458-1.985.605-4.03.436-6.06l-.092-1.103A5.02 5.02 0 0 0 26.2 6.2 4.096 4.096 0 0 0 23.304 5h-.24c-.657 0-1.262.356-1.58.93l-2.659 4.785a12.962 12.962 0 0 1-5.124 5.085l-6.659 3.63A2 2 0 0 0 6 21.188V41a2 2 0 0 0 2 2h25.987a2 2 0 0 0 1.924-1.456Z"
        />
      </svg>
    </span>
  );
};

GoodOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default GoodOneIcon;
