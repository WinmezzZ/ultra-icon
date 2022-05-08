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
const EditMovieIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M5 17h13m12 0h13M30 31h13M5 31h13M30 9h13v30H30M18 9H5v30h13"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M43 39v-8h-9v8h9Zm-29 0v-8H5v8h9Zm29-22V9h-9v8h9ZM5 9v8h9V9H5Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M24 7v4m0 6v4m0 6v4m0 6v4" />
    </svg>
  );
};

EditMovieIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const EditMovieIcon = withWrapper(EditMovieIconComponent);
export default EditMovieIcon;
