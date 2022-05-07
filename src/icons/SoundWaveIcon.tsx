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

const SoundWaveIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M6 14v-2a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v2m-10 4v12m8-10v8M24 15v18m-8-15v12M8 20v8m-2 6v2a6 6 0 0 0 6 6h24a6 6 0 0 0 6-6v-2"
        />
      </svg>
    </span>
  );
};

SoundWaveIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SoundWaveIcon;
