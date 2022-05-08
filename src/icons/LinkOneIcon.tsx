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
const LinkOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m26.24 16.373-9.14-9.14c-2.661-2.661-7.035-2.603-9.769.131-2.733 2.734-2.792 7.107-.13 9.768l7.935 7.936m17.767-2.065 7.935 7.936c2.661 2.66 2.603 7.034-.13 9.768-2.735 2.734-7.108 2.792-9.77.131l-9.14-9.14"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M26.11 26.142c2.733-2.734 2.791-7.108.13-9.769m-4.441 5.426c-2.734 2.733-2.793 7.107-.131 9.768"
      />
    </svg>
  );
};

LinkOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const LinkOneIcon = withWrapper(LinkOneIconComponent);
export default LinkOneIcon;
