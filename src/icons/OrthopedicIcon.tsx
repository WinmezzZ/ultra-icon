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

const OrthopedicIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m23.028 36 10.975 6.999V24c7.674-5.21 10.493-10.022 8.457-14.434-3.055-6.619-8-6.182-11.453-4.564C28.704 6.08 27.035 9.093 26 14.04c-3.038-6.466-7.305-9.7-12.8-9.7-8.242 0-8.906 9.724-7.725 12.105 1.181 2.381 2.298 3.666 7.526 7.554-.075 11.563.405 17.782 1.442 18.656 1.9 1.472 4.762-.746 8.585-6.656Z"
          clipRule="evenodd"
        />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M27 25v6" />
      </svg>
    </span>
  );
};

OrthopedicIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default OrthopedicIcon;
