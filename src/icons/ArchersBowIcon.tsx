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

const ArchersBowIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
          <path d="m40.85 43.92-1.574-.314c-2.35-.47-3.42-3.607-2.673-5.884 1.954-5.96.522-13.61-.27-16.913-.246-1.024-1.058-1.794-2.08-2.05l-2.263-.565a3 3 0 0 1-2.183-2.183l-.565-2.262c-.256-1.023-1.025-1.834-2.05-2.08-3.302-.792-10.954-2.225-16.913-.27-2.276.747-5.413-.324-5.883-2.674L4.08 7.151M6 11l32 32m-26-7L43 5" />
        </g>
        <defs>
          <clipPath id="prefix__a">
            <path fill="#fff" d="M0 0h48v48H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

ArchersBowIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ArchersBowIcon;
