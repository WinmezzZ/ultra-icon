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
const StarOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="#000"
        fillRule="evenodd"
        d="m16.871 33.044-.873 11.66c-.062.819.667 1.383 1.318 1.018 4.613-2.584 19.062-12.074 26.386-32.932.336-.957-.567-1.82-1.337-1.28-4.326 3.029-13.78 9.29-19.623 10.483 0 0 3.742-2.598 5.981-6.588.22-.39.201-.891-.043-1.244L20.513 2.389c-.484-.698-1.478-.408-1.652.481l-2.543 12.937L4.384 26.223c-.598.522-.476 1.577.215 1.856l12.272 4.965Zm21.103-4.596c-.755 1.055-2.383 3.224-3.886 4.55-.3.264-.26.709.084.925l7.943 4.986c.478.3 1.123-.056 1.043-.577-.37-2.382-1.434-7.35-4.125-9.958-.3-.291-.819-.26-1.059.074Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

StarOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const StarOneIcon = withWrapper(StarOneIconComponent);
export default StarOneIcon;
