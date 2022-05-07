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

const FileSettingsOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12"
        />
        <circle cx={34} cy={36} r={5} fill="null" stroke="#000" strokeWidth={4} />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M34 28v3m0 10v3m5.828-14-2.121 2.121M29.828 40l-2.121 2.121M28 30l2.121 2.121M38 40l2.121 2.121M26 36h3m10 0h3M30 4v10h10"
        />
      </svg>
    </span>
  );
};

FileSettingsOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FileSettingsOneIcon;
