/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const SetOffIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="null" stroke="#000" strokeMiterlimit={2} strokeWidth={4} d="M29 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="m24 19-4.29 8 7.6 6.02c.31.24.53.57.66.94L31.31 44m-11.6-17-5.2 7.64C12.973 36.888 10.5 39.5 9.5 41"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="m42 24-6.94.1c-.36 0-.72-.09-1.04-.27l-3.27-1.91c-4.01-2.35-8.4-3.96-12.97-4.78l-3.22-.57L12 21"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m8.652 19.103 6.373 3.68-4.5 7.794-6.373-3.68z"
      />
    </svg>
  );
};

SetOffIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SetOffIcon = withWrapper(SetOffIconComponent);
export default SetOffIcon;
