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

const CustomerIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M8.61 36.987c-3.288-3.609-5.288-8.372-5.288-13.596 0-11.264 9.296-20.395 20.764-20.395S44.85 12.127 44.85 23.39c0 7.965-4.65 14.86-11.426 18.218a29.983 29.983 0 0 1-13.898 3.387c-6.153 0-11.869-1.839-16.609-4.987 0 0 3.18-.347 5.691-3.022h.001Zm25.23-3.502c5.372-5.371 5.372-14.08 0-19.453a13.703 13.703 0 0 0-8.96-4.006v-.001c-.099-2.447 1.218-4.099 1.224-4.107a19.71 19.71 0 0 0-10.228 5.438 19.722 19.722 0 0 0-4.754 7.641c.137-.364.29-.724.46-1.078a21.195 21.195 0 0 0-.531 1.526c-1.573 4.776-.463 10.242 3.335 14.04 5.372 5.373 14.082 5.373 19.454 0Z"
          clipRule="evenodd"
        />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M17.13 22.345v2.847a2.057 2.057 0 0 0 4.114 0v-2.847a2.057 2.057 0 1 0-4.114 0Zm10.183 0v2.847a2.057 2.057 0 0 0 4.114 0v-2.847a2.057 2.057 0 0 0-4.114 0Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

CustomerIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CustomerIcon;
