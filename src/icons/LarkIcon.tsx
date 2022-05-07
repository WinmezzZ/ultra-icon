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

const LarkIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M41.072 5.994 3.312 16.52l9.074 9.294 8.414.146 9.683-9.44c-.256-.525-.384-.964-.384-1.318 0-.794.312-1.422.796-1.868.83-.763 1.828-.877 2.994-.342l7.183-6.997Zm1.031.734L31.578 44.49l-9.294-9.075L22.138 27l9.374-9.518a2.542 2.542 0 0 0 1.665.495c.902-.05 1.485-.596 1.759-.917a2.35 2.35 0 0 0 .567-1.649 2.566 2.566 0 0 0-.521-1.464l7.12-7.219Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

LarkIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default LarkIcon;
