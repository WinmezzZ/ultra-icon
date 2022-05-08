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
const ShaverIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M20.785 18.73a.719.719 0 0 1 1.016 0l7.469 7.469a.72.72 0 0 1 0 1.016L17.757 38.728a6 6 0 0 1-8.485-8.485L20.785 18.73Z"
      />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M42.581 22.39a.894.894 0 0 0 0-1.265L26.874 5.42a.894.894 0 0 0-1.263 0l-.783.782c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.687 12.285 4.687 16.971 0l.782-.782Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m19.879 28.121-1.415 1.414" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m27.657 17.515 2.828 2.828" />
    </svg>
  );
};

ShaverIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ShaverIcon = withWrapper(ShaverIconComponent);
export default ShaverIcon;
