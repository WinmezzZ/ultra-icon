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

const DumbbellIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M14 13.6c0-1.436-1.343-2.6-3-2.6s-3 1.164-3 2.6v20.8c0 1.436 1.343 2.6 3 2.6s3-1.164 3-2.6V13.6Zm26 0c0-1.436-1.343-2.6-3-2.6s-3 1.164-3 2.6v20.8c0 1.436 1.343 2.6 3 2.6s3-1.164 3-2.6V13.6ZM8 18.667C8 17.194 6.657 16 5 16s-3 1.194-3 2.667v10.666C2 30.806 3.343 32 5 32s3-1.194 3-2.667V18.667Zm38 0C46 17.194 44.657 16 43 16s-3 1.194-3 2.667v10.666C40 30.806 41.343 32 43 32s3-1.194 3-2.667V18.667ZM14 27h20v-6H14z"
        />
      </svg>
    </span>
  );
};

DumbbellIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DumbbellIcon;
