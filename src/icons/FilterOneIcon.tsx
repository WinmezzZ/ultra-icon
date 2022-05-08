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
const FilterOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="#000"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M24.489 8.398c-.243-.04-.215-.398.031-.398H39.5a.5.5 0 0 1 .5.5v14.98c0 .246-.359.274-.398.031l-1.966-12.317a1 1 0 0 0-.83-.83L24.489 8.399Zm-18 18c-.243-.04-.215-.398.032-.398H21.5a.5.5 0 0 1 .5.5v14.98c0 .246-.359.274-.398.031l-1.966-12.317a1 1 0 0 0-.83-.83L6.489 26.398Zm9-9c-.243-.04-.215-.398.031-.398H30.5a.5.5 0 0 1 .5.5v14.98c0 .246-.359.274-.398.031L28.75 20.91a2 2 0 0 0-1.66-1.66l-11.6-1.852Z"
      />
    </svg>
  );
};

FilterOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FilterOneIcon = withWrapper(FilterOneIconComponent);
export default FilterOneIcon;
