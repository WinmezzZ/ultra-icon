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
const AbnormalIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M40 16.398V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h10"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M16 14h13m-13 7h5" />
      <circle
        cx={34}
        cy={34}
        r={10}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        transform="rotate(90 34 34)"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M34 36v3" />
      <circle cx={34} cy={30} r={2} fill="#fff" />
    </svg>
  );
};

AbnormalIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AbnormalIcon = withWrapper(AbnormalIconComponent);
export default AbnormalIcon;
