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
const NaturalModeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M24 27c-5.657 0-9.935-4.343-9.935-10L14 7l5 4 5-6 5 6 5-4v10c0 5.657-4.342 10-10 10Zm-.514 16.314c1.562-1.562-.337-5.995-4.242-9.9-3.906-3.905-8.338-5.805-9.9-4.242-1.562 1.562.337 5.994 4.243 9.9 3.905 3.904 8.337 5.804 9.9 4.242Z"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M24.829 42.97c1.562 1.563 5.994-.337 9.9-4.242 3.905-3.905 5.804-8.338 4.242-9.9-1.562-1.562-5.994.338-9.9 4.243-3.905 3.905-5.804 8.337-4.242 9.9Z"
      />
    </svg>
  );
};

NaturalModeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const NaturalModeIcon = withWrapper(NaturalModeIconComponent);
export default NaturalModeIcon;
