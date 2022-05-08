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
const HeartIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M14.54 20.019c-1.688-2.076-3.272-2.521-4.754-1.337-2.223 1.776-2.861 7.968-1.073 13.427 1.789 5.459 5.267 12.893 12.289 12.893 7.021 0 8.682-7.48 11.546-12.002 2.865-4.522 4.38-8.885 1.573-14.318"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M11 18.037A644.214 644.214 0 0 0 7 12c-1.446-2.145 2.251-4.918 4-3.032 1.166 1.258 2.715 3.11 4.647 5.557"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M15.024 25.64c-.485-6.064-.09-10.012 1.182-11.845 1.91-2.75 5.457-3.792 8.797-3.792 1.99 0 3.806.847 5.45 2.541"
      />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M41 12.613c.586 2.036-.37 3.897-3.316 4.318-2.945.421-5.153 1.902-6.745 3.148-1.593 1.246-4.44 5.026-5.003 6.923-.562 1.898-3.776.153-4.639-.605-.863-.758-1.712-2.416 0-4.151 1.712-1.735 1.341-2.081 1.341-3.84 0-1.76 9.362-7.58 14.635-8.112 1.172-.068 3.142.282 3.727 2.319Z"
        clipRule="evenodd"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M23.008 4v5.263m-2.701 1.455c-3.018-3.793-5.451-5.91-7.3-6.35m3.997 2.661.99-4.067m17.619 7.755c-.322 1.105-.322 2.14 0 3.107.322.967 1.013 2.002 2.071 3.107"
      />
    </svg>
  );
};

HeartIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HeartIcon = withWrapper(HeartIconComponent);
export default HeartIcon;
