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
const FootballIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g stroke="#000" strokeWidth={4} transform="translate(4 4)">
          <circle cx={20} cy={20} r={20} />
          <path d="M26.093 2.5 20.07 6.859v4.359l7.744 6.103 4.302-1.744 2.582-6.974M14.047 2.5l6.023 4.359v4.359l-7.744 6.103-4.303-1.744-2.581-6.974M2 18.192l6.023-2.615 4.303 1.744 2.581 9.59-2.581 3.486H4.58" />
          <path d="M12.326 36.5v-6.103l2.581-3.487h10.326l2.581 3.487V36.5" />
          <path d="M35.558 30.397h-7.744l-2.581-3.487 2.581-9.59 4.302-1.743L39 19.064" />
        </g>
      </g>
    </svg>
  );
};

FootballIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FootballIcon = withWrapper(FootballIconComponent);
export default FootballIcon;
