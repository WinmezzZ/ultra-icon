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
const HairDryerOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeWidth={4}
        d="M11 12.138c0-.079.059-.146.137-.156L32.082 9.28C37.342 8.6 42 12.697 42 18c0 5.303-4.659 9.399-9.918 8.72l-20.945-2.702a.157.157 0 0 1-.137-.156V12.138Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M11 12 4 8v20l7-4" />
      <path
        stroke="#000"
        strokeWidth={4}
        d="m38 25-6.694 15.898A5.07 5.07 0 0 1 26.634 44c-3.625 0-6.078-3.695-4.672-7.036L27 25"
      />
      <circle cx={35} cy={18} r={9} fill="null" stroke="#000" strokeWidth={4} />
    </svg>
  );
};

HairDryerOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HairDryerOneIcon = withWrapper(HairDryerOneIconComponent);
export default HairDryerOneIcon;
