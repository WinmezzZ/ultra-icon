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
const TwitterIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M5 35.762c1.929 1.067 15.891 9.115 25.82 2.912 9.928-6.203 9.38-16.89 9.38-21.788.9-1.884 2.8-2.842 2.8-7.942-1.866 1.724-3.721 2.31-5.565 1.76-1.806-2.754-4.291-3.973-7.456-3.655-4.746.477-6.482 5.133-5.971 11.158-7.318 3.7-13.056-2.683-16.014-7.503-.988 3.796-1.94 8.354 0 13.395 1.294 3.362 4.405 6.203 9.331 8.526C12.332 35.33 8.224 36.377 5 35.762Z"
      />
    </svg>
  );
};

TwitterIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TwitterIcon = withWrapper(TwitterIconComponent);
export default TwitterIcon;
