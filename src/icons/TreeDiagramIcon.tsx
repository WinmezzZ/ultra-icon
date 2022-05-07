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

const TreeDiagramIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <circle cx={10} cy={24} r={4} fill="null" stroke="#000" strokeWidth={4} />
        <circle cx={38} cy={10} r={4} fill="null" stroke="#000" strokeWidth={4} />
        <circle cx={38} cy={24} r={4} fill="null" stroke="#000" strokeWidth={4} />
        <circle cx={38} cy={38} r={4} fill="null" stroke="#000" strokeWidth={4} />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M34 38H22V10h12M14 24h20" />
      </svg>
    </span>
  );
};

TreeDiagramIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default TreeDiagramIcon;
