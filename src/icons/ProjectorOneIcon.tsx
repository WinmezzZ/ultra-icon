/**
 * These code auto generated by UltraIcon
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const defaultProps = {
  size: 24,
};

const ProjectorOneIcon = (p: SVGComponentProps) => {
  const { size, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M21 21V10H10v11" />
        <rect width={40} height={16} x={4} y={21} fill="#2F88FF" stroke="#000" strokeWidth={4} rx={2} />
        <rect width={4} height={4} x={14} y={27} fill="#fff" rx={2} />
        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M28 29h8" />
      </svg>
    </span>
  );
};

ProjectorOneIcon.propTypes = {
  size: PropTypes.number,
};
export default ProjectorOneIcon;
