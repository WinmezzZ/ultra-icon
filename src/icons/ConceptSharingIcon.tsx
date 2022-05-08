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
const ConceptSharingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M28.367 36H24l-9-4.96-10.991 4.042 3.002 5.944 7.072-2.953C20.7 42.024 24.727 44 26.165 44c1.438 0 7.383-2.667 17.835-8"
      />
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M28.992 26.988v-4.67c1.1-.457 2.543-1.125 3.372-1.954a9 9 0 1 0-12.728 0c.829.829 2.264 1.497 3.364 1.953.006.335.006 1.892 0 4.67h5.992Z"
        clipRule="evenodd"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="m12 21 1-1m27 1-1-1M15 5l-1-1m23 1 1-1m3 8h-1m-28 0h-1"
      />
    </svg>
  );
};

ConceptSharingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ConceptSharingIcon = withWrapper(ConceptSharingIconComponent);
export default ConceptSharingIcon;
