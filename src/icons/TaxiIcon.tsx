/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const defaultProps = {
  size: 24,
};

const TaxiIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="currentColor"
        {...props}
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(4 11)">
            <path
              fill="null"
              fillRule="nonzero"
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M0 24v-7.29a6 6 0 0 1 3.319-5.368l.682-.34 2.31-7.91A4 4 0 0 1 10.205 0h19.688a4 4 0 0 1 3.904 3.128l2.205 7.873.68.34A6 6 0 0 1 40 16.709V24a3 3 0 0 1-3 3h-1.997v1a4 4 0 0 1-4 4A4 4 0 0 1 27 28v-1H13v1a4 4 0 1 1-8 0v-1H3a3 3 0 0 1-3-3Z"
            />
            <circle cx={9.5} cy={19.5} r={2.5} fill="#FFF" />
            <circle cx={30.5} cy={19.5} r={2.5} fill="#FFF" />
          </g>
          <path fill="#FFF" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M18 11h12l-.991-4.956C28.887 5.434 28.399 5 27.837 5h-7.674c-.563 0-1.05.434-1.172 1.044L18 11Z"
          />
          <path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 23h18" />
        </g>
      </svg>
    </span>
  );
};

TaxiIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default TaxiIcon;
