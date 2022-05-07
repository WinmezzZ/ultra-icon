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

const FileSettingsIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10 44h28a2 2 0 0 0 2-2V14L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2Z"
        />
        <circle cx={24} cy={27} r={5} fill="null" stroke="#000" strokeWidth={4} />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 19v3m0 10v3m5.828-14-2.121 2.121M19.828 31l-2.121 2.121M18 21l2.121 2.121M28 31l2.121 2.121M16 27h3m10 0h3M30 4v10h10"
        />
      </svg>
    </span>
  );
};

FileSettingsIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FileSettingsIcon;
